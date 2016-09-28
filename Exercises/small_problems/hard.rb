require 'pry'
# 1
# ADJECTIVES = %w(crazy loud contagious ugly)
# ADVERBS = %w(quitely joyfully carefully dumb)
# NOUNS = %w(fox dog head leg cat tail)
# VERBS = %w(spins bites licks hurdles)

# file = File.open('madlib.txt')
#   file.each do |line|
#     puts format(line,
#       { :adjective => ADJECTIVES.sample,
#         :noun      => NOUNS.sample,
#         :adverb    => ADVERBS.sample,
#         :verb      => VERBS.sample}
#       )
#   end

# 2
# def star(grid_size)
#   lines = grid_size / 2 - 1
#   lines.downto(0) do |distance|
#     puts "*#{' '*distance}*#{' '*distance}*".center(grid_size)
#   end
# end

# solution
# def puts_row(distance, grid_size)
#   spaces = ' ' * distance
#   stars = ['*'] * 3
#   line = stars.join(spaces).center(grid_size)
#   puts line
# end

# def star(grid_size)
#   lines = grid_size / 2 - 1
#   lines.downto(0) {|distance| puts_row(distance, grid_size)}
#   puts '*' * grid_size
#   0.upto(lines) {|distance| puts_row(distance, grid_size)}
# end

# star(9)

# 3
# matrix = [
#   [1, 5, 8],
#   [4, 7, 2],
#   [3, 9, 6]
# ]

# def transpose(matrix)
#   new_matrix = []
#   col = 0
#   while col < 3
#     new_matrix << matrix.map { |row| row[col] }
#     col += 1
#   end
#   new_matrix
# end

# solution

# def transpose(matrix)
#   new_matrix = []
#   (0..2).each do |col|
#     new_matrix << matrix.map { |row| row[col] }
#   end
#   new_matrix
# end

# def transpose(matrix)
#   new_matrix = []
#   (0..2).each do |col|
#     column = (0..2).map { |row| matrix[row][col]}
#     new_matrix << column
#   end
#   new_matrix
# end

# new_matrix = transpose(matrix)

# p new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
# p matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

# # 4
# def transpose(matrix)
#   new_matrix = []
#   m = matrix[0].size - 1
#   n = matrix.size - 1
#   (0..m).each do |col|
#     column = (0..n).map { |row| matrix[row][col]}
#     new_matrix << column
#   end
#   new_matrix
# end

# p transpose([[1, 2, 3, 4]]) == [[1], [2], [3], [4]]
# p transpose([[1], [2], [3], [4]]) == [[1, 2, 3, 4]]
# p transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]) ==
#   [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
# p transpose([[1]]) == [[1]]

# 5
# matrix1 = [
#   [1, 5, 8],
#   [4, 7, 2],
#   [3, 9, 6]
# ]

# matrix2 = [
#   [3, 7, 4, 2],
#   [5, 1, 0, 8]
# ]

# def rotate90(matrix)
#   # binding.pry
#   matrix = matrix.transpose
#   # binding.pry
#   matrix.each { |row| row.reverse! }
#   matrix
# end
# # binding.pry
# new_matrix1 = rotate90(matrix1)
# new_matrix2 = rotate90(matrix2)
# new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))

# p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
# p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
# p new_matrix3 == matrix2

# 6
# def permutations(array)
#   result = []
#   size = array.size

#   array.rotate!
#   result.sort
# end
# p permutations([1, 2, 3])

# # solution
# def permutations(array)
#   return [array] if array.size == 1

#   result = []
#   array.each_with_index do |element, index|
#     sub_array = array[0...index] + array[(index + 1)..-1]
#     sub_permutations = permutations(sub_array)
#     p sub_permutations
#     sub_permutations.each do |permutation|
#       result << [element] + permutation
#     end
#   end
#   result
# end

# p permutations([1, 2, 3])

# 7
# def my_method(array)
#   if array.empty?
#     []
#   elsif array.size > 1
#     array.map do |value|
#       value * value
#     end
#   else
#     [7 * array.first]
#   end
# end

# p my_method([])
# p my_method([3])
# p my_method([3, 4])
# p my_method([5, 6, 7])


# 8
# my version but it doesn't function well
# def merge(array1, array2)
#   result = []
#   zip_array = array1.zip(array2)
#   zip_array.each do |pair|
#     if pair.include?(nil)
#       result << pair.compact
#     else
#       result << [pair.min, pair.max]
#     end
#    end 
#   result.flatten
# end

# my version 2
# def merge(array1, array2)
#   result = []
#   combination = array1 + array2
#   1.upto(combination.max) do |count|
#     result << (array1 + array2).select { |number| count == number }
#   end
#   result.flatten    

# end

# solution 
# def merge(array1, array2)
#   result = []
#   index2 = 0

#   array1.each do |value|
#     while index2 < array2.length && array2[index2] <= value
#       result << array2[index2]
#       index2 += 1
#     end
#     result << value
#   end
#   result.concat(array2[index2..-1])
# end

# p merge([], [1, 4, 5])

# 9
# def merge_sort(array)
#   return array if array.size <= 1

#   sub_array_1 = array[0...array.size / 2]
#   sub_array_2 = array[array.size / 2..array.size]

#   sub_array_1 = merge_sort(sub_array_1)
#   sub_array_2 = merge_sort(sub_array_2)

#   merge(sub_array_1, sub_array_2)
# end

# p merge_sort([9, 5, 7, 1]) == [1, 5, 7, 9]
# p merge_sort([5, 3]) == [3, 5]
# p merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7]
# p merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
# p merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) == [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

# further exploration
# def merge_sort(array)
#   nested_array = array.map { |element| [element] }

#   while nested_array.size.divmod(2).inject(:+) > 1
#     register = []
#     (0..nested_array.size.divmod(2).inject(:+)).step(2) do |index1|
#       register << merge(nested_array[index1], nested_array[index1 + 1])
#     end
#     nested_array = register
#   end

#   result = merge(nested_array[0], nested_array[1])
#   return merge(result, [array[-1]]) if array.size.odd?

#   result
# end

# p merge_sort([9, 5, 7, 1])
# p merge_sort([5, 3]) == [3, 5]
# p merge_sort([6, 2, 7, 1, 4])
# p merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
# p merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46])

# 10
# def egyptian(r_number)
#   denominators = []
#   unit_dominator = 1

#   while r_number != Rational(1, unit_dominator)
#     if Rational(1, unit_dominator) < r_number
#       r_number -= Rational(1, unit_dominator)
#       denominators << unit_dominator
#       unit_dominator += 1
#     else
#       unit_dominator += 1
#     end
#   end

#   denominators << unit_dominator
#   denominators
# end

# p egyptian(Rational(2, 1))    # -> [1, 2, 3, 6]
# p egyptian(Rational(137, 60)) # -> [1, 2, 3, 4, 5]
# p egyptian(Rational(3, 1)) # -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

