require 'pry'

class Player
  attr_accessor :move, :name

  def initialize
    set_name
  end
end

class Human < Player
  def choose
    answer = nil
    loop do
      puts "Please choose: 'rock', 'paper', 'scissors', 'spock', or 'lizard'"
      answer = gets.chomp
      break if Move::VALUES.include? answer
      puts "Wrong choice"
    end
    self.move = Move.new(answer)
  end

  def set_name
    answer = nil
    loop do
      puts "Please input your name:"
      answer = gets.chomp.capitalize
      break unless answer.empty?
      puts "Your name should not be empty."
    end
    self.name = answer
  end
end

class Computer < Player
  def choose
    self.move = Move.new(Move::VALUES.sample)
  end

  def set_name
    self.name = ['Alpha', 'Beta', 'Gamma', 'Delte', 'Epsilon'].sample
  end
end

class Move
  attr_accessor :value

  VALUES = ['rock', 'paper', 'scissors', 'spock', 'lizard'].freeze

  WINNING_CONDITION = {
    'rock' => %w(scissors lizard),
    'paper' => %w(rock spock),
    'scissors' => %w(paper lizard),
    'spock' => %w(rock scissors),
    'lizard' => %w(paper spock)
  }.freeze

  LOSING_CONDITION = {
    'rock' => %w(paper spock),
    'paper' => %w(scissors lizard),
    'scissors' => %w(rock spock),
    'spock' => %w(paper lizard),
    'lizard' => %w(scissors rock)
  }.freeze

  @@history = []

  def initialize(value)
    @value = value
    @@history << value
  end

  def self.history_human
    result = []
    @@history.each_with_index { |move, index| result << move if index.even? }
    result
  end

  def >(other_object)
    WINNING_CONDITION[value].include?(other_object.value)
  end

  def <(other_object)
    LOSING_CONDITION[value].include?(other_object.value)
  end

  def to_s
    @value
  end
end

class Score
  attr_accessor :human, :computer, :winner

  def initialize
    @human = 0
    @computer = 0
    @winner = nil
  end
end

class PRSGame
  attr_accessor :human, :computer, :score

  def initialize
    @human = Human.new
    @computer = Computer.new
    @score = Score.new
  end

  def display_welcome_message
    puts 'Welcome'
  end

  def display_choices
    puts "#{human.name} chose #{human.move}."
    puts "#{computer.name}'s choice is #{computer.move}."
  end

  def detect_winner
    if human.move > computer.move
      score.winner = :human
    elsif human.move < computer.move
      score.winner = :computer
    else
      score.winner = :tie
    end
  end

  def add_score
    score.human += 1 if score.winner == :human
    score.computer += 1 if score.winner == :computer
  end

  def display_winner
    case score.winner
    when :human    then puts "#{human.name} won!"
    when :computer then puts "#{computer.name} won!"
    else                puts "It's a tie"
    end
  end

  def display_score
    puts "#{score.human} | #{score.computer}"
    p Move.history_human
  end

  def display_goodbye_message
    winner = score.human == 3 ? human.name : computer.name
    puts "The final winner is #{winner}"
    puts 'Thanks for playing. Goodbye.'
  end

  def play_again?
    answer = nil
    loop do
      puts "Do you wanna play again?(y/n)"
      answer = gets.chomp.downcase
      break if ['y', 'n'].include? answer
      puts "Please input y or n"
    end

    return false if answer == 'n'
    return true if answer == 'y'
  end

  def play
    display_welcome_message
    loop do
      human.choose
      computer.choose
      display_choices
      detect_winner
      add_score
      display_winner
      display_score
      break if score.human == 3 || score.computer == 3
      break unless play_again?
    end
    display_goodbye_message
  end
end

PRSGame.new.play
