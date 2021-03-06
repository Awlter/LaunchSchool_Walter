require 'pry'

CARD = { 2 => 2, 3 => 3, 4 => 4, 5 => 5, 6 => 6,
         7 => 7, 8 => 8, 9 => 9, 10 => 10, 'Jack' => 10,
         'Queen' => 10, 'King' => 10, 'Ace' => 1 }

def prompt(msg)
  puts "=> #{msg}"
end

def initialize_deck
  deck = {}
  (2..10).each { |num| deck[num] = [num] * 4 }
  ['Jack', 'Queen', 'King'].each { |card| deck[card] = [10] * 4 }
  deck['Ace'] = [1] * 4
  deck
end

def deal_cards(deck)
  card_face = ''
  loop do
    card_face = deck.keys.sample
    card_value = deck[card_face].pop
    break if card_value
  end
  card_face
end

def calculate_value(card_face)
  value = CARD.values_at(*card_face).inject(:+)
  value += 10 if card_face.include?('Ace') && value <= 11
  value
end

def bust?(player_total, computer_total)
  if player_total > 21 && computer_total > 21
    "Both sides have busted, it's a tie"
  elsif player_total > 21
    "Player busted. Computer won!"
  elsif computer_total > 21
    "Computer busted. Player won!"
  else
    nil
  end
end

def display_result(player_total, computer_total)
  if bust?(player_total, computer_total)
    prompt bust?(player_total, computer_total)
  elsif player_total < computer_total
    prompt "Computer won! Computer: #{computer_total}"
  elsif player_total > computer_total
    prompt "Player won! Computer: #{computer_total}"
  else
    prompt "It's a tie! Computer: #{computer_total}"
  end
end

loop do
  deck = initialize_deck

  player_card = []
  player_card.push(deal_cards(deck))
  player_card.push(deal_cards(deck))

  computer_card = []
  computer_card.push(deal_cards(deck))
  computer_card.push(deal_cards(deck))

  prompt "Player's cards are: #{player_card.join(', ')}."
  prompt "The dealer is showing #{computer_card.first}."

  player_total = calculate_value(player_card)
  computer_total = calculate_value(computer_card)
  loop do
    # player loop
    answer = ''
    loop do
      prompt "Player value is #{player_total}. Hit or stay?"
      answer = gets.chomp.to_s.downcase
      if answer == 'hit'
        player_card.push(deal_cards(deck))
        player_total = calculate_value(player_card)
        break
      elsif answer == 'stay'
        break
      else
        prompt "Please input 'hit' or 'stay'."
      end
    end
    prompt "Cards: #{player_card.join(', ')}"

    # computer loop
    loop do
      if computer_total < 17
        computer_card.push(deal_cards(deck))
        computer_total = calculate_value(computer_card)
      else
        break
      end
    end
    break if answer == 'stay' || player_total > 21
  end

  display_result(player_total, computer_total)

  prompt "Do you want to play again?(yes or no)"
  reply = ''
  loop do
    reply = gets.chomp.to_s.downcase
    if reply.start_with?('y', 'n')
      break
    else
      prompt "Please input 'yes' or 'no'"
    end
  end
  break if reply.start_with?('n')
end
