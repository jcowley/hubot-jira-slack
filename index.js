var fs, path,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

fs = require('fs');

path = require('path');

module.exports = function(robot, scripts) {
  var scriptsPath;
  scriptsPath = path.resolve(__dirname, 'src');
  return fs.exists(scriptsPath, function(exists) {
    var i, len, ref, results, script;
    if (exists) {
      ref = fs.readdirSync(scriptsPath);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        script = ref[i];
        if ((scripts != null) && indexOf.call(scripts, '*') < 0) {
          if (indexOf.call(scripts, script) >= 0) {
            results.push(robot.loadFile(scriptsPath, script));
          } else {
            results.push(void 0);
          }
        } else {
          results.push(robot.loadFile(scriptsPath, script));
        }
      }
      return results;
    }
  });
};