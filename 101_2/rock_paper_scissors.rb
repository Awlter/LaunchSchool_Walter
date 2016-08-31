VALID_CHOICES = %w(rock paper scissors)

def test_method
  prompt "test method"
end

def prompt(message)
  puts "=> #{message}"
end

def wins?(first, second)
  (first == 'rock' && second == 'scissors') ||
    (first == 'paper' && second == 'rock') ||
    (first == 'scissors' && second == 'paper')
end

def display_results(player, computer)
  if wins?(player, computer)
    prompt "You won!"
  elsif player == computer
    prompt "It's a tie"
  else
    prompt "Computer won!"
  end
end

loop do
  choice = ''
  loop do
    prompt "Choose one: #{VALID_CHOICES.join(', ')}"
    choice = gets.chomp

    if VALID_CHOICES.include?(choice)
      break
    else
      prompt "Please choose from: #{VALID_CHOICES.join(', ')}"
    end
  end

  computer_choice = VALID_CHOICES.sample
  prompt "The computer chooses #{computer_choice}"

  display_results(choice, computer_choice)

  prompt "Do you want to play again?"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt "Thank you for playing, good bye!"
