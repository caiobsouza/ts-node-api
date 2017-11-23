'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the super-excellent ' +
          chalk.bgRed('generator-ts-node-api') +
          ' generator!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectTitle',
        message: 'Your project title?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Your package name? (no spaces)',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description?'
      },
      {
        type: 'input',
        name: 'dbHost',
        message: 'Your database host?'
      },
      {
        type: 'input',
        name: 'dbPort',
        message: 'Your database port?'
      },
      {
        type: 'input',
        name: 'dbName',
        message: 'Your database name?'
      },
      {
        type: 'input',
        name: 'dbUser',
        message: 'Your database user?'
      },
      {
        type: 'password',
        name: 'dbPwd',
        message: 'Your database password?'
      },
      {
        type: 'confirm',
        name: 'initGit',
        default: true,
        message: 'Would you like to initialize a git repo here?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  configuring() {
    if (this.props.initGit) {
      this.composeWith(require.resolve('generator-git-init'), {
        commit: 'Initial commit by generator-ts-node-api'
      });
    }
  }

  writing() {
    var toCopy = [
      './src/controllers/items.controller.ts',
      './src/models/item.model.ts',
      './src/views/home.pug',
      './src/app.ts',
      './src/index.ts',
      './tests/app.test.ts',
      './.gitignore',
      './gulpfile.js',
      'LICENSE',
      './tsconfig.json'
    ];
    var toCopyTpl = [
      './config/dev.env',
      './package-lock.json',
      './package.json',
      './README.md',
      './src/controllers/home.controller.ts'
    ];

    var i;
    for (i = 0; i < toCopy.length; i++) {
      this.fs.copy(this.templatePath(toCopy[i]), this.destinationPath(toCopy[i]));
    }
    for (i = 0; i < toCopyTpl.length; i++) {
      this.fs.copyTpl(
        this.templatePath(toCopyTpl[i]),
        this.destinationPath(toCopyTpl[i]),
        this.props
      );
    }
  }

  install() {
    this.npmInstall();
  }
};
