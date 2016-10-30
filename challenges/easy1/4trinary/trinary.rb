class Trinary
  attr_reader :trinary

  def initialize(number)
    @trinary = number.chars
  end

  def to_decimal 
    return 0 if trinary.any? { |num| num =~ /[^0-2]/}

    @trinary
    .reverse_each
    .with_index
    .map { |digit, index| digit.to_i * 3 ** index }
    .inject(:+)
    .to_i
  end
end