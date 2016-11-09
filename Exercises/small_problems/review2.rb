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

#   words_with_indents = string.split(/\b/)

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

# class PokerHand
#   def initialize(deck)
#     @cards = []
#     @rank_count = Hash.new(0)

#     5.times do
#       card = deck.draw
#       @cards << card
#       @rank_count[card.rank] += 1
#     end
#   end

#   def print
#     puts @cards
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

#   def royal_flush?
#     straight_flush? && @cards.min.value == 10
#   end

#   def straight_flush?
#     straight? && flush?
#   end

#   def four_of_a_kind?
#     n_of_a_kind?(4)
#   end

#   def full_house?
#     n_of_a_kind?(3) && n_of_a_kind?(2)
#   end

#   def flush?
#     suit = @cards.first.suit
#     @cards.all? { |card| card.suit == suit }
#   end

#   def straight?
#     return false if @rank_count.any? { |_, count| count > 1 }
    
#     @cards.min.value == @cards.max.value - 4 
#   end

#   def n_of_a_kind?(number)
#     @rank_count.one? { |_, count| count == number }
#   end

#   def three_of_a_kind?
#     n_of_a_kind?(3)
#   end

#   def two_pair?
#     @rank_count.select { |_, count| count == 2 }.size == 2
#   end

#   def pair?
#     n_of_a_kind?(2)
#   end
# end

# # Danger danger danger: monkey
# # patching for testing purposes.
# class Array
#   alias_method :draw, :pop
# end

# hand = PokerHand.new([
#   Card.new(10,      'Hearts'),
#   Card.new('Ace',   'Hearts'),
#   Card.new('Queen', 'Hearts'),
#   Card.new('King',  'Hearts'),
#   Card.new('Jack',  'Hearts')
# ])
# puts hand.evaluate == 'Royal flush'

# hand = PokerHand.new([
#   Card.new(8,       'Clubs'),
#   Card.new(9,       'Clubs'),
#   Card.new('Queen', 'Clubs'),
#   Card.new(10,      'Clubs'),
#   Card.new('Jack',  'Clubs')
# ])
# puts hand.evaluate == 'Straight flush'

# hand = PokerHand.new([
#   Card.new(3, 'Hearts'),
#   Card.new(3, 'Clubs'),
#   Card.new(5, 'Diamonds'),
#   Card.new(3, 'Spades'),
#   Card.new(3, 'Diamonds')
# ])
# puts hand.evaluate == 'Four of a kind'

# hand = PokerHand.new([
#   Card.new(3, 'Hearts'),
#   Card.new(3, 'Clubs'),
#   Card.new(5, 'Diamonds'),
#   Card.new(3, 'Spades'),
#   Card.new(5, 'Hearts')
# ])
# puts hand.evaluate == 'Full house'

# hand = PokerHand.new([
#   Card.new(10, 'Hearts'),
#   Card.new('Ace', 'Hearts'),
#   Card.new(2, 'Hearts'),
#   Card.new('King', 'Hearts'),
#   Card.new(3, 'Hearts')
# ])
# puts hand.evaluate == 'Flush'

# hand = PokerHand.new([
#   Card.new(8,      'Clubs'),
#   Card.new(9,      'Diamonds'),
#   Card.new(10,     'Clubs'),
#   Card.new(7,      'Hearts'),
#   Card.new('Jack', 'Clubs')
# ])
# puts hand.evaluate == 'Straight'

# hand = PokerHand.new([
#   Card.new(3, 'Hearts'),
#   Card.new(3, 'Clubs'),
#   Card.new(5, 'Diamonds'),
#   Card.new(3, 'Spades'),
#   Card.new(6, 'Diamonds')
# ])
# puts hand.evaluate == 'Three of a kind'

# hand = PokerHand.new([
#   Card.new(9, 'Hearts'),
#   Card.new(9, 'Clubs'),
#   Card.new(5, 'Diamonds'),
#   Card.new(8, 'Spades'),
#   Card.new(5, 'Hearts')
# ])
# puts hand.evaluate == 'Two pair'

# hand = PokerHand.new([
#   Card.new(2, 'Hearts'),
#   Card.new(9, 'Clubs'),
#   Card.new(5, 'Diamonds'),
#   Card.new(9, 'Spades'),
#   Card.new(3, 'Diamonds')
# ])
# puts hand.evaluate == 'Pair'

# hand = PokerHand.new([
#   Card.new(2,      'Hearts'),
#   Card.new('King', 'Clubs'),
#   Card.new(5,      'Diamonds'),
#   Card.new(9,      'Spades'),
#   Card.new(3,      'Diamonds')
# ])
# puts hand.evaluate == 'High card'

# def letter_percentages(string)
#   length = string.length
#   result = {}
#   result[:lowercase] = string.count('a-z').to_f * 100 / length
#   result[:uppercase] = string.count('A-Z').to_f * 100 / length
#   result[:neither] = string.count('^a-zA-Z').to_f * 100 / length
#   result
# end

# p letter_percentages('abCdef 123') == { lowercase: 50, uppercase: 10, neither: 40 }
# p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25 }
# p letter_percentages('123') == { lowercase: 0, uppercase: 0, neither: 100 }

# def balanced?(string)
#   return false if string.count('(') != string.count(')')

#   count = 0
#   string.scan(/\(|\)/).each do |paren|
#     case paren
#     when '(' then count += 1
#     when ')' then count -= 1
#     end
#     return false if count < 0
#   end

#   true
# end

# p balanced?('What (is) this?') == true
# p balanced?('What is) this?') == false
# p balanced?('What (is this?') == false
# p balanced?('((What) (is this))?') == true
# p balanced?('((What)) (is this))?') == false
# p balanced?('Hey!') == true
# p balanced?(')Hey!(') == false
# p balanced?('What ((is))) up(') == false

# def triangle(*sides)
#   sides.sort!
#   if sides[0] + sides[1] <= sides[2]
#     :invalid
#   elsif sides[0] == sides[2]
#     :equilateral
#   elsif sides[1] == sides[2]
#     :isosceles
#   else
#     :scalene
#   end
# end

# p triangle(3, 3, 3) == :equilateral
# p triangle(3, 3, 1.5) == :isosceles
# p triangle(3, 4, 5) == :scalene
# p triangle(0, 3, 3) == :invalid
# p triangle(3, 1, 1) == :invalid

# def friday_13th?(year)
#   result = 0

#   (1..12).each do |month|
#     time = Time.new(year, month, 13)
#     result += 1 if time.friday?
#   end

#   result
# end

# p friday_13th?(2015) == 3
# p friday_13th?(1986) == 1

# def featured(number)
#   loop do
#     number += 1
#     break if number.odd? && number % 7 == 0
#   end

#   loop do
#     numbers = number.to_s.chars
#     break if numbers == numbers.uniq
#     number += 14
#   end

#   number
# end

# p featured(12) == 21
# p featured(20) == 21
# p featured(21) == 35
# p featured(997) == 1029
# p featured(1029) == 1043
# p featured(999_999) == 1_023_547
# p featured(999_999_987) == 1_023_456_987

# p featured(9_999_999_999) # -> There is no possible number that fulfills those require

# def bubble_sort!(array)
#   loop do
#     swapped = false
#     (1...array.size).each do |indx|
#       next if array[indx - 1] <= array[indx]
#       array[indx - 1], array[indx] = array[indx], array[indx - 1]
#       swapped = true    
#     end

#     break unless swapped
#   end
# end

# array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
# bubble_sort!(array)
# p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)

# def sum_square_difference(number)
#   sum_square = (1..number).to_a.reduce(:+) ** 2

#   square_sum = (1..number).to_a.map { |n| n**2 }.reduce(:+)

#   sum_square - square_sum
# end

# p sum_square_difference(3) == 22
#    # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
# p sum_square_difference(10) == 2640
# p sum_square_difference(1) == 0
# p sum_square_difference(100) == 25164150

# def madlibs
#   noun = %w(na nb nc nd).sample
#   verb = %w(va vb vc vd).sample
#   adjective = %w(aa ab ac ad).sample
#   adverb = %w(ava avb avc avd).sample

#   File.open('simple_file.txt', 'r').each do |line|
#     puts format(line, { noun: noun, adjective: adjective, adverb: adverb, verb: verb} )
#   end
# end

# madlibs

# def star(size)
#   indent_numbers = (0...size/2).to_a

#   indent_numbers.reverse.each do |number|
#     puts "*#{' '*number}*#{' '*number}*".center(size)
#   end

#   puts "*" * size

#   indent_numbers.each do |number|
#     puts "*#{' '*number}*#{' '*number}*".center(size)
#   end
# end

# star(9)

# def bubble_sort!(array)
#   last_number = array.size - 1
  
#   loop do
#     swapped_times = 0 
#     1.upto(last_number) do |indx|
#       next if array[indx - 1] <= array[indx]
#       array[indx - 1], array[indx] = array[indx], array[indx - 1]
#       swapped_times += 1
#     end

#     break if swapped_times == 1
#   end
# end

# array = [5, 3]
# bubble_sort!(array)
# p array == [3, 5]

# array = [6, 2, 7, 1, 4]
# bubble_sort!(array)
# p array == [1, 2, 4, 6, 7]

# def transpose(matrix)
#   result = Array.new(3) { Array.new }

#   matrix.each do |sub_array|
#     sub_array.each_with_index do |num, indx|
#       result[indx] << num
#     end
#   end

#   result
# end

# def transpose!(matrix)
#   (0...matrix.size - 1).each do |indx|
#     (indx + 1...matrix.size).each do |indx1|
#       matrix[indx][indx1], matrix[indx1][indx] = matrix[indx1][indx], matrix[indx][indx1]
#     end
#   end
#   matrix
# end

# matrix = [
#   [1, 2, 3, 4],
#   [5, 6, 7, 8],
#   [9, 0, 1, 2],
#   [3, 4, 5, 6]
# ]

# new_matrix = transpose!(matrix)

# p new_matrix# == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
# p matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]

# def transpose(matrix)
#   result = Array.new(matrix.first.size) { Array.new }

#   matrix.each do |sub_array|
#     sub_array.each_with_index do |num, indx|
#       result[indx] << num
#     end
#   end

#   result
# end

# def transpose(matrix)
#   result = []

#   (0...matrix.first.size).each do |indx|
#     sub_result = matrix.map { |sub_array| sub_array[indx] }
#     result << sub_result
#   end

#   result
# end

# def rotate90(matrix)
#   matrix = matrix.reverse
#   result = []

#   number_of_rows = matrix.first.size
#   number_of_columns = matrix.size

#   (0...number_of_rows).each do |row_indx|
#     new_row = (0...number_of_columns).map { |column_indx| matrix[column_indx][row_indx] }
#     result << new_row
#   end

#   result
# end

# p transpose([[1, 2, 3, 4]]) == [[1], [2], [3], [4]]
# p transpose([[1], [2], [3], [4]]) == [[1, 2, 3, 4]]
# p transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]) ==
#   [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
# p transpose([[1]]) == [[1]]

# # def rotate90(matrix)
#   result = []

#   number_of_columns = matrix.first.size
#   number_of_rows = matrix.size

#   (0...number_of_columns).each do |column_indx|
#     new_row = (0...number_of_rows).to_a.reverse.map { |row_indx| matrix[row_indx][column_indx]}
#     result << new_row
#   end

#   result
# end


# matrix1 = [
#   [1, 5, 8],
#   [4, 7, 2],
#   [3, 9, 6]
# ]

# matrix2 = [
#   [3, 7, 4, 2],
#   [5, 1, 0, 8]
# ]

# new_matrix1 = rotate90(matrix1)
# new_matrix2 = rotate90(matrix2)
# new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))

# p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
# p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
# p new_matrix3 == matrix2

def permutations(array)
  result = array.combination(1).to_a

  loop do
    sub_result = []
    array.each do |num|
      sub_result << result.map do |sub_array|
        sub_array.unshift(num) unless sub_array.include? num
      end
    end

    result = sub_result

    break if result.first.size == array.size
  end

  result
end

p permutations([2])
# -> [[2]]

p permutations([1, 2])
# -> [[1, 2], [2, 1]]

p permutations([1, 2, 3])
# # -> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

# p permutations([1, 2, 3, 4])
# # -> [[1, 2, 3, 4], [1, 2, 4, 3], [1, 3, 2, 4],
#     [1, 3, 4, 2], [1, 4, 2, 3], [1, 4, 3, 2],
#     [2, 1, 3, 4], [2, 1, 4, 3], [2, 3, 1, 4],
#     [2, 3, 4, 1], [2, 4, 1, 3], [2, 4, 3, 1],
#     [3, 1, 2, 4], [3, 1, 4, 2], [3, 2, 1, 4],
#     [3, 2, 4, 1], [3, 4, 1, 2], [3, 4, 2, 1],
#     [4, 1, 2, 3], [4, 1, 3, 2], [4, 2, 1, 3],
#     [4, 2, 3, 1], [4, 3, 1, 2], [4, 3, 2, 1]]


















