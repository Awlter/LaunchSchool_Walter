require 'pry'
# my version
class Sieve
  def initialize(n)
    @limit = n
    @numbers = {}
    (2..n).each { |num| @numbers[num] = true }
  end

  def primes
    (2..@limit).each do |num|
      next unless @numbers[num]
      mark_all_mutiples(num)
    end

    @numbers.select { |_, value| value == true }.keys
  end

  def mark_all_mutiples(num)
    (num*2..@limit).step(num) do |indx|
      @numbers[indx] = false
    end
  end
end

# using an array
# class Sieve
#   def initialize(limit)
#     @limit = limit
#     @numbers = [*(2..limit)]
#   end

#   def primes
#     primes = []

#     loop do
#       number = @numbers.shift
#       @numbers.reject! { |num| num % number == 0 }
#       primes << number
#       break if @numbers.empty?
#     end

#     primes
#   end
# end

p Sieve.new(10).primes

