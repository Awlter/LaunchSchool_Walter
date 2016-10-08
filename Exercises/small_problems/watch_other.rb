def display_comparation_result(guessed_number, random_number)
  if guessed_number > random_number
    puts "Your number is too hight."
  elsif guessed_number < random_number
    puts "Your number is too low."
  end
end

# Main
random_number = (1..100).to_a.sample

count_guesses = 0
guessed_number = 0
puts "Please guess a number from 1 to 100."

until guessed_number == random_number
  guessed_number = gets.chomp.to_i
  display_comparation_result(guessed_number, random_number)
  
  count_guesses += 1
end

puts "Bingo! You have guessed #{count_guesses} times."