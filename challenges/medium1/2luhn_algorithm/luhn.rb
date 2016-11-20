require 'pry'

class Luhn
  def initialize(number)
    @number = number
  end

  def addends
    digits = @number.to_s.chars.map(&:to_i)

    result = digits.reverse.map.with_index do |digit, i|
      if i.odd?
        digit *= 2
        digit -= 9 if digit >= 10
      end
      digit
    end

    result.reverse
  end

  def checksum
    addends.reduce(:+)
  end

  def valid?
    checksum % 10 == 0
  end

  def self.create(number)
    numbers = number.to_s.chars
      ('0'..'9').each do |digit|
        digits = (numbers + [digit]).join.to_i
        return digits if new(digits).valid?
      end
  end
end