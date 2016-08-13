# 1

# false false false true false

# p (32 * 4) >= 129
# p false != !true
# p true == 4
# p false == (847 == '874')
# p (!true || (!(100 / 5) == 20) || ((328 / 4) == 82)) || false

# 2

# x = gets.to_s

# if x.length > 10
#   puts x.upcase
# else
#   puts "please input a string longer than 10 characters"
# end

# 3

# def decide_numb(numb)
#   answer = case
#   when numb < 50 && numb > 0
#     "The numb is between 0 and 50"
#   when numb < 100 && numb >= 50
#     "The numb is between 50 and 100"
#   end
# end

# puts decide_numb(24)
# puts decide_numb(52)

#After watching solution

# puts "please input a number from 0 - 100"
# numb = gets.chomp.to_i

# if numb < 0
#   puts "sb"
# elsif numb < 50
#   puts "#{numb} is between 0 and 50"
# elsif numb <= 100
#   puts "#{numb} is between 50 and 100"
# else
#   puts "#{numb} is above 100"
# end

#4

# False  did you get it right     alright now

# 5
  
# numb = gets.chomp.to_i

#   answer = case
#   when numb < 0
#     "puts right numbers"
#   when numb < 50
#     "#{numb} is between 0 and 50"
#   when numb <= 100
#     "#{numb} is between 50 and 100"
#   when numb > 100
#     "#{numb} is above 100"
#   end

# puts answer


# def evaluate_case2_num(num)
#   case num
#   when 0..50
#     puts "#{num} is between 0 and 50"
#   when 51..100
#     puts "#{num} is between 51 and 100"
#   else
#     if num < 0
#       puts "You can't enter a negative num!"
#     else
#       puts "#{num} is above 100"
#     end
#   end
# end

# numb = gets.chomp.to_i
# evaluate_case2_num(numb)

# 6

    # def equal_to_four(x)
    #   if x == 4
    #     puts "yup"
    #   else
    #     puts "nope"

    # end

    # equal_to_four(5)
