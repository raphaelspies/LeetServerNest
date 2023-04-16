## Description

LeetCipher is a dynamic website where you can code along while learning the basics of cryptography!
This repo contains the server upon which to run the [LeetCipher client.](https://github.com/raphaelspies/LeetCipherClient)

## Installation

```bash
$ npm install
```

## Running the database
1. Start docker
```
sudo service docker start
```

2. Verify that Docker is running
```
sudo service docker status
```

3. Start leetcode-db container
```
docker-compose up -d
```
4. Start app
(see below)

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Dependencies
- [Nestjs](https://docs.nestjs.com).
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [node-postgres](https://www.npmjs.com/package/pg)
- [python-shell](https://www.npmjs.com/package/python-shell)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)