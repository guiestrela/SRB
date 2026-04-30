# Testing Suite

## Overview
Este projeto inclui uma suite completa de testes automatizados usando Vitest, Testing Library e Jest DOM.

## Estrutura de Testes

```
src/__tests__/
├── components/       # Testes de componentes React
│   ├── Banner.test.tsx
│   ├── Topbar.test.tsx
│   ├── Footer.test.tsx
│   └── TextInfo.test.tsx
├── services/         # Testes de serviços
│   └── removeBgService.test.ts
└── config/           # Testes de configuração
    └── env.test.ts
```

## Instalação e Configuração

### Dependências
- **vitest**: Framework de testes rápido e compatível com Vite
- **@testing-library/react**: Utilitários para testes de componentes React
- **@testing-library/jest-dom**: Matchers DOM adicionais
- **@vitest/ui**: Interface visual para testes
- **jsdom**: Simulador de DOM para testes

### Scripts Disponíveis

```bash
# Rodar testes em modo watch
npm run test

# Rodar testes com interface visual
npm run test:ui

# Gerar coverage de testes
npm run test:coverage
```

## Testes Implementados

### 1. removeBgService.test.ts
Valida o serviço de remoção de fundo:
- ✅ Validação de arquivos nulos
- ✅ Limite de tamanho (4MB)
- ✅ Validação de tipo de arquivo
- ✅ Chamadas à API RemoveBg
- ✅ Tratamento de erros de rede
- ✅ Erros HTTP específicos (403, 402, 400)
- ✅ Gerenciamento de URLs de objeto (blob)

### 2. Banner.test.tsx
Testa o componente Banner:
- ✅ Renderização correta
- ✅ Conteúdo em português
- ✅ Destaque visual de palavras-chave
- ✅ Importação correta de uiKit2

### 3. Topbar.test.tsx
Testa a barra de navegação:
- ✅ Renderização do logo
- ✅ Presença de botões Login/Sign-Up
- ✅ Links e estilos corretos

### 4. Footer.test.tsx
Testa o rodapé:
- ✅ Links para redes sociais
- ✅ URLs corretas (GitHub, LinkedIn)
- ✅ Imagens de ícones

### 5. TextInfo.test.tsx
Testa informações de copyright:
- ✅ Exibição de ano e status
- ✅ Centralização

### 6. env.test.ts
Testa configuração de ambiente:
- ✅ Estrutura de variáveis de ambiente
- ✅ URL padrão da API
- ✅ Validação de configuração

## Boas Práticas de Teste

### Proteção de API
- API keys nunca são hardcoded
- Uso de `import.meta.env.VITE_REMOVEBG_API_KEY` via variáveis de ambiente
- Mocking de chamadas fetch nos testes

### Componentes
- Testes focam em comportamento visual
- Validação de conteúdo renderizado
- Verificação de acessibilidade

### Serviços
- Testes de validação de entrada
- Cobertura de casos de erro
- Mocking de requisições HTTP

## Executando os Testes

### Terminal
```bash
# Modo watch (reexecuta ao salvar)
npm run test

# Modo UI (interface visual)
npm run test:ui

# Coverage report
npm run test:coverage
```

### VS Code
- Extensão "Vitest" recomendada para melhor integração
- Ícones de status nos arquivos de teste
- Execução direta dos testes pelo editor

## Cobertura de Testes Esperada

- **Services**: 80%+
- **Components**: 70%+
- **Config**: 90%+

## Próximas Melhorias

- [ ] Testes E2E com Playwright
- [ ] Testes de acessibilidade (a11y)
- [ ] Snapshot tests para componentes
- [ ] Testes de performance
- [ ] Integração contínua (CI/CD)

## Referências

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/react)
- [Jest Matchers](https://jestjs.io/docs/expect)
