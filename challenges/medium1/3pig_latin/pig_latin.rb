class PigLatin
  def self.translate(word)
    if word.start_with?('a', 'e', 'i', 'o', 'u')
      word << 'ay'
    else
      indx = word.index(/[aeiou]/)
      result = word[indx..-1] + word[0..indx-1] + 'ay'
    end
  end
end