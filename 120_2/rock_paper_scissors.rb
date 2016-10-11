=begin
  
nouns: player, move, rule
verbs: choose, compare

player
- choose
move
rule

=end

require 'pry'

class Player
  attr_accessor :move, :name

  def initialize(player_type = :human)
    @player_type = player_type
    @move = nil
    set_name
  end

  def set_name
    if human?
      answer = ''
      loop do
        puts "Choose a name for yourself."
        answer = gets.chomp
        break unless answer.empty?
        puts 'Sorry, must input a valid value.'
      end
      self.name = answer
    else
      self.name = ['Sunny', 'Telebaby 5', 'AI 11'].sample
    end
  end

  def choose
    if human?
      choice = nil
      loop do
        puts "Please make a choice rock, paper, or scissors"
        choice = gets.chomp.to_s
        break if ['rock', 'paper', 'scissors'].include? choice
        puts 'Wrong input'
      end
      self.move = choice
    else
      self.move = ['rock', 'paper', 'scissors'].sample
    end
  end

  def human?
    @player_type == :human
  end
end

class Move
  def initialize

  end
end

class Rule
  def initialize

  end

  def self.wins?(human, computer)
    case human
    when 'rock' then ['scissors', 'lizard'].include? computer
    when 'paper' then ['rock', 'spock'].include? computer
    when 'scissors' then ['paper', 'lizard'].include? computer
    when 'spock' then ['rock', 'scissors'].include? computer
    when 'lizard' then ['paper', 'spock'].include? computer
    end
  end
end

def compare(move1, move2)
end

class RPSGame
  attr_accessor :human, :computer

  def initialize
    @human = Player.new
    @computer = Player.new(:computer)
  end

  def display_welcome_message
    puts "Hello #{human.name}, welcome to play the RPS game."
  end

  def display_goodbye_message
    puts "Goodbye #{human.name}, thanks for playing."
  end

  def display_winner
    puts "#{computer.name}'s choice is #{computer.move}"
    if human.move == computer.move
      puts "It's a tie."
    elsif Rule.wins?(computer.move, human.move)
      puts "#{computer.name} wins."
    else
      puts "#{human.name} wins."
    end
  end

  def play_again?
    answer = nil
    loop do
      puts "Do you want to play again?(y/n)"
      answer = gets.chomp
      break if ['y', 'n'].include? answer.downcase
      puts "Sorry, must be 'y' or 'n'."
    end

    return true if answer == 'y'
    return false
  end

  def play
    display_welcome_message
    loop do
      human.choose
      computer.choose
      display_winner
      break unless play_again?
    end
    display_goodbye_message
  end
end

RPSGame.new.play


    # (human == 'rock' && ['scissors', 'lizard'].include? computer) ||
    # (human == 'paper' && ['rock', 'spock'].include? computer) ||
    # (human == 'scissors' && ['paper', 'lizard'].include? computer) ||
    # (human == 'spock' && ['rock', 'scissors'].include? computer) ||
    # (human == 'lizard' && ['paper', 'spock'].include? computer)