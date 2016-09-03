# question 1
# munsters = {
#   "Herman" => { "age" => 32, "gender" => "male" },
#   "Lily" => { "age" => 30, "gender" => "female" },
#   "Grandpa" => { "age" => 402, "gender" => "male" },
#   "Eddie" => { "age" => 10, "gender" => "male" }
# }
# total_male_age = 0
# munsters.each do |_, detail|
#   total_male_age += detail['age'] if detail['gender'] == 'male'
# end

# p total_male_age

# question 2
# munsters.each do |name, detail|
#   p "#{name} is a #{detail['age']} year old #{detail['gender']}"
# end

# question 3
# def not_so_tricky_method(a_string_param, an_array_param)
#   a_string_param += "rutabaga"
#   an_array_param << "rutabaga"
#   return a_string_param, an_array_param
# end

# my_string = "pumpkins"
# my_array = ["pumpkins"]
# my_string, my_array = not_so_tricky_method(my_string, my_array)

# puts "My string looks like this now: #{my_string}"
# puts "My array looks like this now: #{my_array}"

# question 4
# sentence = "Humpty Dumpty say on a wall"

# p sentence.split.reverse.join(' ')

# question 6
def change_name(name)
  name += 'bob' 
  p name     # does this reassignment change the object outside the method?
end

name = 'jim'
change_name(name)
puts name
