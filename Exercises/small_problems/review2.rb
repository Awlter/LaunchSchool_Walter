require 'pry'
# def digit_list(number)
#   number.to_s.chars.map(&:to_i)
# end

# p digit_list(12345)# == [1, 2, 3, 4, 5]
# puts digit_list(7) == [7]
# puts digit_list(375290) == [3, 7, 5, 2, 9, 0]
# puts digit_list(444) == [4, 4, 4]

# HOURS_PER_DAY = 24
# MINUTES_PER_HOUR = 60
# MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

# def time_of_day(time)
#   minutes = time % MINUTES_PER_DAY 
#   hour, minute = minutes.divmod(MINUTES_PER_HOUR)
#   puts format("%02d:%02d", hour, minute)
# end

# require 'date'

# HOURS_PER_DAY = 24
# MINUTES_PER_HOUR = 60
# MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

# def time_of_day(delta_minutes)
#   days_passed = delta_minutes / MINUTES_PER_DAY
#   dayname = Date::DAYNAMES[days_passed]
#   delta_minutes = delta_minutes % MINUTES_PER_DAY
#   hours, minutes = delta_minutes.divmod(MINUTES_PER_HOUR)
#   puts format("#{dayname} %02d:%02d", hours, minutes)
# end

# time_of_day(0) == "00:00"
# time_of_day(-3) == "23:57"
# time_of_day(35) == "00:35"
# time_of_day(-1437) == "00:03"
# time_of_day(3000) == "02:00"
# time_of_day(800) == "13:20"
# time_of_day(-4231) == "01:29"

# SECONDS_IN_MINUTES = 60

# def time_of_day(minutes)
#   std_time = Time.utc(Time.now.year)
#   seconds = minutes * SECONDS_IN_MINUTES
#   binding.pry
#   (std_time + seconds).strftime('%H:%M')
# end

# time_of_day(-3) == "23:57"

# require 'date'

# HOURS_PER_DAY = 24
# MINUTES_PER_HOUR = 60
# SECONDS_IN_MINUTES = 60
# MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

# def time_of_day(delta_minutes)
#   t = Time.new(1996, 5, 31)
#   days_passed = delta_minutes / MINUTES_PER_DAY
#   dayname = Date::DAYNAMES[days_passed]
#   delta_seconds = delta_minutes * SECONDS_IN_MINUTES
#   (t + delta_seconds).strftime("#{dayname} %H:%M")
# end

# p time_of_day(-3)# == "23:57"

# def after_midnight(time)
#   total_minutes(time) % 1440
# end

# def before_midnight(time)
#   (24 * 60 - total_minutes(time)) % 1440
# end

# def total_minutes(time)
#   hours, minutes = time.split(':').map(&:to_i)
#   hours * 60 + minutes
# end

# p after_midnight('00:00') == 0
# p before_midnight('00:00') == 0
# p after_midnight('12:34') == 754
# p before_midnight('12:34') == 686
# p after_midnight('24:00') == 0
# p before_midnight('24:00') == 0

# NUMBERS_PER_LINE = 76

# def print_in_box(string)
#   size = string.size

#   splited = []
#   i = 0
#   loop do
#     splited << string[i, NUMBERS_PER_LINE].center(NUMBERS_PER_LINE)
#     i += NUMBERS_PER_LINE
#     break if i > size
#   end

#   puts frame
#   puts empty_line
#   splited.each do |string|
#     puts "| #{string} |"
#   end
#   puts empty_line
#   puts frame
# end

# def frame
#   "+-#{'-'*NUMBERS_PER_LINE}-+"
# end

# def empty_line
#   "| #{' '*NUMBERS_PER_LINE} |"
# end

# print_in_box('To boldly go where no one has gone before')

# DEGREE = "\xC2\xB0"
# MINUTES_PER_DEGREE = 60
# SECONDS_PER_MINUTE = 60
# SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE

# def dms(degrees_float)
#   total_seconds = (degrees_float * SECONDS_PER_DEGREE)
#   degrees, remaining_seconds = total_seconds.divmod(SECONDS_PER_DEGREE)
#   minutes, seconds = remaining_seconds.divmod(SECONDS_PER_MINUTE)
#   format(%(%d#{DEGREE}%02d'%02d"), degrees, minutes, seconds)
# end

# p dms(30) == %(30°00'00")
# p dms(76.73) == %(76°43'48")
# p dms(254.6) == %(254°36'00")
# p dms(93.034773) == %(93°02'05")
# p dms(0) == %(0°00'00")
# p dms(360) == %(360°00'00") || dms(360) == %(0°00'00")
# p dms(30) == %(30°00'00")
# p dms(76.73) == %(76°43'48")
# p dms(254.6) == %(254°36'00")
# p dms(93.034773) == %(93°02'05")
# p dms(0) == %(0°00'00")
# p dms(360) == %(360°00'00") || dms(360) == %(0°00'00")

# def penultimate(string)
#   string.split[-2]
# end

# p penultimate('last')# == 'last'
# p penultimate('Launch School is great!') == 'is'

# def rotate_rightmost_digits(number, n)
#   numbers = number.to_s.chars
#   chosen_number = numbers.delete_at(-n)
#   numbers << chosen_number
#   numbers.join.to_i
# end

# p rotate_rightmost_digits(735291, 1) == 735291
# p rotate_rightmost_digits(735291, 2) == 735219
# p rotate_rightmost_digits(735291, 3) == 735912
# p rotate_rightmost_digits(735291, 4) == 732915
# p rotate_rightmost_digits(735291, 5) == 752913
# p rotate_rightmost_digits(735291, 6) == 352917


# def switch_lights(n)
#   light_conditions = Hash.new
#   (1..n).each do |num|
#     light_conditions[num] = "off"
#   end

#   (1..n).each do |stp|
#     (stp..n).step(stp) do |num|
#       change_condition(light_conditions, num)
#     end
#   end

#   light_conditions
# end

# def change_condition(light_conditions, num)
#   case light_conditions[num]
#   when 'on' then light_conditions[num] = 'off'
#   when 'off' then light_conditions[num] = 'on'
#   end
# end

# def switch_lights(n)
#   lights = {}
#   1.upto(n) do |no_light|
#     lights[no_light] = 'off'
#   end

#   1.upto(n) do |round_number|
#     lights.each do |key, value|
#       if key % round_number == 0
#         value == 'on' ? lights[key] = 'off' : lights[key] = 'on'
#       end
#     end
#   end

#   lights
# end

# p switch_lights(5)

DIGIT_HASH = {
  'one' => '1',
  'two' => '2',
  'three' => '3',
  'four' => '4',
  'five' => '5',
  'six' => '6',
  'seven' => '7',
  'eight' => '8',
  'nine' => '9',
  'zero' => '0'
}

# def word_to_digit(string)
#   words = string.scan(/\w+/)

#   words.each do |word|
#     if DIGIT_HASH.keys.include? word.downcase
#       string.gsub!(/\b#{word}\b/, DIGIT_HASH[word.downcase])
#     end
#   end

#   string
# end

# DIGIT_ARRAY = %w(zero one two three four five six seven eight nine)

# def word_to_digit(string)
#   result = ''

#   words_with_spaces = string.split(/\b/)

#   words_with_spaces.each do |element|
#     number = DIGIT_ARRAY.index(element).to_s
#     last_result = result.split(/\b/).last

#     if DIGIT_ARRAY.include? element
#       result << number
#     elsif last_result.to_i.to_s == last_result && element == ' '
#       next
#     else
#       result << element
#     end
#   end

#   result
# end

# p word_to_digit('Please call me at five five one two three four. Thanks.')# == 'Please call me at 5 5 51234. Thanks.'

# class CircularQueue
#   attr_reader :size

#   def initialize(size)
#     @queue = Array.new(size)
#     @next_index = 0
#     @longest_index = 0
#     @size = size
#   end

#   def enqueue(value)
#     if @queue[@next_index].nil?
#       @queue[@next_index] = value
#     else
#       @queue[@longest_index] = value
#       @longest_index = increment(@longest_index)
#     end
#     @next_index = increment(@next_index)
#   end

#   def dequeue
#     longest = @queue[@longest_index]
#     @queue[@longest_index] = nil
#     @longest_index = increment(@longest_index) unless @queue[increment(@longest_index)].nil?
#     longest
#   end

#   def increment(index)
#     (index + 1) % size
#   end
# end
# class CircularQueue
#   def initialize(size)
#     @queue = []
#     @queue_max_size = size
#   end

#   def enqueue(value)
#     dequeue if @queue.size == @queue_max_size
#     @queue.push(value)
#   end

#   def dequeue
#     @queue.shift
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

#   def eval(convertor)
#     program = format(@program, convertor)
#     program.split.each do |token|
#       if token.to_i.to_s == token
#         @register = token.to_i
#       elsif ACTIONS.include? token
#         send(token.downcase)
#       else
#         raise BadTokenError, "Invalid token: #{token}"
#       end
#     end
#   rescue MinilangRuntimeError => error
#     puts error.message
#   end

#   def push
#     @stack << @register
#   end

#   def add
#     @register += @stack.pop
#   end

#   def sub
#     @register -= @stack.pop
#   end

#   def mult
#     @register *= @stack.pop
#   end

#   def div
#     @register /= @stack.pop
#   end

#   def mod
#     @register %= @stack.pop
#   end

#   def pop
#     raise EmptyStackError, "Empty stack!" if @stack.empty?
#     @register = @stack.pop
#   end

#   def print
#     puts @register
#   end
# end

# CENTIGRADE_TO_FAHRENHEIT =
#   '5 PUSH %<degrees_c>d PUSH 9 MULT DIV PUSH 32 ADD PRINT'
# minilang = Minilang.new(CENTIGRADE_TO_FAHRENHEIT)
# minilang.eval(degrees_c: 100)
# # 212
# minilang.eval(degrees_c: 0)
# # 32
# minilang.eval(degrees_c: -40)

# class PingGame
#   def initialize
#     @remaining_guesses = 7
#     @random_number = rand(1..100)
#     @guess = nil
#   end

#   def play
#     loop do
#       display_guess_remaining
#       ask_for_input
#       feed_back
#       puts ' '
#       break if @remaining_guesses == 0 || @random_number == @guess
#     end
#     reset
#   end

#   def display_guess_remaining
#     puts "You have #{@remaining_guesses} guesses remaining."
#   end

#   def ask_for_input
#     print "Enter a number between 1 and 100: "
#     answer = nil
#     loop do
#       answer = gets.chomp.to_i
#       break if (1..100).cover? answer
#       print "Invalid guess. Enter a number between 1 and 100: "
#     end
#     @guess = answer
#     @remaining_guesses -= 1
#   end

#   def feed_back
#     if @guess > @random_number
#       puts "Your guess is too high."
#     elsif @guess < @random_number
#       puts "Your guess is too low."
#     else
#       puts "You win!"
#     end
#   end

#   def reset
#     initialize
#   end
# end

class Card
  attr_reader :rank, :suit
  include Comparable

  VALUES = { 'Jack' => 11, 'Queen' => 12, 'King' => 13, 'Ace' => 14 }

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def value
    VALUES.fetch(@rank, @rank)
  end

  def <=>(other)
    value <=> other.value
  end

  def to_s
    "#{rank} of #{suit}"
  end
end

class Deck
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze

  def initialize
    reset
  end

  def draw
    reset if @deck.empty?
    @deck.pop
  end

  def reset
    @deck = []
    RANKS.each do |rank|
      SUITS.each do |suit|
        @deck << Card.new(rank, suit)
      end
    end
    @deck.shuffle!
  end
end

# class PokerHand
#   def initialize(deck)
#     @deck = []
#     5.times { @deck << deck.draw }
#     @card_values = @deck.map { |card| card.value }
#     @card_houses = @deck.map { |card| card.suit }
#   end

#   def print
#     puts @deck
#   end

#   def evaluate
#     case
#     when royal_flush?     then 'Royal flush'
#     when straight_flush?  then 'Straight flush'
#     when four_of_a_kind?  then 'Four of a kind'
#     when full_house?      then 'Full house'
#     when flush?           then 'Flush'
#     when straight?        then 'Straight'
#     when three_of_a_kind? then 'Three of a kind'
#     when two_pair?        then 'Two pair'
#     when pair?            then 'Pair'
#     else                       'High card'
#     end
#   end

#   private

#   attr_reader :card_values, :card_houses

#   def royal_flush?
#     flush? && straight? && @deck.any? { |card| card.rank == 'Ace'}
#   end

#   def straight_flush?
#     flush? && straight?
#   end

#   def four_of_a_kind?
#     card_values.uniq.any? { |value| card_values.count(value) == 4}
#   end

#   def full_house?
#     card_houses.uniq.size == 4 && three_of_a_kind? && pair?
#   end

#   def flush?
#     Deck::SUITS.any? { |suit| @deck.all? { |card| card.suit == suit } }
#   end

#   def straight?
#     (card_values.min..card_values.max).to_a == card_values.sort
#   end

#   def three_of_a_kind?
#     card_values.uniq.any? { |value| card_values.count(value) == 3 }
#   end

#   def two_pair?
#     card_values.uniq.size == 3
#   end

#   def pair?
#     card_values.uniq.any? { |value| card_values.count(value) == 2 }
#   end
# end

class PokerHand
  def initialize(deck)
    @cards = []
    @rank_count = Hash.new(0)

    5.times do
      card = deck.draw
      @cards << card
      @rank_count[card.rank] += 1
    end
  end

  def print
    puts @cards
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
    straight_flush? && @cards.min.value == 10
  end

  def straight_flush?
    straight? && flush?
  end

  def four_of_a_kind?
    n_of_a_kind?(4)
  end

  def full_house?
    n_of_a_kind?(3) && n_of_a_kind?(2)
  end

  def flush?
    suit = @cards.first.suit
    @cards.all? { |card| card.suit == suit }
  end

  def straight?
    return false if @rank_count.any? { |_, count| count > 1 }
    
    @cards.min.value == @cards.max.value - 4 
  end

  def n_of_a_kind?(number)
    @rank_count.one? { |_, count| count == number }
  end

  def three_of_a_kind?
    n_of_a_kind?(3)
  end

  def two_pair?
    @rank_count.select { |_, count| count == 2 }.size == 2
  end

  def pair?
    n_of_a_kind?(2)
  end
end

# Danger danger danger: monkey
# patching for testing purposes.
class Array
  alias_method :draw, :pop
end

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
