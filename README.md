# Lins-Call
Uma aplicação completa com NextJS

## Criando o projeto
- npx create-next-app@latest --use-npm
  - Escolha um nome parar o projeto ou aperte . (ponto) para usar o nome da pasta raiz
  - TypeScript  => sim
  - EsLint      => sim

## Instalando bibliotecas do Desing Sistem da RocketSeat
- npm i @ignite-ui/react@latest

## Lind do Story Book
- https://rocketseat-education.github.io/05-design-system/?path=/story/home--page

## Rodando a aplicação
- npm run dev

## Instalando as configurações do EsLint da RocketSeat
- npm i @rocketseat/eslint-config -D

## Rodando o Next Lint
- npm run lint

## Corrigindo os erros de Lint automaticamente 
### OBS: (--) antes do --fix (indica que a alteração será feita no Next Lint e não no NPM)
- npm run lint -- --fix

## Instalando a biblioteca de icones Phosfor-React
- npm i phosphor-react

## Instalando o Hook Forms
- npm i react-hook-form @hookform/resolvers zod

## API Routes (formas de ter Rotas BackEnd, dentro da aplicação FrontEnd)
- routas('/api/hello)

## Instalando o PRISMA
- npm i prisma -D (CLI do prisma)
- npm i @prisma/client (Lida com banco de dados)
  - npx prisma init --datasource-provider SQLite (Inicia o prisma configurado com o SQLite)

## Executando as Migrations no Prisma
- npx prisma migrate dev

## Interface para visualizaro banco de dados na web
- npx prisma studio

## Instalação do Axios
- npm i axios

## Instalando Nookies (Next Cookies)
- npm i nookies
  - npm i @types/cookie -D (Tipagens para funcionar o auto-complete do Nookies)

## Configurando o Google OAuth através do Google Cloud
- https://console.cloud.google.com/apis/dashboard?pli=1&project=linsdriver-334418
  - Criar um novo projeto
  - Configurar as URls locais e redirecionamento
  - Salvar as credenciais em arquivo .env
  - Ativar Google Calendar API

## Autenticação Next Auth
- https://next-auth.js.org/getting-started/example (documentação)

- npm install next-auth

## Criando Adapters
- https://next-auth.js.org/adapters/prisma

## Tutorial
- https://next-auth.js.org/tutorials/creating-a-database-adapter#how-to-create-an-adapter









This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
