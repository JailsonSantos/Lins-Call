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

## Trabalhando com datas 
- npm i dayjs 
  - https://day.js.org/docs/en/display/format (Documentation)

## React Query
- npm i @tanstack/react-query

## Instalando o MYSQL com DOCKER
- docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest

## API do Google
- npm i googleapis

## Next SEO
- npm i next-seo

## Hospedagem
- https://app.planetscale.com/

## Executar todas as migrations do banco na URL de produção
- npx prisma db push
