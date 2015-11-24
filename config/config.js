var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'knitter-app'
    },
    port: 3000,
    db: 'mongodb://localhost/knitter-app-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'knitter-app'
    },
    port: 3000,
    db: 'mongodb://localhost/knitter-app-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'knitter-app'
    },
    port: 3000 ,
    db: process.env.MONGOLAB_URI || 'mongodb://localhost/knitter-app-production'
  }
};

module.exports = config[env];
