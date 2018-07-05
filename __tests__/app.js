'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ts-node-api:app', () => {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectTitle: 'Juca API',
        name: 'juca-api',
        description: 'Uma API para Juca trabalhar',
        dbHost: 'localhost',
        dbPort: '27017',
        dbName: 'test',
        dbSsl: false,
        dbUser: 'admin',
        dbPwd: 'admin',
        initGit: false
      });
  });

  it('creates files', () => {
    assert.file([
      'config/dev.env',
      'package.json',
      'README.md',
      '.gitignore',
      'gulpfile.js',
      'LICENSE',
      'tsconfig.json',
      'src/controllers/home.controller.ts',
      'src/app.ts',
      'src/controllers/items.controller.ts',
      'src/models/item.model.ts',
      'src/views/home.pug',
      'src/index.ts',
      'tests/app.test.ts'
    ]);
  });

  it('creates dev.env correctly', () => {
    assert.fileContent([
      ['config/dev.env', /\bPORT=3000\b/],
      ['config/dev.env', /\bDB_HOST=localhost\b/],
      ['config/dev.env', /\bDB_PORT=27017\b/],
      ['config/dev.env', /\bDB_NAME=test\b/],
      ['config/dev.env', /\bDB_USER=admin\b/],
      ['config/dev.env', /\bDB_PWD=admin\b/]
    ]);
  });

  it('creates README with project information', () => {
    assert.fileContent([
      ['README.md', /\bJuca API\b/],
      ['README.md', /\bUma API para Juca trabalhar\b/]
    ]);
  });

  it('sets ssl option in app.ts file', () => {
    assert.fileContent([['src/app.ts', /\bssl: false\b/]]);
  });

  it('sets ssl option in app.ts file', () => {
    assert.fileContent([['src/app.ts', /\bssl: false\b/]]);
  });

  it('sets homepage title with the project name', () => {
    assert.fileContent([['src/controllers/home.controller.ts', /\btitle: \'Juca API\'/]]);
  });

  it('creates package.json file with the name and description', () => {
    assert.fileContent([
      [
        'package.json',
        /\"name\": \"juca-api\"/,
        'package.json',
        /\"description\": \"Uma API para Juca trabalhar\"/
      ]
    ]);
  });
});
