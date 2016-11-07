# my version 1
# class Octal
#   def initialize(number)
#     @numbers = number.chars
#   end

#   def octal_to_decimal
#     return 0 unless valid?
#     decimal = 0
#     @numbers.reverse_each.with_index do |value, indx|
#       decimal += value.to_i * 8 ** indx
#     end
#     p decimal
#   end

#   def valid?
#     @number.map(&:to_i).all? { |num| (1..7).cover? num }
#   end
# end

# my version 2
class Octal
  def initialize(number)
    @number = number
  end

  def to_decimal
    result = 0
    return result if @number =~ /\D|[^0-7]/

    @number.chars.reverse_each.with_index do |num, indx|
      result += num.to_i * 8 ** indx
    end

    result
  end
end

# class Octal
#   BASE = 8
#   INVALID_OCTAL = /\D|[8-9]/

#   attr_reader :octal_string

#   def initialize(octal_string)
#     @octal_string = octal_string
#   end

#   def to_decimal
#     INVALID_OCTAL =~ octal_string ? 0 : calculate
#   end

#   private

#   def calculate
#     decimal = 0
#     octal_string.reverse.each_char.with_index do |char, index|
#       decimal += char.to_i * (BASE ** index)
#     end
#     decimal
#   end

# end























