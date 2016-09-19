require 'pry'
# # 1
# def short_long_short(string1, string2)
#   if string1.size > string2.size
#     string2+string1+string2
#   else
#     string1+string2+string1
#   end
# end

# p short_long_short('abc', 'defgh') == "abcdefghabc"

# # 2

# array_rear = a.slice!(-2, 2)
# array_front = a
#

# def century(numbers)
#   string = numbers.to_s
#   front = string.byteslice(0..-3).to_i
#   rear = string.byteslice(-2..-1).to_i

#   front += 1 unless rear == 0
#   front = front.to_s

#   case front[-1]
#     when '1'
#       "#{front}st"
#     when '2'
#       "#{front}nd"
#     when '3'
#       "#{front}rd"
#     else
#       "#{front}th"
#   end
# end

# solution

# def century(year)
#   century = year / 100 + 1
#   century -= 1 if century % 100 == 0
#   century.to_s + century_suffix(century)
# end

# def century_suffix(century)
#   return 'th' if [11, 12, 13].include? century % 100

#   case century % 10
#   when 1 then 'st'
#   when 2 then 'nd'
#   when 3 then 'rd'
#   else 'th'
#   end
# end

# p century(2000) == '20th'
# p century(2001) == '21st'
# p century(1965) == '20th'
# p century(256) == '3rd'
# p century(5) == '1st'
# p century(10103) == '102nd'
# p century(1052)
# p century(1127)
# p century(11201)

# # 3

# def leap_year?(year)
#   if year % 4 == 0 && year % 100 != 0
#     true
#   elsif year % 4 == 0 && year % 100 == 0
#     return true if year % 400 == 0
#     false
#   else
#     false
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
# p leap_year?(1700) == false
# p leap_year?(1) == false
# p leap_year?(100) == false
# p leap_year?(400)

# # 4
# def leap_year?(year)
#   if year >= 1752
#     (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)
#   else
#     year % 4 == 0
#   end
# end

# # 5
# def multisum(number)
#   array = (1..number).to_a.select {|num| num % 3 == 0 || num % 5 == 0}
#   array.inject(:+)
# end

# p multisum(3) == 3
# p multisum(5) == 8
# p multisum(10) == 33
# p multisum(1000) == 234168

# # 6
# def running_total(array)
#   new_array = []
#   array.each_index do |index|
#     new_array << array.first(index + 1).inject(:+)
#   end
#   new_array
# end

# p running_total([2, 5, 13]) == [2, 7, 20]
# p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
# p running_total([3]) == [3]
# p running_total([]) == []

# # 7
# DIGITS = {
#   '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4,
#   '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9
# }

# def string_to_integer(string)
#   digits = string.chars.map {|s| DIGITS[s]}

#   value = 0
#   digits.each {|num| value = value * 10 + num}
#   value
# end


# # 8
# def string_to_signed_integer(string)
#   prefix = string.slice("^0-9")
#   binding.pry
# end

# p string_to_signed_integer('+4321')

# # 9
DIGITS = ('0'..'9').to_a

def integer_to_string(number)
  result = ''
  loop do
    number, remainder = number.divmod(10)
    result.prepend(DIGITS[remainder])
    break if number == 0
  end
  result
end

# # 10
def signed_integer_to_string(number)
  if number == 0
    '0'
  elsif number.positive?
    '+' + integer_to_string(number)
  else
    '-' + integer_to_string(-number)
  end
end

p signed_integer_to_string(4321) == '+4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'
    
















