import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { removeBgService } from '../../services/removeBgService';

// Mock da configuração de env
vi.mock('../../config/env', () => ({
  env: {
    removebg: {
      apiKey: 'test-api-key',
      apiUrl: 'https://api.remove.bg/v1.0/removebg',
    },
  },
  validateEnv: vi.fn(() => true),
}));

describe('removeBgService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('removeBackground', () => {
    it('deve retornar erro se nenhum arquivo for fornecido', async () => {
      const result = await removeBgService.removeBackground(null as unknown as File);
      
      expect(result).toHaveProperty('message');
      expect(result).toHaveProperty('code', 'NO_FILE');
      expect('success' in result).toBe(false);
    });

    it('deve retornar erro se arquivo exceder 4MB', async () => {
      const largeFile = new File(
        [new ArrayBuffer(5 * 1024 * 1024)],
        'large.jpg',
        { type: 'image/jpeg' }
      );

      const result = await removeBgService.removeBackground(largeFile);

      expect(result).toHaveProperty('message');
      expect(result).toHaveProperty('code', 'FILE_TOO_LARGE');
    });

    it('deve retornar erro se arquivo não for imagem', async () => {
      const textFile = new File(
        ['conteúdo texto'],
        'documento.txt',
        { type: 'text/plain' }
      );

      const result = await removeBgService.removeBackground(textFile);

      expect(result).toHaveProperty('code', 'INVALID_FILE_TYPE');
    });

    it('deve aceitar arquivos de imagem válidos', async () => {
      const validFile = new File(
        [new ArrayBuffer(1024)],
        'image.jpg',
        { type: 'image/jpeg' }
      );

      // Mock fetch
      const mockBlob = new Blob(['image-data'], { type: 'image/png' });
      vi.stubGlobal('fetch', vi.fn(() =>
        Promise.resolve({
          ok: true,
          blob: () => Promise.resolve(mockBlob),
        } as unknown as Response)
      ));

      const result = await removeBgService.removeBackground(validFile);

      expect('success' in result && result.success).toBe(true);
    });

    it('deve retornar erro de rede apropriadamente', async () => {
      const validFile = new File(
        [new ArrayBuffer(1024)],
        'image.jpg',
        { type: 'image/jpeg' }
      );

      vi.stubGlobal('fetch', vi.fn(() =>
        Promise.reject(new Error('Network error'))
      ));

      const result = await removeBgService.removeBackground(validFile);

      expect('success' in result).toBe(false);
      expect(result).toHaveProperty('code', 'NETWORK_ERROR');
    });

    it('deve retornar erro 403 para API key inválida', async () => {
      const validFile = new File(
        [new ArrayBuffer(1024)],
        'image.jpg',
        { type: 'image/jpeg' }
      );

      vi.stubGlobal('fetch', vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 403,
          text: () => Promise.resolve('Unauthorized'),
        } as unknown as Response)
      ));

      const result = await removeBgService.removeBackground(validFile);

      expect('success' in result && !result.success).toBe(true);
      expect(result).toHaveProperty('code', 'HTTP_403');
    });
  });

  describe('createObjectUrl', () => {
    it('deve criar URL de objeto válida', () => {
      const blob = new Blob(['test'], { type: 'text/plain' });
      const url = removeBgService.createObjectUrl(blob);

      expect(url).toMatch(/^blob:/);
    });
  });

  describe('revokeObjectUrl', () => {
    it('deve revogar URL de objeto', () => {
      const blob = new Blob(['test'], { type: 'text/plain' });
      const url = removeBgService.createObjectUrl(blob);

      // Não deve lançar erro
      expect(() => removeBgService.revokeObjectUrl(url)).not.toThrow();
    });
  });
});
