class Pet
  attr_reader :species, :name

  def initialize(species, name)
    @species = species
    @name = name
  end

  def to_s
    "a #{species} named #{name}."
  end
end

class Owner
  attr_reader :name, :pets

  def initialize(name)
    @name = name
    @pets = []
  end

  def add(pet)
    @pets << pet
  end

  def number_of_pets
    @pets.size
  end

  def print_pets
    pets.each do |pet|
      puts pet
    end
  end
end

class Shelter
  def initialize
    @owners = []
    @pets = []
  end

  def adopt(owner, pet)
    owner.add(pet)
    @owners << owner
  end

  def add(pet)
    @pets << pet
  end

  def print_unadoptions
    puts "The Animal Shelter has the following unadopted pets:"
    @pets.each do |pet|
      puts pet
    end
    puts ''
  end

  def print_adoptions
    @owners.uniq.each do |owner|
      puts "#{owner.name} has adopted the following pets"
      owner.print_pets
      puts ''
    end
  end
end

butterscotch = Pet.new('cat', 'Butterscotch')
pudding      = Pet.new('cat', 'Pudding')
darwin       = Pet.new('bearded dragon', 'Darwin')
kennedy      = Pet.new('dog', 'Kennedy')
sweetie      = Pet.new('parakeet', 'Sweetie Pie')
molly        = Pet.new('dog', 'Molly')
chester      = Pet.new('fish', 'Chester')

phanson = Owner.new('P Hanson')
bholmes = Owner.new('B Holmes')

shelter = Shelter.new
shelter.adopt(phanson, butterscotch)
shelter.add(pudding)
shelter.add(darwin)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, sweetie)
shelter.add(molly)
shelter.add(chester)
shelter.print_adoptions
shelter.print_unadoptions
puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."