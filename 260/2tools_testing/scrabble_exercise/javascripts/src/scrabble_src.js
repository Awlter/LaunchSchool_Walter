// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
var valueToLetter = {
  1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  2: ['d', 'g'],
  3: ['b', 'c', 'm', 'p'],
  4: ['f', 'h', 'v', 'w', 'y'],
  5: ['k'],
  8: ['j', 'x'],
  10: ['q', 'z'],
}
function Scrabble(string) {
  var count = 0;
  if (!string) {
    return count
  }
  var letters = string.toLowerCase().split('');

  letters.forEach(function(letter) {
    for(var val in valueToLetter) {
      if (valueToLetter[val].includes(letter)) {
        count += +val
      }
    }
  });
  return count
}