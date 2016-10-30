class Octal
  def initialize(number)
    @number = number.chars
  end

  def octal_to_decimal
    return 0 unless valid?
    decimal = 0
    @number.reverse_each.with_index do |value, indx|
      decimal += value.to_i * 8 ** indx
    end
    p decimal
  end

  def valid?
    @number.map(&:to_i).all? { |num| (1..7).cover? num }
  end
end