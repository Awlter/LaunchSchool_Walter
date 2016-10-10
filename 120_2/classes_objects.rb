# 1
=begin
bob = Person.new('bob')
bob.name                  # => 'bob'
bob.name = 'Robert'
bob.name    
=end

# class Person
#   attr_accessor :name

#   def initialize(name)
#     @name = name
#   end
# end

# bob = Person.new('bob')

# 2
=begin
bob = Person.new('Robert')
bob.name                  # => 'Robert'
bob.first_name            # => 'Robert'
bob.last_name             # => ''
bob.last_name = 'Smith'
bob.name                  # => 'Robert Smith'
=end

# class Person
#   attr_accessor :first_name, :last_name

#   def initialize(first_name, last_name='')
#     @first_name = first_name
#     @last_name = last_name
#   end

#   def name
#     self.first_name + ' ' + self.last_name
#   end

# end

# class Person
#   attr_accessor :first_name, :last_name

#   def initialize(fullname)
#     parts = fullname.split
#     @first_name = parts.first
#     @last_name = parts.size > 1 ? parts.last : ' '
#   end

#   def name
#     "#{first_name} #{last_name}".strip
#   end
# end

# bob = Person.new('Robert')
# p bob.name
# p bob.first_name            # => 'Robert'
# p bob.last_name             # => ''
# bob.last_name = 'Smith'
# p bob.name 

# 3
=begin
bob = Person.new('Robert')
bob.name                  # => 'Robert'
bob.first_name            # => 'Robert'
bob.last_name             # => ''
bob.last_name = 'Smith'
bob.name                  # => 'Robert Smith'

bob.name = "John Adams"
bob.first_name            # => 'John'
bob.last_name             # => 'Adams'
=end

# class Person
#   attr_accessor :first_name, :last_name

#   def initialize(fullname)
#     parse_full_name(fullname)    
#   end

#   def name
#     "#{first_name} #{last_name}".strip
#   end

#   def name=(fullname)
#     parse_full_name(fullname)
#   end

#   def same_name?(other_object)
#     name == other_object.name
#   end

#   private

#   def parse_full_name(fullname)
#     parts = fullname.split
#     @first_name = parts.first
#     @last_name = parts.size > 1 ? parts.last : ''
#   end
# end

# bob = Person.new('Robert Smith')
# rob = Person.new('Robert Smith')
# p bob.same_name?(rob)

# p bob.name                  # => 'Robert'
# p bob.first_name            # => 'Robert'
# p bob.last_name             # => ''
# bob.last_name = 'Smith'
# p bob.name                  # => 'Robert Smith'

# bob.name = "John Adams"
# p bob.first_name            # => 'John'
# p bob.last_name             # => 'Adams'





















