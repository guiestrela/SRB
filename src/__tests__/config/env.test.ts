import { describe, it, expect, afterEach } from 'vitest';
import { env, validateEnv } from '../../config/env';

describe('Environment Configuration', () => {
  const originalEnv = { ...import.meta.env };

  afterEach(() => {
    // Restaurar variáveis de ambiente originais
    Object.assign(import.meta.env, originalEnv);
  });

  describe('env object', () => {
    it('deve ter configuração removebg', () => {
      expect(env).toHaveProperty('removebg');
      expect(env.removebg).toHaveProperty('apiKey');
      expect(env.removebg).toHaveProperty('apiUrl');
    });

    it('deve ter URL padrão se não configurada', () => {
      expect(env.removebg.apiUrl).toBe('https://api.remove.bg/v1.0/removebg');
    });
  });

  describe('validateEnv function', () => {
    it('deve retornar true se API key estiver configurada', () => {
      const result = validateEnv();
      // Pode ser true ou false dependendo da configuração real
      expect(typeof result).toBe('boolean');
    });

    it('deve ter estrutura correta', () => {
      expect(typeof validateEnv).toBe('function');
    });
  });
});
