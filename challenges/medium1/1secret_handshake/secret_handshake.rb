require 'pry'
class SecretHandshake
  SECRET = {
    1 => 'wink',
    10 => 'double blink',
    100 => 'close your eyes',
    1000 => 'jump'
  }.freeze

  def initialize(num)
    @num = num.to_s(2)
  end

  def commands
    result = []

    reverse = @num.chars.reverse_each.with_index do |num, indx|
      key = 10 ** indx
      break(true) if num == '1' && key == 10000
      result << SECRET[key] if num == '1'
    end

    reverse == true ? result.reverse : result
  end
end

p SecretHandshake.new(3).commands # => 10011


  # def commands
  #   result = []

  #   max = @num.to_s.size
  #   (1...max).each do |e|
  #     if @num % 10 ** e == 10 ** (e - 1)
  #       result << SECRET[10 ** (e - 1)]
  #       @num -= 10 ** (e - 1)
  #     end
  #   end

  #   result
  # end