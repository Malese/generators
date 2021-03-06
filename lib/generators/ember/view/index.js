/*jshint latedef:false */
var path = require('path'),
  util = require('util'),
  yeoman = require('../../../../');

module.exports = Generator;

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));

}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  this.template('view.js', path.join('app/scripts/views', this.name + '-view.js'));
  this.template('view.handlebars', path.join('app/scripts/templates', this.name + '.handlebars'));
};
