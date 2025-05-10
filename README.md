# Husky Semana 3

Este projeto demonstra a configuração e uso do Husky para implementar hooks Git pré-commit e pré-push em um projeto Node.js com TypeScript.

## Funcionalidades

- Aplicativo simples de calculadora em TypeScript
- Testes automatizados com Jest
- Verificação de linting com ESLint
- Hooks Git automatizados com Husky:
  - **pré-commit**: Verifica o linting e compila o código
  - **pré-push**: Executa todos os testes

## Requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- Git

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/husky-semana-3.git
cd husky-semana-3

# Instale as dependências
npm install
```

## Scripts Disponíveis

```bash
# Executa os testes
npm test

# Compila o código TypeScript
npm run build

# Verifica o linting
npm run lint

# Executa o aplicativo em modo de desenvolvimento
npm run dev

# Executa o aplicativo compilado
npm start
```

## Relatório de Configuração

Um relatório detalhado da configuração do Husky pode ser encontrado no arquivo [relatorio-husky.md](relatorio-husky.md).

## Estrutura do Projeto

```
husky-semana-3/
├── .husky/                  # Configurações do Husky
│   ├── pre-commit           # Hook de pré-commit
│   └── pre-push             # Hook de pré-push
├── src/                     # Código fonte
│   ├── calculator.ts        # Classe Calculator
│   └── index.ts             # Arquivo principal
├── __tests__/               # Testes
│   └── calculator.test.ts   # Testes da calculadora
├── .eslintrc.json           # Configuração do ESLint
├── jest.config.js           # Configuração do Jest
├── tsconfig.json            # Configuração do TypeScript
├── package.json             # Dependências e scripts
└── README.md                # Este arquivo
```

## Licença

ISC
