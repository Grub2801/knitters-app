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
    port: (process.env.PORT || 3000),
    db: 'mongodb://heroku_s2qplj7k:brcijesscnl4ub56pas21372n8@ds057204.mongolab.com:57204/heroku_s2qplj7k'
  }
};

module.exports = config[env];
