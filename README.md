# EF_Back

## Installation

- npm install
- add the .env file in the project root
  - .env files can be found on slack
- `npm run dev` to start the server
- Local API Url: http://localhost:5200/api/...
- Azure API Url: https://efback.azurewebsites.net/api/...

## Stack:

- Postgres (Prisma), Express, NodeJS, Typescript
- chalk@4.1.2 - library for adding color to the console for logging
- zod - for data validation
- bcrypt - to encrpt the password of a user
- passport - an authentication middleware for Node.js
- jwt - to secure RESTful endpoints without sessions

---

### Postgres setup (docker)

1. Install [docker](https://docs.docker.com/engine/install/) on your system
2. Install the [VSCode docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
3. once both are properly installed you can right click the `postgres.docker-compose.yml` file and choose `compose up` this will download postgres and run it
   - you can run `compose up` and `compose down` as many times as you'd like so you can always have a fresh database
4. you **MUST** run `npm run push` for each new postgres database you create (to initialize the tables and schema)

the default string for the `DATABASE_URL` .env variable is `postgresql://user:pass@localhost:5432/db`

remember to right click and choose `compose down` when you no longer need the db running or if you want to re-compose it

remember to clear your dangling volumes, **when a docker container no longer exists it's data can still linger**! you can click the `prune` button on the `volumes` tab of the docker vscode extension, or you can run `docker volume prune` from a terminal

---

### Prisma Notes

`npm run studio` will run and open prisma studio in your browser. this is a web based GUI that lets you browse data in your postgres db. It allows for easily viewing relations / connections and performing some crud operations.

prisma is a _code generation_ tool, based on the contents of the `schema.prisma` file the `prisma generate` command will create models and types. These types are required for typescript compilation so they must exist for the project to build. Therefore the `postinstall` script will generate prisma code upon a node modules install. If needed the generate script can be called whenever with `npm run gen`
