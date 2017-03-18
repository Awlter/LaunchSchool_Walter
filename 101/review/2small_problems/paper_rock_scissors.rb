def prompt(message)
  puts "=> #{message}"
end

VALID_CHOICES = { r: 'rock', sc: 'scissors',
                  p: 'paper', l: 'lizard',
                  sp: 'spock' }


def first_win?(first, last)
  (first == 'rock' && last == 'scissors') ||
  (first == 'paper' && last == 'rock') ||
  (first == 'scissors' && last == 'paper')
end

def display_result(player_choice, computer_choice)
  if first_win?(player_choice, computer_choice)
    prompt("You won!")
  elsif first_win?(computer_choice, player_choice)
    prompt("Computer won!")
  else
    prompt("It's a tie.")
  end
end

loop do
  prompt('Welcome to our little game!')

  prompt("Choose from \"#{VALID_CHOICES.keys.join(', ')}\" short for #{VALID_CHOICES.values.join(', ')}")
  player_choice = nil
  loop do
    player_choice = gets.chomp

    break if VALID_CHOICES.keys.include?(player_choice.to_sym)
    prompt("You should choose from #{VALID_CHOICES.keys.join(', ')}")
  end

  computer_choice = VALID_CHOICES.sample
  prompt("Your choice is #{player_choice}; Computer choice is #{computer_choice}")

  display_result(player_choice, computer_choice)

  prompt("Do you want to play again?")
  play_again = gets.chomp
  break unless play_again.start_with?('y')
end