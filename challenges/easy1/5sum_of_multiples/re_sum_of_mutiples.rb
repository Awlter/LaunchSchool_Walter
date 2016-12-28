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

class Sum
  attr_accessor :base_numbers
  def initialize(*base_numbers=3)
    @base_numbers = base_numbers
  end

  def self.to(number)
    p @base_numbers
  end

end
p Sum.new(4).base_numbers

