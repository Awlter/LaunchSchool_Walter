# class Cat
#   attr_accessor :name

#   def initialize(name)
#     @name = name
#   end

#   def self.generic_greeting
#     puts "Hello! I'm a cat."
#   end

#   def personal_greeting
#     puts "Hello! My name is #{name}"
#   end

#   def rename(name)
#     self.name = name
#   end


# end

# kitty = Cat.new("Sophie")
# Cat.ca

# class Cat
#   COLOR = 'purple'
#   @@number_of_cats = 0

#   def initialize(name)
#     @name = name
#     @@number_of_cats += 1
#   end

#   def greet
#     puts "Hello! My name is #{@name} and I'm a #{COLOR} cat"
#   end

#   def self.total
#     puts @@number_of_cats
#   end
# end

# kitty1 = Cat.new('Sophie')
# kitty1.greet

# class Cat
#   attr_reader :name

#   def initialize(name)
#     @name = name
#   end

#   def to_s
#     "I'm #{name}"
#   end
# end

# kitty = Cat.new('Sophie')
# puts kitty

# class Person
#   def secret=(n)
#     @secret = n
#   end

#   def secret
#     @secret
#   end
# end


# person1 = Person.new
# person1.secret = 'Shh.. this is a secret!'
# puts person1.secret

# class Person
#   attr_writer :secret

#   def share_secret
#     puts secret
#   end

#   private

#   attr_reader :secret
# end

# person1 = Person.new
# person1.secret = 'Shh.. this is a secret!'
# person1.share_secret

class Person
  attr_writer :secret

  def compare_secret(other_object)
    puts secret == other_object.secret
  end

  protected

  attr_reader :secret
end

person1 = Person.new
person1.secret = 'Shh.. this is a secret!'

person2 = Person.new
person2.secret = 'Shh.. this is a different secret!'

person1.compare_secret(person2)














