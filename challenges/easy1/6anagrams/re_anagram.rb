# - input
#   - the target word when creating an instance
#   - an array of possible anagrams when calling an instance method
# - output
#   - an array of strings containing anagrams in the array
#   - an empty array if there are no matches
# - rules
#   - case insentive

class Anagram
  def initialize(original_word)
    @original_word = original_word
  end

  def match(words)
    words.select { |word| anagram?(@original_word, word)}
  end

  private

  def anagram?(word1, word2)
    letters1 = word1.downcase.chars
    letters2 = word2.downcase.chars

    same_letters?(letters1, letters2)
  end

  def same_letters?(letters1, letters2)
    return false if letters1 == letters2 || letters1.length != letters2.length
    letters1.each do |letter1|
      index = letters2.index(letter1)
      letters2.delete_at(index) if index
    end
    letters2.empty?
  end
end