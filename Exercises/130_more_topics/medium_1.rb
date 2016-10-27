#
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
#     puts @recordings.last
#   end
# end

# listener = Device.new
# listener.listen { "Hello World!" }
# listener.listen
# listener.play # Outputs "Hello World!"

#
# class TextAnalyzer
#   def process
#     file = File.open("some_file.txt", r)
#     yield(file)
#     file.close
#   end
# end

# analyzer = TextAnalyzer.new
# analyzer.process { |file| puts # your implementation }
# analyzer.process { |file| puts # your  implementation }
# analyzer.process { |file| puts # your implementation }

#

# items = ['apples', 'corn', 'cabbage', 'wheat']

# def gather(items)
#   yield(items.join(', '))
# end

# gather(items) do |joined|
#   puts "Let's start gathering food."
#   puts joined
#   puts "Let's start gathering food."
# end 

#
# birds = ['crow', 'finch', 'hawk', 'eagle']

# def types(birds)
#   yield birds
# end

# types(birds) do |*_, hawk, eagle|
#   puts "Two birds of prey are the #{hawk} and #{eagle}"
# end

#
# items = ['apples', 'corn', 'cabbage', 'wheat']

# def gather(items)
#   puts "Let's start gathering food."
#   yield(items)
#   puts "We've finished gathering!"
# end

# gather(items) do |*first, second|
#   puts first.join(', ')
#   puts second
# end

# gather(items) do |first, *second, last|
#   puts first
#   puts second.join(', ')
#   puts last
# end

# gather(items) do |*first, last|
#   puts first.join(', ')
#   puts last
# end

# gather(items) do |first, second, third, last|


##############
# Group 1
# my_proc = proc { |thing| puts "This is a #{thing}." }
# my_second_proc = Proc.new { |thing| puts "This is a #{thing}." }
# puts my_proc
# puts my_proc.class
# my_proc.call
# my_proc.call('cat')

# Group 2
# my_lambda = lambda do
#   return
#   puts "This is a "
# end

# my_lambda.call
# # my_second_lambda = -> (thing) { puts "This is a #{thing}" }
# puts my_lambda
# # puts my_second_lambda
# puts my_lambda.class
# my_lambda.call('dog')

# my_third_lambda = Lambda.new { |thing| puts "This is a #{thing}" }

# # # Group 3
# def block_method_1(animal)
#   yield
# end
  
# block_method_1('seal') { |seal| puts "This is a #{seal}."}
# block_method_1('seal')

# # Group 4
# def block_method_2(animal)
#   yield(animal)
# end

# block_method_2('turtle') { |turtle| puts "This is a #{turtle}."}
# block_method_2('turtle') do |turtle, seal|
#   puts "This is a #{turtle} and a #{seal}."
# end
# block_method_2('turtle') { puts "This is a #{animal}."}

# Group 1
# def check_return_with_proc
#   my_proc = proc { return }
#   my_proc.call
#   puts "This will never output to screen."
# end

# check_return_with_proc

# # Group 2
# my_proc = proc { puts "out of method" }

# def check_return_with_proc_2(my_proc)
#   my_proc.call
# end

# check_return_with_proc_2(my_proc)

# Group 3
# def check_return_with_lambda
#   my_lambda = lambda { return "good" }
#   puts my_lambda
#   my_lambda.call
#   puts "This will be output to screen."
# end

# check_return_with_lambda

# Group 4
# my_lambda = lambda { return "good"}
# def check_return_with_lambda(my_lambda)
#   a = my_lambda.call
#   puts "This will be output to screen.#{a}"
# end

# check_return_with_lambda(my_lambda)

# Group 5
# def block_method_3
#   yield
# end

# block_method_3 { return }

# def procbuilder(msg)
#   proc { puts msg; return }
# end

# def test
#   puts "entering method"
#   p = proc { puts "ce" ; return }#procbuilder("entering proc")
#   p.call
#   puts "exit method"
# end

# test

# #
# def convert_to_base_8
#   to_s(8).to_i# replace these two method calls
# end

# # The correct type of argument must be used below
# base8_proc = method(convert_to_base_8).to_proc

# # We'll need a Proc object to make this code work. Replace `a_proc`
# # with the correct object
# [8,10,12,14,16,33].map base8_proc

# def convert_to_base_8(n)
#   n.to_s(8).to_i
# end

# base8_proc = method(:convert_to_base_8)

# p [8,10,12,14,16,33].map(&base8_proc) 

#
# factorial = Enumerator.new do |y|
#   n = 1
#   y << 1
#   loop do
#     y << (1..n).reduce(:*)
#     n += 1
#   end
# end

# 7.times { p factorial.next }

# factorial.rewind

# factorial.each_with_index do |num, indx|
#   puts num
#   break if indx == 6
# end

#
def bubble_sort!(array)
  return array.sort! unless block_given?
  loop do
    swapped = false
    1.upto(array.size - 1) do |indx|
      next if yield(array[indx - 1], array[indx])
      array[indx - 1], array[indx] = array[indx], array[indx -1]
      swapped = true
    end

    break unless swapped
  end
  nil
end

array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

array = [5, 3, 7]
bubble_sort!(array) { |first, second| first >= second }
p array == [7, 5, 3]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

array = [6, 12, 27, 22, 14]
bubble_sort!(array) { |first, second| (first % 7) <= (second % 7) }
p array == [14, 22, 12, 6, 27]

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array)
p array == %w(Kim Pete Tyler alice bonnie rachel sue)

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array) { |first, second| first.downcase <= second.downcase }
p array == %w(alice bonnie Kim Pete rachel sue Tyler)












