require 'pry'

SUITS = ['H', 'D', 'S', 'C']
VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

GAME_RANGE = 21

def prompt(msg)
  puts "=> #{msg}"
end

# def change_game
#   prompt "Want to change the game into Thirty-one, Fourty-one, or..."
#   answer = ''
#   loop do
#     prompt "Please input integer,e.g. 31, 41, or 51"
#     answer = gets.chomp.to_i
#     if !!answer && [31, 41, 51].include?(answer)
#       GAME_RANGE = answer
#       break
#     end
#   end
# end

def initialize_deck
  cards = []
  VALUES.each do |value|
    SUITS.each do |suit|
      cards.push([suit, value])
    end
  end
  cards.shuffle
end

def hit_or_stay?
  answer = ''
  prompt "Hit or stay?"
  loop do
    answer = gets.chomp.to_s.downcase
    if answer.start_with?('h', 's')
      break
    else
      prompt "Sorry, please input 'hit' or 'stay'."
    end
  end
  answer
end

def total(input_cards)
  sum = 0
  input_cards.each do |card|
    if card.include?('A')
      sum += 11
    elsif card[1].to_i == 0
      sum += 10
    else
      sum += card[1].to_i
    end
  end

  input_cards.join.count('A').times do
    sum -= 10 if sum > GAME_RANGE
  end

  sum
end 

def bust?(input_cards)
  total(input_cards) > GAME_RANGE
end

def winner(player_cards, dealer_cards)
  player_total = total(player_cards)
  dealer_total = total(dealer_cards)

  if bust?(player_cards)
    :player_bust
  elsif bust?(dealer_cards)
    :dealer_bust
  elsif player_total > dealer_total
    :player
  elsif player_total < dealer_total
    :dealer
  end
end

def score(player_cards, dealer_cards, player_score, dealer_score)
  winner = winner(player_cards, dealer_cards)

  if [:player_bust, :dealer].include?(winner)
    dealer_score += 1
  elsif [:dealer_bust, :player].include?(winner)
    player_score += 1
  end

  return player_score, dealer_score
end

def display_result(player_cards, dealer_cards, player_score, dealer_score)
  winner = winner(player_cards, dealer_cards)
  
  case winner
    when :player_bust
      prompt "Player busted! Dealer won!"
    when :dealer_bust
      prompt "Dealer busted! Player won!"
    when :dealer
      prompt "Dealer won!"
    when :player
      prompt "Player won!"
    else
      prompt "It's a tie!"
  end
  
  puts "--------------------------------------------------"
  prompt "Player: #{total(player_cards)} | total: #{player_score} v.s. Dealer: #{total(dealer_cards)} | total: #{dealer_score}"
  puts "--------------------------------------------------"
end

def display_final_winner(player_score, dealer_score)
  if player_score > dealer_score
    prompt "The final winner is player"
  else
    prompt "The final winner is dealer"
  end
end

def play_again?
  prompt "Do you want to keep playing?('Yes'/'No')"
  answer = ''

  loop do
    answer = gets.chomp.to_s.downcase
    if answer.start_with?('y', 'n')
      break
    else
      prompt "Sorry, I don't understand. Please input 'yes' or 'no'"
    end
  end

  answer.start_with?('y')
end

# Main loop
loop do
prompt "Welcome"

system "clear"
player_score = 0
dealer_score = 0

  loop do
    # configuration
    deck = initialize_deck
    player_cards = []
    dealer_cards = []

    2.times do
      player_cards << deck.pop
      dealer_cards << deck.pop
    end

    prompt "Your cards are #{player_cards.first} and #{player_cards[1]}."
    prompt "Dealer's card is #{dealer_cards.first} and ?"

    loop do
      answer = hit_or_stay?

      player_cards << deck.pop if answer.start_with?('h')
      puts "--------------------------------------------------"
      prompt "Your cards are #{player_cards}."
      prompt "Dealer's card is #{dealer_cards.first} and [?]"
      prompt "Your cards' value is #{total(player_cards)}."
      puts "--------------------------------------------------"
      break if answer.start_with?('s') || bust?(player_cards)
    end

    prompt "Now it's dealer's turn..."
    sleep 1.5

    sequence = 1
    loop do
      if total(dealer_cards) < (GAME_RANGE - 4)
        dealer_cards << deck.pop
        prompt "Cards added: #{sequence}."
        sequence += 1
      else
        break
      end
    end
    
    player_score, dealer_score = score(player_cards, dealer_cards, player_score, dealer_score)
    display_result(player_cards, dealer_cards, player_score, dealer_score)
    break if player_score == 5 || dealer_score == 5
    break unless play_again?
  end

    display_final_winner(player_score, dealer_score)
    break unless play_again?
end

prompt "Thanks for playing"