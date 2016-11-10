class PerfectNumber
  def self.classify(num)
    divisors = (1...num).select { |divisor| num % divisor == 0 }
    sum = divisors.reduce(:+)

    if sum > num
      'abundant'
    elsif sum < num
      'deficient'
    else
      'perfect'
    end
  end
end