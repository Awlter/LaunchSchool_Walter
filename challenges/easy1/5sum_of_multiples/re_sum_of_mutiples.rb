class SumOfMultiples
  attr_accessor :base_numbers

  def initialize(*base_numbers)
    @base_numbers = base_numbers
  end

  def self.to(limit_number)
    (1...limit_number).select { |num| num % 3 == 0 || num % 5 == 0}.reduce(:+)
  end

  def to(limit_number)
    (1...limit_number).select do |num|
      base_numbers.any? { |base_number| num % base_number == 0}
    end.reduce(:+)
  end
end


# - input 
#   - integer
#   - two kinds of numbers
#     - base numbers for multiples (default: 3 and 5)
#     - limit number

# - output
#   - integer
#   - sum of the multiples of the base numbers

# - rule
#   - if any multiples from base numbers are the same, avoid duplication
#   - the sum does not include the limit number


