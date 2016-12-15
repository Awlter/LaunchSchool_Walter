# class Trinary
#   def initialize(trinary)
#     @trinary = trinary
#   end

#   def to_decimal
#     return 0 if @trinary.chars.any? { |digit| digit.match(/[^0-2]/) }

#     reversed_numbers = @trinary.chars.reverse.map(&:to_i)
#     reversed_numbers.each_with_index.map {|digit, e| digit.to_i * 3 ** e}.reduce(:+)
#   end
# end

class Trinary
  def initialize(trinary)
    @trinary = trinary
  end

  def to_decimal
    return 0 if @trinary.chars.any? { |digit| digit.match(/[^0-2]/) }
    @trinary.chars.reduce(0) { |sum, num| (sum + num.to_i) * 3} / 3
  end
end