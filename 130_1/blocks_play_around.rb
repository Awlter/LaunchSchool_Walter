# def times(number)
#   if block_given?
#     digit = 0
#     while digit < number
#       yield(digit)
#       digit += 1
#     end
#   else
#     number
#   end
# end

# times(5) { |num| puts num }

# each
# def each(array)
#   counter = 0

#   while counter < array.size
#     yield(array[counter])
#     counter += 1
#   end

#   array
# end

# each(['a', 'b', 'c']) { |element| puts element }

# select
# def select(array)
#   result = []
#   counter = 0

#   while counter < array.size
#     current_element = array[counter]
#     result << current_element if yield(current_element)
#     counter += 1
#   end

#   result
# end

# array = [1, 2, 3, 4, 5]

# p select(array) { |num| num.odd? }      # => [1, 3, 5]
# select(array) { |num| puts num } 

def reduce(array, default = 0)
  sum = default
  counter = 0

  while counter < array.size
    sum = yield(sum, array[counter])
    counter += 1
  end

  sum
end

p reduce([2, 3, 4], 10) { |acc, ele| acc + ele }