# require 'pry'
# # 1
# def repeat(word, num)
#   num.times do
#     puts word
#   end
# end

# repeat('hello', 3)

# # 2
# def is_odd?(number)
#   number % 2 == 1
# end

# puts is_odd?(7.0)

# # 3
# def digit_list(number)
#   digit = []
#   number.to_s.split('').each do |string_num|
#     digit.push(string_num.to_i)
#   end
#   digit
# end

# # solution
# def digit_list(number)
#   number.to_s.chars.map(&:to_i)
# end
# p digit_list(12345)

# # 4
# vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck']

# def count_occurrences(vehicles)
#   hash = {}
#   category = vehicles.uniq
#   category.each do |vehicle|
#     hash[vehicle] = vehicles.count(vehicle)
#   end
#   p hash
# end

# count_occurrences(vehicles)

# 5
# def reverse_sentence(string)
#   string.split.reverse.join(' ')
# end

# p reverse_sentence('Reverse these words')

# 6
# def reverse_words(string)
#   new_array = []

#   string.split.each do |word|
#     word.reverse!
#     new_array << word
#   end

#   new_array.join(' ')
# end

# puts reverse_words('Professional')  
# puts reverse_words('Walk around the block')

# 7
# def stringy(number)
#   string = ''
#   if number % 2 == 0
#     (number/2).times do
#       string << '10'
#     end
#   else
#     (number/2).times do
#       string << '10'
#     end
#     string << '1'
#   end
#   string
# end

# puts stringy(6) == '101010'
# puts stringy(9) == '101010101'
# puts stringy(4) == '1010'

# solution

# def stringy(size)
#   numbers = []

#   size.times do |index|
#     number = index.even? ? 1 : 0
#     numbers << number
#   end

#   numbers.join
# end

# puts stringy(6)
# puts stringy(9) == '101010101'
# puts stringy(4) == '1010'

# 8
# def average(array)
#   array.inject(:+) / array.size
# end

# puts average([1, 5, 87, 45, 8, 8]) == 25

# solution
# def average(numbers)
#   sum = numbers.reduce { |sum, number| sum + number}
#   sum / numbers.count
# end

# 9
# def sum(numbers)
#   numbers.to_s.chars.map(&:to_i).inject(:+)
# end

# puts sum(235)

# 10
# def calculate_bonus(salary, bonus)
#   bonus ? salary / 2 : 0
# end

# puts calculate_bonus(2800, true) == 1400
# puts calculate_bonus(1000, false) == 0
# puts calculate_bonus(50000, true) == 25000
