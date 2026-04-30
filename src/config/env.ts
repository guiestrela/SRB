/**
 * Configuração de variáveis de ambiente
 * Centraliza o acesso a variáveis de ambiente para melhor segurança e manutenção
 */

export const env = {
  removebg: {
    apiKey: import.meta.env.VITE_REMOVEBG_API_KEY,
    apiUrl: import.meta.env.VITE_REMOVEBG_API_URL || 'https://api.remove.bg/v1.0/removebg',
  },
} as const;

// Validação de variáveis críticas
export function validateEnv(): boolean {
  if (!env.removebg.apiKey) {
    console.warn('⚠️ VITE_REMOVEBG_API_KEY não configurada. Defina em .env');
    return false;
  }
  return true;
}
