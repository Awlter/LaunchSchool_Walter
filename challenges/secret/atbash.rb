class Atbash
  FIRST_13 = ('a'..'m').to_a
  LAST_13 = ('n'..'z').to_a.reverse
  SPACE = ' '.freeze

  def self.encode(string)
    strings = string.downcase.scan(/[a-z0-9]/)

    result = []
    strings.each.with_index do |char, indx|
      result << convert(char)
      result << SPACE if ((indx + 1) % 5).zero?
    end

    result.join.strip
  end

  def self.convert(char)
    case char
    when ('a'..'m')
      indx = FIRST_13.index(char)
      LAST_13[indx]
    when ('n'..'z')
      indx = LAST_13.index(char)
      FIRST_13[indx]
    else
      char
    end
  end
end
