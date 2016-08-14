puts "What's your first name?"
first_name = gets.chomp()

puts "What's your second name?"
second_name = gets.chomp()

10.times do |n|
  puts "Hello, #{first_name} #{second_name}"
end
