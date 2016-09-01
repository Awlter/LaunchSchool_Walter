# question 3
# my answer
# advice = "Few things in life are as important as house training your pet dinosaur."

# advice_array = advice.split

# change_index = advice_array.index('important')

# advice_array[change_index] = 'urgent'

# advice = advice_array.join(' ')

# p advice 

# solution 3:

# advice.gsub!('important', 'urgent')

#############

#question 4

# notice the difference between %w and []
# delete_at() uses index, delete() deletes the paramter directly

#question 5
# # my answer
# case a = 42
# when (0..40)
#   p 'no'
# when (40..100)
#   p 'yes'
# end

# solution:
# p (10..100).cover?(42)

############# how you do make   42 == (0..100)true?

#question 6

# famous_words = "seven years ago..."
#version 1
# famous_words.prepend('Force score')

#version 2
# famous_words_array = famous_words.split

# famous_words_array.unshift('Force score')

# famous_words = famous_words_array.join(' ')

# p famous_words

#solution
# "Four score and " + famous_words

#question 9
# flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }
# p flintstones.rassoc(2)

#question 10
# flintstones_hash = {}
# flintstones = ['Fred', "Barney", "Wilma", "Betty", 'Pebbles', 'BamBam']
# flintstones.each { |key| flintstones_hash[key] = flintstones.index(key) }
# p flintstones_hash

#solution
flintstones = ['Fred', "Barney", "Wilma", "Betty", 'Pebbles', 'BamBam']
flintstones_hash = {}
flintstones.each_with_index do |name, index|
  flintstones_hash[name] = index
end
p flintstones_hash
