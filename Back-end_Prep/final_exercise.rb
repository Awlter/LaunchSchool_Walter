# 1

# x = [1, 2, 3, 4, 5, 6, 7]

# x.each do |i|
#   puts i
# end

#2

# x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# puts x.select { |i| i > 5 }

#or

# x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# x.each { |numb| puts numb if numb > 5}

#4

# x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# x.push(11)
# x.unshift(0)

# # puts x

# #5
# x.pop
# x << 3

# # puts x

# puts x.uniq

#8
# hash_new = {:a => 1, :b => 2, :c => 3, :d => 4}

# hash_new = { a: 1, b: 2, c: 3, d: 4}

#9
# hash_new = { a: 1, b: 2, c: 3, d: 4}

# puts hash_new[:b]

# hash_new[:e] = 5

# puts hash_new

# puts hash_new.delete_if { |k,v| v < 3.5 }

#14

# contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
#             ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]

# contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}


# contacts.each do |k,v|
#   v[:eamil] = contact_data.first.shift
#   v[:address] = contact_data.first.shift
#   v[:phone] = contact_data.shift.shift
# end

# puts contacts

#15

# arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']

# arr.delete_if do |i| 
#   i.start_with?('s')
# end

# puts arr

#16

# a = ['white snow', 'winter wonderland', 'melting ice',
#      'slippery sidewalk', 'salted roads', 'white trees']

# b = []

# a.each {|i| b.push(i.split(' '))}

# p b.flatten

# a = ['white snow', 'winter wonderland', 'melting ice',
#      'slippery sidewalk', 'salted roads', 'white trees']
# a = (a.map { |pairs| pairs.split }).flatten

# p a

#17

# hash1 = {shoes: "nike", "hat" => "adidas", :hoodie => true}
# hash2 = {"hat" => "adidas", :shoes => "nike", hoodie: true}

# if hash1 == hash2
#   puts "These hashes are the same!"
# else
#   puts "These hashes are not the same!"
# end


