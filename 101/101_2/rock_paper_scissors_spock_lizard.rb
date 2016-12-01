VALID_CHOICES = %w(rock paper scissors spock lizard)
USER_CHOICE_TRANSLATER = {
  'r' => 'rock',
  'p' => 'paper',
  'sc' => 'scissors',
  'sp' => 'spock',
  'l' => 'lizard'
}
WINNING_CONDITION = {
  'rock' => %w(scissors lizard),
  'paper' => %w(rock spock),
  'scissors' => %w(paper lizard),
  'spock' => %w(rock scissors),
  'lizard' => %w(paper spock)
}

def prompt(message)
  puts "=> #{message}"
end

def wins?(player, computer)
  WINNING_CONDITION[player].include?(computer)
end

def results(player, computer)
  if wins?(player, computer)
    :player
  elsif player == computer
    :no_body
  else
    :computer
  end
end

player_score = 0
computer_score = 0
loop do
  choice = ''
  loop do
    prompt <<-MSG
  Choose one: #{VALID_CHOICES.join(', ')}
    'r' for rock, 'p' for paper, 'sc' for scissors
    'sp' for spock, 'l' for lizard
    MSG
    user_choice = gets.chomp
    choice = USER_CHOICE_TRANSLATER[user_choice]

    if VALID_CHOICES.include?(choice)
      break
    else
      prompt "Please choose the first or the first two
      lettes of #{VALID_CHOICES.join(', ')}"
    end
  end

  computer_choice = VALID_CHOICES.sample

  prompt "The computer chooses #{computer_choice}"

  winner = results(choice, computer_choice)

  prompt "#{winner} won!"

  if winner == :player
    player_score += 1
  elsif winner == :computer
    computer_score += 1
  end
  prompt "Your score is #{player_score}."
  prompt "The computer's score is #{computer_score}."

  break if player_score == 5 || computer_score == 5
end

prompt "Thank you for playing, good bye!"
if player_score == 5
  prompt "You won!"
else
  prompt "The computer won!"
end
