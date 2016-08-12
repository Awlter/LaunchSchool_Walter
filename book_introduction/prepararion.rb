# preparation.rb
require "pry"
y = 0 

3.times do
  y += 1
  x = y
end

binding.pry

puts x
