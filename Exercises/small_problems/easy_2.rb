# # 1
# age = (20..200).to_a.sample

# puts "Teddy is #{age} years old!"

# # solution

# age = rand(20..200)
# puts "Teddy is #{age} years old!"

# Further Exploration
# def info(name="Teddy", age)
#   puts "#{name} is #{age} years old!"
# end

# name = gets.chomp
# age = rand(20..200)

# info(name, age)

# # 2
# def calculate_room_area
#   puts ""
#   length = gets.chomp.to_i
#   puts ""
#   width = gets.chomp.to_i
#   square_meters = (length * width).round(2)
#   square_feet = (square_meters * 10.7639).round(2)
#   puts "The area of the room is #{square_meters} (#{square_feet} square feet)."
# end

# calculate_room_area

# # 3
# def calculate(tip_rate, original_bill)
#   tip = original_bill * tip_rate / 100
#   bill = original_bill + tip
#   return tip.round(1), bill.round(1)
# end

# puts 'What is the bill?'
# original_bill = gets.chomp.to_f
# puts 'What is the tip percentage?'
# tip_rate = gets.chomp.to_i

# tip, bill = calculate(tip_rate, original_bill)

# puts "The tip is $#{tip}."
# puts "The total is $#{bill}."

# # 4
# puts "What is your age?"
# age = gets.chomp.to_i
# puts "At what age would you like to retire?"
# retire_age = gets.chomp.to_i

# current_year = Time.now.year
# year_difference = retire_age - age
# puts "It's #{current_year}. You will retire in #{2016 + year_difference}."
# puts "You have only #{year_difference} years of work to go!"

# # 5
# puts "waht your name"
# name = gets.chomp

# name.include?('!') ? puts("HELLO!#{name.upcase}!") : puts("Hi, #{name}")

# # 6
# (1..99).each {|num| puts num if num.odd?}

# solution
# 1.upto(99) {|i| puts i if i.odd?}

# # 8
def prompt(msg)
  puts ">> #{msg}"
end

prompt "Please enter an integer greater than 0:"
number = gets.chomp.to_i
prompt "Enter 's' to compute the sum, 'p' to computer the product"
operator = gets.chomp

if operator == 's'
  sum = (1..number).to_a.inject(:+)
  puts "The sum of the integers between 1 and #{number} is #{sum}."
elsif operator == 'p'
  product = (1..number).to_a.inject(:*)
  puts "The product of the integers between 1 and #{number} is #{product}."
end