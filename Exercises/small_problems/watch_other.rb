require 'pry'
# def is_prime?(integer)
#   (2...integer).none? { |factor| integer % factor == 0 }
# end

# def select_primes(array)
#   array.select { |integer| is_prime?(integer) }
# end

# p select_primes([1, 2, 3, 4, 5, 6])

# def substring(string, first, last = nil)
#   return string[first] unless last
#   last = string.length if last > string.length
#   first = 0 if first < 0
#   string[first..last]
# end

# def all_substring(string)
#   result = []

#   # (0...string.length - 1).each do |first|
#   #   (first + 1..string.length).each do |last|
#   #     result << substring(string, first, last)
#   #   end
#   # end

#   (0...string.length-1).each do |first|
#     last = first + 1
#     while last <= string.length
#       result << substring(string, first, last)
#       last += 1
#     end
#   end

#   result
# end

# p all_substring('world')
# def compute(command)
#   first = command[0].to_i
#   second = command[2].to_i

#   case command[1]
#   when 'plus' then first + second
#   when 'minus' then first - second
#   when 'times' then first * second
#   when 'divided' then first / second
#   end
# end

# def computer(command)
#   hash = {
#     'one' => 1, 'two' => 2, 'three' => 3, 'four' => 4,
#     'five' => 5, 'six' => 6, 'seven' => 7, 'eight' => 8,
#     'nine' => 9, 'zero' => 0
#   }

#   hash.keys.each do |word|
#     command.gsub!(/#{word}/, hash[word].to_s )
#   end

#   command.delete!('by')

#   result = command.split

#   result.each_with_index do |word, indx|
#     if ['times', 'divided'].include?(word)
#     result.insert(indx - 1, compute(result.slice!(indx-1, 3)))
#     end
#   end

#   while result.size > 1
#     result.unshift(compute(result.slice!(0, 3)))
#   end

#   result[0]
# end

# # p computer ("five plus seven minus two plus zero minus two")
# # p computer ("seven plus six minus five minus eight minus eight mutiply two")

# p computer ("eight times four plus six divided by two minus two times two times two times two times two")

# require 'date'

# def friday_13th?(year)
#   date = Date.new(year, 1, 13)

#   collector = []

#   while date.mon < 12
#     collector << date
#     date = date.next_month
#   end

#   collector.count { |date| date.friday? }
# end

# p friday_13th?(1986)
# NUMBER = %w(one two three four five six seven eight nine ten)
# OPERATION = %w(plus minus times divided\ by)

# def mathphase(length)
#   result = [NUMBER.sample]

#   number = NUMBER.sample(length)
#   operation = OPERATION.sample(length)

#   result << operation.zip(number).flatten

#   result.join(' ')
# end

# p mathphase(4)





