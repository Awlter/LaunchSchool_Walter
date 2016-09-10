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
    sum -= 10 if sum > 21
  end

  sum
end 

def bust?(input_cards)
  total(input_cards) > 21
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

def display_result(player_cards, dealer_cards)
  winner = winner(player_cards, dealer_cards)
  case winner
    when :player_bust
      prompt "Player busted! Dealer won!"
    when :dealer_bust
      prompt "Dealer busted! Player won!"
    when dealer_total > player_total
      prompt "Dealer won!"
    when dealer_total < player_total
      prompt "Player won!"
    else
      prompt "It's a tie!"
  end
  puts "------------------------------"
  prompt "Player: #{total(player_cards)} v.s. Dealer: #{total(dealer_cards)}"
  puts "------------------------------"
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

  answer.start_with?('y')
end

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
    puts "------------------------------"
    prompt "Your cards are #{player_cards}."
    prompt "Dealer's card is #{dealer_cards.first} and [?]"
    prompt "Your cards' value is #{total(player_cards)}."
    puts "------------------------------"
    break if answer.start_with?('s') || bust?(player_cards)
  end

  prompt "Now it's dealer's turn..."
  sleep 1.5

  sequence = 1
  loop do
    if total(dealer_cards) < 17
      dealer_cards << deck.pop
      prompt "Cards added: #{sequence}."
      sequence += 1
    else
      break
    end
  end

  display_result(player_cards, dealer_cards)
  play_again? ? next : break
end
