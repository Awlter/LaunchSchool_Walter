# i = 0
# loop do |variable|
#   i += 2
#   if i == 4
#     next
#   end
#   puts i
#   if i == 10
#     break
#   end
# end

# x = 0

# while x <= 10
#   if x.even?
#     puts x
#   end
#   x += 1
# end

# x = 0

# while x <= 10
#   if x == 3
#     x += 1
#   elsif x.odd?
#     puts x
#   end
#   x += 1
# end

# user_input = 'STOP'

# loop do
#   puts "What's your name?"
#   nme = gets.chomp
#   puts "Do you want me to ask you again?"
#   user_input = gets.chomp
#   if user_input == 'STOP'
#     break
#   end
# end



# a = ["A", "B", "C", "D", "E", "F","G"]

# a.each_with_index do |val, ind|
#   puts "#{ind + 1}: #{val}!"
# end



# def count_down(num)
#   if num >= 0
#     puts num
#     count_down(num - 1)
#   end
# end


# puts "The number you want to count down"
# num = gets.chomp.to_i

# count_down(num)