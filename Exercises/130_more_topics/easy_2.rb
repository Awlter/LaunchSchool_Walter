require 'pry'

# def step(starting_v, ending_v, steps)
#   while starting_v <= ending_v
#     yield(starting_v)
#     starting_v += steps
#   end
# end  

# step(1, 10, 3) { |value| puts "value = #{value}" }

# def zip(arr1, arr2)
#   count = -1

#   arr1.map do |value|
#     count += 1
#     [value, arr2[count]]
#   end

# end

# p zip([1, 2, 3], [4, 5, 6])# == [[1, 4], [2, 5], [3, 6]]

#
# def map(array)
#   array.each_with_object([]) do |value, result|
#     result << yield(value)
#   end
# end

# p map([1, 3, 6]) { |value| value**2 } == [1, 9, 36]
# p map([]) { |value| true } == []
# p map(['a', 'b', 'c', 'd']) { |value| false } == [false, false, false, false]
# p map(['a', 'b', 'c', 'd']) { |value| value.upcase } == ['A', 'B', 'C', 'D']
# p map([1, 3, 4]) { |value| (1..value).to_a } == [[1], [1, 2, 3], [1, 2, 3, 4]]

#
# def drop_while(array)
#   array.each_with_object([]) do |value, result|
#     result << value unless yield(value)
#   end
# end

# p drop_while([1, 3, 5, 6]) { |value| value.odd? } == [6]
# p drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5]
# p drop_while([1, 3, 5, 6]) { |value| true } == []
# p drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
# p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
# p drop_while([]) { |value| true } == []

#
# def each_with_index(array)
#   index = 0
#   loop do
#     yield(array[index], index)
#     index += 1
#     break if index == array.size
#   end
#   array
# end

# result = each_with_index([1, 3, 6]) do |value, index|
#   puts "#{index} -> #{value**index}"
# end

# puts result == [1, 3, 6]

#
# def each_with_object(array, object)
#   array.each { |item| yield(item, object) }
#   object
# end

# result = each_with_object([1, 3, 5], []) do |value, list|
#   list << value**2
# end
# p result# == [1, 9, 25]

# result = each_with_object([1, 3, 5], []) do |value, list|
#   list << (1..value).to_a
# end
# p result == [[1], [1, 2, 3], [1, 2, 3, 4, 5]]

# result = each_with_object([1, 3, 5], {}) do |value, hash|
#   hash[value] = value**2
# end
# p result == { 1 => 1, 3 => 9, 5 => 25 }

# result = each_with_object([], {}) do |value, hash|
#   hash[value] = value * 2
# end
# result == {}

#
# def max_by(array)
#   return nil if array.empty?
#   max_item = array.first
 

#   array[1..-1].each do |item|
#     if yield(item) > yield(max_item)
#       max_item = item
#     end
#   end

#   max_item
# end

# def max_by(array)
#   return nil if array.empty?

#   array.inject { |max, ele| yield(ele) > yield(max) ? ele : max }
# end

# p max_by([1, 5, 3]) { |value| value + 2 } == 5
# p max_by([1, 5, 3]) { |value| 9 - value } == 1
# p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
# p max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size } == [3, 4, 5]
# p max_by([-7]) { |value| value * 3 } == -7
# p max_by([]) { |value| value + 5 } == nil

#
# def each_cons(array)
#   i = 1

#   while i < array.size
#     yield(array[i-1], array[i])
#     i += 1
#   end

#   nil
# end

# hash = {}
# result = each_cons([1, 3, 6, 10]) do |value1, value2|
#   hash[value1] = value2
# end

# p result == nil
# p hash #== { 1 => 3, 3 => 6, 6 => 10 }

# hash = {}
# each_cons([]) do |value1, value2|
#   hash[value1] = value2
# end
# p hash == {}

# hash = {}
# each_cons(['a', 'b']) do |value1, value2|
#   hash[value1] = value2
# end
# p hash == {'a' => 'b'}

#
# def each_cons(array, num)
#   if num == 1
#     array.each { |value| yield(value) }
#   elsif num == 2
#     array.each_index { |i| yield(array[i], array[i+1]) if i + 1 < array.size}
#   else num == 3
#     array.each_index do |i|

#       yield(array[i], array[i+1], array[i+2]) if i+num < array.size + 1

#     end
#   end

#   nil
# end

# def each_cons(array, n)
#   (0..array.size - n).each { |i| yield(*array.slice(i, n))}
#   nil
# end


# hash = {}
# each_cons([1, 3, 6, 10], 1) do |value|
#   hash[value] = true
# end
# p hash == { 1 => true, 3 => true, 6 => true, 10 => true }

# hash = {}
# each_cons([1, 3, 6, 10], 2) do |value1, value2|
#   hash[value1] = value2
# end
# p hash == { 1 => 3, 3 => 6, 6 => 10 }

# hash = {}
# each_cons([1, 3, 6, 10], 3) do |value1, *values|
#   hash[value1] = values
# end
# p hash == { 1 => [3, 6], 3 => [6, 10] }

# hash = {}
# each_cons([1, 3, 6, 10], 4) do |value1, *values|
#   hash[value1] = values
# end
# p hash == { 1 => [3, 6, 10] }

# hash = {}
# each_cons([1, 3, 6, 10], 5) do |value1, *values|
#   hash[value1] = values
# end
# p hash == {}

# review no.1

# max_by

# def max_by(array)
#   return nil if array.empty?

#   result = array.first
#   array.each do |num|
#     result = num if yield(num) > yield(result)
#   end

#   result
# end

# p max_by([1, 5, 3]) { |value| value + 2 } == 5
# p max_by([1, 5, 3]) { |value| 9 - value } == 1
# p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
# p max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size } == [3, 4, 5]
# p max_by([-7]) { |value| value * 3 } == -7
# p max_by([]) { |value| value + 5 } == nil

# each_cons (part_1)

# def each_cons(array)
#   array[0..-2].each_with_index do |number, index|
#     yield(number, array[index + 1])
#   end

#   nil
# end

# hash = {}
# result = each_cons([1, 3, 6, 10]) do |value1, value2|
#   hash[value1] = value2
# end

# p result == nil
# p hash == { 1 => 3, 3 => 6, 6 => 10 }

# hash = {}
# each_cons([]) do |value1, value2|
#   hash[value1] = value2
# end
# p hash == {}

# hash = {}
# each_cons(['a', 'b']) do |value1, value2|
#   hash[value1] = value2
# end
# p hash == {'a' => 'b'}

# each_cons (part_2)

# def each_cons(array, n)
#   i = n

#   while i <= array.size
#     yield(array[i-n...i])
#     i += 1
#   end

#   nil
# end

def each_cons(array, n)
  array.each_index do |index|
    break if index + n - 1 >= array.size
    yield(array[index..(index + n - 1)])
  end
end

hash = {}
each_cons([1, 3, 6, 10], 2) do |value|
  hash[value] = true
end
p hash# == { 1 => true, 3 => true, 6 => true, 10 => true }

hash = {}
each_cons([1, 3, 6, 10], 2) do |value1, value2|
  hash[value1] = value2
end
p hash# == { 1 => 3, 3 => 6, 6 => 10 }

hash = {}
each_cons([1, 3, 6, 10], 3) do |value1, *values|
  hash[value1] = values
end
p hash# == { 1 => [3, 6], 3 => [6, 10] }

hash = {}
each_cons([1, 3, 6, 10], 4) do |value1, *values|
  hash[value1] = values
end
p hash == { 1 => [3, 6, 10] }

hash = {}
each_cons([1, 3, 6, 10], 5) do |value1, *values|
  hash[value1] = values
end
p hash == {}
















