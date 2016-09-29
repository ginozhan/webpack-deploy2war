var fs = require('fs');
var archiver = require('archiver');

function WebpackWarPlugin(options) {
    this.options = options || {};
    this.fileName = options.fileName || 'project.zip';
    this.distFolder = options.distFolder || 'dist';
}

WebpackWarPlugin.prototype.apply = function (compiler) {
    var self = this;
    var options = compiler.options;

    compiler.plugin('done', function () {

        if (!fs.existsSync(this.distFolder)) {
            return;
        }

        var dir = require('path').dirname(self.fileName);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        var output = fs.createWriteStream(self.fileName);
        var archive = archiver('zip');

        archive.pipe(output);
        archive.directory(self.distFolder, '/')
        archive.finalize();
    });
};

module.exports = DeployToWar;