/**
 * Serviço de API RemoveBg
 * Encapsula a lógica de chamadas à API RemoveBg de forma segura
 */

import { env } from '../config/env';

export interface RemoveBgError {
  message: string;
  code?: string;
}

export interface RemoveBgResult {
  blob: Blob;
  success: true;
}

export const removeBgService = {
  /**
   * Remove o fundo de uma imagem usando a API RemoveBg
   * @param file - Arquivo de imagem para processar
   * @returns Promise com o blob resultante ou erro
   */
  async removeBackground(file: File): Promise<RemoveBgResult | RemoveBgError> {
    // Validação de arquivo
    if (!file) {
      return {
        message: 'Nenhum arquivo fornecido',
        code: 'NO_FILE',
      };
    }

    // Validação de tamanho (máximo 4MB)
    const MAX_SIZE = 4 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return {
        message: 'A imagem deve ter no máximo 4 MB',
        code: 'FILE_TOO_LARGE',
      };
    }

    // Validação de tipo de arquivo
    if (!file.type.startsWith('image/')) {
      return {
        message: 'O arquivo deve ser uma imagem',
        code: 'INVALID_FILE_TYPE',
      };
    }

    // Validação de API key
    if (!env.removebg.apiKey) {
      return {
        message: 'API key não configurada. Configure VITE_REMOVEBG_API_KEY em .env',
        code: 'MISSING_API_KEY',
      };
    }

    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');

    try {
      const response = await fetch(env.removebg.apiUrl, {
        method: 'POST',
        headers: {
          'X-Api-Key': env.removebg.apiKey,
        },
        body: formData,
      });

      if (!response.ok) {
        let message = `Erro na API: ${response.status}`;

        if (response.status === 403) {
          message = 'API key inválida ou sem permissão';
        } else if (response.status === 402) {
          message = 'Limite de créditos atingido';
        } else if (response.status === 400) {
          message = 'Erro ao processar a imagem';
        }

        return {
          message,
          code: `HTTP_${response.status}`,
        };
      }

      const blob = await response.blob();
      return {
        blob,
        success: true,
      };
    } catch (error) {
      return {
        message: `Erro ao conectar com a API: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
        code: 'NETWORK_ERROR',
      };
    }
  },

  /**
   * Cria uma URL de objeto para o blob
   */
  createObjectUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  },

  /**
   * Limpa a URL de objeto
   */
  revokeObjectUrl(url: string): void {
    URL.revokeObjectURL(url);
  },
};
