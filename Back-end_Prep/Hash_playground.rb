# require "pry"

# person = {height: "6 ft", weight: "160 lbs", hair: "brown"}

# new_person = {name: "bob"}

# p person.has_key?("height")

person = {name: 'bob', height: '6 ft', weight: '160 lbs', hair: 'brown'}

person.each do |key, value|
  puts "Bob's #{key} is #{value}"
end

p person.has_key?(:name)
puts person.has_value?('bob')