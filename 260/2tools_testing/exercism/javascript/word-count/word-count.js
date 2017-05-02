//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

var Words = function() {};

Words.prototype.count = function(input) {
  // var words = input.match(/\w+(\')?\w+/ig)
  var words = input.replace(/\s+|[\¡\¿\?\,\!\@\$\%\^\&\:\.]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .split(' ')
  .map(function(word) { return word.replace(/^'(.+)'$/, '$1');})

  var result = {};
  words.forEach(function(word) {
    var word = word.toLowerCase();
    if (typeof result[word] !== 'number') { result[word] = 0 }
    result[word] += 1
  })
  return result;
//
};

module.exports = Words;
