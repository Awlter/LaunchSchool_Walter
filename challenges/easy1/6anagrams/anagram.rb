class Anagram
  def initialize(word)
    @charactors = word.downcase.chars
  end

  # def match(words)
  #   words.each_with_object([]) do |word, result|
  #     charactors = word.downcase.chars
  #     next if charactors == @charactors || charactors.sort != @charactors.sort
  #     result << word
  #   end
  # end

#   def match(words)
#     words.select do |word|
#       charactors = word.downcase.chars
#       charactors != @charactors && charactors.sort == @charactors.sort
#     end
#   end
# end

# 'allergy'

# detector.match %w( gallery ballerina regally clergy largely leading)
#     assert_equal %w(gallery largely regally), anagrams.sort