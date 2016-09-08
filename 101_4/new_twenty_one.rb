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
    break if answer.start_with?('s') || bust?(total(player_cards))
  end
  # display_results

  prompt "Do you want to play again?"
  again = gets.chomp.to_s
  break unless again.start_with?('y')
end
