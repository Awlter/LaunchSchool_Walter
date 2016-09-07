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
  random_key = dck.keys.sample
  dck[random_key].pop
end

deck = deck_initializer
p cards_dealer(deck)
p deck
