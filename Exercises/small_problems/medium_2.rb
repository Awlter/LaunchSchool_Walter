require 'pry'
require 'date'
# 1
# def longest_sentence(txt)
#   max_count = 0
#   position = 0
#   txt.split(/[.!?]/).each_with_index do |sentence, index|
#     if sentence.split.count > max_count
#       max_count = sentence.split.count
#       position = index
#     end
#   end
#   puts max_count
#   puts position
# end

# solution

# def longest_sentence(txt)
#   longest = txt.split(/[!.?]/).max_by {|sentence| sentence.split.size}
#   p longest.strip
# end

# text = "Four score and seven years ago our fathers brought forth
# on this continent a new nation, conceived in liberty, and
# dedicated to the proposition that all men are created
# equal.

# Now we are engaged in a great civil war, testing whether
# that nation, or any nation so conceived and so dedicated,
# can long endure. We are met on a great battlefield of that
# war. We have come to dedicate a portion of that field, as
# a final resting place for those who here gave their lives
# that that nation might live. It is altogether fitting and
# proper that we should do this.

# But, in a larger sense, we can not dedicate, we can not
# consecrate, we can not hallow this ground. The brave
# men, living and dead, who struggled here, have
# consecrated it, far above our poor power to add or
# detract. The world will little note, nor long remember
# what we say here, but it can never forget what they
# did here. It is for us the living, rather, to be dedicated
# here to the unfinished work which they who fought
# here have thus far so nobly advanced. It is rather for
# us to be here dedicated to the great task remaining
# before us -- that from these honored dead we take
# increased devotion to that cause for which they gave
# the last full measure of devotion -- that we here highly
# resolve that these dead shall not have died in vain
# -- that this nation, under God, shall have a new birth
# of freedom -- and that government of the people, by
# the people, for the people, shall not perish from the
# earth."

# longest_sentence(text)

# 2
# BLOCK_HASH = {
#   'B' => 'O', 'X' => 'K', 'D' => 'Q', 'C' => 'P', 'N' => 'A',
#   'G' => 'T', 'R' => 'E', 'F' => 'S', 'J' => 'W', 'H' => 'U',
#   'V' => 'I', 'L' => 'Y', 'Z' => 'M'
# }

# def block_word?(string)
#   characters = string.upcase.chars
#   BLOCK_HASH.each do |left, right|
#     return false if characters.include?(left) && characters.include?(right)
#   end
#   true
# end

# solution
# BLOCKS = %w(BO XK DQ CP NA GT RE FS JW HU VI LY ZM).freeze

# def block_word?(string)
#   BLOCKS.each do |pair|
#     string.upcase.count(pair) >= 2
#   end
# p block_word?('BATCH') == true
# p block_word?('BUTCH') == false
# p block_word?('jest') == true

# 3
# def letter_percentages(string)
#   info_collector = Hash.new
#   info_collector[:lowercase] = string.count('a-z') 
#   info_collector[:uppercase] = string.count('A-Z')
#   info_collector[:neither] = string.count('^a-zA-z')
#   info_collector.each {|key, value| info_collector[key] = value.to_f / string.size * 100 }
# end

# p letter_percentages('abCdef 123') == { lowercase: 50, uppercase: 10, neither: 40 }
# p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25 }
# p letter_percentages('123') == { lowercase: 0, uppercase: 0, neither: 100 }

# 4
# def balanced?(string)
#   parentheses = string.scan(/[()]/)
#   return false if parentheses.count('(') != parentheses.count(')')

#   equal = 0
#   parentheses.each do |paren|
#     case paren
#     when '(' then equal += 1
#     when ')' then equal -= 1
#     end
#     return false if equal < 0
#   end
#   true
# end

# p balanced?('What (is) this?') == true
# p balanced?('What is) this?') == false
# p balanced?('What (is this?') == false
# p balanced?('((What) (is this))?') == true
# p balanced?('((What)) (is this))?') == false
# p balanced?('Hey!') == true
# p balanced?(')Hey!(') == false
# p balanced?('What ((is))) up(') == false

# 5
# def triangle(lateral1, lateral2, lateral3)
#   lateral = [lateral1, lateral2, lateral3]
#   lateral.sort!
#   return :invalid if lateral.first(2).inject(:+) <= lateral.last
#   return :equilateral if lateral.first == lateral.last
#   return :isosceles if lateral[0].eql?(lateral[1]) || lateral[1].eql?(lateral[2])
#   :scalene
# end

# solution
# def triangle(side1, side2, side3)
#   side = [side1, side2, side3]
#   side.sort!

#   case 
#   when 2 * side.last > side.inject(:+), side.include?(0)
#     :invalid
#   when side.first == side.last
#     :equilateral
#   when side[0] == side[1] || side[1] == side[2]
#     :isosceles
#   else
#     :scalene
#   end
# end

# p triangle(3, 3, 3) == :equilateral
# p triangle(3, 3, 1.5) == :isosceles
# p triangle(3, 4, 5) == :scalene
# p triangle(0, 3, 3) == :invalid
# p triangle(3, 1, 1) == :invalid

# 6
# def triangle(angle1, angle2, angle3)
#   angle = [angle1, angle2, angle3]
#   largest_angle = angle.max

#   case
#   when angle.inject(:+) != 180, angle.include?(0)
#     :invalid
#   when largest_angle == 90
#     :right
#   when largest_angle < 90
#     :acute
#   else
#     :obtuse
#   end
# end

# p triangle(60, 70, 50) == :acute
# p triangle(30, 90, 60) == :right
# p triangle(120, 50, 10) == :obtuse
# p triangle(0, 90, 90) == :invalid
# p triangle(50, 50, 50) == :invalid

# 7
# def friday_13th?(year)
#   number = 0
#   12.times do |index|
#     thirtheen = Date.new(year, 1 + index, 13)
#     number += 1 if thirtheen.friday?
#   end
#   number
# end

# p friday_13th?(2015) == 3
# p friday_13th?(1986) == 1

# 8
# def featured(number)
#   to_7 = 7 - number % 7
#   number = number + to_7

#   while number.even? || number.to_s.split('') != number.to_s.split('').uniq
#     number += 7
#   end

#   number
# end

# version

# def featured(number)
#   number += 1
#   loop do
#     break if number.odd? && number % 7 == 0
#     number += 1
#   end

#   loop do
#     number_array = number.to_s.split('')
#     return number if number_array == number_array.uniq
#     number += 14
#     break if number > 9_876_543_210
#   end

#   "Error"
# end

# p featured(12) == 21
# p featured(20) == 21
# p featured(21)
# p featured(997) == 1029
# p featured(1029) == 1043
# p featured(999_999) == 1_023_547
# p featured(999_999_987) == 1_023_456_987

# 9
# def bubble_sort!(array)
#   loop do
#     change = []
#     (array.size - 1).times do |index|
#       if array[index] > array[index + 1]
#         array[index], array[index + 1] = array[index + 1], array[index]
#         change << true
#       else
#         change << false
#       end
#     end
#     break if change.none?
#   end
#   nil
# end

# solution
# def bubble_sort!(array)
#   loop do
#     swapped = false
#     1.upto(array.size - 1) do |index|
#       next if array[index - 1] < array[index]
#       array[index - 1], array[index] = array[index], array[index - 1]
#       swapped = true
#     end

#     break unless swapped
#   end
#   nil
# end

# array = [5, 3]
# bubble_sort!(array)
# p array == [3, 5]

# array = [6, 2, 7, 1, 4]
# bubble_sort!(array)
# p array == [1, 2, 4, 6, 7]

# array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
# bubble_sort!(array)
# p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)

# 10
def sum_square_difference(number)
  sum_square = (1..number).to_a.inject(:+)**2
  square_sum = (1..number).to_a.map {|num| num ** 2}.inject(:+)
  sum_square - square_sum
end



p sum_square_difference(3) == 22
#    # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150