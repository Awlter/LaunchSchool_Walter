# my version
# class Sieve
#   def initialize(limit)
#     @limit = limit
#     @numbers = Hash.new
#     (2..limit).each { |num| @numbers[num] = false}
#   end

#   def primes
#     primes = []    

#     @numbers.each do |num, taken|
#       next if taken
#       if prime?(num)
#         primes << num
#         mark_all_mutiples(num)
#         next
#       end
#     end

#     primes
#   end

#   def mark_all_mutiples(num)
#     (num..@limit).each do |indx|
#       @numbers[indx] = true if indx % num == 0
#     end
#   end

#   def prime?(num)
#     (2...num).none? { |n| num % n == 0}
#   end
# end

# sieve = Sieve.new(100)

# p sieve.primes

#
# class Sieve
#   def initialize(limit)
#     @numbers = (2..limit).to_a
#   end

#   def primes
#     prime = []
#     until @numbers.empty?
#       next_num = @numbers.shift
#       prime << next_num
#       @numbers.reject! { |n| n % next_num == 0 }
#     end
#     prime
#   end
# end

# class FizzBuzz
#   def initialize(number)
#     @numbers = (1..number).to_a
#   end

#   def transform
#     @numbers.map do |num|
#       if num % 3 == 0 && num % 5 == 0
#         'FizzBuzz'
#       elsif num % 3 == 0
#         'Fizz'
#       elsif num % 5 == 0
#         'Buzz'
#       else
#         num
#       end
#     end
#   end
# end

# p FizzBuzz.new(20).transform

class FizzBuzz
  def initialize(number)
    @numbers_hash = Hash.new
    (1..number).each { |num| @numbers_hash[num] = num}
  end

  def transform
    @numbers.each do |num|
      next if ['FizzBuzz', 'Fizz', 'Buzz'].include



















