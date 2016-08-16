# def take_block(&block)
#   block.call
# end

# take_block do
#   puts "Block being called in the method!"
# end

def divide(number, divisor)
  begin
    answer = number / divisor
  rescue ZeroDivisionError => e
    puts e.message
  end
end

puts divide(16, 4)
puts divide(4, 0)
puts divide(14, 7)