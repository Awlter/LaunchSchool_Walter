# my version
# class Series
#   def initialize(digits)
#     @digits = digits
#   end

#   def consecutive_of_n(input: $stdin)
#     puts "Input a number:"
#     n = input.gets.chomp.to_i

#     result = (0..@digits.size - n).map do |indx|
#       @digits.slice(indx, n)
#     end
#   end
# end

class Series
  def initialize(number)
    @number = number.each_char.map(&:to_i)
  end

  def slices(n)
    raise ArgumentError, "Blow up" if n > @number.size
    @number.each_cons(n).to_a
  end
end