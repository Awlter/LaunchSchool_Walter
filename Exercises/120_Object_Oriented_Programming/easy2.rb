require 'pry'

# class House
#   attr_reader :price
#   # include Comparable

#   def initialize(price)
#     @price = price
#   end

#   def <=>(other)
#     price <=> other.price
#   end

  # def > (other_home)
  #   if price > other_home.price
  #     true
  #   else
  #     false
  #   end
  # end

  # def < (other_home)
  #   if price < other_home.price
  #     true
  #   else
  #     false
  #   end
  # end
# end

# home1 = House.new(100_000)
# home2 = House.new(150_000)
# puts "Home 1 is cheaper" if home1 < home2
# puts "Home 2 is more expensive" if home2 > home1

#
# class Transform
#   def initialize(string)
#     @string = string
#   end

#   def uppercase
#     @string.upcase
#   end

#   def self.lowercase(string)
#     string.downcase
#   end
# end



# my_data = Transform.new('abc')
# puts my_data.uppercase
# puts Transform.lowercase('XYZ')

#

# class Wallet
#   include Comparable

#   def initialize(amount)
#     @amount = amount
#   end

#   def <=>(other_wallet)
#     amount <=> other_wallet.amount
#   end

#   protected

#   attr_reader :amount
# end

# bills_wallet = Wallet.new(500)
# pennys_wallet = Wallet.new(465)
# if bills_wallet > pennys_wallet
#   puts 'Bill has more money than Penny'
# elsif bills_wallet < pennys_wallet
#   puts 'Penny has more money than Bill'
# else
#   puts 'Bill and Penny have the same amount of money.'
# end

# my version
# class Pet
#   attr_reader :kind, :name

#   def initialize(kind, name)
#     @kind = kind
#     @name = name
#   end
# end

# class Owner
#   attr_accessor :pets, :name

#   def initialize(name)
#     @name = name
#     @pets = []
#   end

#   def number_of_pets
#     @pets.size
#   end
# end

# class Shelter
#   @@adoptions = []

#   def adopt(owner, pet)
#     owner.pets << pet
#     @@adoptions << owner unless @@adoptions.include? owner
#   end

#   def print_adoptions
#     @@adoptions.each do |owner|
#       puts "#{owner.name} has adopted the following pets:"
#       owner.pets.each do |pet|
#         puts "a #{pet.kind} named #{pet.name}"
#       end
#       puts ''
#     end
#   end
# end

# butterscotch = Pet.new('cat', 'Butterscotch')
# pudding      = Pet.new('cat', 'Pudding')
# darwin       = Pet.new('bearded dragon', 'Darwin')
# kennedy      = Pet.new('dog', 'Kennedy')
# sweetie      = Pet.new('parakeet', 'Sweetie Pie')
# molly        = Pet.new('dog', 'Molly')
# chester      = Pet.new('fish', 'Chester')

# phanson = Owner.new('P Hanson')
# bholmes = Owner.new('B Holmes')

# shelter = Shelter.new
# shelter.adopt(phanson, butterscotch)
# shelter.adopt(phanson, pudding)
# shelter.adopt(phanson, darwin)
# shelter.adopt(bholmes, kennedy)
# shelter.adopt(bholmes, sweetie)
# shelter.adopt(bholmes, molly)
# shelter.adopt(bholmes, chester)
# shelter.print_adoptions
# puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
# puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."

# revision 1

# class Pet
#   attr_reader :kind, :name

#   def initialize(kind, name)
#     @kind = kind
#     @name = name
#   end

#   def to_s
#     "a #{kind} named #{name}"
#   end
# end

# class Owner
#   attr_accessor :pets, :name

#   def initialize(name)
#     @name = name
#     @pets = []
#   end

#   def number_of_pets
#     @pets.size
#   end

#   def to_s
#     "#{name} has adopted the following pets:"
#   end
# end

# class Shelter
#   @@adoptions = []

#   def adopt(owner, pet)
#     owner.pets << pet
#     @@adoptions << owner unless @@adoptions.include? owner
#   end

#   def print_adoptions
#     @@adoptions.each do |owner|
#       puts owner
#       owner.pets.each do |pet|
#         puts pet
#       end
#       puts ''
#     end
#   end
# end

# butterscotch = Pet.new('cat', 'Butterscotch')
# pudding      = Pet.new('cat', 'Pudding')
# darwin       = Pet.new('bearded dragon', 'Darwin')
# kennedy      = Pet.new('dog', 'Kennedy')
# sweetie      = Pet.new('parakeet', 'Sweetie Pie')
# molly        = Pet.new('dog', 'Molly')
# chester      = Pet.new('fish', 'Chester')

# phanson = Owner.new('P Hanson')
# bholmes = Owner.new('B Holmes')

# shelter = Shelter.new
# shelter.adopt(phanson, butterscotch)
# shelter.adopt(phanson, pudding)
# shelter.adopt(phanson, darwin)
# shelter.adopt(bholmes, kennedy)
# shelter.adopt(bholmes, sweetie)
# shelter.adopt(bholmes, molly)
# shelter.adopt(bholmes, chester)
# shelter.print_adoptions
# puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
# puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."

# revision 2

# class Pet
#   attr_reader :kind, :name

#   def initialize(kind, name)
#     @kind = kind
#     @name = name
#   end

#   def to_s
#     "a #{kind} named #{name}"
#   end
# end

# class Owner
#   attr_accessor :pets, :name

#   def initialize(name)
#     @name = name
#     @pets = []
#   end

#   def add(pet)
#     self.pets << pet
#   end

#   def number_of_pets
#     @pets.size
#   end

#   def print_pets
#     pets.each do |pet|
#       puts pet
#     end
#   end

#   def to_s
#     "#{name} has adopted the following pets:"
#   end
# end

# class Shelter
#   # @@adoptions = []

#   # def adopt(owner, pet)
#   #   owner.pets << pet
#   #   @@adoptions << owner unless @@adoptions.include? owner
#   # end
#   def initialize
#     @owner = {}
#   end

#   def adopt(owner, pet)
#     owner.add(pet)
#     @owner[owner.name] ||= owner
#   end

#   def print_adoptions
#     @owner.each do |name, owner|
#       puts owner
#       owner.print_pets
#       puts ''
#     end
#   end
# end

# butterscotch = Pet.new('cat', 'Butterscotch')
# pudding      = Pet.new('cat', 'Pudding')
# darwin       = Pet.new('bearded dragon', 'Darwin')
# kennedy      = Pet.new('dog', 'Kennedy')
# sweetie      = Pet.new('parakeet', 'Sweetie Pie')
# molly        = Pet.new('dog', 'Molly')
# chester      = Pet.new('fish', 'Chester')

# phanson = Owner.new('P Hanson')
# bholmes = Owner.new('B Holmes')
# shelter_pet_list = Owner.new('The Animal Shelter')

# shelter = Shelter.new
# shelter.adopt(phanson, butterscotch)
# shelter.adopt(phanson, pudding)
# shelter.adopt(phanson, darwin)
# shelter.adopt(bholmes, kennedy)
# shelter.adopt(bholmes, sweetie)
# shelter.adopt(bholmes, molly)
# shelter.adopt(bholmes, chester)
# shelter.print_adoptions

# puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
# puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."

# asta = Pet.new('dog', 'Asta')

# shelter.adopt(shelter_pet_list, asta)
# shelter.print_adoptions
# puts "#{shelter_pet_list.name} has #{shelter_pet_list.number_of_pets} adopted pets."

# class Expander
#   def initialize(string)
#     @string = string
#   end

#   def to_s
#     self.expand(3)
#   end

#   protected

#   def expand(n)
#     @string * n
#   end
# end

# expander = Expander.new('xyz')
# puts expander

#
module Walkable
  def walk
    "#{name} #{gait} forward"
  end
end

class Person
  attr_reader :name

  include Walkable

  def initialize(name)
    @name = name
  end

  private

  def gait
    "strolls"
  end
end


class Cat
  attr_reader :name

  include Walkable

  def initialize(name)
    @name = name
  end

  private

  def gait
    "saunters"
  end
end

class Cheetah
  attr_reader :name

  include Walkable

  def initialize(name)
    @name = name
  end

  private

  def gait
    "runs"
  end
end

mike = Person.new("Mike")
puts mike.walk
# => "Mike strolls forward"

kitty = Cat.new("Kitty")
puts kitty.walk
# => "Kitty saunters forward"

flash = Cheetah.new("Flash")
puts flash.walk

class Noble < Person
  attr_reader :title

  def initialize(name, title)
    super(name)
    @title = title
  end

  private

  def gait
    "struts"
  end
end


byron = Noble.new("Byron", "Lord")
p byron.walk




















