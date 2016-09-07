require 'pry'

USER_SQUARE = 'X'
COMPUTER_SQUARE = 'O'
EMPTY_SQUARE = ' '

WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] +
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] +
                [[1, 5, 9], [3, 5, 7]]

def prompt(msg)
  puts "=> #{msg}"
end

def display_board(mark)
  puts " "
  puts "     |     |     "
  puts "  #{mark[1]}  |  #{mark[2]}  |  #{mark[3]}  "
  puts "     |     |     "
  puts "-----+-----+-----"
  puts "     |     |     "
  puts "  #{mark[4]}  |  #{mark[5]}  |  #{mark[6]}  "
  puts "     |     |     "
  puts "-----+-----+-----+"
  puts "     |     |     "
  puts "  #{mark[7]}  |  #{mark[8]}  |  #{mark[9]}  "
  puts "     |     |     "
  puts " "
end

def board_initializer
  board = {}
  (1..9).each { |num| board[num] = EMPTY_SQUARE }
  board
end

def joiner(chc, connecter=', ', ender='or')
  chc[-1] = "#{ender} #{chc.last}" if chc.size > 1
  chc.size == 2 ? chc.join(' ') : chc.join(connecter)
end

def player_plays_piece(brd)
  square = ''
  loop do
    prompt "Choose a position to place a piece: #{joiner(choose_square(brd), ', ')}."
    square = gets.chomp.to_i
    break if choose_square(brd).include?(square)
    prompt "The place has been taken."
  end
  brd[square] = USER_SQUARE
end

def find_at_risk_square(num, brd)
  if brd.values_at(*num).count(USER_SQUARE) == 2
    brd.select { |k, v| num.include?(k) && v == EMPTY_SQUARE }.keys.first
  else
    nil
  end
end

def find_at_attack_square(num, brd)
  if brd.values_at(*num).count(COMPUTER_SQUARE) == 2
    brd.select { |k, v| num.include?(k) && v == EMPTY_SQUARE }.keys.first
  else
    nil
  end
end

def ai_square(brd)
  attack_square = ''
  WINNING_LINES.each do |num|
    attack_square = find_at_attack_square(num, brd)
    break if attack_square
  end

  risk_square = ''
  WINNING_LINES.each do |num|
    risk_square = find_at_risk_square(num, brd)
    break if risk_square
  end

  return attack_square if attack_square
  return risk_square if risk_square
  return 5 if brd[5] == EMPTY_SQUARE
  nil
end

def computer_plays_piece(brd)
  square = ai_square(brd)
  square = choose_square(brd).sample if !ai_square(brd)

  brd[square] = COMPUTER_SQUARE
end

def choose_square(brd)
  brd.keys.select { |num| brd[num] == EMPTY_SQUARE }
end

def detect_winner(brd)
  WINNING_LINES.each do |num|
    if brd.values_at(*num).count(USER_SQUARE) == 3
      return :user
    elsif brd[num[0]] == COMPUTER_SQUARE &&
          brd[num[1]] == COMPUTER_SQUARE &&
          brd[num[2]] == COMPUTER_SQUARE
      return :computer
    end
  end
  nil
end

def someone_win?(brd)
  !!detect_winner(brd)
end

def full?(brd)
  choose_square(brd).empty?
end

def display_result(brd)
  if detect_winner(brd) == :user
    prompt 'You won!'
  elsif detect_winner(brd) == :computer
    prompt 'Computer won!'
  else
    prompt "It's a tie!"
  end
end

def score_board(brd, usr_scr, comp_scr)
  if detect_winner(brd) == :user
    prompt "User: #{usr_scr.next!}! | Computer: #{comp_scr}!"
  elsif detect_winner(brd) == :computer
    prompt "User: #{usr_scr}! | Computer: #{comp_scr.next!}!"
  else
    prompt "User: #{usr_scr}! | Computer: #{comp_scr}!"
  end
end

def play_pieces(brd, choose)
  loop do
    if choose == 'player'
      player_plays_piece(brd)
      break if someone_win?(brd) || full?(brd)

      computer_plays_piece(brd)
      break if someone_win?(brd) || full?(brd)
      display_board(brd)
    elsif choose == 'computer'
      computer_plays_piece(brd)
      break if someone_win?(brd) || full?(brd)
      display_board(brd)

      player_plays_piece(brd)
      break if someone_win?(brd) || full?(brd)
    else
      prompt "Please choose a from 'player' or 'computer'"
      break
    end
  end
end

# main loop
loop do
  board = board_initializer

  user_score = '0'
  computer_score = '0'
  loop do
    display_board(board)
    prompt "Who play first? (player or computer)"
    choose = gets.chomp.to_s

    play_pieces(board, choose)

    display_result(board)
    score_board(board, user_score, computer_score)
    break if user_score == '3' || computer_score == '3'
    board = board_initializer
  end

  prompt "The winner is #{detect_winner(board)}"
  prompt "Do you want to play again?(y)"
  replay = gets.chomp.to_s
  break unless replay.start_with?('y')
end
