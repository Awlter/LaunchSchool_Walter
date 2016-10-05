require 'pry'
# # 
# def digit_list(integer)
#   integer.to_s.split('').map(&:to_i)
# end

# puts digit_list(12345) == [1, 2, 3, 4, 5]
# puts digit_list(7) == [7]
# puts digit_list(375290) == [3, 7, 5, 2, 9, 0]
# puts digit_list(444) == [4, 4, 4]

# def count_occurrences(vehicles)
#   vehicles_info = Hash.new(0)
#   vehicles.each do |classes|
#     vehicles_info[classes] += 1
#   end
#   p vehicles_info
# end

# vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck']

# count_occurrences(vehicles)


# def reverse_sentence(string)
#   string.split.reverse.join(' ')
# end

# puts reverse_sentence('') == ''
# puts reverse_sentence('Hello World') == 'World Hello'
# puts reverse_sentence('Reverse these words') == 'words these Reverse'


# def reverse_words(string)
#   reverse_array = string.split.map do |char|
#     char.reverse! if char.size >= 5
#     char
#   end

#   p string
#   reverse_array.join(' ')
# end

# puts reverse_words('Professional')          # => lanoisseforP
# puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
# puts reverse_words('Launch School')  


# def stringy(integer, default=1)
#   result = (1..integer).map do |int|
#     if int.odd?
#       default == 1 ? '1' : '0'
#     else
#       default == 1 ? '0' : '1' 
#     end
#   end

#   result.join()
# end

# p stringy(6)
# puts stringy(9, 0) == '010101010'
# puts stringy(4) == '1010'
# puts stringy(7) == '1010101'


# def average(array)
#   array.inject(:+) / array.length
# end

# puts average([1, 5, 87, 45, 8, 8]) == 25
# puts average([9, 47, 23, 95, 16, 52]) == 40


# def sum(integer)
#   integer.to_s.split('').map(&:to_i).reduce(:+)
# end

# puts sum(23) == 5
# puts sum(496) == 19
# puts sum(123_456_789) == 45


# def calculate_bonus(integer, boolean)
#   boolean ? integer / 2 : 0
# end

# puts calculate_bonus(2800, true) == 1400
# puts calculate_bonus(1000, false) == 0
# puts calculate_bonus(50000, true) == 25000


# def show_teddy_age
#   age = (20..200).to_a.sample
#   puts "Teddy is #{age} years old!"
# end

# show_teddy_age

# #
# def calculate_room_area
#   puts "Enter the length of the room in meters:"
#   length = gets.chomp.to_i
#   puts "Enter the width of the room in meters:" 
#   width = gets.chomp.to_i

#   area_meters = (length * width).to_f
#   area_feet = area_meters * 10.7639

#   puts "The area of the room is #{area_meters} square meters (#{area_feet} square feet)."
# end

# calculate_room_area


# def calculate_tip
#   puts "What is the bill"
#   bill = gets.chomp.to_f
#   puts "What is the tip percentage"
#   tip_percentage = gets.chomp.to_f

#   tip = format("%.2f", (bill * tip_percentage / 100))
#   puts "The tip is $#{tip}"
#   puts "The tota is $#{tip}"
# end

# calculate_tip
# def calculate_retirement_year
#   puts "What is your age?"
#   age = gets.chomp.to_i
#   puts "At what age would you like to retire?"
#   retirement_age = gets.chomp.to_i

#   year_to_go = retirement_age - age
#   year = Time.now.year
#   puts "It's #{year}. You wiil retire in #{year + year_to_go}"
# end

# calculate_retirement_year


# def greeting(user)
#   greetings = "Hi, #{user}"
#   greetings = "Hi, #{user.chop}, why are we screeming?".upcase if user.chars.include?('!')

#   puts greetings
# end

# greeting('Bob!')


# (1..99).each do |num|
#   puts num if num.odd?
# end


# value = 2
# while value <= 99
#   puts value
#   value += 2
# end


# def prompt(msg)
#   puts ">> #{msg}"
# end

# prompt "Please enter an integer greater than 0:"
# integer = gets.chomp.to_i

# prompt "Enter 's' to compute the sum, 'p' to compute the product."
# operator = gets.chomp.to_s

# if operator == 's'
#   sum = (1..integer).inject(:+)
#   puts "THe sum of the integers between 1 and #{integer} is #{sum}."
# elsif operator == 'p'
#   mul = 1.upto(integer).to_a.map(&:to_i).inject(:*)
#   puts "The product of the integers between 1 and #{integer} is #{mul}."
# end


# array = []
# prompt "Enter the 1st number:"
# array << gets.chomp.to_i

# prompt "Enter the 2st number:"
# array << gets.chomp.to_i

# prompt "Enter the 3rd number:"
# array << gets.chomp.to_i

# prompt "Enter the last number:"
# last = gets.chomp.to_i

# if array.include?(last)
#   puts "The number #{last} appears in #{array}."
# else
#   puts "The number #{last} does not appear in #{array}"
# end


# prompt "Please write word or multiple words:"

# user_input = gets.chomp.to_s

# characters_number = user_input.count('^ ')

# p characters_number


# def oddities(array)
#   result = []
#   array.each_with_index do |num, indx|
#     result << num if indx.even?
#   end
#   result
# end

# p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
# p oddities(['abc', 'def']) == ['abc']
# p oddities([123]) == [123]
# p oddities([]) == []

# def oddities(array, index = 0)
#   odd_elements = []
  
#   while index < array.size
#     odd_elements << array[index]
#     index += 2
#   end
#   odd_elements
# end

# p oddities([2, 3, 4, 5, 6], 1)
# p oddities(['abc', 'def']) == ['abc']
# p oddities([123]) == [123]
# p oddities([]) == []


# def palindrome?(string)
#   string.reverse == string
# end

# p palindrome?('madam') == true
# p palindrome?('Madam') == false          # (case matters)
# p palindrome?("madam i'm adam") == false # (all characters matter)
# p palindrome?('356653') == true


# def real_palindrome?(string)
#   string = string.downcase
#   string.delete!('^a-z')
#   string.reverse == string
# end

# p real_palindrome?('madam') == true
# p real_palindrome?('Madam') == true           # (case does not matter)
# p real_palindrome?("Madam, I'm Adam") == true # (only alphanumerics matter)
# p real_palindrome?('356653') == true
# p real_palindrome?('356a653') == true
# p real_palindrome?('123ab321') == false


# def palindromic_number?(integer)
#   integer.to_s.chars.reverse.join.to_i == integer
# end

# p palindromic_number?(34543) == true
# p palindromic_number?(123210) == false
# p palindromic_number?(22) == true
# p palindromic_number?(5) == true


# def short_long_short(string_1, string_2)
#   array_of_two_string = [string_1, string_2]

#   array_of_two_string.sort_by! { |array| array.size }

#   array_of_two_string[0] + array_of_two_string[1] + array_of_two_string[0]
# end

# def short_long_short(string_1, string_2)
#   array = [string_1, string_2]
#   array.sort_by!(&:size)
#   array << array[0]
#   array.join
# end

# p short_long_short('abc', 'defgh')
# p short_long_short('abcde', 'fgh')
# p short_long_short('', 'xyz') == "xyz"


# def suffix(century)
#   return 'th' if ['11', '12', '13'].include?(century[-2..-1])
#   case century[-1]
#   when '1' then 'st'
#   when '2' then 'nd'
#   when '3' then 'rd'
#   else 'th'
#   end
# end

# def century(year)
#   century, remainder = year.divmod(100)
#   century += 1 if remainder > 0
#   century = century.to_s
#   century + suffix(century)
# end


# p century(2000) == '20th'
# p century(2001) == '21st'
# p century(1965) == '20th'
# p century(256) == '3rd'
# p century(5) == '1st'
# p century(10103) == '102nd'
# p century(1052) == '11th'
# p century(1127) == '12th'
# p century(11201) == '113th'


# def leap_year?(year)
#   if year >= 1752
#     (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)
#   else
#     year % 4 == 0
#   end
# end  

# p leap_year?(2016) == true
# p leap_year?(2015) == false
# p leap_year?(2100) == false
# p leap_year?(2400) == true
# p leap_year?(240000) == true
# p leap_year?(240001) == false
# p leap_year?(2000) == true
# p leap_year?(1900) == false
# p leap_year?(1752) == true
# p leap_year?(1700) == true
# p leap_year?(1) == false
# p leap_year?(100) == true
# p leap_year?(400) == true


# def multisum(integer)
#   result = []
#   1.upto(integer) do |num|
#     result << num if num % 3 == 0 || num % 5 == 0
#   end
#   result.inject(:+)
# end

# p multisum(3) == 3
# p multisum(5) == 8
# p multisum(10) == 33
# p multisum(1000) == 234168


# def running_total(array)
#   result = []
#   1.upto(array.size) do |indx|
#     result << array.first(indx).reduce(:+)
#   end
#   result
# end

# def running_total(array)
#   sum = 0
#   array.map { |num| sum += num }
# end

# p running_total([2, 5, 13]) == [2, 7, 20]
# p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
# p running_total([3]) == [3]
# p running_total([]) == []

# DIGITS = {'1' => 1, '2' => 2, '3' => 3, '4' => 4, '5' => 5,
#           '6' => 6, '7' => 7, '8' => 8, '9' => 9, '0' => 0}

# def string_to_integer(string)
#   result_array = string.chars.map { |c| DIGITS[c] }

#   result = 0
#   result_array.reverse!.each_with_index do |num, indx|
#     result += num * (10 ** indx)
#   end

#   result
# end

# p string_to_integer('4321') == 4321
# p string_to_integer('570') == 570

# def string_to_signed_integer(string)
#   if string.chars.include?('-')
#     string_to_integer(string.delete('^0-9'))
#   else
#     string_to_integer(string.delete('^0-9'))
#   end
# end

# p string_to_signed_integer('4321') == 4321
# p string_to_signed_integer('-570') == -570
# p string_to_signed_integer('+100') == 100



# DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

# def integer_to_string(integer)
#   result = ''

#   loop do 
#     integer, digit = integer.divmod(10)
#     result.prepend(DIGITS[digit])

#     break if integer == 0
#   end

#   result
# end

# def signed_integer_to_string(integer)
#   prepender = ''
#   case integer <=> 0
#   when -1 then prepender = '-'
#   when 1 then prepender = '+'
#   end

#   prepender + integer_to_string(integer.abs)
# end


# p signed_integer_to_string(4321) == '+4321'
# p signed_integer_to_string(-123) == '-123'
# p signed_integer_to_string(0) == '0'


# def ascii_value(string)
#   string.chars.map(&:ord).inject(:+)
# end

# p ascii_value('Four score') == 984
# ascii_value('Launch School') == 1251
# ascii_value('a') == 97
# ascii_value('') == 0


# def time_of_day(integer)
#   hour_pre, minute = integer.divmod(60)
#   hour = hour_pre % 24
#   format("%02d:%02d", hour, minute)
# end

# p time_of_day(0)
# p time_of_day(-3)
# p time_of_day(35) == "00:35"
# p time_of_day(-1437) == "00:03"
# p time_of_day(3000) == "02:00"
# p time_of_day(800) == "13:20"
# p time_of_day(-4231) == "01:29"


# def after_midnight(time)
#   time = time.split(':').map(&:to_i)

#   (time[0] * 60 + time[1]) % 1440
# end

# def before_midnight(time)
#   time = time.split(':').map(&:to_i)

#   (1440 - (time[0] * 60 + time[1])) % 1440
# end

# p after_midnight('00:00') == 0
# p before_midnight('00:00')
# p after_midnight('12:34') == 754
# p before_midnight('12:34') == 686
# p after_midnight('24:00') == 0
# p before_midnight('24:00') == 0


# def swap(string)
#   result = []
#   string.split.each do |word|
#     word[0], word[-1] = word[-1], word[0]
#     result << word
#   end

#   result.join(' ')
# end

# p swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
# p swap('Abcde') == 'ebcdA'
# p swap('a') == 'a'


# def cleanup(string)
#   string.gsub(/[^a-zA-Z]/, ' ').squeeze(' ')
# end
# UPCASE_ORD = ('A'.ord..'Z'.ord)
# DOWNCASE_ORD = ('a'.ord..'z'.ord)

# def cleanup(string)
#   result = ''

#   string.chars.each do |char|
#     case char.ord
#     when DOWNCASE_ORD then result += char
#     when UPCASE_ORD then result += char
#     else result += ' '
#     end
#   end

#   result.squeeze(' ')
# end


# p cleanup("---what's my +*& line?") == ' what s my line '


# def word_sizes(string)
#   result = Hash.new(0)

#   string.split.each do |word|
#     word = word.delete('^a-zA-Z')
#     result[word.size] += 1
#   end

#   result
# end

# p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2 }
# p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3 }
# p word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
# p word_sizes('') == {}


# WORD_OF_NUMBER = %w(zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen)

# def alphabetic_number_sort(number)
#   number.sort_by { |num| WORD_OF_NUMBER[num] }
# end

# def alphabetic_number_sort(number)
#   result = []
#   WORD_OF_NUMBER.sort.each do |word|
#     result << WORD_OF_NUMBER.index(word)
#   end
#   result
# end

# ENGLISH_NUMBERS = ["eight", "eighteen", "eleven", "fifteen", "five", "four", "fourteen", "nine", "nineteen", "one", "seven", "seventeen", "six", "sixteen", "ten", "thirteen", "three", "twelve", "two", "zero"]
# def alphabetic_number_sort(numbers)
#   numbers.sort do |a, b|
#     binding.pry
#     ENGLISH_NUMBERS[a] <=> ENGLISH_NUMBERS[b]
#   end
# end

# p alphabetic_number_sort((0..19).to_a) == [
#   8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
#   6, 16, 10, 13, 3, 12, 2, 0]


# def crunch(string)
#   crunch_string = ''

#   (0...string.size).each do |num|
#     if string[num] != crunch_string[-1]
#       crunch_string << string[num]
#     end
#   end

#   crunch_string
# end

# p crunch('ddaaiillyy ddoouubbllee')
# p crunch('4444abcabccba') == '4abcabcba'
# p crunch('ggggggggggggggg') == 'g'
# p crunch('a') == 'a'
# p crunch('') == ''


# def print_in_box(string)
#   length = string.size
#   puts "+-#{'-'*length}-+"
#   puts "| #{' '*length} |"
#   puts "| #{string} |"
#   puts "| #{' '*length} |"
#   puts "+-#{'-'*length}-+"
# end

# print_in_box('To boldly go where no one has gone before.')
# print_in_box('')


# DEGREE = "\xC2\xB0"

# def dms(float)
#   total_seconds = (3600 * float).round
#   degree, remainder = total_seconds.divmod(3600)
#   minutes, seconds = remainder.divmod(60)
#   format(%(%d#{DEGREE}%02d'%02d"), degree, minutes, seconds)
# end

# puts dms(30)
# p dms(76.73) == %(76°43'48")
# dms(254.6) == %(254°36'00")
# dms(93.034773) == %(93°02'05")
# dms(0) == %(0°00'00")
# dms(360) == %(360°00'00") || dms(360) == %(0°00'00")


# def remove_vowels(array)
#   array.map { |chars| chars.scan(/[^aeiou]/i).join }
# end

# p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
# p remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
# p remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']


# def find_fibonacci_index_by_length(integer)
#   fibonacci = [1, 1]
#   sum = 0
#   i = 2

#   while sum.to_s.length < integer
#     sum = fibonacci[0] + fibonacci[1]
#     fibonacci[0], fibonacci[1] = fibonacci[1], sum

#     i += 1
#   end

#   i
# end

# def fibonacci_digits(integer)


# end


# p find_fibonacci_index_by_length(2)
# p find_fibonacci_index_by_length(10)
# p find_fibonacci_index_by_length(100)
# p find_fibonacci_index_by_length(1000) == 4782
# p find_fibonacci_index_by_length(10000) == 47847

# def reverse!(list)
#   count = list.size / 2

#   (0...count).each do |num|
#     list[num], list[-num - 1] = list[-num - 1], list[num]
#   end

#   list
# end

# list = [1,2,3,4]
# result = reverse!(list) # => [4,3,2,1]
# p list == [4, 3, 2, 1]
# p list.object_id == result.object_id

# list = %w(a b c d e)
# reverse!(list) # => ["e", "d", "c", "b", "a"]
# p list == ["e", "d", "c", "b", "a"]

# list = ['abc']
# reverse!(list) # => ["abc"]
# p list == ["abc"]

# list = []
# reverse!([]) # => []
# p list == []


# def reverse(list)
#   list.inject do |result, element|
#     [element].concat([result]).flatten
#   end
# end
# def reverse(arr)
#   arr.reduce([]) { |result, el| binding.pry ; result.unshift el }
# end

# p reverse([1,2,3,4])       # => true
# reverse(%w(a b c d e)) == %w(e d c b a)  # => true
# reverse(['abc']) == ['abc']              # => true
# reverse([]) == []                        # => true

# list = [1, 2, 3]                      # => [1, 2, 3]
# new_list = reverse(list)              # => [3, 2, 1]
# p list.object_id != new_list.object_id  # => true
# p list == [1, 2, 3]                     # => true
# p new_list == [3, 2, 1]   


# a = %w{ cat sheep bear }.inject do |memo, word|
#   binding.pry
#    memo.length > word.length ? memo : word
# end

# p a

# def merge(array_1, array_2)
#   array_2.each do |element|
#     array_1 << element unless array_1.include?(element)
#   end
#   array_1
# end

# p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]

# def halvsies(array)
#   half_length = array.length
#   return [array, []] if half_length == 1

#   second_half = array.slice!(-(half_length / 2), half_length)
#   [array, second_half]
# end

# def halvsies(arr)
#   half = (arr.length / 2.0).round
#   [arr.take(half), arr.drop(half)]
# end

# def halvsies(array)
#   first_half = array.slice(0, (array.size / 2.0).ceil)
#   second_half = array.slice(first_half.size, array.size - first_half.size)
#   [first_half, second_half]
# end

# p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
# p halvsies([1, 5, 2, 4, 3])
# p halvsies([5]) == [[5], []]
# p halvsies([]) == [[], []]

# def find_dup(array)
#   array.each_with_index do |num, indx|
#     return num if array.drop(indx + 1).include?(num)
#   end
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
#           7,  34, 57, 74, 45, 11, 88, 67,  5, 58])

# def include?(array, number)
#   !!array.find_index(number)
# end

# def include?(array, number)
#   array.one? { |element| element == number }
# end

# p include?([1,2,3,4,5], 3) == true
# p include?([1,2,3,4,5], 6) == false
# p include?([], 3) == false
# p include?([nil], nil) == true
# p include?([], nil) == false


# def triangle(lines)
#   space = lines
#   while space >= 0
#     puts ' ' * space + '*' * (lines - space)
#     space -= 1
#   end
# end

# def triangle(lines)
#   0.upto(lines).each do |starts|
#     puts ' ' * (lines - starts) + '*' * starts
#   end
# end 

# def triangle(lines)
#   0.upto(lines).each { |stars| puts ('*' * stars).rjust(lines) }
# end

# triangle(9)


# def interleave(array_1, array_2)
#   array_1.zip(array_2).flatten
# end

# def interleave(array_1, array_2)
#   i = 0
#   result = []

#   array_1.each do |element|
#     result << element << array_2[i]
#     i += 1
#   end

#   result
# end

# p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']


# def letter_case_count(string)
#   # result = Hash.new
#   result = { lowercase: 0, uppercase: 0, neither: 0 }
#   # result = { 'lowercase' = 0, 'uppercase' = 0, 'neither' = 0 }
#   string.each_char do |char|
#     if char =~ /[a-z]/
#       result[:lowercase] += 1
#     elsif char =~ /[A-Z]/
#       result[:uppercase] += 1
#     else 
#       result[:neither] += 1
#     end
#   end

#   # result[:lowercase] = string.scan(/[a-z]/).count
#   # result[:uppercase] = string.scan(/[A-Z]/).count
#   # result[:neither] = string.scan(/[^a-zA-Z]/).count
#   result
# end

# p letter_case_count('abCdef 123')
# p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
# p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
# p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }


# def word_cap(string)
#   string.split.map(&:capitalize).join(' ')
# end

# p word_cap('the javaScript language') == 'The Javascript Language'
# p word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

# def word_cap(string)
#   string.split.map { |word| word[0].upcase + word[1..-1].downcase}.join(' ')
# end

# p word_cap('four score and seven')


# def swapcase(string)
#   result = ''

#   string.each_char do |char|
#     if char =~ /[a-z]/
#       result << char.upcase
#     elsif char =~ /[A-Z]/
#       result << char.downcase
#     else
#       result << char
#     end
#   end

#   result
# end

# p swapcase('CamelCase') == 'cAMELcASE'
# p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'


# def staggered_case(string)
#   result= ''

#   string.chars.each_with_index do |char, indx|
#     char.upcase! if indx.even?
#     char.downcase! if indx.odd?
#     result << char
#   end

#   result
# end

# def staggered_case(string)
#   result = ''
#   puts 'Start with uppercase or downcase?(up, or down)'
#   answer = gets.chomp.to_s
#   if answer == 'up'
#     need_up = true
#   else
#     need_up = false
#   end

#   string.chars.each do |word|
#     if need_up
#       result += word.upcase
#     else
#       result += word.downcase
#     end
#     need_up = !need_up
#   end

#   result
# end
      
# p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
# p staggered_case('ALL_CAPS') == 'AlL_CaPs'
# p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# def staggered_case(string)
#   result = ''
#   need_up = true

#   string.split.each do |word|
#     word.each_char do |char|
#       if need_up
#         result += char.upcase
#       else
#         result += char.downcase
#       end
#       need_up = !need_up
#     end
#     result += ' '
#   end

#   result.chop
# end

# def staggered_case(string)
#   result = ''
#   need_up = true

#   string.chars.each do |char|
#     if char =~ /[a-zA-Z]/
#       if need_up
#         result += char.upcase
#       else
#         result += char.downcase
#       end
#       need_up = !need_up
#     else
#       result += char
#     end
#   end

#   result
# end

# def staggered_case(string)
#   result = ''
#   count = 0

#   string.chars.each do |char|
#     if count.even?
#       char =~ /[a-zA-Z]/ ? (result += char.upcase; count += 1) : result += char
#     else
#       char =~ /[a-zA-Z]/ ? (result += char.downcase; count += 1) : result += char
#     end
#   end

#   result
# end

# def staggered_case(string)
#   result = ''
#   need_up = true

#   string.chars.each do |char|
#     if char =~ /[a-z]/i
#       result += (need_up ? char.upcase : char.downcase)
#       need_up = !need_up
#     else
#       result += char
#     end
#   end
#   result
# end
# p staggered_case('I Love Launch School!')
# p staggered_case('ALL CAPS') == 'AlL cApS'
# p staggered_case('ignore 77 the 444 numbers')

# def show_multiplicative_average(array)
#   average = array.map(&:to_f).inject(:*) / array.size
#   format(%(%.3f), average)
# end

# p show_multiplicative_average([3, 5])
# # The result is 7.500

# p show_multiplicative_average([2, 5, 7, 11, 13, 17])
# # The result is 28361.667


# def multiply_list(array_1, array_2)
#   array_1.zip(array_2).map { |element| element.inject(:*) }
# end

# p multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]


# def multiply_all_pairs(arr_1, arr_2)
#   arr_1.product(arr_2).map { |arr| arr.inject(:*) }.sort
# end

# def multiply_all_pairs(arr_1, arr_2)
#   result = []

#   arr_1.each do |arr|
#     i = 0
#     while i < arr_2.size
#     result << arr * arr_2[i]
#       i += 1
#     end
#   end

#   result.sort
# end

# p multiply_all_pairs([2, 4], [4, 3, 1, 2])


# def penultimate(string)
#   return string if string.split.size < 2
#   string.split[-2]
# end

# p penultimate('last')
# p penultimate('last word') == 'last'
# p penultimate('Launch School is great!') == 'is'


# def sum_of_sums(arr)
#   result = []

#   1.upto(arr.size) do |indx|
#     result << arr.first(indx).inject(:+)
#   end

#   result.inject(:+)
# end

# p sum_of_sums([3, 5, 2])
# sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
# sum_of_sums([4]) == 4
# sum_of_sums([1, 2, 3, 4, 5]) == 35


# puts "Enter a noun:"
# noun = gets.chomp.to_s
# puts "Enter a verb:"
# verb = gets.chomp.to_s
# puts "Enter an adjective:"
# adjective = gets.chomp.to_s
# puts "Enter an adverb:"
# adverb = gets.chomp.to_s

# puts "Do you #{verb} your #{adjective} #{noun} #{adverb}? That's haliarious!"


# def substrings_at_start(string)
#   string_arr = string.chars
#   result = []

#   string_arr.each_index do |indx|
#     result << string_arr[0..indx].join
#   end

#   result
# end

# p substrings_at_start('abc') == ['a', 'ab', 'abc']
# p substrings_at_start('a') == ['a']
# p substrings_at_start('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']


# def substrings(string)
#   result = []

#   string.length.times do |start|
#     start.upto(string.length - 1) do |last|
#       result << string[start..last]
#     end
#   end

#   result
# end

# p substrings('abcde') == [
#   'a', 'ab', 'abc', 'abcd', 'abcde', 
#   'b', 'bc', 'bcd', 'bcde',
#   'c', 'cd', 'cde',
#   'd', 'de',
#   'e'
# ]
# def palindromes(string)
#   substrings(string).select do |str|
#     str == str.reverse && str.length > 1
#   end
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


# def fizzbuzz(starting, ending)
#   (starting..ending).each do |num|
#     if num % 5 == 0 && num % 3 == 0
#       puts 'FizzBuzz'
#     elsif num % 5 == 0
#       puts 'Buzz'
#     elsif num % 3 == 0
#       puts 'Fizz'
#     else
#       puts num
#     end
#   end
# end

# fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz


# def repeater(string)
#   result = ''

#   string.each_char { |char| result << char * 2 }

#   result
# end

# p repeater('Hello') == "HHeelllloo"
# p repeater("Good job!") == "GGoooodd  jjoobb!!"
# p repeater('') == ''


# def double_consonants(string)
#   result = ''

#   string.each_char do |char|
#     result << char if char =~ /[a-z&&[^aeiuo]]/i 
#     result << char
#   end

#   result
# end

# p double_consonants('String')
# p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
# p double_consonants("July 4th") == "JJullyy 4tthh"
# p double_consonants('') == ""


# def reversed_number(number)
#   number.to_s.chars.reverse.join.to_i
# end

# p reversed_number(12345) == 54321
# p reversed_number(12213) == 31221
# p reversed_number(456) == 654
# p reversed_number(12000) == 21 # Note that zeros get dropped!
# p reversed_number(1) == 1


# def center_of(string)
#   center_index, odd = string.length.divmod(2)

#   odd == 1 ? string[center_index] : string[center_index-1, 2]
# end

# def center_of(string)
#   middle = string.length / 2
#   string.length.odd? ? string[middle] : string[middle - 1, 2]
# end

# p center_of('I love ruby')
# p center_of('Launch School') == ' '
# p center_of('Launch') == 'un'
# p center_of('Launchschool') == 'hs'
# p center_of('x') == 'x'

#
# def twice(number)
#   number_string = number.to_s
#   length = number_string.length
#   middle = length / 2
  
#   return number if number_string[0...middle] == number_string[middle..-1]
#   number * 2
# end

# p twice(37) == 74
# p twice(44) == 44
# p twice(334433) == 668866
# p twice(444) == 888
# p twice(107) == 214
# p twice(103103) == 103103
# p twice(3333) == 3333
# p twice(7676) == 7676
# p twice(123_456_789_123_456_789)
# p twice(5) == 10

# def negative(integer)
#   -integer.abs
# end

# p negative(5) == -5
# p negative(-3) == -3
# p negative(0) == 0   
#
# def sequence(max)
#   (1..max).each_with_object([]) { |int, result| result << int }
# end

# def sequence(number)
#   number > 0 ? (1..number).to_a : (number..-1).to_a
# end

# p sequence(5) == [1, 2, 3, 4, 5]
# p sequence(3) == [1, 2, 3]
# p sequence(1) == [1]
# p sequence(-6)
#
# def uppercase?(string)
#   string.delete('^a-zA-Z').each_char.all? { |char| char =~ /[A-Z]/ }
# end

# def uppercase?(string)
#   string.scan(/[a-z]/i).all? { |char| char =~ /[A-Z]/ }
# end

# p uppercase?('t') == false
# p uppercase?('T') == true
# p uppercase?('Four Score') == false
# p uppercase?('FOUR SCORE') == true
# p uppercase?('4SCORE!') == true
# p uppercase?('') == true

#
# def word_lengths(string)
#   string.split.each_with_object([]) do |str, result|
#     result << "#{str} #{str.length}"
#   end
# end

# p word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

# p word_lengths("baseball hot dogs and apple pie") ==
#   ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

# p word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

# p word_lengths("Supercalifragilisticexpialidocious") ==
#   ["Supercalifragilisticexpialidocious 34"]

# p word_lengths("") == []


#
# def swap_name(name)
#   name.split.reverse.join(', ')
# end

# p swap_name('Joe Roberts') == 'Roberts, Joe'

#
# def sequence(length, number)
#   sum = 0
#   (1..length).map { sum += number } 
# end

# p sequence(5, 1) == [1, 2, 3, 4, 5]
# p sequence(4, -7) == [-7, -14, -21, -28]
# p sequence(3, 0) == [0, 0, 0]
# p sequence(0, 1000000) == []

#
# def get_grade(a, b, c)
#   average = (a + b + c) / 3

#   case average
#   when (90..100) then "A"
#   when (80...90) then "B"
#   when (70...80) then "C"
#   when (60...70) then "D"
#   end
# end
    
# p get_grade(95, 90, 93) == "A"
# p get_grade(50, 50, 95) == "D"

#
# def buy_fruit(array)
#   array.each_with_object([]) do |list, result|
#     quantity = list[1]
#     fruit = list[0]
#     quantity.times { result << fruit }
#   end
# end

# p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]])

#
# def rotate_array(array)
#   array[1..-1] + [array[0]]
# end

# p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
# p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
# p rotate_array(['a']) == ['a']

# x = [1, 2, 3, 4]
# p rotate_array(x) == [2, 3, 4, 1]   # => true
# p x == [1, 2, 3, 4] 

#
# def rotate_rightmost_digits(number, n)
  # (number.to_s[0...-n] + rotate_array(number.to_s[-n..-1])).to_i
  # or 
  # number_string = number.to_s
  # number_string[-n..-1] = rotate_array(number.to_s[-n..-1])
  # number_string.to_i
# end

# p rotate_rightmost_digits(735_291, 1)
# p rotate_rightmost_digits(735_291, 2) == 735_219
# p rotate_rightmost_digits(735_291, 3) == 735_912
# p rotate_rightmost_digits(735_291, 4) == 732_915  
# p rotate_rightmost_digits(735_291, 5) == 752_913
# p rotate_rightmost_digits(735_291, 6) == 352_917

#
# def max_rotation(number)
#   number.to_s.length.downto(1) do |n|
#     number = rotate_rightmost_digits(number, n)
#   end
#   number
# end

# def max_rotation(number)
#   string = number.to_s
#   string.size.times do |n|
#     string[n..-1] = string[n+1..-1] + string[n]
#   end
#   string.to_i
# end

# p max_rotation(735291) == 321579
# p max_rotation(3) == 3
# p max_rotation(35) == 53
# p max_rotation(105) == 15 # the leading zero gets dropped
# p max_rotation(8_703_529_146) == 7_321_609_845

#
# lights = Hash.new
# 1.upto(1000) { |i| lights[i] = 'off' }

# 1.upto(1000) do |n|
#   (n..1000).step(n) { |i| lights[i] == 'on' ? lights[i] = 'off' : lights[i] = 'on' }
# end

# p lights.values.count('on')
# p lights.keys.select { |key| lights[key] == 'on' }

# 
# def diamond(size)
#   puts '*'.center(size)
#   (3...size).step(2) { |n| puts ('*' + ' ' * (n - 2) + '*').center(size) }

#   (-size..-3).step(2) { |n| puts ('*' + ' ' * (-n - 2) + '*').center(size) }
#   puts '*'.center(size)  
# end

# diamond(9)///

# def minilang(commands)
#   register = 0
#   stack = []
#   commands.split.each do |command|
#     case command
#     when 'PUSH' then stack.push(register)
#     when 'ADD' then register += stack.pop
#     when 'SUB' then register -= stack.pop
#     when 'MULT' then register *= stack.pop
#     when 'DIV' then register /= stack.pop
#     when 'MOD' then register %= stack.pop
#     when 'POP' then register = stack.pop
#     when 'PRINT' then p register
#     else register = command.to_i
#     end
#   end
# end

#
# DIGIT_ARRAY = %w(zero one two three four five six seven eight nine)

# def word_to_digit(string)
#   result = ''

#   string.split(/\b/).each do |word|
#     index = DIGIT_ARRAY.index(word).to_s
#     result << (index.empty? ? word : index)
#   end

#   result
# end

# def word_to_digit(words)
#   DIGIT_ARRAY.each do |word|
#     words.gsub!(/\b#{word}\b/, DIGIT_ARRAY.index(word).to_s)
#   end
#   words
# end

# p word_to_digit('Please call me at five five five one two three four. Thanks.')
# def fibonacci(number)
#   return 1 if number <= 2

#   fibonacci(number - 1) + fibonacci(number - 2)
# end

# p fibonacci(1) == 1
# p fibonacci(2) == 1
# p fibonacci(3) == 2
# p fibonacci(4) == 3
# p fibonacci(5) == 5
# p fibonacci(12) == 144
# p fibonacci(20) == 6765

# def fibonacci(nth)
#   sum = 0
#   n = 1
#   array = [1, 1]
#   while n < nth
#     sum = array.inject(:+)
#     array[0], array[1] = array[1], sum
#     n += 1
#   end

#   array[0]
# end

# def fibonacci(nth)
#   array = [0, 1]

#   nth.times do
#     array[0], array[1] = array[1], array.inject(:+)
#   end

#   array[0]
# end

# def fibonacci(nth)
#   first, last = [0, 1]

#   nth.times do
#     first, last = last, first + last
#   end

#   first
# end

# def fibonacci_last(nth)
#   fibonacci(nth).to_s[-1]
# end

# p fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
# p fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
# p fibonacci_last(100)       # -> 5 (the 100th Fibonacci number is 354224848179261915075)
# p fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
# p fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
# p fibonacci_last(123456789)

#
# text = File.read('simple_file.txt')
# sentences = text.split(/\.|\?|\!/)
# largest_sentence = sentences.max_by { |sentence| sentence.split.size }
# largest_sentence = largest_sentence.strip
# number_of_words = largest_sentence.split.size

# puts "#{largest_sentence}"
# puts "Containing #{number_of_words} words"

#
# BLOCK = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'],
#          ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']]

# def block_word?(word)
#   BLOCK.none? { |block| word.upcase.include?(block[0]) && word.upcase.include?(block[1])}
# end

# BLOCKS = %w(BO XK DQ CP NA GT RE FS JW HU VI LY ZM).freeze

# def block_word?(word)
#   word = word.upcase
#   BLOCKS.none? { |block| word.include?(block[0]) && word.include?(block[-1])}
# end

# p block_word?('BATCH')
# p block_word?('BUTCH')
# p block_word?('jest')

#
# def letter_percentages(string)
#   count = {}
#   length = string.length

#   count[:lowercase] = string.count('a-z').to_f / length * 100
#   count[:uppercase] = string.count('A-Z').to_f / length * 100
#   count[:neither] = string.count('^a-zA-Z').to_f / length * 100

#   count
# end

# p letter_percentages('abCdef 123') == { lowercase: 50, uppercase: 10, neither: 40 }
# p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25 }
# p letter_percentages('123') == { lowercase: 0, uppercase: 0, neither: 100 }

#
# def balanced?(string)
#   alarmer = 0
#   string.scan(/\(|\)/).each do |parenth|
#     parenth == '(' ? alarmer += 1 : alarmer -= 1
#     return false if alarmer < 0
#   end
#   alarmer == 0 ? true : false
# end

# def balanced?(string)
#   alarmer = 0
#   string.scan(/\(|\)|\[|\]/).each do |single|
#     case 
#     when '({['.include?(single) then alarmer += 1
#     when ')}]'.include?(single) then alarmer -= 1
#     end
#     break if alarmer < 0
#   end

#   alarmer
# end

# p balanced?('What (is) this?')
# p balanced?('What [is) this?')
# p balanced?('What (is this?')
# p balanced?('((What) (is this))?')
# p balanced?('((What)) (is this))?') == false
# p balanced?('Hey!') == true
# p balanced?(')Hey!(') == false
# p balanced?('What ((is))) up(') == false

#
# def triangle(s1, s2, s3)
#   s = [s1, s2, s3].sort!

#   case
#   when s[0] + s[1] <= s[2]          then :invalid
#   when s[0] == s[2]                 then :equilateral
#   when s[0] == s[1] || s[1] == s[2] then :isosceles
#   else                                   :scalene  
#   end
# end

# p triangle(3, 3, 3) == :equilateral
# p triangle(3, 3, 1.5) == :isosceles
# p triangle(3, 4, 5) == :scalene
# p triangle(0, 3, 3) == :invalid
# p triangle(3, 1, 1) == :invalid

#
# def triangle(angle1, angle2, angle3)
#   angle = [angle1, angle2, angle3].sort!

#   if angle.include?(0) || angle.inject(:+) != 180
#     :invalid
#   elsif angle[2] < 90
#     :acute
#   elsif angle[2] == 90
#     :right
#   else
#     :obtuse
#   end
# end

# p triangle(60, 70, 50) == :acute
# p triangle(30, 90, 60) == :right
# p triangle(120, 50, 10)
# p triangle(0, 90, 90) == :invalid
# p triangle(50, 50, 50) == :invalid

#
# def friday_13th?(year)
#   sum = 0
#   1.upto(12) { |month| sum +=1 if Time.local(year, month, 13).friday? }
#   sum
# end

# def friday_13th
# p friday_13th?(2015) == 3
# p friday_13th?(1986) == 1

#
# def featured(integer)
#   sevens = (integer / 7 + 1) * 7
#   sevens += 7 if sevens.even?

#   until unique_digits?(sevens)
#     sevens += 14
#   end

#   sevens
# end

# def unique_digits?(sevens)
#   sevens = sevens.to_s
#   sevens.chars.none? { |char| sevens.count(char) > 1 }
# end

# p featured(12)
# p featured(20) == 21
# p featured(21)
# p featured(997) == 1029
# p featured(1029) == 1043
# p featured(999_999) == 1_023_547
# p featured(999_999_987) == 1_023_456_987

#
# def bubble_sort!(array)
#   (array.size).times do |indx|
#     while indx < array.size - 1
#       if array[indx] > array[indx + 1]
#         array[indx], array[indx + 1] = array[indx + 1], array[indx]
#       end
#       indx += 1
#     end
#   end

#   array
# end

# def bubble_sort!(array)
#   while (0...array.size - 1).any? { |indx| array[indx] > array[indx+1]}
#     (0...array.size - 1).each do |indx|
#       if array[indx] > array[indx + 1]
#         array[indx], array[indx + 1] = array[indx + 1], array[indx]
#       end
#     end
#   end
# end

# def bubble_sort!(array)
#   exchange = ''
#   while exchange
#     exchange = false
#     (0...array.size - 1).each do |indx|
#       if array[indx] > array[indx + 1]
#         array[indx], array[indx + 1] = array[indx + 1], array[indx]
#         exchange = true
#       end
#     end
#   end
# end

# array = [5, 3]
# bubble_sort!(array)
# p array == [3, 5]

# array = [6, 2, 7, 1, 4]
# bubble_sort!(array)
# p array

# array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
# bubble_sort!(array)
# p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)

#
def sum_square_difference(int)
  sum_square = (1..int).to_a.inject(:+) ** 2

  square_sum = (1..int).to_a.map {|i| i ** 2}.inject(:+)

  sum_square - square_sum
end

p sum_square_difference(3)
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150























