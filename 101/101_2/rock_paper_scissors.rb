VALID_CHOICES = %w(rock paper scissors spock lizard)
USER_CHOICE_TRANSLATER = {
  'r' => 'rock',
  'p' => 'paper',
  'sc' => 'scissors',
  'sp' => 'spock',
  'l' => 'lizard'
}

def prompt(message)
  puts "=> #{message}"
end

def wins?(first, second)
  (first == 'rock' && (second == 'scissors' || second == 'lizard')) ||
    (first == 'paper' && (second == 'rock' || second == 'spock')) ||
    (first == 'scissors' && (second == 'paper' || second == 'lizard')) ||
    (first == 'spock' && (second == 'rock' || second == 'scissors')) ||
    (first == 'lizard' && (second == 'paper' || second == 'spock'))
end

def results(player, computer)
  if wins?(player, computer)
    "You won!"
  elsif player == computer
    "It's a tie"
  else
    "Computer won!"
  end
end

user_score = 0
computer_score = 0
loop do
  choice = ''
  loop do
    prompt "Choose one: #{VALID_CHOICES.join(', ')}
            with the first or first two letters"
    user_choice = gets.chomp
    choice = USER_CHOICE_TRANSLATER[user_choice]

    if VALID_CHOICES.include?(choice)
      break
    else
      prompt "Please choose from: #{VALID_CHOICES.join(', ')}"
    end
  end

  computer_choice = VALID_CHOICES.sample

  prompt "The computer chooses #{computer_choice}"

  winning_results = results(choice, computer_choice)

  prompt winning_results

  if winning_results == "You won!"
    user_score += 1
  elsif winning_results == "Computer won!"
    computer_score += 1
  end
  prompt "Your score is #{user_score}."
  prompt "The computer's score is #{computer_score}."

  break if user_score == 5 || computer_score == 5
end

prompt "Thank you for playing, good bye!"
if user_score == 5
  prompt "You won!"
else
  prompt "The computer won!"
end
