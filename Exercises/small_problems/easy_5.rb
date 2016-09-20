require 'pry'
# # 1
# def ascii_value(string)
#   # string.delete!('^0-9a-zA-Z')
#   value_array = string.chars.map {|c| c.ord}
#   value_array.inject(:+)
# end

# p ascii_value('Four score')
# p ascii_value('Launch School') == 1251
# p ascii_value('a') == 97
# p ascii_value('')

# # 2
# def time_of_day(time)
#   a = 0
#   b = 0
#   if time >= 0
#     a, b = time.divmod(60)
#     a = a % 24
#   else
#     time = -time
#     a, b = time.divmod(60)
#     a = 23 - a % 24
#     b = 60 - b
#   end
#   binding.pry
# end

# solution
# MINUTES_PER_HOUR = 60
# HOURS_PER_DAY = 24
# MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY

# def time_of_day(delta_minutes)
#   delta_minutes = delta_minutes % MINUTES_PER_DAY
#   hour, minute = delta_minutes.divmod(60)
#   format('%02d:%02d', hour, minute)
# end

# p time_of_day(-4231)

# # 2
# MINUTES_PER_HOUR = 60
# HOURS_PER_DAY = 24
# MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY

# def after_midnight(time_str)
#   hours, minutes = time_str.split(':').map(&:to_i)
#   (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY
# end

# def before_midnight(time_str)
#   delta_minutes = MINUTES_PER_DAY - after_midnight(time_str)
#   delta_minutes = 0 if delta_minutes == 1440
#   delta_minutes
# end

# p after_midnight('00:00')
# p before_midnight('00:00')
# p after_midnight('12:34')
# p before_midnight('12:34')
# p after_midnight('24:00')
# p before_midnight('24:00')

# # 3
# def swap(words)
#   array_of_words = words.split(' ')
#   reversed = []
#   array_of_words.each do |word|
#     first = word[0]
#     last = word[-1]
#     word[0] = last
#     word[-1] = first
#     reversed << word
#   end
#   reversed
# end

# p swap('abcde')

# # 4
# def cleanup(string)
#   string.gsub(/[^a-z]/i, ' ').squeeze
# end

# p cleanup("---what's my +*& line?") == ' what s my line '

# exploration
# def cleanup(string)
#   result = ''
#   string.each_char do |c|
#     if ('a'..'z').cover?(c) || ('A'..'Z').cover?(c)
#       result << c
#     else
#       result << ' '
#     end
#   end
#   result.squeeze
# end

# p cleanup("---what's my +*& line?")

# # 5
# def word_sizes(words)
#   size_containor = {}
#   words.split.each do |word|
#     key = word.scan(/./).count
#     if size_containor.keys.include?(key)
#       size_containor[key] += 1
#     else
#       size_containor[key] = 1
#     end
#   end
#   size_containor
# end

# solution

# def word_sizes(words_string)
#   counts = Hash.new(0)
#   words_string.split.each {|word| counts[word.size] += 1}
#   counts
# end

# p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
# p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
# p word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
# p word_sizes('') == {}

# # 6
# def word_sizes(words_string)
#   counts = Hash.new(0)
#   words_string.delete!('^0-9a-zA-Z ')
#   binding.pry
#   words_string.split.each {|word| counts[word.size] += 1}
#   counts
# end
# p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2}

# # 7
# NUMBER_ENGLISH = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

# def alphabetic_number_sort()
#   NUMBER_ENGLISH.sort.map {|word| NUMBER_ENGLISH.index(word)}
# end

# p alphabetic_number_sort == [
#   8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
#   6, 16, 10, 13, 3, 12, 2, 0
# ]

# solution
# NUMBER_WORDS = %w(zero one two three four
#                   five six seven eight nine
#                   ten eleven twelve thirteen fourteen
#                   fifteen sixteen seventeen eighteen nineteen)

# def alphabetic_number_sort(numbers)
#   numbers.sort_by { |number| NUMBER_WORDS[number].length }
# end

# NUMBER_WORDS = %w(zero one two three four
#                   five six seven eight nine
#                   ten eleven twelve thirteen fourteen
#                   fifteen sixteen seventeen eighteen nineteen)

# def alphabetic_number_sort(numbers)
#   numbers.sort_by { |number| NUMBER_WORDS[number] }
# end

# p alphabetic_number_sort((0..19).to_a)

# # 8
# def crunch(string)
#   containor = ''
#   string.each_char do |c|
#     containor << c if c != containor[-1]
#   end
#   containor
# end

# p crunch('ddaaiillyy ddoouubbllee') == 'daily double'
# p crunch('4444abcabccba') == '4abcabcba'
# p crunch('ggggggggggggggg') == 'g'
# p crunch('a') == 'a'
# p crunch('') == ''

# # 9
# def print_in_box(string)
#   line_length = string.length + 2
#   puts "+#{'-'*line_length}+"
#   puts "|#{' '*line_length}|"
#   puts "| #{string} |"
#   puts "|#{' '*line_length}|"
#   puts "+#{'-'*line_length}+"
# end
# p print_in_box('To boldly go where no one has gone before.')
# def crunch(words)
#     words.squeeze()
# end
      
# p crunch('ddaaiillyy ddoouubbllee')
# p crunch('4444abcabccba')
# p crunch('ggggggggggggggg')
# p crunch('a')
# p crunch('')