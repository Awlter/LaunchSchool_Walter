class BullDog
  def speak
    'bark!'
  end

  def swim
    "can't swim!"
  end
end

class Cat
  def speak
    'meow'
  end
end

class Person
  attr_accessor :name, :pets

  def initialize(name)
    @name = name
    @pets = []
  end

  def heros
    @heros.join(' ')
  end
end

bob = Person.new("Bob")
bud = BullDog.new
kitty = Cat.new

bob.pets << bud
bob.pets << kitty

bob.pets.each { |pet| p pet.speak }