require 'pry'
# def compute(argument)
#   if block_given?
#     yield(argument)
#   else
#     "Does not compute. #{argument}?"
#   end
# end

# p compute(8) { |n| 5 + 3 + n} == 16
# p compute('c') { |n| 'a' + 'b' + n} == 'abc'
# p compute('right')# == 'Does not compute.'

# def missing(array)
#   (array.min..array.max).select do |ele|
#     !array.include? ele
#   end
# end

# p missing([-3, -2, 1, 5])# == [-1, 0, 2, 3, 4]
# p missing([1, 2, 3, 4]) == []
# p missing([1, 5]) == [2, 3, 4]
# p missing([6]) == []

# ENCRYPTED_PIONEERS = "Nqn Ybirynpr
# Tenpr Ubccre
# Nqryr Tbyqfgvar
# Nyna Ghevat
# Puneyrf Onoontr
# Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
# Wbua Ngnanfbss
# Ybvf Unyog
# Pynhqr Funaaba
# Fgrir Wbof
# Ovyy Tngrf
# Gvz Orearef-Yrr
# Fgrir Jbmavnx
# Xbaenq Mhfr
# Wbua Ngnanfbss
# Fve Nagbal Ubner
# Zneiva Zvafxl
# Lhxvuveb Zngfhzbgb
# Unllvz Fybavzfxv
# Tregehqr Oynapu"

# def decipher(c)
#   case c
#   when 'a'..'m', 'A'..'M' then (c.ord + 13).chr
#   when 'n'..'z', 'N'..'Z' then (c.ord - 13).chr
#   else c
#   end
# end

# def rot13(encrypted_name)
#   encrypted_name.each_char.with_object('') do |c, result|
#     result << decipher(c)
#   end
# end

# ENCRYPTED_PIONEERS.split("\n").each do |encrypted_name|
#   puts rot13(encrypted_name)
# end
# def any?(array)
#   array.each do |num|
#     return true if yield(num)
#   end
#   false
# end

# p any?([1, 3, 5, 6]) { |value| value.even? } == true
# p any?([1, 3, 5, 7]) { |value| value.even? } == false
# p any?([2, 4, 6, 8]) { |value| value.odd? } == false
# p any?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true
# p any?([1, 3, 5, 7]) { |value| true } == true
# p any?([1, 3, 5, 7]) { |value| false } == false
# p any?([]) { |value| true } == false

# def one?(array)
#   array.map { |num| yield(num) }.count(true) == 1
# end

# p one?([1, 3, 5, 6]) { |value| value.even? }    # -> true
# p one?([1, 3, 5, 7]) { |value| value.odd? }     # -> false
# p one?([2, 4, 6, 8]) { |value| value.even? }    # -> false
# p one?([1, 3, 5, 7]) { |value| value % 5 == 0 } # -> true
# p one?([1, 3, 5, 7]) { |value| true }           # -> false
# p one?([1, 3, 5, 7]) { |value| false }          # -> false
# p one?([]) { |value| true } 

# def count(array)
#   array.select do { |num| yield(num) }

# count([1,2,3,4,5]) { |value| value.odd? } == 3
# count([1,2,3,4,5]) { |value| value % 3 == 1 } == 2
# count([1,2,3,4,5]) { |value| true } == 5
# count([1,2,3,4,5]) { |value| false } == 0
# count([]) { |value| value.even? } == 0
# count(%w(Four score and seven)) { |value| value.size == 5 } == 2

# def step(start_point, end_point, increment)
#   (start_point..end_point).step(increment) { |num| yield(num) }
# end

# def step(start_point, end_point, increment)
#   while start_point <= end_point
#     yield(start_point)
#     start_point += increment
#   end
# end

# step(1, 10, 3) { |value| puts "value = #{value}" }

# def zip(arr1, arr2)
#   result = []
#   arr1.size.times do |indx|
#     result << [arr1[indx], arr2[indx]]
#   end
#   result
# end

# def zip(arr1, arr2)
#   arr1.map.with_index do |num, indx|
#     [num, arr2[indx]]
#   end
# end

# p zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]

# def map(array)
#   array.each_with_object([]) { |ele, result| result << yield(ele)}
# end

# p map([1, 3, 6]) { |value| value**2 } == [1, 9, 36]
# p map([]) { |value| true } == []
# p map(['a', 'b', 'c', 'd']) { |value| false } == [false, false, false, false]
# p map(['a', 'b', 'c', 'd']) { |value| value.upcase } == ['A', 'B', 'C', 'D']
# p map([1, 3, 4]) { |value| (1..value).to_a } == [[1], [1, 2, 3], [1, 2, 3, 4]]

# def count(*numbers)
#   numbers.select { |num| yield(num) }.size
# end

# def count(*numbers)
#   numbers.reduce(0) { |count, num| count += 1 if yield(num) }
# end

# p count(1, 3, 6) { |value| value.odd? } #== 2
# p count(1, 3, 6) { |value| value.even? } == 1
# p count(1, 3, 6) { |value| value > 6 } == 0
# p count(1, 3, 6) { |value| true } == 3
# p count() { |value| true } == 0
# p count(1, 3, 6) { |value| value - 6 } == 3

# def drop_while(array)
#   new_array = array.clone
#   array.each do |num|
#     if yield(num)
#       new_array.delete(num)
#     else
#       return new_array
#     end
#   end
#   new_array
# end

# def drop_while(array)
#   drop = []
#   array.each do |num|
#     break unless yield(num)
#     drop << num
#   end
#   array - drop
# end

# def drop_while(array)
#   drop = array.each_with_object([]) do |num, drop|
#     break(drop) unless yield(num)
#     drop << num
#   end
#   array - drop
# end


# p drop_while([1, 3, 5, 6]) { |value| value.odd? } == [6]
# p drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
# p drop_while([1, 3, 5, 6]) { |value| true } == []
# p drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
# p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
# p drop_while([]) { |value| true } == []

# def each_with_index(array)
#   i = 0
#   while i < array.size
#     yield(array[i], i)
#     i += 1
#   end
#   array
# end

# def each_with_index(array)
#   array.each do |num|
#     yield(num, array.index(num))
#   end
# end

# result = each_with_index([1, 3, 6]) do |value, index|
#   puts "#{index} -> #{value**index}"
# end

# puts result == [1, 3, 6]

# def each_with_object(array, result)
#   array.each do |num|
#     yield(num, result)
#   end
#   result
# end

# result = each_with_object([1, 3, 5], []) do |value, list|
#   list << value**2
# end
# p result == [1, 9, 25]

# result = each_with_object([1, 3, 5], []) do |value, list|
#   list << (1..value).to_a
# end
# p result == [[1], [1, 2, 3], [1, 2, 3, 4, 5]]

# result = each_with_object([1, 3, 5], {}) do |value, hash|
#   hash[value] = value**2
# end
# p result == { 1 => 1, 3 => 9, 5 => 25 }

# def max_by(array)
#   array.each_with_object([]) do |num, max|
#     if !yield(num)
#       max << num
#     else
#       max << 2
#     end
#   end
# end

# p max_by([1, 5, 3]) { |value| value + 2 }# == 5
# p max_by([1, 5, 3]) { |value| 9 - value } == 1
# p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
# p max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size }# == [3, 4, 5]
# p max_by([-7]) { |value| value * 3 } == -7
# p max_by([]) { |value| value + 5 } == nil

# def each_cons(array)
#   array.each_with_index do |ele, indx|
#     value1 = ele
#     value2 = array[indx + 1]
#     yield(value1, value2)
#     break if value2 == array.last
#   end
#   nil
# end

# def each_cons(array)
#   array[0..-2].each_with_index do |ele, indx|
#     yield(ele, array[indx+1])
#   end
#   nil
# end

# def each_cons(array, n)
#   array[0..-n].each_index do |indx|
#     yield(*array[indx, n])
#   end
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

# class Device
#   def initialize
#     @recordings = []
#   end

#   def record(recording)
#     @recordings << recording
#   end

#   def listen
#     record(yield) if block_given?
#   end

#   def play
#     puts "Outputs \"#{@recordings.last}\""
#   end
# end

# listener = Device.new
# listener.listen { "Hello World!" }
# listener.listen
# listener.play # Outputs "Hello World!"

# class TextAnalyzer
#   def process
#     File.open("sample.txt", 'r') do |file|
#       yield(file.read)
#     end
#   end
# end

# analyzer = TextAnalyzer.new
# analyzer.process { |file| puts file.split("\n\n").size }
# analyzer.process { |file| puts file.split("\n").size }
# analyzer.process { |file| puts file.split.size }

# items = ['apples', 'corn', 'cabbage', 'wheat']

# def gather(items)
#   puts "Let's start gathering food."
#   puts yield(items)
#   puts "Let's start gathering food."
# end

# gather(items) { |items| "#{items.join(', ')}"}

# birds = %w(raven finch hawk eagle)
  
# def category(birds)
#   yield(birds)
# end

# category(birds) { |_, _, *birds_of_prey| puts birds_of_prey}

# items = ['apples', 'corn', 'cabbage', 'wheat']

# def gather(items)
#   puts "Let's start gathering food."
#   yield(items)
#   puts "We've finished gathering!"
# end

# gather(items) do | *value1, value2 |
#   puts value1.join(', ')
#   puts value2
# end

# gather(items) do | v1, *v2 , v3|
#   puts v1
#   puts v2.join(', ')
#   puts v3
# end

# # Group 1
# my_proc = proc { |thing| puts "This is a #{thing}." }
# puts my_proc
# puts my_proc.class
# my_proc.call
# my_proc.call('cat')
# puts 'a'

# # # Group 2
# my_lambda = lambda { |thing| puts "This is a #{thing}" }
# my_second_lambda = -> (thing) { puts "This is a #{thing}" }
# puts my_lambda
# puts my_second_lambda
# puts my_lambda.class
# my_lambda.call('dog')
# # my_lambda.call  # lambda cann't be called without passing in arguments
# # my_third_lambda = Lambda.new { |thing| puts "This is a #{thing}" } # lambda can not be defined using Proc::new
# puts 'b'
# # # Group 3
# def block_method_1(animal)
#   yield
# end

# block_method_1('seal') { |seal| puts "This is a #{seal}."} # arity is like a proc
# # block_method_1('seal') # when block is not given, executing yield will throw an error
# puts 'c'

# # # Group 4
# def block_method_2(animal)
#   yield(animal)
# end

# block_method_2('turtle') { |turtle| puts "This is a #{turtle}."}
# block_method_2('turtle') do |turtle, seal|
#   puts "This is a #{turtle} and a #{seal}."
# end
# block_method_2('turtle') { puts "This is a #{animal}."}

# # Group 1
# def check_return_with_proc
#   my_proc = proc { return }
#   my_proc.call
#   puts "This will never output to screen."
# end

# check_return_with_proc

# # Group 2
# my_proc = proc { return }

# def check_return_with_proc_2(my_proc)
#   my_proc.call
# end

# # check_return_with_proc_2(my_proc)

# # Group 3
# def check_return_with_lambda
#   my_lambda = lambda { return }
#   my_lambda.call
#   puts "This will be output to screen."
# end

# check_return_with_lambda

# # Group 4
# my_lambda = lambda { return }
# def check_return_with_lambda(my_lambda)
#   my_lambda.call
#   puts "This will be output to screen."
# end

# check_return_with_lambda(my_lambda)

# # Group 5
# def block_method_3
#   yield
# end

# block_method_3 { return }

# def convert_to_base_8(n)
#   n.to_s(8).to_i # replace these two method calls
# end

# # The correct type of argument must be used below


# # We'll need a Proc object to make this code work. Replace `a_proc`
# # with the correct object
# p [8,10,12,14,16,33].map(:convert_to_base_8)

# factorials = Enumerator.new do |y|
#   y << 1

#   i = 1
#   loop do
#     y << (1..i).to_a.reduce(:*)
#     i += 1
#   end
# end

# p factorials.take(7)

# p factorials.take(2)

# factorial = Enumerator.new do |yielder|
#   accumulator = 1
#   number = 0
#   loop do
#     accumulator = number.zero? ? 1 : accumulator * number
#     yielder << accumulator
#     number += 1
#   end
# end

# 7.times { puts factorial.next }

# factorial.each_with_index do |number, index|
#   puts number
#   break if index == 6
# end

# def convert_to_base_8(n)
#   n.to_s(8).to_i
# end

# base8_proc = method(:convert_to_base_8)

# p [8,10,12,14,16,33].map(&base8_proc) 

# def bubble_sort!(array)
#   loop do
#     swapped = false
#     1.upto(array.size - 1) do |index|
#       if block_given?
#         next if yield(array[index - 1], array[index])
#       else
#         next if array[index - 1] <= array[index]
#       end
#       array[index - 1], array[index] = array[index], array[index - 1]
#       swapped = true
#     end

#     break unless swapped
#   end

#   nil
# end

# array = [5, 3]
# bubble_sort!(array)
# p array# == [3, 5]

# array = [5, 3, 7]
# bubble_sort!(array) { |first, second| first >= second }
# p array == [7, 5, 3]

# array = [6, 2, 7, 1, 4]
# bubble_sort!(array)
# p array #== [1, 2, 4, 6, 7]

# array = [6, 12, 27, 22, 14]
# bubble_sort!(array) { |first, second| (first % 7) <= (second % 7) }
# p array == [14, 22, 12, 6, 27]

# array = %w(sue Pete alice Tyler rachel Kim bonnie)
# bubble_sort!(array)
# p array == %w(Kim Pete Tyler alice bonnie rachel sue)

# array = %w(sue Pete alice Tyler rachel Kim bonnie)
# bubble_sort!(array) { |first, second| first.downcase <= second.downcase }
# p array == %w(alice bonnie Kim Pete rachel sue Tyler)














