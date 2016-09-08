SUITS = ['H', 'D', 'S', 'C']
VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

def prompt(msg)
  puts "=> #{msg}"
end  

def new_deck_shuffler
  cards = []
  VALUES.each do |value|
    SUITS.each do |suit|
      cards.push([suit, value])
    end
  end
  cards.shuffle
end
# main loop
loop do
  # configuration
  deck = new_deck_shuffler
  player_cards = []
  dealer_cards = []
  player_value = 0
  dealer_value = 0
  player_cards << deck.pop(2)
  dealer_cards << deck.pop(2)

  prompt "Do you want to play again?"
  again = gets.chomp.to_s
  break unless again.start_with?('y')
end
