#exercise 1
# #version 1: selet all names
# family = {  uncles: ["bob", "joe", "steve"],
#             sisters: ["jane", "jill", "beth"],
#             brothers: ["frank","rob","david"],
#             aunts: ["mary","sally","susan"]
#           }

# name_of_familymembers = family.values.flatten

# p name_of_familymembers

#version 2: select immediate family members

# family = {  uncles: ["bob", "joe", "steve"],
#             sisters: ["jane", "jill", "beth"],
#             brothers: ["frank","rob","david"],
#             aunts: ["mary","sally","susan"]
#           }
# immediate_name = []
# family.select do |k, v|
#   p k
#   if (k == :uncles) || (k == :aunts)
#     immediate_name << v
#   end
# end
# immediate_name.flatten!
# p immediate_name

#version 3

# family = {  uncles: ["bob", "joe", "steve"],
#             sisters: ["jane", "jill", "beth"],
#             brothers: ["frank","rob","david"],
#             aunts: ["mary","sally","susan"]
#           }
# name_of_familymembers = [] 

# family.select do |k,v|
#   if (k == :uncles) || (k == :aunts) 
#     v.each do |name|
#       name_of_familymembers.push(name)
#     end
#   end
# end

# p name_of_familymembers

# solution:

# immediate_family = family.select do |k,v|
#   k == :sisters || k == :brothers
# end

# p immediate_family

# p immediate_family.values

# p immediate_family.values.flatten

# exercise 2
# h1 = {a: 100, b: 200, c: 300}

# h2 = {b: 250, c: 330, d: 10}

# p h1.merge(h2)

# p h1.merge(h2) { |key, v1, v2| v1}

# p h1.merge(h2) { |key, v1, v2| v2 - v1}

# p h1

# p h2

# p h1.merge!(h2)

# p h1

# exercise 3
# family = {  uncles: ["bob", "joe", "steve"],
#             sisters: ["jane", "jill", "beth"],
#             brothers: ["frank","rob","david"],
#             aunts: ["mary","sally","susan"]
#           }
# family.each_key {|k| puts k}

# family.each_value {|k| puts k}

# exercise 4

# person = {name: 'Bob', occupation: 'web developer', hobbies: 'painting'}

# person[:name]

# exercise 5

# opposites = {positive: "negative", up: "down", right: "left"}

# puts opposites.has_value?("negative")

# exercise 6

# words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
#           'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
#           'flow', 'neon']

# hash = {}

# words.each do |i|
#   hash[i] = i.chars.sort.join
# end

# hash_new = {}

# hash.select do |k,v|
#   if hash_new.has_key?(v)
#     hash_new[v].push(k)
#   else
#     hash_new[v]=[k]
#   end
# end

# hash_new.each do |k, v|
#   puts "------"
#   p v
# end