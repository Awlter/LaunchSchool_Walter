require 'pry'
# my version 1
# class Trinary
#   attr_reader :trinary

#   def initialize(number)
#     @trinary = number.chars
#   end

#   def to_decimal 
#     return 0 if trinary.any? { |num| num =~ /[^0-2]/}

#     @trinary
#     .reverse_each
#     .with_index
#     .map { |digit, index| digit.to_i * 3 ** index }
#     .inject(:+)
#     .to_i
#   end
# end

# my version 2
# class Trinary
#   def initialize(number)
#     @number = number
#   end

#   def to_decimal
#     result = 0
#     return result if @number =~ /\D|[^0-2]/

#     @number.chars.reverse_each.with_index do |digit, indx|
#       result += digit.to_i * (3 ** indx)
#     end

#     result
#   end
# end























