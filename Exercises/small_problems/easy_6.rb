# # 2
# def remove_vowels(array)
#   array.map do |string|
#     string.delete('aeiouAEIOU')
#   end
# end

# p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
# p remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
# p remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# # 3
# def find_fibonacci_index_by_length(number_digits)
#   first = 1
#   second = 1
#   index = 2

#   loop do 
#     index += 1
#     sum = first + second
#     break if sum.to_s.size == number_digits

#     first = second
#     second = sum
#   end
#   index
# end

# my version
# def find_fibonacci_index_by_length(number_digits)
#   fibonacci = [1, 1]
#   loop do
#     break if fibonacci[-1].to_s.size == number_digits
#     fibonacci << fibonacci[-1] + fibonacci[-2]
#   end

# p find_fibonacci_index_by_length(2) == 7
# p find_fibonacci_index_by_length(10) == 45
# p find_fibonacci_index_by_length(100) == 476
# p find_fibonacci_index_by_length(1000) == 4782
# p find_fibonacci_index_by_length(10000) == 47847

# # 4
# def reverse!(list)
#   containor_array = []
#   loop do
#     containor_array << list.pop
#     break if list.empty?
#   end
#   loop do
#     list << containor_array.shift
#     break if containor_array.empty?
#   end
#   list
# end

# # 5

# def reverse(list)
#   count = -1
#   reversed_list = []
#   loop do
#     reversed_list << list[count]
#     count -= 1
#     break if -count == list.size
#   end
#   reversed_list
# end

# solution
# def reverse(list)
#   reversed_list = []
#   list.reverse_each { |element| reversed_list << element}
#   reversed_list
# end

# version 2
# def reverse(list)
#   list.each_with_object('') { |i, a| a.prepend(i.to_s) }
# end
# list = [1, 2, 3, 4]
# result = reverse(list) # => [4,3,2,1]
# p result
# p list.object_id != result.object_id

# # 6
# def merge(array1, array2)
#   array2.each {|element| array1 << element unless array1.include?(element)}
#   array1
# end

# p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]

# # 7
# def halvsies(array)
#   divide_index, plus = array.size.divmod(2)
#   array1 = array.first(divide_index + plus)
#   array2 = array.last(divide_index)
#   [array1, array2]
# end

# solution
# def halvsies(array)
#   first_half = array.slice(0, (array.size/2.0).ceil)
#   second_half = array.slice(first_half.size, array.size - first_half.size)
#   [first_half, second_half]
# end

# p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
# p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
# p halvsies([5]) == [[5], []]
# p halvsies([]) == [[], []]

# # 8
# def find_dup(array)
#   array.sort!
#   the_one =''
#   array.each do |element|
#     break if element == the_one
#     the_one = element
#   end
#   the_one
# end

# solution

# def find_dup(array)
#   array.find {|element| array.count(element) == 2}
# end

# p find_dup([1, 5, 3, 1]) == 1
# p find_dup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
#           38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
#           14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
#           78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
#           89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
#           41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
#           55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
#           85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
#           40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
#           7,  34, 57, 74, 45, 11, 88, 67,  5, 58]) == 73

# # 9
# def include?(array, element)
#   array.count(element) > 0
# end

# p include?([1,2,3,4,5], 3) == true
# p include?([1,2,3,4,5], 6) == false
# p include?([], 3) == false
# p include?([nil], nil) == true
# p include?([], nil) == false

# # 10
def triangle(line)
  (0..line).each do |ele|
    puts ' '*(line - ele) + '*'*ele
  end
end

triangle(9)