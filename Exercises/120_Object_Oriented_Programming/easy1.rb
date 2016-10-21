# class Banner
#   def initialize(message, width)
#     @message = message
#     @width = width
#   end

#   def to_s
#     [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
#   end

#   private

#   def horizontal_rule
#     "+#{'-' * @width}+"
#   end

#   def empty_line
#     "|#{' ' * @width}|"
#   end

#   def message_line
#     result = ''
#     if @message.size < @width
#       result << "| " + @message.center(@width - 2) + " |"
#     else
#       result << "| " + @message[0...@width - 2] + " |"
#       result << "\n| " + @message[@width - 2..-1].center(@width - 2) + " |"
#     end
#     result
#   end
# end

# banner = Banner.new('To boldly go where no one has gone before.', 30)
# puts banner

# banner = Banner.new('', 40)
# puts banner

# 2
# class Pet
#   attr_reader :name

#   def initialize(name)
#     @name = name
#   end

#   def to_s
    
#     "My name is #{@name.clone.upcase!}."
#   end
# end

# name = 'Fluffy'
# fluffy = Pet.new(name)
# puts fluffy.name
# puts fluffy
# puts fluffy.name
# puts name

# 3
# class Book
#   attr_reader :author, :title

#   def initialize(author, title)
#     @author = author
#     @title = title
#   end

#   def to_s
#     %("#{title}", by #{author})
#   end
# end

# book = Book.new("Neil Stephenson", "Snow Crash")
# puts %(The author of "#{book.title}" is #{book.author}.)
# puts %(book = #{book}.)

# 4
# class Book
#   attr_accessor :title, :author

#   def to_s
#     %("#{title}", by #{author})
#   end
# end

# book = Book.new
# book.author = "Neil Stephenson"
# book.title = "Snow Crash"
# puts %(The author of "#{book.title}" is #{book.author}.)
# puts %(book = #{book}.)

# 5
# class Person
#   def initialize(first_name, last_name)
#     @first_name = first_name.capitalize
#     @last_name = last_name.capitalize
#   end

#   def first_name= (first_name)
#     @first_name = first_name.capitalize
#   end

#   def last_name= (last_name)
#     @last_name = last_name.capitalize
#   end

#   def to_s
#     "#{@first_name} #{@last_name}"
#   end
# end

# person = Person.new('john', 'doe')
# puts person

# person.first_name = 'jane'
# person.last_name = 'smith'
# puts person

#
# class Rectangle
#   def initialize(height, width)
#     @height = height
#     @width = width
#   end

#   def area
#     @height * @width
#   end
# end

# class Square < Rectangle
#   def initialize(side)
#     super(side, side)
#   end
# end


# square = Square.new(5)
# puts "area of square = #{square.area}"

#

# class Pet
#   def initialize(name, age, colors)
#     @name = name
#     @age = age
#     @colors
#   end
# end

# class Cat < Pet
#   def to_s
#     "My cat #{@name} is #{@age} years old and has #{@colors} fur."
#   end

# end

# # My cat Pudding is 7 years old and has black and white fur.

# pudding = Cat.new('Pudding', 7, 'black and white')
# butterscotch = Cat.new('Butterscotch', 10, 'tan and white')
# puts pudding, butterscotch

#

class Vehicle
  attr_reader :make, :model

  def initialize(make, model)
    @make = make
    @model = model
  end

  def to_s
    "#{make} #{model}"
  end
end

class Car < Vehicle
  def wheels
    4
  end
end

class Motorcycle < Vehicle
  def wheels
    2
  end
end

class Truck < Vehicle
  attr_reader :payload

  def initialize(make, model, payload)
    super(make, model)
    @payload = payload
  end

  def wheels
    6
  end
end












