var $message = $('#message');
var $letters = $('#spaces');
var $guesses = $('#guesses');
var $apples = $('#apples');
var $reset = $('button');
var $replay = $('#replay');

var randomWord = function() {
  var words = ['apple', 'banana', 'orange', 'pear'];

  return function() {
    var indx = Math.floor(Math.random() * words.length)
    return words.splice(indx, 1)[0];
  }
}();

function Game() {
  this.incorrectGuesses = 0;
  this.correctSpaces = 0;
  this.lettersGuessed = [];
  this.topAllowedGuesses = 6;
  this.word = randomWord();
  this.init();

  if(!this.word) {
    this.displayMessage('Sorry, I have run out of words.')
  }

  this.word = this.word.split('')
};

(function() {
  this.createBlanks = function() {
    var spaces = (new Array(this.word.length + 1)).join('<span/>');
    $letters.find('span').remove();
    $letters.append(spaces);

    this.$spaces = $('#spaces span')
  };
  this.displayMessage = function(msg) {
    $message.text(msg);
  };
  this.fillBlanks = function(letter) {
    this.word.forEach(function(l, i) {
      if (l === letter) {
        this.$spaces.eq(i).text(letter);
        this.correctSpaces += 1;
      }
    }.bind(this))
  };
  this.processGuess = function(e) {
    var letter = e.key;

    if (!letter.match(/[a-z]/) || this.duplicateGuess(letter)) { return; }

    if ($.inArray(letter, this.word) !== -1) {
      this.fillBlanks(letter);
    } else {
      this.renderIncorrectGuess();
    }

    this.renderGuess(letter);

    if (this.correctSpaces === this.word.length ) { this.win() }
    if (this.incorrectGuesses === this.topAllowedGuesses) { this.lose() }
  };
  this.win = function() {
    this.setGameStatus('win');
    this.displayMessage('Congratulations! You win!');
    this.unbind();
    this.toggleReplay(true);
  };
  this.lose = function() {
    this.setGameStatus('lose')
    this.displayMessage('Sorry, you lose');
    this.unbind();
    this.toggleReplay(true);
  };
  this.toggleReplay = function(which) {
    $replay.toggle(which);
  };
  this.setGameStatus = function(status) {
    $(document.body).removeClass();
    if (status) {
      $(document.body).addClass(status);
    }
  };
  this.duplicateGuess = function(letter) {
    return $.inArray(letter, this.lettersGuessed) !== -1
  }
  this.renderIncorrectGuess = function() {
    this.incorrectGuesses += 1;
    // $apples.attr('class', 'guess_' + this.incorrectGuesses)
    this.setAppleClass();
  };
  this.setAppleClass = function() {
    $apples.removeClass().addClass('guess_' + this.incorrectGuesses);
  };
  this.renderGuess = function(letter) {
    // $guesses.append('<span>' + letter + '</span>');
    $('<span/>', {
      text: letter
    }).appendTo($guesses);
    this.lettersGuessed.push(letter);
  };
  this.emptyGuesses = function() {
    $guesses.find('span').remove();
  };
  this.unbind = function() {
    $(document).off('.game');
  };
  this.bind = function() {
    $(document).on('keypress.game', this.processGuess.bind(this));
  };
  this.init = function() {
    this.bind();
    this.toggleReplay(false);
    this.emptyGuesses();
    this.createBlanks();
    this.displayMessage('')
    this.setAppleClass();
    this.setGameStatus();
  };

}).call(Game.prototype);

new Game();

$replay.on('click', function(e) {
  e.preventDefault();
  new Game();
})