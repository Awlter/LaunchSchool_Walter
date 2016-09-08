SUITS = ['H', 'D', 'S', 'C']
VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

def new_deck_shuffler
  cards = []
  VALUES.each do |value|
    SUITS.each do |suit|
      cards.push([suit, value])
    end
  end
  cards.shuffle
end

deck = new_deck_shuffler

player_cards = []
player_cards << deck.pop
player_cards << deck.pop

p player_cards