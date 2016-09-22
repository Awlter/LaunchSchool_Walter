require 'pry'
# # 1
# def interleave(array1, array2)
#   combination = []
#   array1.size.times do |index|
#     combination << array1[index] << array2[index]

#   end
#   combination
# end

# solution

# def interleave(array1, array2)
#   array1.zip(array2).flatten
# end

# p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

# # 2
# def letter_case_count(string)
#   hash = {lowercase: 0, uppercase: 0, neither: 0}
#   string.each_char do |c|
#     case c.ord
#     when (97..122) then hash[:lowercase] += 1
#     when (65..90) then hash[:uppercase] += 1
#     else hash[:neither] += 1
#     end
#   end
#   hash
# end

# solution

# def letter_case_count(string)
#   counts = {}
#   characters = string.chars
#   counts[:lowercase] = characters.count {|char| char =~ /[a-z]/}
#   counts[:uppercase] = characters.count {|char| char =~ /[A-Z]/}
#   counts[:neither] = characters.count {|char| char =~ /[^A-Za-z]/}
#   counts
# end
# p letter_case_count('abCdef 123')
# p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
# p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
# p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

# # 3
# def word_cap(string)
#   string.split.map(&:capitalize).join(' ')
# end

# def word_cap(string)
#   words = string.downcase.split
#   words.each do |word|
#     word[0] = (word[0].ord - 32).chr if word[0].ord > 90
#   end
#   words.join(' ')
# end
# p word_cap('four score and seven')
# p word_cap('the javaScript language')
# p word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

# # 4
# def swapcase(string)
#   words = string.split
#   result2 = words.map do |word|
#     result1 = word.chars.map do |char|
#       case char.ord
#       when (65..90) then (char.ord + 32).chr
#       when (97..122) then (char.ord - 32).chr
#       else char
#       end
#     end
#     result1.join
#   end
#   result2.join(' ')
# end

# solution

# def swapcase(string)
#   result = string.chars.map do |char|
#     if char =~ /[a-z]/
#       char.upcase
#     elsif char =~ /[A-Z]/
#       char.downcase
#     else
#       char
#     end
#   end
#   result.join
# end

# p swapcase('Tonight on XYZ-TV')

# # 5
# def staggered_case(string)
#   new_string = ''
#   string.chars.each_with_index do |char, index|
#     if index.even?
#       new_string << char.upcase
#     elsif index.odd?
#       new_string << char.downcase
#     else
#       new_string << char
#     end
#   end
#   new_string
# end

# solution

# def staggered_case(string, priority)
#   result = ''
#   need_upper = true
#   string.chars.each do |char|
#     if need_upper
#       result += char.upcase
#     end
#     need_upper = !need_upper
# p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
# p staggered_case('ALL_CAPS') == 'AlL_CaPs'
# p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# 6
# def staggered_case(string)
#   result = ''
#   need_upper = true
#   string.chars.each do |char|
#     if need_upper && char =~ /[a-zA-z]/
#       result += char.upcase
#       need_upper = !need_upper
#     elsif !need_upper && char =~ /[a-zA-z]/
#       result += char.downcase
#       need_upper = !need_upper
#     else
#       result += char
#     end
#   end
#   result
# end

# p staggered_case('I Love Launch School!')
# p staggered_case('ALL CAPS') == 'AlL cApS'
# p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'

# # 7
# def show_multiplicative_average(array)
#   result = (array.inject(:*).to_f / array.size).round(3)
#   puts format('%.3f', result)
# end



# show_multiplicative_average([3, 5])
# # The result is 7.500

# p show_multiplicative_average([2, 5, 7, 11, 13, 17])
# The result is 28361.667

# # 8
# def multiply_list(array1, array2)
#   result = []
#   array1.each_with_index do |num, index|
#     result << num * array2[index]
#   end
#   result
# end

# solution
# def multiply_list(array1, array2)
#   array1.zip(array2).map { |array| array.inject(:*) }
# end

# p multiply_list([3, 5, 7], [9, 10, 11])

# # 9
# def multiply_all_pairs(array1, array2)
#   array1.product(array2).map { |array| array.inject(:*) }.sort
# end

# p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]

# # 10
def penultimate(string)
  string.split.last(2).first
end

p penultimate('last word') == 'last'
p penultimate('Launch School is great!') == 'is'