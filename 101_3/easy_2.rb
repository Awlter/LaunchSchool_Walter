# question 1

# ages.include?('Spot')
# ages.assoc('Spot')
# ages.rassoc('Spot')

# ####### the difference between include?/member? key?

# question 2

# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
# all_of_age = 0
# ages.each do |name, age|
#   all_of_age += age
# end
# p all_of_age

# solution:
# p ages.values.inject(:+)
# p ages.values.reduce(:+)

# a = ages.values.inject do |sum, n|
#   sum + n
# end

# p a

# question 3
# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }

# ages.select! { |_, v| v < 100 }
# p ages

# # solution:
# ages.keep_if { |_, age| age < 100 }
# p ages

# question 4
# munsters_description = "The Munsters are creepy in a good way."

# p munsters_description.capitalize
# p munsters_description.swapcase
# p munsters_description.downcase

###### capitalize not only upcase the first letter, it also downcase the remainder.

# question 5
# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10 }
# additional_ages = { "Marilyn" => 22, "Spot" => 237 }

# ############  ages.merge!(additional_ages)
# p ages

# question 6
# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
# p ages.values.min

# question 7
# advice = "Few things in life are as important as house training your pet dinosaur."

# puts advice.match("Dino")
# puts advice.match("in")
# p advice.match("Dino")
# p advice.match("in")

# question 8
# flintstones = %w(Fred Baeney Wilma Betty BamBam Pebbles)
# p flintstones.index { |name| name.start_with?('Be') }

#solution
# p flintstones.index { |name| name[0, 2] == "Be"}

# question 9
# flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

# p flintstones.map! { |name| name.slice(0..2) }
# solution:
# a = flintstones.map do |name|
#   name[0, 3]
# end

# p a
# p flintstones
