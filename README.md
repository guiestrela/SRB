# Background Remove (Em desenvolvimento)

# Demonstração de Habilidades em Desenvolvimento Frontend

[![Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](https://github.com/guiestrela/SBR)
[![Linguagem](https://img.shields.io/badge/linguagem-TypeScript-blueviolet)](https://www.typescriptlang.org/)
[![Framework](https://img.shields.io/badge/framework-React-blue)](https://react.dev/)
[![Styling](https://img.shields.io/badge/styling-Styled--Components-pink)](https://styled-components.com/)
[![Build Tool](https://img.shields.io/badge/build-Vite-teal)](https://vitejs.dev/)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-informational)](https://srb-psi.vercel.app/)

> Este projeto é uma demonstração das minhas habilidades em desenvolvimento frontend, construído utilizando React, TypeScript e Styled Components, com Vite como ferramenta de build. O site apresentado um removerdor de background, disponível em [https://sbr-psi.vercel.app/](https://sbr-psi.vercel.app/), com foco em replicar a estrutura e o design utilizando as tecnologias mencionadas.

## 🔗 Demonstração Online

Você pode visualizar a demonstração deste projeto online em: [https://sbr-psi.vercel.app/](https://sbr-psi.vercel.app/)

## ✨ Tecnologias Utilizadas e Demonstração de Conhecimentos

Este projeto foi desenvolvido com as seguintes tecnologias, demonstrando meu conhecimento em:

* **React:** Utilização de componentes funcionais, gerenciamento de estado (com Hooks), roteamento (se aplicável) e a arquitetura de componentes do React para construir uma interface de usuário interativa e reativa.
* **TypeScript:** Aplicação de tipagem estática para garantir a segurança do código, melhorar a manutenibilidade e demonstrar familiaridade com os conceitos avançados do TypeScript, como interfaces, tipos genéricos e enums.
* **Styled Components:** Implementação de estilização diretamente nos componentes React, demonstrando a capacidade de criar estilos encapsulados, reutilizáveis e com boa organização, aproveitando as vantagens do CSS-in-JS.
* **Vite:** Utilização de uma ferramenta de build moderna e rápida para o desenvolvimento e otimização do projeto, mostrando familiaridade com workflows de desenvolvimento frontend atuais.
* **Vitest:** Framework de testes rápido para validação de componentes, serviços e configurações.
* **Testing Library:** Testes focados no comportamento do usuário com React.

## 🔒 Segurança e Boas Práticas

Este projeto implementa boas práticas de segurança:

* **Proteção de API Keys:** Variáveis de ambiente separadas em `.env` (não versionadas)
* **Arquitetura de Serviços:** Lógica de API encapsulada em camada de serviço
* **Validação de Entrada:** Validações rigorosas de arquivos (tipo, tamanho)
* **Tratamento de Erros:** Mensagens de erro amigáveis e logging apropriado
* **Limpeza de Recursos:** Gerenciamento adequado de URLs de blob

### Configuração de Ambiente

1. Copie `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure sua API key do RemoveBg:
   ```bash
   VITE_REMOVEBG_API_KEY=sua_chave_aqui
   VITE_REMOVEBG_API_URL=https://api.remove.bg/v1.0/removebg
   ```

**Importante:** Nunca commite o arquivo `.env` com suas credenciais!

## 🧪 Testes

O projeto inclui uma suite completa de testes automatizados:

```bash
# Rodar todos os testes
npm run test

# Modo watch (reexecuta ao salvar)
npm run test -- --watch

# Interface visual
npm run test:ui

# Cobertura de testes
npm run test:coverage
```

Para mais detalhes sobre os testes, veja [TESTING.md](./TESTING.md)

### Cobertura de Testes
- ✅ Serviços de API
- ✅ Componentes React
- ✅ Configuração de Ambiente
- ✅ Validação de Entrada

## 📋 Refatorações Recentes

### uiKit2 Migration
- ✅ Migração de componentes de `uiKit` para `uiKit2`
- ✅ Padronização de nomenclatura (camelCase)
- ✅ Correção de tipos TypeScript
- ✅ Melhoria de consistência do código

### Arquitetura de Serviços
- ✅ Criação de `removeBgService` centralizado
- ✅ Separação de responsabilidades
- ✅ Facilita testes e manutenção
- ✅ Reutilização de lógica

## 💻 Executando o Projeto Localmente (Para Avaliação)

Se você deseja executar este projeto localmente para avaliar o código e a implementação: 

Aplicação Online
https://srb-psi.vercel.app/

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/guiestrela/SRB.git
    cd seu-repositorio
    ```
2.  **Instale as dependências:**
    ```bash
    npm install # ou yarn install ou pnpm install
    ```
3.  **Configure variáveis de ambiente:**
    ```bash
    cp .env.example .env
    # Edite .env e adicione sua chave do RemoveBg API
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev # ou yarn dev ou pnpm dev
    ```
    O projeto estará disponível em `http://localhost:5173` (a porta pode variar).

## 📄 Observações

* Este projeto foi criado com o objetivo principal de demonstrar minhas habilidades técnicas em um cenário prático.
* O design(Baseado): [https://www.figma.com/design/LxwfjNNaTAwuiYmeVmEmDz/Background-remover--Community-?node-id=1-2&t=iS4BjGkd9lxXBvyb-0](https://www.figma.com/design/LxwfjNNaTAwuiYmeVmEmDz/Background-remover--Community-?node-id=1-2&t=iS4BjGkd9lxXBvyb-0)
* API RemoveBg: [https://www.remove.bg/a/api-docs](https://www.remove.bg/a/api-docs)
  
## 👨‍💻 Sobre Mim

Meu nome é Guilherme e sou recém-formado em Desenvolvimento Web pela Universidade Anhanguera. Em minha transição de carreira para a área de programação, decidi especializar-me em React e TypeScript.
## Linkdin: https://www.linkedin.com/in/guilherme-estrela-4166a539/
## E-mail: guilhermestrela@gmail.com

---

Este é um projeto de demonstração de habilidades em desenvolvimento frontend.
