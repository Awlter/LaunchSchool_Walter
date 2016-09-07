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

player_card_1 = cards_dealer(deck)
player_card_2 = cards_dealer(deck)

computer_card_1 = cards_dealer(deck)
computer_card_2 = cards_dealer(deck)

prompt "Your first card is: #{player_card_1}."
prompt "Your second card is: #{player_card_2}."
prompt "One of the computer's card is #{computer_card_1}"






