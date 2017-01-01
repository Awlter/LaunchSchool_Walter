class SumOfMultiples
  def initialize(*base_numbers)
    @base_numbers = base_numbers
  end

  def self.to(limit_number)
    SumOfMultiples.new(3, 5).to(limit_number)
  end

  def to(limit_number)
    (0...limit_number).select do |num|
      @base_numbers.any? { |base_number| num % base_number == 0}
    end.reduce(:+)
  end
end

# version 1
# class SumOfMultiples
#   attr_reader :numbers

#   def initialize(*numbers)
#     @numbers = numbers
#   end

#   def to(number)
#     self.class.to(number, numbers)
#   end

#   def self.to(number, numbers = [3, 5])
#     (0...number).select { |num| numbers.any? { |n| num % n == 0}}
#     .inject(:+)
#   end
# end

# my version
# class SumOfMultiples
#   def self.to(max)
#     self.new(3, 5).to(max)
#   end

#   def initialize(*arg)
#     @bases = arg
#   end

#   def to(max)
#     return 0 if @bases.first > max
#     result = []

#     @bases.each do |base|
#       (base...max).step(base) do |multiple|
#         result << multiple unless result.include? multiple
#       end
#     end

#     result.reduce(:+)
#   end
# end
