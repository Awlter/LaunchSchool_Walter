# my version
# class Series
#   def initialize(digits)
#     @digits = digits.chars.map(&:to_i)
#   end

#   def slices(n)
#     raise ArgumentError, "Blow up" if n > @digits.size
#     result = (0..@digits.size - n).map do |indx|
#       @digits.slice(indx, n)
#     end
#   end
# end

# others' version

# class Series
#   def initialize(number)
#     @number = number.chars.map(&:to_i)
#   end

#   def slices(n)
#     raise ArgumentError, "Blow up" if n > @number.size
#     @number.each_cons(n).to_a
#   end
# end
