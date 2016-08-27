puts "Please write two numbs you want for operation"
puts "Number 1"
numb1 = gets.chomp.to_i
puts "Number 2"
numb2 = gets.chomp.to_i

puts "operation you want to perform"
oper = gets.chomp.downcase

answer = case oper
when 'add'
  numb1 + numb2
when 'subtract'
  numb1 - numb2
when 'multiply'
  numb1 * numb2
when 'divide'
  numb1/numb2
end
puts(answer)