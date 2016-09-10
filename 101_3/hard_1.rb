# question 4

# my version

# array =[0..F]
# loop
# append one from array to uuid   i = i + 1
# when i = 8 4 4 4 12, append '-'

# def uuid_generator
# version 1
#   characters = ('0'..'9').to_a + ('a'..'f').to_a

#   uuid = ''
  # while adder < 32
  #   if [8, 12, 16, 20].include?(adder) && uuid[adder] != '-'
  #     uuic << '-'
  #     next
  #   else
  #     uuid << characters.sample
  #     adder += 1
  #   end
  # end

# version 2

# def uuid
#   uuid = ''
#   uuid_parts = [8, 4, 4, 4, 12]
#   characters = ('0'..'9').to_a + ('a'..'f').to_a
  
#   while (num = uuid_parts.pop)
#     num.times { uuid << characters.sample}
#     uuid << '-'
#   end
  
#   uuid.slice!(-1)
#   uuid
# end

# p uuid

# solution
# def uuid_generator
#   characters = []
#   (0..9).each { |digit| characters << digit.to_s }
#   ('a'..'f').each { |digit| characters << digit }

#   uuid = ''
#   sections = [8, 4, 4, 4, 12]
#   sections.each_with_index do |section, index|
#     section.times { uuid += characters.sample }
#     uuid += '-' unless index == sections.size - 1
#   end
#   p uuid
# end

# uuid_generator

# question 5
# my version
# def dot_separated_ip_address?(input_string)
#   dot_separated_words = input_string.split(".")
#   if dot_separated_words.size == 4
#     dot_separated_words.each do |word|
#       'false IP' is_a_number?(word)
#     end  
#     'Right IP'
#   else
#     'The IP components is not 4'
#   end
# end

# solution

# def dot_separated_ip_address?(input_string)
#   dot_separated_words = input_string.split(".")
#   return false unless dot_separated_words.size == 4

#   while dot_separated_words.size > 0 do
#     word = dot_separated_words.pop
#     return false if !is_a_number?(word)
#   end
#   true
# end

# p dot_separated_ip_address?('192.168.101.7')