require 'pry'
# 2
# def compute(x)
#   block_given? ? yield(x) : 'Does not compute.'
# end

# p compute(1) { |x| 5 + 3 + x} #== 8
# p compute(2) { |x| 'a' + 'b' + x.to_s}# == 'ab'
# p compute(3) == 'Does not compute.'

# 3
# def missing(array)
#   (array.min..array.max).select do |ele1|
#     array.none? { |ele| ele == ele1 }
#   end
# end

# p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
# p missing([1, 2, 3, 4]) == []
# p missing([1, 5]) == [2, 3, 4]
# p missing([6]) == []

# 4
# def divisors(num)
#   (1..num).select { |div| num % div == 0 }
# end
# require 'prime'

# def divisors(num)
#   factorization = Prime.prime_division(num)


  # array = factorization.unshift([1, 1])

  # result = []
  # array.each_with_index do |product, index|
  #   (index+1...array.size).each do |i|
  #     (0..product.last).each do |ex1|
  #       (1..array[i].last).each do |ex2|
  #         result << product.first ** ex1 * array[i].first ** ex2
  #       end
  #     end
  #   end
  # end

  # result.uniq.sort

# end
# require 'prime'

# def div(num)
#   divisors = []
#   primes = Prime.prime_division(num)
#   base_primes = primes.map{ |arr| arr[0] }
#   exponents = get_exponents(primes.map{ |arr| arr[1] })
#   exponents.each { |arr| divisors << to_factor(base_primes, arr) }
#   divisors.sort
# end

# def to_factor(base_primes, exponents)
#   base_primes.zip(exponents).inject(1) do |product, arr|
#     product * (arr[0]**arr[1])
#   end
# end

# def get_exponents(max_arr)
#   exp_arr = []
#   (0..max_arr.first).each { |n| exp_arr << [n] }
#   max_arr[1..-1].each do |next_max|
#     exp_arr = cart_product(exp_arr, next_max)
#   end
#   exp_arr
# end

# def cart_product(pt_arrays, next_max)
#   product_arrays = []
#   (0..next_max).each do |coord|
#     pt_arrays.each do |pt_arr|
#       product_arrays << (pt_arr + [coord])
#     end
#   end
#   product_arrays
# end


# p each_product([1, 2, 3, 4, 5])

# def find_4
#   (1..999999).select { |num| Prime.prime_division(num).size > 3 }
# end

# p divisors(9804)# == [1]
# p divisors(7) == [1, 7]
# p divisors(12) #== [1, 2, 3, 4, 6, 12]
# p divisors(98)# == [1, 2, 7, 14, 49, 98]
# p divisors(994008919999)# == [1, 9967, 9973, 99400891] 

#
# E = %w(
# Nqn Ybirynpr
# Tenpr Ubccre
# Nqryr Tbyqfgvar
# Nyna Ghevat
# Puneyrf Onoontr
# Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
# Wbua Ngnanfbss
# Ybvf Unyog
# Pynhqr Funaaba
# Fgrir Wbof
# Ovyy Tngrf
# Gvz Orearef-Yrr
# Fgrir Jbmavnx
# Xbaenq Mhfr
# Wbua Ngnanfbss
# Fve Nagbal Ubner
# Zneiva Zvafxl
# Lhxvuveb Zngfhzbgb
# Unllvz Fybavzfxv
# Tregehqr Oynapu)

# def decipher(encrypted_name)
#   encrypted_name.each_char.reduce('') do |result, char|
#     result << rot13(char)
#   end
# end

# def rot13(char)
#   case char
#   when 'a'..'m', 'A'..'M' then (char.ord + 13).chr
#   when 'n'..'z', 'N'..'Z' then (char.ord - 13).chr
#   else char
#   end
# end

# E.each do |encrypted_name|
#   puts decipher(encrypted_name)
# end

# def all?(array)
#   # return false if array.empty?

#   array.each do |value|
#     return false unless yield(value)
#   end

#   true
# end

# p all?([1, 3, 5, 6]) { |value| value.odd? } == false
# p all?([1, 3, 5, 7]) { |value| value.odd? } == true
# p all?([2, 4, 6, 8]) { |value| value.even? } == true
# p all?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
# p all?([1, 3, 5, 7]) { |value| true } == true
# p all?([1, 3, 5, 7]) { |value| false } == false
# p all?([]) { |value| false } == true

# def none?(array)
#   array.each do |value|
#     return false if yield(value)
#   end

#   true
# end

# p none?([1, 3, 5, 6]) { |value| value.even? } == false
# p none?([1, 3, 5, 7]) { |value| value.even? } == true
# p none?([2, 4, 6, 8]) { |value| value.odd? } == true
# p none?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
# p none?([1, 3, 5, 7]) { |value| true } == false
# p none?([1, 3, 5, 7]) { |value| false } == true
# p none?([]) { |value| true } == true

# def one?(array)
#   count = 0
#   array.each do |value|
#     count += 1 if yield(value)
#     return false if count > 1
#   end

#   count == 0 ? false : true
# end

# p one?([1, 3, 5, 6]) { |value| value.even? }    # -> true
# p one?([1, 3, 5, 7]) { |value| value.odd? }     # -> false
# p one?([2, 4, 6, 8]) { |value| value.even? }    # -> false
# p one?([1, 3, 5, 7]) { |value| value % 5 == 0 } # -> true
# p one?([1, 3, 5, 7]) { |value| true }           # -> false
# p one?([1, 3, 5, 7]) { |value| false }          # -> false
# p one?([]) { |value| true }  

def count(array)
  count = 0
  0.upto(array.size - 1) do |index|
    count += 1 if yield(array[index])
  end
  count
end

p count([1,2,3,4,5]) { |value| value.odd? } == 3
p count([1,2,3,4,5]) { |value| value % 3 == 1 } == 2
p count([1,2,3,4,5]) { |value| true } == 5
p count([1,2,3,4,5]) { |value| false } == 0
p count([]) { |value| value.even? } == 0
p count(%w(Four score and seven)) { |value| value.size == 5 } == 2