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

x = 0

while x <= 10
  if x == 3
    x += 1
  elsif x.odd?
    puts x
  end
  x += 1
end