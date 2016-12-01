# def dot_separated_ip_address?(input_string)
#   dot_separated_words = input_string.split(".")
#   if dot_separated_words.count == 4
#     dot_separated_words.each do |num|
#       return "if false" if true
#     end
#     "end true"
#   else
#     "else"
#   end
# end

# def reverse(string)
#   new_string_array = []
#   string.split('').each do |character|
#     new_string_array.unshift(character)
#   end
#   new_string_array.join()
# end

# p reverse("abcd")

# def reverse(string)
#   new_string = ''
#   string_array = string.split('')
#   while !string_array.empty?
#     new_string += string_array.pop
#   end
#   new_string
# end

# p reverse("abcd")
# def prompt(msg)
#   puts "=> #{msg}"
# end

# def fizzbuzz(num1, num2)
#   new_array = []
#   (num1..num2).each do |num|
#     if num % 3 == 0 && num % 5 != 0
#       new_array.push('Fizz')
#     elsif num % 3 != 0 && num % 5 == 0
#       new_array.push('Buzz')
#     elsif num % 3 == 0 && num % 5 == 0
#       new_array.push('Fizzbuzz')
#     else
#       new_array.push(num)
#     end
#   end
#   p new_array
# end

# fizzbuzz(1, 15)

# PRODUCTS = [
#   { name: "Thinkpad x210", price: 220},
#   { name: "Thinkpad x210", price: 230},
#   { name: "Thinkpad x210", price: 240},
#   { name: "Thinkpad x210", price: 250},
#   { name: "Thinkpad x210", price: 260},
#   { name: "Thinkdell x210", price: 230},
#   { name: "Thinkdell x210", price: 240},
#   { name: "Thinkdell x210", price: 250},
#   { name: "Thinkdell x210", price: 260},
#   { name: "Thinkdell x210", price: 270},


# ]

# query = {
#   price_min: 240,
#   price_max: 260,
#   q: 'pad'
# }

# query2 = {
#   price_min: 250,
#   price_max: 270,
#   q: 'dell'
# }

# def search(query)
#   result = PRODUCTS.select do |product|
#     product[:name].downcase.include?(query[:q]) &&
#     product[:price] < query[:price_max] &&
#     product[:price] > query[:price_min]
#   end
#   p result
# end

# search(query)

# search(query2)

# def check_parentheses_balance(string)
#   if string.scan(/./).shift == ')'
#     false
#   elsif string.scan(/./).include?('(') &&
#     string.scan(/./).include?(')')
#     true
#   elsif !string.scan(/./).include?('(') &&
#     !string.scan(/./).include?(')')
#     true
#   else
#     false
#   end
# end

# p check_parentheses_balance("(hi")
# p check_parentheses_balance("hi")
# p check_parentheses_balance("hi)")
# p check_parentheses_balance("(hi)")
# p check_parentheses_balance(")hi(")

# def find_primes(num1, num2)
#   (num1..num2).select do |num|
#     num_dividers = 0
#     divider = num
#     while num != 0
#       num_dividers += 1 if divider % num == 0
#       num -= 1
#     end
#     num_dividers == 2
#   end
# end

# p find_primes(3, 10)

# a = 0

# result = while true do
#   p a
#   a += 1

#   break if a < 10
# end

# p a
# p result

result = while true
  break
end
p result
