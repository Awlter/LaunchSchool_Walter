class Phrase
  def initialize(sentence)
    @sentence = sentence
  end

  def word_count
    hash = Hash.new(0)

    @sentence.scan(/\b[\w']+\b/).each do |word|
      hash[word.downcase] += 1
    end

    hash
  end

end