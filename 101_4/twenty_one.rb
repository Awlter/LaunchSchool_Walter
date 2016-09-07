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
prompt player_card.join(', ')




