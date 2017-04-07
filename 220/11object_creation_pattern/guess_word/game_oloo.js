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

var Game = {
  topAllowedGuesses: 6,
  createBlanks: function() {
    var spaces = (new Array(this.word.length + 1)).join('<span/>');
    $letters.find('span').remove();
    $letters.append(spaces);

    this.$spaces = $('#spaces span')
  },
  displayMessage: function(msg) {
    $message.text(msg);
  },
  fillBlanks: function(letter) {
    this.word.forEach(function(l, i) {
      if (l === letter) {
        this.$spaces.eq(i).text(letter);
        this.correctSpaces += 1;
      }
    }.bind(this))
  },
  processGuess: function(e) {
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
  },
  win: function() {
    this.setGameStatus('win');
    this.displayMessage('Congratulations! You win!');
    this.unbind();
    this.toggleReplay(true);
  },
  lose: function() {
    this.setGameStatus('lose')
    this.displayMessage('Sorry, you lose');
    this.unbind();
    this.toggleReplay(true);
  },
  toggleReplay: function(which) {
    $replay.toggle(which);
  },
  setGameStatus: function(status) {
    $(document.body).removeClass();
    if (status) {
      $(document.body).addClass(status);
    }
  },
  duplicateGuess: function(letter) {
    return $.inArray(letter, this.lettersGuessed) !== -1
  },
  renderIncorrectGuess: function() {
    this.incorrectGuesses += 1;
    // $apples.attr('class', 'guess_' + this.incorrectGuesses)
    this.setAppleClass();
  },
  setAppleClass: function() {
    $apples.removeClass().addClass('guess_' + this.incorrectGuesses);
  },
  renderGuess: function(letter) {
    // $guesses.append('<span>' + letter + '</span>');
    $('<span/>', {
      text: letter
    }).appendTo($guesses);
    this.lettersGuessed.push(letter);
  },
  emptyGuesses: function() {
    $guesses.find('span').remove();
  },
  unbind: function() {
    $(document).off('.game');
  },
  bind: function() {
    $(document).on('keypress.game', this.processGuess.bind(this));
  },
  init: function() {
    this.word = randomWord().split('');
    this.incorrectGuesses = 0;
    this.correctSpaces = 0;
    this.lettersGuessed = [];
    this.bind();
    this.toggleReplay(false);
    this.emptyGuesses();
    this.createBlanks();
    this.displayMessage('')
    this.setAppleClass();
    this.setGameStatus();
  }
}

Object.create(Game).init();

$replay.on('click', function(e) {
  e.preventDefault();
  Object.create(Game).init();
})
