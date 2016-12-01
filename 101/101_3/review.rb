require 'pry'
# 3
# advice = "Few things in life are as important as house training your pet dinosaur."

# array = advice.split

# array.each_with_index do |word, index|
#   array[index] = 'urgent' if index == 6
# end

# p array.join(' ')

# advice = "Few things in life are as important as house training your pet dinosaur. importantaaaa, importatn"

# p advice.gsub(/important/, 'urgent')

# 5

# p (0..100).cover?(42)

# 6
# famous_words = "seven years ago..."

# famous_words = "a b c " + famous_words

# p famous_words

# 7
# def add_eight(number)
#   number + 8
# end

# number = 2

# how_deep = "number"
# 5.times { how_deep.gsub!("number", "add_eight(number)") }

# p eval how_deep

# 8
# flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }

# p flintstones.assoc('Fred')

# 
# flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

# flintstones_hash = {}

# flintstones.each_with_index { |value, index| flintstones_hash[value] = index}

# p flintstones_hash

#

# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }

# p ages.values.inject(:+)

# p ages.select {|_, age| age > 100}

#

# munsters_description = "The Munsters are creepy in a good way."

# p munsters_description.capitalize

# p munsters_description.swapcase

# p munsters_description.upcase

#

# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10 }

# additional_ages = { "Marilyn" => 22, "Spot" => 237 }

# ages = ages.merge(additional_ages)

# p ages.values.min

#

# advice = "Few things in life are as important as house training your pet dinosaur."

# puts advice.include?('Fe')

# 
# flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

# p flintstones.map! { |value| value[0...3] }
# p flintstones

# flintstones.push('Dino', 'Darla')

# p flintstones

#

# advice = "Few things in life are as important as house training your pet dinosaur."

# p advice.slice!(0, advice.index('house'))

# p advice.scan(/t/)

#

# title = "Flintstone Family Members"

# p title.center(40)

#
# string = 'The Flintstones Rock!'

# 1.upto(3) { |number| puts ' ' * number + string}

#
# statement = "The Flintstones Rock"

# statement_hash = Hash.new()

# # statement.chars.each { |char| statement_hash[char] += 1}

# # p statement_hash

# array = ('A'..'Z').to_a + ('a'..'z').to_a

# array.each do |char|
#   statement_hash[char] = statement.scan(char).count if statement.include?(char)
# end

# p statement_hash

#
# def factors(number)
#   dividend = number
#   divisors = []
#   while dividend > 0
#     divisors << number / dividend if number % dividend == 0
#     dividend -= 1
#   end 
#   divisors
# end

# p factors(8)

#

# title = 'Write your own version of the rails'

# capitalized_word = title.split.map { |word| word.capitalize }
# p capitalized_word.join(' ')

#

# munsters = {
#   "Herman" => { "age" => 32, "gender" => "male" },
#   "Lily" => { "age" => 30, "gender" => "female" },
#   "Grandpa" => { "age" => 402, "gender" => "male" },
#   "Eddie" => { "age" => 10, "gender" => "male" },
#   "Marilyn" => { "age" => 23, "gender" => "female"}
# }

# munsters.each do |name, info|
#   case info['age']
#   when (0..17) then info['age_group'] = 'kid'
#   end
# end

# p munsters

#

# munsters = {
#   "Herman" => { "age" => 32, "gender" => "male" },
#   "Lily" => { "age" => 30, "gender" => "female" },
#   "Grandpa" => { "age" => 402, "gender" => "male" },
#   "Eddie" => { "age" => 10, "gender" => "male" },
#   "Marilyn" => { "age" => 23, "gender" => "female"}
# }

# munsters.each do |name, info|
#   puts "#{name} is a #{info['age']} year old #{info['gender']}."
# end

#

# def tricky_method(a_string_param, an_array_param)
#   a_string_param += "rutabaga"
#   an_array_param += ["rutabaga"]
#   return a_string_param, an_array_param
# end

# my_string = "pumpkins"
# my_array = ["pumpkins"]
# string, array = tricky_method(my_string, my_array)

# puts "My string looks like this now: #{string}"
# puts "My array looks like this now: #{array}"

#
# sentence = "Humpty Dumpty sat on a wall."

# p sentence.split(/\W/).reverse.join(' ')

#

# munsters = {
#   "Herman" => { "age" => 32, "gender" => "male" },
#   "Lily" => { "age" => 30, "gender" => "female" },
#   "Grandpa" => { "age" => 402, "gender" => "male" },
#   "Eddie" => { "age" => 10, "gender" => "male" },
#   "Marilyn" => { "age" => 23, "gender" => "female"}
# }

# def mess_with_demographics(demo_hash)
#   demo = {}
#   demo.merge(demo_hash)
#   binding.pry
#   demo.values.each do |family_member|
#     family_member["age"] += 42
#     family_member["gender"] = "other"
#   end
# end

# mess_with_demographics(munsters)

# p munsters

# interval = [8, 4, 4, 4, 12]

# result = ''

# interval.each do |number|
#   number.times do
#     result << (('a'..'f').to_a + ('1'..'9').to_a).sample
#   end
#   result << '-' unless number == 12
# end

# p result

# display_board
WINNER_ARRAY = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                [1, 4, 7], [2, 5, 8], [3, 6, 9],
                [1, 5, 9], [3, 5, 7]]

def prompt(msg)
  puts "==> #{msg}"
end

def display(board)
  puts "     |     |"
  puts "  #{board[1]}  |  #{board[2]}  |  #{board[3]}"
  puts "     |     |"
  puts "-----|-----|-----"
  puts "     |     |"
  puts "  #{board[4]}  |  #{board[5]}  |  #{board[6]}"
  puts "     |     |"
  puts "-----|-----|-----"
  puts "     |     |"
  puts "  #{board[7]}  |  #{board[8]}  |  #{board[9]}"
  puts "     |     |"
end

def player_makes_choice_on(board)
  available_choice = board.keys.select { |num| board[num] == ' ' }
  prompt "What's yours choice?(#{available_choice.join(', ')})"
  
  player_choice = nil
  loop do
    player_choice = gets.chomp.to_i
    break if available_choice.include?(player_choice)
    prompt "It's taken"
  end
  
  board[player_choice] = 'O'
end

def computer_makes_choice_on(board)
  available_choice = board.keys.select { |num| board[num] == ' ' }
  
  computer_choice = available_choice.sample

  computer_choice = computer_ai_choice(board) if !!computer_ai_choice(board) == true
  
  board[computer_choice] = 'X'
end

def computer_ai_choice(board)
  return 5 if board[5] == ' '

  result = nil
  WINNER_ARRAY.each do |array|
    if board.values_at(*array).count('X') == 2 &&
      board.values_at(*array).count(' ') == 1

      ai_choice = array.index { |i| board[i] == ' ' }
      result = array[ai_choice]
    elsif board.values_at(*array).count('O') == 2 &&
      board.values_at(*array).count(' ') == 1

      ai_choice = array.index { |i| board[i] == ' ' }
      result = array[ai_choice]
    end
  end

  result
end

def full?(board)
  available_choice = board.keys.select { |num| board[num] == ' ' }
  available_choice.empty?
end

def winner(board)
  WINNER_ARRAY.each do |array|
    if array.all? { |num| board[num] == 'X' }
      return 'computer'
    elsif array.all? { |num| board[num] == 'O' }
      return 'player'
    end
  end

  false
end

def play_again?
  prompt 'Do you want to play again?(yes or no)'

  loop do
    answer = gets.chomp.to_s.downcase

    if answer.start_with?('y')
      return true
    elsif answer.start_with?('n')
      return false
    else
      prompt "Sorry, please type 'yes' or 'no'."
    end
  end
end

loop do
  prompt 'Welcome'

  board = {}
  (1..9).each { |num| board[num] = ' ' }
  display(board)

  computer_score = 0
  player_score = 0

  loop do
    player_makes_choice_on(board)

    computer_makes_choice_on(board)

    display(board)

    break if full?(board) || !!winner(board)
  end

  case winner(board)
  when 'computer' then computer_score += 1
  when 'player' then player_score += 1
  end

  prompt "Player's score: #{player_score}  |  Computer's score: #{computer_score}"

  break unless play_again?
end

prompt 'Thank you'