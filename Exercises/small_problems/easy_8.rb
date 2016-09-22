require 'pry'
# # 1
# def sum_of_sums(array)
#   sum = []
#   array.size.times do |index|
#     sum << array.first(index + 1).inject(:+)
#   end
#   sum.inject(:+)
# end

# solution
# def sum_of_sums(array)
#   sum = 0
#   1.upto(array.size) do |num|
#     sum += array.slice(0, num).inject(:+)
#   end
#   sum
# end

# p sum_of_sums([1, 5, 7, 3])

# # 2
# def madlibs
#   puts 'noun'
#   noun = gets.chomp
#   puts 'verb'
#   verb = gets.chomp
#   puts 'adjective'
#   adjective = get.chomp
#   puts 'adverb'
#   adverb = gets.chomp

#   puts "Do you #{verb} your #{adjective} #{noun} #{adverb}? That's halirous!"
# end

# # 3
def substrings_at_start(string)
  sub_array = []
  string.size.times do |index|
    sub_array << string[0..index]
  end
  sub_array
end

# p substrings_at_start('abc') == ['a', 'ab', 'abc']
# p substrings_at_start('a') == ['a']
# p substrings_at_start('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

# # 4
# def substrings(string)
#   sub_array = []
#   0.upto(string.size - 1) do |index1|
#     0.upto(string.size-index1 - 1) do |index2|
#       sub_array << string[index1..index1+index2]
#     end
#   end
#   sub_array
# end

# solution

def substrings(string)
  array = []
  string.size.times do |index|
    array << substrings_at_start(string[index..-1])
  end
  array.flatten
end
# p substrings('abcde')

# # 5
# def palindromes(string)
#   array = []
#   substrings(string).each do |str|
#     check_until = str.size / 2
#     check_index = 0
#     loop do
#       if check_index == check_until
#         array << str if str.size > 1
#         break
#       elsif str[check_index] == str[-1 - check_index]
#         check_index += 1
#         next
#       else
#         break
#       end
#     end
#   end
#   array
# end

# revised
# def palindromes(string)
#   results = []
#   substrings(string).each do |str|
#     results << str if str == str.reverse && str.size > 1
#   end
#   results
# end

# p palindromes('abcd') == []
# p palindromes('madam') == ['madam', 'ada']
# p palindromes('hello-madam-did-madam-goodbye') == [
#   'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
#   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
#   '-madam-', 'madam', 'ada', 'oo'
# ]
# p palindromes('knitting cassettes') == [
#   'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
# ]

# # 7
# def repeater(string)
#   result = ''
#   string.each_char {|c| result += c * 2}
#   result
# end

# p repeater('Hello')

# # 8
# def double_consonants(string)
#   result = ''
#   string.each_char do |c|
#     if c =~ /[^aeiouAEIOU]/ && c =~ /[a-zA-z]/
#       result << c << c
#     else
#       result << c
#     end
#   end
#   result
# end

# p double_consonants('String')
# p double_consonants("Hello-World!")
# p double_consonants("JUly 4th") == "JJUllyy 4tthh"
# p double_consonants('') == "" 

# # 9
# def reversed_number(number)
#   number.to_s.reverse.to_i
# end

# p reversed_number(12345) == 54321
# p reversed_number(12213) == 31221
# p reversed_number(456) == 654
# p reversed_number(12000) == 21 # Note that zeros get dropped!
# p reversed_number(1) == 1

# # 10
def center_of(string)
  length = string.length
  center = length / 2
  if length.odd?
    string[center]
  else
    string[center-1..center]
  end
end

p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'



