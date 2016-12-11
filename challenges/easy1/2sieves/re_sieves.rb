require 'pry'

class Sieve
  def initialize(limit)
    @limit = limit
    @numbers = {}
    (2..limit).each do |num|
      @numbers[num] = true
    end
  end

  def primes
    @numbers.each do |number, state|
      (number * 2..@limit).step(number) do |num|
        @numbers[num] = false
      end 
    end

    @numbers.select { |number, state| state }.keys
  end
end

# - all the primes from 2 up to a given number.

# - input
#  - given number
#  - integer

# - output
#  - primes from 2 to limit
#  - an array of integers

# - rules
#  - take the next available unmarked number in your list (it is prime)
#  - mark all the multiples of that number (they are not prime)