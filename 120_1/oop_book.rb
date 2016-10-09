# module Siri
#   def Siri(respond)
#     puts respond
#   end
# end

# class MacBook
#   include Siri
# end

# pro = MacBook.new

# class GoodDog
#   attr_accessor :name

#   def initialize(name)
#     @name = name
#   end

#   def speak
#     "#{@name} says Arf!"
#   end
# end

# sparky = GoodDog.new('Sparky')
# puts sparky.speak
# puts sparky.name
# sparky.name = 'NotSparky'
# puts sparky.name

# fido = GoodDog.new('Fido')
# puts fido.speak

# class MyCar
#   attr_accessor :color
#   attr_reader :year

#   def initialize(year, color, model)
#     @year = year
#     @color = color
#     @model = model
#     @speed = 0
#   end

#   def self.calculate_mileage(miles, gallons)
#     puts "#{miles / gallons} miles per gallon of gas"
#   end

#   def speed_up(number)
#     @speed += number
#     puts "Speed up #{number}"
#   end

#   def brake(number)
#     @speed -= number
#     puts "Slow down to #{speed}"
#   end

#   def current_speed
#     puts "Current speed is #{@speed}"
#   end

#   def shut_off(number)
#     @speed = 0
#     puts "Stop at #{@speed}"
#   end

#   def spray_paint(color)
#     self.color = color
#   end

#   def to_s
#     puts 'Hi'
#   end
# end

# tesla = MyCar.new('2222', 'red', 'model_s')
# # tesla.speed_up(90)
# # tesla.current_speed
# # p tesla.color
# # tesla.spray_paint('silver')
# # p tesla.color

# MyCar.calculate_mileage(5, 2.5)
# puts tesla

# class Animal
#   def initialize(name)
#     self.name = name
#   end

#   def speak
#     "Hello"
#   end
# end

# class GoodDog < Animal
#   attr_accessor :color, :name

#   def initialize(color, name)
#     super(name)
#     self.color = color
#   end
# end

# class Cat < Animal
# end

# my_dog = GoodDog.new('red', 'Riddle')
# # my_cat = Cat.new
# p my_dog.color
# p my_dog.name

# module Swimmable
#   def swim
#     "I'm swimming"
#   end
# end

# module Walkable
#   def walk
#     "I'm walking"
#   end
# end

# module Climbable
#   def climb
#     "I'm climbing"
#   end
# end

# class Animal
#   include Walkable

#   def speak
#     "I'm an animal, and I speak."
#   end
# end

# class Fish < Animal
#   include Swimmable
# end

# class Mammal < Animal
# end

# class Cat < Mammal
# end

# class GoodDog < Animal
#   include Swimmable
#   include Climbable
# end

# sparky = GoodDog.new
# nemo = Fish.new
# paws = Cat.new

# puts GoodDog.ancestors

# class Vehicle
#   attr_accessor :color
#   attr_reader :year, :model

#   @@counter = 0

#   def initialize(year, color, model)
#     @year = year
#     @color = color
#     @model = model
#     @speed = 0
#     @@counter += 1
#   end

#   def speed_up(number)
#     @speed += number
#     puts "Speed up #{number}"
#   end

#   def brake(number)
#     @speed -= number
#     puts "Slow down to #{speed}"
#   end

#   def current_speed
#     puts "Current speed is #{@speed}"
#   end

#   def shut_off(number)
#     @speed = 0
#     puts "Stop at #{@speed}"
#   end

#   def spray_paint(color)
#     self.color = color
#   end

#   def self.object_number
#     puts @@counter
#   end

#   def self.calculate_mileage(miles, gallons)
#     puts "#{miles / gallons} miles per gallon of gas"
#   end

#   def car_age
#     puts "The age of the car is #{age}"
#   end

#   private

#   def age
#     Time.now.year - year 
#   end
# end

# module Transformable
#   def transform
#     puts "I'm transforming"
#   end
# end

# class MyCar < Vehicle
#   def initialize(year, color, model)
#     super(year, color, model)
#   end

#   RIDDLE = "I'm special!!!"
# end

# class MyTruck < Vehicle
#   include Transformable

#   def initialize(year, color, model)
#     super(year, color, model)
#   end

#   RIDDLE = "I can transform!"
# end

# tesla = MyCar.new(2000, 'red', 'Model')
# puts tesla
# optimus_prime = MyTruck.new(1800, 'blue', '1')
# optimus_prime.transform

# tesla.spray_paint('blue')
# p tesla
# tesla.speed_up(90)

# Vehicle.object_number

# tesla.car_age
# optimus_prime.car_age

# puts "---MyTruck method lookup---"
# puts MyTruck.ancestors
# puts ' '
# puts MyCar.ancestors
# puts ' '
# puts Vehicle.ancestors

# class Student
#   def initialize(name, grade)
#     @name = name
#     @grade = grade
#   end

#   def better_grade_than?(other_object)
#     @grade > 
#   end

#   protected

#   def grade
#     @grade
#   end
# end

# bob = Student.new('bob', 60)
# bob.times

# p bob

# class Animal
#   attr_accessor :name

#   def initialize(name)
#     @name = name
#   end
# end

# class GoodDog < Animal
#   def initialize(color, fur)
#     super
#     @color = color
#     @fur = fur
#   end
# end

# bruno = GoodDog.new("brown", 'curly')


