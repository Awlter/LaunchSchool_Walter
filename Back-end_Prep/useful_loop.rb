# i = 0
# loop do
#   i += 1
#   puts i
#   break
# end

x = "STOP"
while x != "STOP" do
  puts "Hi, How are you feeling?"
  ans = gets.chomp
  puts "Want me to ask you again?"
  x = gets.chomp
end