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
      puts "Please choose, rock, paper or scissors:"
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
      answer = gets.chomp
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
    self.name = ['Alpha', 'Bata', 'Cigma', 'Delta', 'Ebxilong'].sample
  end
end

class Move
  VALUES = ['rock', 'paper', 'scissors'].freeze

  def initialize(value)
    @value = value
  end

  def rock?
    @value == 'rock'
  end

  def paper?
    @value == 'paper'
  end

  def scissors?
    @value == 'scissors'
  end

  def >(other_object)
    (rock? && other_object.scissors?) ||
      (paper? && other_object.rock?) ||
      (scissors? && other_object.paper?)
  end

  def <(other_object)
    (paper? && other_object.scissors?) ||
      (scissors? && other_object.rock?) ||
      (rock? && other_object.paper?)
  end

  def to_s
    @value
  end
end

class Rule
end

class PRSGame
  attr_accessor :human, :computer

  def initialize
    @human = Human.new
    @computer = Computer.new
  end

  def display_welcome_message
    puts 'Welcome'
  end

  def display_result
    puts "#{human.name} chose #{human.move}."
    puts "#{computer.name}'s choice is #{computer.move}."

    if human.move > computer.move
      puts "#{human.name} won!"
    elsif human.move < computer.move
      puts "#{computer.name} won!"
    else
      puts "It's a tie!"
    end
  end

  def display_goodbye_message
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
      display_result
      break unless play_again?
    end
    display_goodbye_message
  end
end

PRSGame.new.play
