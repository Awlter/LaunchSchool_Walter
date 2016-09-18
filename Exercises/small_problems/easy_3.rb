# # 1
# numbers = []
# 6.times do |index|
#   puts "Enter the #{index+1}"

# # 2
# puts "==> Enter the first number:"
# number_1 = gets.chomp.to_i
# puts "==> Enter the second number::"
# number_2 = gets.chomp.to_i

# puts "#{number_1} + #{number_2} = "

# # 3
# puts "Please write word or multiple words: "

# word = gets.chomp.

# # 6
# def xor?(con_1, con_2)
#   con_1 || con_2
# end

# p xor?(5.even?, 4.even?) == true

# solution
# def xor?(value1, value2)
#   return true if (value1 && !value2) || (!value1 && value2)
#   return false if 

# # 7
# def oddities(array)
#   new_array = []
#   array.each_with_index do |element, index|
#     new_array << element if index.even?
#   end
#   new_array
# end

# p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
# p oddities(['abc', 'def']) == ['abc']

# # 8
# def palindrome?(string)
#   string == string.reverse
# end

# p palindrome?('madam') == true

# # 10
def palindromic_number?(number)
  number 