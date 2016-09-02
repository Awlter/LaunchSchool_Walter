# question 1
# 10.times { |number| puts ' ' * number + "The Flintstones Rock!"}

# question 2
# statement = "The Flintstones Rock"

# hash = {}

# all_characters = statement.scan(/./)
# characters = all_characters.uniq

# characters.each { |c| hash[c] = all_characters.count(c)}

# p hash

# solution
# statement = "The Flintstones Rock"
# result = {}
# letters = ('A'..'Z').to_a + ('a'..'z').to_a
# letters.each do |letter|
#   letter_frequency = statement.scan(letter).count
#   result[letter] = letter_frequency if letter_frequency > 0
# end
# p result

# question 3
# puts "the value of 40 + 2 is " + "#{40 + 2}"

# question 4
# numbers = [1, 2, 3, 4]
# numbers.each do |number|
#   p number
#   numbers.pop(1)
# end

# question 5
# def factors(number)
#   number_array = (1..number).to_a
#   if number_array.empty?
#     "Please input positive numbers"
#   else
#     number_array.keep_if { |num| number % num == 0}
#   end
# end

# solution
def factors(number)
  dividend = number
  divisors = []
  while dividend > 0 do
    divisors << dividend if number % dividend == 0
    dividend -= 1
  end
  divisors
end
p factors(15)