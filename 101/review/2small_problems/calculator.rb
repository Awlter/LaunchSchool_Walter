def prompt(message)
  puts "=> #{message}"
end

def valid_number?(number) {
  number.to_i.to_s == number
}

prompt('Welcomt to our calculator')

loop do
  number1 = ''
  loop do
    prompt('What\'s the first number?')
    number1 = gets.chomp

    break if number.to_i.nonzero?
    prompt('Hmmm')
  end

  number2 = ''
  loop do
    prompt("What's the second number?")
    number2 = gets.chomp

    break if valid_number?(number2)
    prompt('Hmmm')
  end

  operation_prompt = <<-MSG
What operation would you like to perform?
1) add
2) subtract
3) multiply
4) divide
MSG

  prompt(operation_prompt)

  operator = ''
  loop do
    operator = gets.chomp

    break if %w(1 2 3 4).include?(operator)
    prompt('Must choose 1 2 3 4')
  end

  result =  case operator
            when '1'
              number1.to_i + number2.to_i
            when '2'
              number2.to_i - number2.to_i
            when '3'
              number1.to_i * number2.to_i
            when '4'
              number1.to_f / number2.to_f
            end

  puts result

  prompt('Do you want to perform another calculation? (Y to calculate again)')
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end
