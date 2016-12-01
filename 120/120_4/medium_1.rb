# 1
# Ben is right because he added attr_reader :balance at the begining of the class, which can be used
# as the instance method below:
# def balance
#   @balance
# end
# so prefix @ is not needed when we want to get instance variable balance

# 4
# class Greeting
#   def greet(msg)
#     puts msg
#   end
# end

# class Hello < Greeting
#   def hi
#     "Hello"
#   end
# end

# class Goodbye < Greeting
#   def bye
#     "Goodbye"
#   end
# end

# hello = Hello.new
# goodbye = Goodbye.new

# hello.greet(hello.hi)

class KrispyKreme
  def initialize(filling_type, glazing)
    @filling_type = filling_type
    @glazing = glazing
  end

  def to_s
    @filling_type = "Plain" if @filling_type == nil
    return @filling_type if @glazing == nil
    return "#{@filling_type} with #{@glazing}"
  end
end

donut1 = KrispyKreme.new(nil, nil)
donut2 = KrispyKreme.new("Vanilla", nil)
donut3 = KrispyKreme.new(nil, "sugar")
donut4 = KrispyKreme.new(nil, "chocolate sprinkles")
donut5 = KrispyKreme.new("Custard", "icing")

puts donut1
  # => "Plain"

puts donut2
  # => "Vanilla"

puts donut3
  # => "Plain with sugar"

puts donut4
  # => "Plain with chocolate sprinkles"

puts donut5
  # => "Custard with icing"























