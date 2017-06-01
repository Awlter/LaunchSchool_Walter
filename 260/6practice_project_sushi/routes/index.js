var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var filePath = path.resolve(path.dirname(__dirname), "data/items.json");

function getItems() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')).data;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { items: getItems() });
});

module.exports = router;
