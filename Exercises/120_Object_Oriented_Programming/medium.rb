require 'pry'

# class Machine
#   def start
#     flip_switch(:on)
#   end

#   def stop
#     flip_switch(:off)
#   end

#   def print_switch
#     puts switch
#   end

#   private

#   attr_accessor :switch

#   def flip_switch(desired_state)
#     self.switch = desired_state
#   end
# end

# machine = Machine.new
# machine.start
# machine.print_switch

# 2
# class FixedArray
#   def initialize(n)
#     @array = Array.new(n)
#   end

#   def []=(index, input)
#     @array[index] = input
#   end

#   def [](index)
#     @array.fetch(index)
#   end

#   def to_a
#     @array
#   end

#   def to_s
#     "#{@array}"
#   end
# end


# fixed_array = FixedArray.new(5)
# puts fixed_array[3] == nil
# puts fixed_array.to_a == [nil] * 5

# fixed_array[3] = 'a'
# puts fixed_array[3] == 'a'
# puts fixed_array.to_a == [nil, nil, nil, 'a', nil]

# fixed_array[1] = 'b'
# puts fixed_array[1] == 'b'
# puts fixed_array.to_a == [nil, 'b', nil, 'a', nil]

# fixed_array[1] = 'c'
# puts fixed_array[1] == 'c'
# puts fixed_array.to_a == [nil, 'c', nil, 'a', nil]

# fixed_array[4] = 'd'
# puts fixed_array[4] == 'd'
# puts fixed_array.to_a == [nil, 'c', nil, 'a', 'd']
# puts fixed_array.to_s == '[nil, "c", nil, "a", "d"]'

# puts fixed_array[-1] == 'd'
# puts fixed_array[-4] == 'c'

# begin
#   fixed_array[6]
#   puts false
# rescue IndexError
#   puts true
# end

# begin
#   fixed_array[-7] = 3
#   puts false
# rescue IndexError
#   puts true
# end

# class Student
#   def initialize(name, year)
#     @name = name
#     @year = year
#   end
# end

# class Graduate < Student
#   def initialize(name, year, parking)
#     super(name, year)
#     @parking = parking
#   end
# end

# class Undergraduate < Student
#   def initialize(name, year)
#     super
#   end
# end

#
# class CircularQueue
#   attr_accessor :buffer, :next_position, :longest_position

#   def initialize(n)
#     @buffer = Array.new(n)
#     @next_position = 0
#     @longest_position = 0
#   end

#   def enqueue(data)
#     if buffer[next_position] == nil
#       self.buffer[next_position] = data
#       self.next_position = increment(next_position)
#     else
#       buffer[longest_position] = data
#       self.longest_position = increment(longest_position)
#     end
#   end

#   def dequeue
#     value = buffer[longest_position]
#     buffer[longest_position] = nil
#     self.longest_position = increment(longest_position) unless buffer[(longest_position + 1) % buffer.size].nil?
#     value
#   end

#   def increment(position)
#     position += 1
#     position % buffer.size
#   end
# end

# queue = CircularQueue.new(3)
# puts queue.dequeue == nil

# queue.enqueue(1)
# queue.enqueue(2)
# puts queue.dequeue == 1

# queue.enqueue(3)
# queue.enqueue(4)
# puts queue.dequeue == 2

# queue.enqueue(5)
# queue.enqueue(6)
# queue.enqueue(7)
# puts queue.dequeue == 5
# puts queue.dequeue == 6
# puts queue.dequeue == 7
# puts queue.dequeue == nil

# queue = CircularQueue.new(4)
# puts queue.dequeue == nil

# queue.enqueue(1)
# queue.enqueue(2)
# puts queue.dequeue == 1

# queue.enqueue(3)
# queue.enqueue(4)
# puts queue.dequeue == 2

# queue.enqueue(5)
# queue.enqueue(6)
# queue.enqueue(7)
# puts queue.dequeue == 4
# puts queue.dequeue == 5
# puts queue.dequeue == 6
# puts queue.dequeue == 7
# puts queue.dequeue == nil

#
# class Minilang


#   def initialize(commands)
#     @stack = []
#     @register = 0
#     @commands = commands.split
#   end

#   def deal_with_commands
#     @commands.each do |command|
#       @register = command if command.integer?
#       case command
#       when 'PRINT' then p @register
#       when
#     end
#   end

#   def 

# require 'set'

# class MinilangRuntimeError < RuntimeError; end
# class BadTokenError < MinilangRuntimeError; end
# class EmptyStackError < MinilangRuntimeError; end

# class Minilang
#   ACTIONS = Set.new %w(PUSH ADD SUB MULT DIV MOD POP PRINT)

#   def initialize(program)
#     @program = program
#     @stack = []
#     @register = 0
#   end

#   # def eval(degree)
#     # @program.split.each do |token|
#     #   begin 
#     #     token = format(token, degree)
#     #     eval_token(token)
#   #       # binding.pry
#   #     rescue
#   #       binding.pry
#   #       eval_token(token)
#   #     end
#   #   end
#   # end

#   def eval(degree)
#     program = format(@program, degree)
#     program.split.each { |token| eval_token(token) }
#   end

#   private

#   def eval_token(token)
#     # binding.pry

#     if ACTIONS.include?(token)
#       send(token.downcase)
#     elsif token =~ /\A[-+]?\d+\z/
#       @register = token.to_i
#     else
#       raise BadTokenError, "Invalid token: #{token}"
#     end

#   rescue 
#   end

#   def push
#     @stack.push(@register)
#   end

#   def pop
#     raise EmptyStackError, "Empty stack!" if @stack.empty?
#     @register = @stack.pop
#   end

#   def add
#     @register += pop
#   end

#   def div
#     @register /= pop
#   end

#   def mod
#     @register %= pop
#   end

#   def mult
#     @register *= pop
#   end

#   def sub
#     @register -= pop
#   end

#   def print
#     puts @register
#   end
# end


# # Minilang.new('PRINT').eval
# # # 0

# # Minilang.new('5 PUSH 3 MULT PRINT').eval
# # # 15

# # Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# # # 5
# # # 3
# # # 8

# # Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# # # 10
# # # 5

# # Minilang.new('5 PUSH POP POP PRINT').eval
# # # Empty stack!

# # Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# # # 6

# # Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# # # 12

# # Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# # # Invalid token: XSUB

# # Minilang.new('-3 PUSH 5 SUB PRINT').eval
# # # 8

# # Minilang.new('6 PUSH').eval
# # # (nothing printed; no PRINT commands)

# CENTIGRADE_TO_FAHRENHEIT =
#   '5 PUSH %<degrees_c>d PUSH 9 MULT DIV PUSH 32 ADD PRINT'
# minilang = Minilang.new(CENTIGRADE_TO_FAHRENHEIT)
# # minilang.eval(degrees_c: 100)
# # 212
# minilang.eval(degrees_c: 0)
# # 32
# minilang.eval(degrees_c: -40)

# Number guess part I
# description:
# PingGame is a one-player game, where player has 7 chances to guess the right number.
# each time, the player is asked to guess a number between 1 - 100, if the guess is high
# class PingGame
#   NUMBER = 34
#   RANGE = (1..100)

#   def initialize
#     @chances = 7
#     @guess = nil
#   end

#   def show_remaining_chances
#     puts "You have #{@chances} guesses remaining."
#   end

#   def choose_number
#     print "Enter a number between 1 and 100:"
#     number = nil
#     loop do
#       number = gets.chomp.to_i
#       break if RANGE.to_a.include? number
#       print "Invalid guess. Enter a number between 1 and 100:"
#     end
#     @guess = number
#   end

#   def compare
#     if @guess > NUMBER
#       :high
#     elsif @guess < NUMBER
#       :low
#     else
#       :equal
#     end
#   end

#   def show_result(compare)
#     case compare
#     when :high then puts "Too high"
#     when :low  then puts "Too low"
#     when :equal then puts "You won"
#     end
#     puts "You lose." if @chances == 0 && compare != :equal
#   end

#   def play
#     while @chances > 0
#       show_remaining_chances
#       @chances -= 1
#       choose_number
#       show_result(compare)
#       break if compare == :equal
#     end
#   end
# end

# class PingGame
#   RESULT = {
#     high: "Too high!",
#     low: "Too low!",
#     win: "You won!",
#     lose: "You lose!"
#   }

#   def initialize(n1, n2)
#     @range = (n1..n2)
#     @chances = Math.log2(@range.size).to_i + 1
#   end

#   def play
#     reset
#     @chances.downto(1) do |remaining|
#       display_remaining_guesses(remaining)
#       number = gain_number
#       result = compare(number)
#       puts RESULT[result]
#       return if result == :win
#     end

#     puts RESULT[:lose]
#   end

#   private

#   def display_remaining_guesses(remaining)
#     if remaining == 1
#       puts "Just 1 guess left."
#     else
#       puts "#{remaining} guesses left"
#     end
#   end

#   def gain_number
#     number = nil
#     loop do 
#       puts "Guess a number from #{@range.first} to #{@range.last}."
#       number = gets.chomp.to_i
#       break if @range.cover? number
#       puts "Invalid input"
#     end
#     number
#   end

#   def compare(number)
#     if number == @secret_number
#       :win
#     elsif number < @secret_number
#       :low
#     else
#       :high
#     end
#   end

#   def reset
#     @secret_number = @range.to_a.sample
#   end
# end


# game = PingGame.new(501, 1500)
# game.play

# class Card
#   attr_reader :rank, :suit

#   def initialize(rank, suit)
#     @rank = rank
#     @suit = suit
#   end

#   def to_s
#     "The #{rank} of #{suit}"
#   end
# end

# class Card
#   attr_reader :rank, :suit
#   include Comparable

#   VALUES = { 'Jack' => 11, 'Queen' => 12, 'King' => 13, 'Ace' => 14 }
#   SUITS_VALUES = { 'Diamonds' => 1, 'Clubs' => 2, 'Hearts' => 3, 'Spades' => 4 }

#   def initialize(rank, suit)
#     @rank = rank
#     @suit = suit
#   end

#   def to_s
#     "#{rank} of #{suit}"
#   end

#   def value
#     VALUES.fetch(@rank, @rank)
#   end

#   def suits_value
#     SUITS_VALUES.fetch(@suit)
#   end

#   def <=>(other_card)
#     result = value <=> other_card.value
#     if result == 0
#       suits_value <=> other_card.suits_value
#     else
#       result
#     end
#   end
# end

# cards = [Card.new('Jack', 'Spades'),
#          Card.new('Jack', 'Diamonds'),
#          Card.new(7, 'Diamonds')]
# puts cards.sort

#
class Deck
  RANKS = (2..10).to_a + %w(Jack Queen King Ace).freeze
  SUITS =  %w(Hearts Clubs Diamonds Spades).freeze

  def initialize
    @cards = []
    reset
  end

  def reset
    deck = RANKS.product(SUITS) 
    deck.each { |rank, suit| @cards << Card.new(rank, suit) }
    @cards.shuffle!
  end

  def draw
    reset if @cards.empty?
    @cards.pop
  end

end

class Card
  attr_reader :rank, :suit
  include Comparable

  VALUES = { 'Jack' => 11, 'Queen' => 12, 'King' => 13, 'Ace' => 14 }
  SUITS = { 'Diamonds' => 1, 'Clubs' => 2, 'Hearts' => 3, 'Spades' => 4 }

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def to_s
    "#{rank} of #{suit}"
  end

  def suit
    SUITS.fetch(@suit)
  end

  def value
    VALUES.fetch(@rank, @rank)
  end

  def <=>(other_card)
    value <=> other_card.value
  end
end

class PokerHand
  def initialize(deck)
    @cards_on_hand = []
    @deck = deck
    deal
    @value_array = @cards_on_hand.map(&:value).sort
    @uniq_value_array = @value_array.uniq
  end

  def deal
    5.times { @cards_on_hand << @deck.draw }
  end

  def print
    @cards_on_hand.each { |card| puts card }
  end

  def evaluate
    case
    when royal_flush?     then 'Royal flush'
    when straight_flush?  then 'Straight flush'
    when four_of_a_kind?  then 'Four of a kind'
    when full_house?      then 'Full house'
    when flush?           then 'Flush'
    when straight?        then 'Straight'
    when three_of_a_kind? then 'Three of a kind'
    when two_pair?        then 'Two pair'
    when pair?            then 'Pair'
    else                       'High card'
    end
  end

  private

  def royal_flush?
    flush? && straight? && @cards_on_hand.min.value == 10
  end

  def straight_flush?
    flush? && straight?
  end

  def four_of_a_kind?
    @uniq_value_array.any? { |v| @value_array.count(v) == 4 }
  end

  def full_house?
    @uniq_value_array.any? { |v| @value_array.count(v) == 3 } &&
    @uniq_value_array.any? { |v| @value_array.count(v) == 2}
  end

  def flush?
    @cards_on_hand.map(&:suit).uniq.count == 1
  end

  def straight?
    @value_array == (@cards_on_hand.min.value..@cards_on_hand.max.value).to_a
  end

  def three_of_a_kind?
    @uniq_value_array.any? { |v| @value_array.count(v) == 3 } &&
    @uniq_value_array.none? { |v| @value_array.count(v) == 2}
  end

  def two_pair?
    @uniq_value_array.count == 3
  end

  def pair?
    @uniq_value_array.any? { |v| @value_array.count(v) == 2 }
  end
end

hand = PokerHand.new(Deck.new)
hand.print
puts hand.evaluate

# Danger danger danger: monkey
# patching for testing purposes.
class Array
  alias_method :draw, :pop
end

# Test that we can identify each PokerHand type.
hand = PokerHand.new([
  Card.new(10,      'Hearts'),
  Card.new('Ace',   'Hearts'),
  Card.new('Queen', 'Hearts'),
  Card.new('King',  'Hearts'),
  Card.new('Jack',  'Hearts')
])
puts hand.evaluate == 'Royal flush'

hand = PokerHand.new([
  Card.new(8,       'Clubs'),
  Card.new(9,       'Clubs'),
  Card.new('Queen', 'Clubs'),
  Card.new(10,      'Clubs'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight flush'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Four of a kind'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Full house'

hand = PokerHand.new([
  Card.new(10, 'Hearts'),
  Card.new('Ace', 'Hearts'),
  Card.new(2, 'Hearts'),
  Card.new('King', 'Hearts'),
  Card.new(3, 'Hearts')
])
puts hand.evaluate == 'Flush'

hand = PokerHand.new([
  Card.new(8,      'Clubs'),
  Card.new(9,      'Diamonds'),
  Card.new(10,     'Clubs'),
  Card.new(7,      'Hearts'),
  Card.new('Jack', 'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(6, 'Diamonds')
])
puts hand.evaluate == 'Three of a kind'

hand = PokerHand.new([
  Card.new(9, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(8, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Two pair'

hand = PokerHand.new([
  Card.new(2, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(9, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Pair'

hand = PokerHand.new([
  Card.new(2,      'Hearts'),
  Card.new('King', 'Clubs'),
  Card.new(5,      'Diamonds'),
  Card.new(9,      'Spades'),
  Card.new(3,      'Diamonds')
])
puts hand.evaluate == 'High card'









