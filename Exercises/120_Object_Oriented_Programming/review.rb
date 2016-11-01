# # class Machine
# #   def start
# #     flip_switch(:on)
# #   end

# #   def stop
# #     flip_switch(:off)
# #   end

# #   private
# #   attr_writer :switch

# #   def flip_switch(desired_state)
# #     self.switch = desired_state
# #   end
# # end


# # machine = Machine.new
# # machine.start

# # class Student
# #   def initialize(name, year)
# #     @name = name
# #     @year = year
# #   end
# # end

# # class Graduate < Student
# #   def initialize(name, year, parking)
# #     super(name, year)
# #     @parking = true
# #   end
# # end

# # class Undergraduate < Student
# # end

# # class CircularQueue
# #   attr_reader :size, :queue, :next, :longest

# #   def initialize(size)
# #     @size = size
# #     @queue = Array.new(size)
# #     @longest = 0
# #     @next = 0
# #   end

# #   def enqueue(number)
# #     if @queue[@next].nil?
# #       @queue[@next] = number
# #     else
# #       @queue[@longest] = number
# #       @longest = (@longest + 1) % size
# #     end
# #     @next = (@next + 1) % size
# #   end

# #   def dequeue
# #     longest = @queue[@longest]
# #     @queue[@longest] = nil
# #     @longest = (@longest + 1) % size unless longest.nil?
# #     longest
# #   end
# # end

# # class CircularQueue
# #   attr_reader :buffer

# #   def initialize(size)
# #     @buffer = [nil] * size
# #     @next_position = 0
# #     @oldest_position = 0
# #   end

# #   def enqueue(object)
# #     unless @buffer[@next_position].nil?
# #       @oldest_position = increment(@next_position)
# #     end

# #     @buffer[@next_position] = object
# #     @next_position = increment(@next_position)
# #   end

# #   def dequeue
# #     value = @buffer[@oldest_position]
# #     @buffer[@oldest_position] = nil
# #     @oldest_position = increment(@oldest_position) unless value.nil?
# #     value
# #   end

# #   private

# #   def increment(position)
# #     (position + 1) % @buffer.size
# #   end
# # end

# # class CircularQueue
# #   def initialize(size)
# #     @buffer = Array.new(size)
# #   end

# #   def enqueue(number)
# #     @buffer.push(number)
# #   end

# #   def dequeue
# #     @buffer.shift
# #   end
# # end

# # queue = CircularQueue.new(3)
# # puts queue.dequeue == nil

# # queue.enqueue(1)
# # queue.enqueue(2)
# # puts queue.dequeue == 1

# # queue.enqueue(3)
# # queue.enqueue(4)
# # puts queue.dequeue == 2

# # queue.enqueue(5)
# # queue.enqueue(6)
# # queue.enqueue(7)
# # puts queue.dequeue == 5
# # puts queue.dequeue == 6
# # puts queue.dequeue == 7
# # puts queue.dequeue == nil

# # queue = CircularQueue.new(4)
# # puts queue.dequeue == nil

# # queue.enqueue(1)
# # queue.enqueue(2)
# # puts queue.dequeue == 1

# # queue.enqueue(3)
# # queue.enqueue(4)
# # puts queue.dequeue == 2

# # queue.enqueue(5)
# # queue.enqueue(6)
# # queue.enqueue(7)
# # puts queue.dequeue == 4
# # puts queue.dequeue == 5
# # puts queue.dequeue == 6
# # puts queue.dequeue == 7
# # puts queue.dequeue == nil

# class Minilang
#   def initialize(program)
#     @program = program.split
#     @register = 0
#     @stack = []
#   end

#   def eval
#     @program.each do |command|
#       downcase = command.downcase 
#       command == downcase ? @register = command.to_i : self.send(command.downcase)
#     end
#   end

#   def print
#     p @register
#   end

#   def push
#     @stack << @register
#   end

#   def mult
#     @register = @stack.pop * @register
#   end

#   def add
#     @register = @stack.pop + @register
#   end

#   def sub
#     @register = @register - @stack.pop
#   end

#   def div
#     @register = @register / @stack.pop
#   end

#   def mod
#     @register = @register % @stack.pop
#   end

#   def pop
#     @register = @stack.pop
#   end
# end

# Minilang.new('PRINT').eval
# # 0

# Minilang.new('5 PUSH 3 MULT PRINT').eval
# # 15

# Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# # 5
# # 3
# # 8

# Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# # 10
# # 5

# Minilang.new('5 PUSH POP POP PRINT').eval
# # Empty stack!

# Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# # 6

# Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# # 12

# # Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# # Invalid token: XSUB

# Minilang.new('-3 PUSH 5 SUB PRINT').eval
# # 8

# Minilang.new('6 PUSH').eval

# puts "Hello".class

# class Cat
#   attr_accessor :name

#   def initialize(name)
#     @name = name
#   end

#   def greet
#     puts "Hello! My name is #{name}!"
#   end
# end

# kitty = Cat.new('Sophie')
# kitty.name = 'lala'
# kitty.greet

# class Cat
#   def self.generic_greeting
#     puts "Hello, I'm a cat."
#   end
# end

# Cat.generic_greeting
# class Cat
#   attr_reader :name

#   def initialize(name)
#     @name = name
#   end

#   def self.generic_greeting
#     puts 'Hello, Im a cat'
#   end

#   def personal_greeting

#   end
# end

# kitty = Cat.new('Sophie')

# Cat.generic_greeting
# kitty.personal_greeting

# class Vehicle
#   attr_reader :year

#   def initialize(year)
#     @year = year
#   end
# end

# class Truck < Vehicle
#   attr_reader :bed_type

#   def initialize(year, bed_type)
#     super(year)
#     @bed_type = bed_type
#   end
# end

# class Car < Vehicle
# end

# truck1 = Truck.new(1994, 'Short')
# puts truck1.year
# puts truck1.bed_type

# class Vehicle
#   def start_engine
#     'Ready to go!'
#   end
# end

# class Truck < Vehicle
#   def start_engine(speed)
#     super() + " Drive #{speed}, please!"
#   end
# end

# truck1 = Truck.new
# puts truck1.start_engine('fast')

# module Towable
#   def tow
#     "I can tow a trailer!"
#   end
# end

# class Truck
#   include Towable
# end

# class Car
# end

# truck1 = Truck.new
# puts truck1.tow

# module Towable
#   def tow
#     'I can tow a trailer!'
#   end
# end

# class Vehicle
#   attr_reader :year

#   def initialize(year)
#     @year = year
#   end
# end

# class Truck < Vehicle
#   include Towable
# end

# class Car < Vehicle
# end

# truck1 = Truck.new(1994)
# puts truck1.year
# puts truck1.tow

# car1 = Car.new(2006)
# puts car1.year

# class Person
#   attr_writer :last_name
#   attr_accessor :first_name

#   def first_equals_last?
#     first_name == last_name
#   end

#   protected

#   attr_reader :last_name
# end

# person1 = Person.new
# person1.first_name = 'Dave'
# person1.last_name = 'Smith'
# puts person1.first_equals_last?

# class Person
#   attr_writer :age

#   def older_than?(other)
#     age > other.age
#   end

#   protected

#   attr_reader :age
# end

# person1 = Person.new
# person1.age = 17

# person2 = Person.new
# person2.age = 26

# puts person1.older_than?(person2)

# class Banner
#   attr_reader :size

#   def initialize(message)
#     @message = message
#     @size = message.length
#   end

#   def to_s
#     [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
#   end

#   private

#   def horizontal_rule
#     "+-#{'-' * size}-+"
#   end

#   def empty_line
#     "| #{' ' * size} |"
#   end

#   def message_line
#     "| #{@message} |"
#   end
# end

# banner = Banner.new('')
# puts banner

# class  Pet
#   attr_reader :name

#   def initialize(name)
#     @name = name.to_s
#   end

#   def to_s
#     "My name is #{@name.upcase}."
#   end
# end

# name = 42
# fluffy = Pet.new(name) # @name = '42'
# name += 1
# puts fluffy.name # '42'
# puts fluffy # 'my name is 42'
# puts fluffy.name #'42'
# puts name #43

# class Book
#   attr_reader :author, :title
#   def initialize(author, title)
#     @author = author
#     @title = title
#   end

#   def author= (author)
#     @author = author.capitalize
#   end

#   def to_s
#     %("#{title}", by #{author})
#   end
# end

# book = Book.new("Neil Stephenson", "Snow Crash")
# puts %(The author of "#{book.title}" is #{book.author}.)
# puts %(book = #{book}.)

# class Pet
#   def initialize(name, age)
#     @name = name
#     @age = age
#   end
# end

# class Cat < Pet
#   def initialize(name, age, feature)
#     super(name, age)
#     @feature = feature
#   end

#   def to_s
#     "My cat #{@name} is #{@year}s old and has #{@feature} fur."
#   end
# end

# pudding = Cat.new('Pudding', 7, 'black and white')
# butterscotch = Cat.new('Butterscotch', 10, 'tan and white')
# puts pudding, butterscotch

# class Vehicle
#   attr_reader :make, :model
  
#   def initialize(make, model)
#     @make = make
#     @model = model
#   end

#   def to_s
#     "#{make} #{model}"
#   end
# end

# class Car
#   def wheels
#     4
#   end

# end

# class Motorcycle
#   def wheels
#     2
#   end

# end

# class Truck
#   attr_reader :payload

#   def initialize(make, model, payload)
#     super(make, model)
#     @payload = payload
#   end

#   def wheels
#     6
#   end
# end

# class Transform
#   def initialize(string)
#     @string = string
#   end

#   def self.lowercase(string)
#     string.downcase
#   end

#   def uppercase
#     @string.upcase
#   end
# end

# my_data = Transform.new('abc')
# puts my_data.uppercase
# puts Transform.lowercase('XYZ')
# class FixedArray
#   def initialize(size)
#     @fixed_array = Array.new(size)
#   end

#   def []=(idx, obj)
#     @fixed_array[idx] = obj
#   end

#   def [](idx)
#     @fixed_array.fetch(idx)
#   end

#   def to_a
#     @fixed_array
#   end

#   def to_s
#     to_a.to_s
#   end
# end

# fixed_array = FixedArray.new(5)
# puts fixed_array[3] == nil
# puts fixed_array.to_a == [nil] * 5

# fixed_array[3] = 'a'
# puts fixed_array[3] == 'a'
# puts fixed_array.to_a == [nil, nil, nil, 'a', nil]

# fixed_array[1] = 'b'
# puts fixed_array[1] == 'b'
# puts fixed_array.to_a == [nil, 'b', nil, 'a', nil]

# fixed_array[1] = 'c'
# puts fixed_array[1] == 'c'
# puts fixed_array.to_a == [nil, 'c', nil, 'a', nil]

# fixed_array[4] = 'd'
# puts fixed_array[4] == 'd'
# puts fixed_array.to_a == [nil, 'c', nil, 'a', 'd']
# puts fixed_array.to_s == '[nil, "c", nil, "a", "d"]'

# puts fixed_array[-1] == 'd'
# puts fixed_array[-4] == 'c'

# begin
#   fixed_array[6]
#   puts false
# rescue IndexError
#   puts true
# end

# begin
#   fixed_array[-7] = 3
#   puts false
# rescue IndexError
#   puts true
# end








