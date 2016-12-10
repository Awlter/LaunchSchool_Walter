class Series
  def initialize(digits)
    @digits = digits.chars.map(&:to_i)
    @size = digits.size
  end

  def slices(n)
    raise ArgumentError, 'Blow up' if n > @size

    @digits.each_cons(n).to_a
    # (0..@size - n).map do |position|
    #   @digits[position, n]
    # end
  end
end
