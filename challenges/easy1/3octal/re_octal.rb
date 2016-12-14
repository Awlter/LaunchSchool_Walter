# - input
#   - octal, string
#   - valid: 0-7
#     - if invalid return 0

# - output
#   - decimal

# - reverse the string
# - reversed_string.chars.each_with_index do |digit, e|
#     result += digit.to_i * 8 ** e
#   end
# - return result

class Octal
  def initialize(octal)
    @octal = octal
  end

  def to_decimal
    return 0 if @octal.chars.any? { |digit| digit.ord > 55 || digit.ord < 48 }

    result = 0
    @octal.chars.reverse.each_with_index do |digit, e|
      result += digit.to_i * 8 ** e
    end

    result
  end
end