var fs = require('fs');
var path = require('path');
var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  },
  get: function() {
    return this.__readFile().data;
  },
  getLastId: function() {
    return this.__readFile().last_id;
  },
  set: function(albums) {
    fs.writeFileSync(filePath, JSON.stringify({
      last_id: this.getLastId() + 1,
      data: albums
    }), 'utf8')
  }
}
