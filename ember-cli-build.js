/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  app.import('vendor/basscss.min.css');
  app.import('bower_components/moment/moment.js');
  return app.toTree();
};
