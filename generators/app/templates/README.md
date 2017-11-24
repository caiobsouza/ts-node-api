# <%= projectTitle %> [![NPM version][npm-image]][npm-url]

<%= description %>

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

## License

MIT © [Caio Souza](https://github.com/caiobsouza) & [Petrus Cyrino](https://github.com/petrusxz)

[npm-image]: https://badge.fury.io/js/<%= name %>.svg

[npm-url]: https://npmjs.org/package/<%= name %>