# 1
# class Oracle
#   def predict_the_future
#     "You will " + choice.sample
#   end

#   def choice
#     ["eat a nice lunch", "take a nap soon", "stay at work late"]
#   end
# end

# oracle = Oracle.new
# puts oracle.predict_the_future

# 2
# each time you call, a string is returned which will be of the form "You will <something>", <something> is one of the phrases defined
# in the instance method of choice in RoadTrip class.

# 7

# class Cat
#   @@cats_count = 0

#   def initialize(type)
#     @type = type
#     @age = 0
#     @@cats_count += 1
#   end

#   def self.cats_count
#     @@cats_count
#   end
# end

# Cat.new('type1')
# Cat.new('type2')

# p Cat.cats_count

# 9

# The instance method play in the sub-class will override the the play in
# super-class, which means every time when play is called on the object of
# Bingo class, 