class Scrabble
  SCRABBLE_SCORE = {
    1 => %w(A E I O U L N R S T),
    2 => %w(D G),
    3 => %w(B C M P),
    4 => %w(F H V W Y),
    5 => %w(K),
    8 => %w(J X),
    10 => %w(Q Z)
  }

  def initialize(word)
    @word = word
  end

  def self.score(word)
    self.new(word).score
  end

  def score
    sum = 0
    return sum if @word.nil?

    @word.upcase.scan(/\w/).each do |char|
      SCRABBLE_SCORE.each do |score, chars|
        sum += score if chars.include? char
      end
    end

    sum
  end

end
