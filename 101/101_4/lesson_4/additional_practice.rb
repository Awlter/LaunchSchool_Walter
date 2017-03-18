# 1

flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

new_hash = {}

flintstones.each_with_index do |value, index|
  new_hash[value] = index
end

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }


a = ages.reject do |_, age|
  age > 100
end

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

i = flintstones.find_index do |element|
  element.start_with?('Be')
end

a = flintstones.map do |element|
  element[0, 3]
end

statement = "The Flintstones Rock"

letter_count = {}

# statement.chars.each do |letter|
#   letter_count[letter] += 1
# end

letters = ('A'..'Z').to_a + ('a'..'z').to_a

letters.each do |letter|
  count = statement.count(letter)
  letter_count[letter] = count if count > 0
end

words = "the flintstones rock"

def titleize(words)
  words.split.map(&:capitalize).join(' ')
end

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each do |key, value|
  age_group = case value['age']
  when (0..17)
    'kid'
  when (18..64)
    'adult'
  else
    'senior'
  end

  value['age_group'] = age_group
end

p munsters