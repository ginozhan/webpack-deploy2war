var fs = require('fs');
var archiver = require('archiver');

function DeployToWar(options) {
    this.options = options || {};
    this.fileName = options.fileName || 'project.zip';
    this.distFolder = options.distFolder || 'dist';
}

DeployToWar.prototype.apply = function(compiler) {
    var self = this;
    var options = compiler.options;
    compiler.plugin('done', function() {

      var output = fs.createWriteStream(self.fileName);
      var archive = archiver('zip');

      archive.pipe(output);
      archive.directory(self.distFolder,'/')
      archive.finalize();
    });
};

module.exports = DeployToWar;