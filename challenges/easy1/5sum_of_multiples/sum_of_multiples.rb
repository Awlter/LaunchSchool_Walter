class SumOfMultiples
  attr_reader :numbers

  def initialize(*numbers)
    @numbers = numbers
  end

  def to(number)
    self.class.to(number, numbers)
  end

  def self.to(number, numbers = [3, 5])
    (0...number).select { |num| numbers.any? { |n| num % n == 0}}
    .inject(:+)
  end
end