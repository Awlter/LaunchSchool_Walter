require 'pry'

SUITS = ['H', 'D', 'S', 'C']
VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

def prompt(msg)
  puts "=> #{msg}"
end

def initialize_deck
  cards = []
  VALUES.each do |value|
    SUITS.each do |suit|
      cards.push([suit, value])
    end
  end
  cards.shuffle
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
    sum -= 10 if sum > 21
  end

  sum
end

def bust?(input_cards)
  total(input_cards) > 21
end

def display_result(player_cards, dealer_cards)
  if bust?(player_cards)
    prompt "Player busted, dealer won with #{total(dealer_cards)}."
  elsif bust?(dealer_cards)
    prompt "Dealer busted, player won with #{total(player_cards)}"
  elsif total(player_cards) < total(dealer_cards)
    prompt "Dealer won! Dealer: #{total(dealer_cards)}"
  elsif total(player_cards) > total(dealer_cards)
    prompt "Player won! Dealer: #{total(dealer_cards)}"
  else
    prompt "It's a tie! Dealer: #{total(dealer_cards)}"
  end
end

def play_again?
  prompt "Do you want to play again?('Yes'/'No')"
  answer = ''
  loop do
    answer = gets.chomp.to_s.downcase
    if answer.start_with?('y', 'n')
      break
    else
      prompt "Sorry, I don't understand. Please input 'yes' or 'no'"
    end
  end
  if answer.start_with?('y')
    true
  else
    false
  end
end

# main loop
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

    player_cards << deck.pop if answer.start_with?('h')
    prompt "Your cards are #{player_cards}."
    prompt "Dealer's card is #{dealer_cards.first} and [?]"
    prompt "Your cards' value is #{total(player_cards)}."
    break if answer.start_with?('s') || bust?(player_cards)
  end

  if bust?(player_cards)
    display_result(player_cards, dealer_cards)
    play_again? ? next : break
  else
    prompt "Now it's dealer's turn..."
  end

  loop do
    if bust?(dealer_cards)
      break
    elsif total(dealer_cards) < 17
      dealer_cards << deck.pop
      prompt "Dealer add a card."
    else
      break
    end
  end

  display_result(player_cards, dealer_cards)
  play_again? ? next : break
end
