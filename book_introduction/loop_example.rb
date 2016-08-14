# loop do |variable|
#   puts "This will keep printing until you hit Ctrl + c"
# end

x = [1, 2, 3, 4, 5]
x.collect do |a|
  a + 1
end

puts x