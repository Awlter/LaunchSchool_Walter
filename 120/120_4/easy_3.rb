# class Hello
#   def greet(message)
#     puts message
#   end

#   def hi
#     greet("Hello")
#   end
# end

# a = Hello.new
# a.hi

# 3

# class AngryCat
#   def initialize(age, name)
#     @age  = age
#     @name = name
#   end

#   def age
#     puts @age
#   end

#   def name
#     puts @name
#   end

#   def hiss
#     puts "Hisssss!!!"
#   end
# end

# kitty = AngryCat.new(3, 'Kitty')
# mimi = AngryCat.new(4, 'Mimi')

# kitty.name
# mimi.name

# 4

# class Cat
#   def initialize(type)
#     @type = type
#   end

#   def to_s
#     "I'm a #{@type} cat."
#   end
# end

# kitty = Cat.new('tabby')
# puts kitty

# 5
class Television
  def self.manufacturer
    puts "I'm a class method: manufacturer"
  end

  def model
    puts "I'm a instance method: model"
  end
end

Television.manufacturer
Television.model