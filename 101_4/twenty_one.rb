require 'pry'

CARD = { 2 => 2, 3 => 3, 4 => 4, 5 => 5, 6 => 6,
         7 => 7, 8 => 8, 9 => 9, 10 => 10, 'Jack' => 10,
         'Queen' => 10, 'King' => 10, 'Ace' => 1}

def prompt(msg)
  puts "=> #{msg}"
end

#Initialize the deck
def deck_initializer
  deck = {}
  (2..10).each { |num| deck[num] = [num] * 4 }
  ['Jack', 'Queen', 'King'].each { |card| deck[card] = [10] * 4 }
  deck['Ace'] = [0] * 4
  deck
end

#Deal cards

def cards_dealer(dck)
  card_face = ''
  loop do
    card_face = dck.keys.sample
    card_value = dck[card_face].pop
    break if card_value
  end
  card_face
end

# Add value
def value_caculater(crd_fce)
  deck_initializer
  20
end  

loop do
  deck = deck_initializer

  player_card = []
  player_card.push(cards_dealer(deck))
  player_card.push(cards_dealer(deck))

  computer_card = []
  computer_card.push(cards_dealer(deck))
  computer_card.push(cards_dealer(deck))

  prompt "Player's cards are: #{player_card.join(', ')}."
  prompt "One of the computer's card is: #{computer_card.first}."

  loop do
    answer = ''
    loop do
      prompt "Hit or stay"
      answer = gets.chomp.to_s
      if answer == 'hit' 
        player_card.push(cards_dealer(deck))
        break
      elsif answer == 'stay'
        break
      else
        prompt "Please input 'hit' or 'stay'."
      end
    end
    prompt "Cards: #{player_card.join(', ')}"

    break if value_caculater(player_card) > 21

    loop do
      if value_caculater(player_card) < 17
        computer_card.push(cards_dealer(deck))
      else
        break
      end
    end

    break if answer == 'stay'

  end

  if value_caculater(player_card) > 21
    prompt "Computer won!"
  elsif value_caculater(computer_card) > 21
    prompt "Player won!"
  elsif value_caculater(player_card) > value_caculater(computer_card)
    prompt "Player won!"
  elsif value_caculater(player_card) < value_caculater(computer_card)
    prompt "Computer won!"
  else
    prompt "It's a tie!"
  end

  prompt "Do you want to play again?(y)"
  reply = gets.chomp.to_s
  break unless reply.start_with?('y')
end