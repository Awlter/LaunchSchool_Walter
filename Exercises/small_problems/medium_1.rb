require 'pry'
# # # 1
# def rotate_array(array)
#   result = []
#   result.concat(array.last(array.size - 1))
#   result << array.first
#   result
# end

# # p rotate_array([7, 3, 5, 2, 9, 1])
# # p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']

# # # 2
# def rotate_rightmost_digits(number, n)
#   all_digits = number.to_s.chars
#   all_digits[-n..-1] = rotate_array(all_digits[-n..-1])
#   all_digits.join.to_i
# end

# # p rotate_rightmost_digits(735291, 3) == 735912

# # # 3
# def max_rotation(number)
#   n = number.to_s.size
#   while n > 0
#     number = rotate_rightmost_digits(number, n)
#     n -= 1
#   end
#   number
# end

# p max_rotation(735291) == 321579
# p max_rotation(3) == 3
# p max_rotation(35) == 53
# p max_rotation(105) == 15 # the leading zero gets dropped
# p max_rotation(8_703_529_146) == 7_321_609_845

# 4
# def switch(lights, n, light_number)
#   (n..light_number).step(n) do |x|
#     index = x - 1
#     lights[index] == 0 ? lights[index] += 1 : lights[index] -= 1
#   end
#   lights
# end

# def toggle_on_or_off(lights)
#   light_number = lights.size
#   1.upto(light_number) do |n| 
#     lights = switch(lights, n, light_number)
#   end
#   lights
# end

# lights = [0] * 10
# p toggle_on_or_off(lights)

# version 2
# def toggle_on_or_off(lights)
#   light_number = lights.size
#   1.upto(light_number) do |x|
#     (x..light_number).step(x) do |x|
#       lights[x] == 'off' ? lights[x] = 'on' : lights[x] = 'off'
#     end
#   end
# end

# def on_light(lights)
#   lights.keys.select {|key| lights[key] == 'on'}
# end

# lights = Hash.new
# 1.upto(10) { |number| lights[number] = 'off'}
# toggle_on_or_off(lights)
# p lights
# p on_light(lights)

# 5
# def diamond(n)
#   puts ' '
#   (1..n).step(2) do |line|
#     puts ('*' * line).center(n)
#   end
#   (-(n-2)..-1).step(2) do |line|
#     puts ('*' * -line).center(n)
#   end
# end

# solution
# def print_row(grid_size, distance)
#   star_number = grid_size - 2 * distance
#   star = '*' * star_number
#   puts star.center(grid_size)
# end

# def diamond(grid_size)
#   max_distance = grid_size / 2
#   max_distance.downto(0) {|distance| print_row(grid_size, distance)}
#   1.upto(max_distance) {|distance| print_row(grid_size, distance)}
# end

# diamond(5)

# 6
# def minilang(program)
#   stack = []
#   register = 0
#   program.split.each do |token|
#     case token
#     when 'ADD'   then register += stack.pop
#     when 'DIV'   then register /= stack.pop
#     when 'MULT'  then register *= stack.pop
#     when 'MOD'   then register %= stack.pop
#     when 'SUB'   then register -= stack.pop
#     when 'PUSH'  then stack.push(register)
#     when 'POP'   then stack.pop
#     when 'PRINT' then puts register
#     else register = token.to_i
#     end
#   end
# end

# minilang('PRINT')
# minilang('5 PUSH 3 MULT PRINT')

# 7
# DIGIT_HASH = {
#   'one'=>1, 'two'=>2, 'three'=>3, 'four'=>4, 'five'=>5,
#   'six'=>6, 'seven'=>7, 'eight'=>8, 'nine'=>9, 'zero'=>0
# }

# def word_to_digit(string)
#   stack = []
#   string.split.each do |word|
#     if DIGIT_HASH.keys.include?(word)
#       stack << DIGIT_HASH[word].to_s
#     else
#       stack << word
#     end
#   end
#   stack.join(' ')
# end

# solution

# def word_to_digit(words)
#   DIGIT_HASH.keys.each do |word|
#     words.gsub!(/\b#{word}\b/, DIGIT_HASH[word].to_s)
#   end
#   words
# end

# p word_to_digit('Please call me at five five five one two three four. Thanks.')

# 8
# def fibonacci(number)
#   if number == 1
#     1
#   elsif number == 2
#     1
#   else
#     fibonacci(number-1) + fibonacci(number-2)
#   end
# end

# solution
# def fibonacci(number)
#   return 1 if number <= 2
#   fibonacci(number-1) + fibonacci(number-2)
# end
# p fibonacci(12) == 144
# p fibonacci(20) == 6765

# 9
# def fibonacci(nth)
#   first = 1
#   second = 1
#   (3..nth).each do
#     first, second = second, first + second
#   end
#   second
# end

# p fibonacci(20) == 6765

# 10
def fibonacci_last(nth)
  first = 1
  second = 1
  (3..nth).each do
    first, second = second, first + second
  end
  second.to_s.split('').last
end

p fibonacci_last(100)




