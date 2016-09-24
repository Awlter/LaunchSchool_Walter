require 'pry'
# # 1
# def greetings(name_arry, info_hash)
#   "Hello, #{name_arry.join(' ')}! Nice to have a #{info_hash[:title]} #{info_hash[:occupation]} around."
# end

# p greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })

# # 2
# def twice(number)
#   split_point = number.to_s.size / 2

#   if number.to_s.even? && (number.to_s[0..(split_point-1)] == number.to_s[split_point..-1])
#     number
#   else
#     number * 2
#   end
# end

# p twice(3333)
# p twice(7676) == 7676
# p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
# p twice(5) == 10

# # 3
# def negative(number)
#   number <= 0 ? number : -number
# end

# p negative(5) == -5
# p negative(-3) == -3
# p negative(0) == 0

# # 4
# def sequence(number)
#   (1..number).to_a
# end

# p sequence(5) == [1, 2, 3, 4, 5]
# p sequence(3) == [1, 2, 3]
# p sequence(1) == [1]

# # 5
# def uppercase?(string)
#   string == string.upcase
# end

# p uppercase?('t') == false
# p uppercase?('T') == true
# p uppercase?('Four Score') == false
# p uppercase?('FOUR SCORE') == true
# p uppercase?('4SCORE!') == true
# p uppercase?('') == true

# # 6
# def word_lengths(string)
#   result = []
#   string.split.each do |word|
#     result << "#{word} #{word.size}"
#   end
#   result
# end

# solution 
# def word_lengths(string)
#   string.split.map { |word| "#{word} #{word.size}"}
# end

# p word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

# p word_lengths("baseball hot dogs and apple pie") ==
#   ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

# p word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

# p word_lengths("Supercalifragilisticexpialidocious") ==
#   ["Supercalifragilisticexpialidocious 34"]

# p word_lengths("") == []

# # 7
# def swap_name(string)
#   name_array = string.split
#   name_array[0], name_array[1] = name_array[1], name_array[0]
#   name_array.join(',')
# end

# p swap_name('mo ni')

# # 8
# def sequence(range, first_number)
#   result = []
#   (1..range).each do |num|
#     result << first_number * num
#   end
#   result
# end

# p sequence(5, 1) == [1, 2, 3, 4, 5]
# p sequence(4, -7) == [-7, -14, -21, -28]
# p sequence(3, 0) == [0, 0, 0]
# p sequence(0, 1000000) == []

# # 9
# def get_grade(num1, num2, num3)
#   case (num1 + num2 + num3) / 3
#   when (90..100) then 'A'
#   when (80..89) then 'B'
#   when (70..79) then 'C'
#   when (60..69) then 'D'
#   else 'F'
#   end
# end

# p get_grade(95, 90, 93) == "A"
# p get_grade(50, 50, 95) == "D"

# # # 10
# def buy_fruit(array)
#   array.map { |arr| [arr[0]] * arr[1] }.flatten
# end

# p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]])