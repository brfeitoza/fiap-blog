# Blog Fiap

Este é um blog construído com React utilizando Vite como bundler e Contentful como gerenciador de conteúdo. Este README irá guiá-lo através dos passos necessários para clonar, instalar dependências e rodar a aplicação.

## Funcionalidades do Blog

- **React com Vite:** A aplicação é desenvolvida utilizando o React e Vite, oferecendo uma experiência de desenvolvimento rápida e moderna.
- **Contentful:** Utilizamos o Contentful como CMS (Content Management System) para gerenciar o conteúdo do blog de maneira eficiente e fácil.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Passos para Clonar e Rodar a Aplicação

### 1. Clonar o Repositório

Clone o repositório para sua máquina local usando o comando abaixo:

```sh
git clone https://github.com/brfeitoza/fiap-blog.git
```

### 2. Navegar até o Diretório do Projeto

```sh
cd fiap-blog
```

### 3. Instalar dependências

```sh
npm install
# ou
yarn install
```

### 4. Configurar Variáveis de Ambiente

Criar arquivo `.env.local` com as seguintes variáveis:

```
VITE_ACCESS_TOKEN=
VITE_SPACE_ID=
```

### 5. Rodar a Aplicação

```sh
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em http://localhost:5173.
