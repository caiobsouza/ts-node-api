# Node.js Express API with TypeScript [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Node API with typescript

## Description
This generator will help you to build your own Node Express Web API using TypeScript. You'll be able to connect to your MongoDB database. Feel free to leave your suggestions and help us to improve this generator.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ts-node-api using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ts-node-api
```

Then generate your new project:

```bash
yo ts-node-api
```

## Running the API
### Development
To start the application in development mode, run:

```bash
npm run dev-server
```
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.

### Production
First, create the `prod.env` file inside the `config` folder. Make sure that file contains all your production environment variables, like the `dev.env` file.

To build the API, run:
```bash
npm build
```
Then, start the application or deploy the files in `dist` directory:
```
npm start
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Caio Souza](https://github.com/caiobsouza) & [Petrus Cyrino](https://github.com/petrusxz)


[npm-image]: https://badge.fury.io/js/generator-ts-node-api.svg
[npm-url]: https://npmjs.org/package/generator-ts-node-api
[travis-image]: https://travis-ci.org/petrusxz/generator-ts-node-api.svg?branch=master
[travis-url]: https://travis-ci.org/petrusxz/generator-ts-node-api
[daviddm-image]: https://david-dm.org/petrusxz/generator-ts-node-api.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/petrusxz/generator-ts-node-api
