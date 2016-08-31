require 'yaml'
MESSAGES = YAML.load_file('calculator_messages.yml')

def prompt(mes)
  puts "=> #{mes}"
end

def valid_number?(num)
  num.to_i.to_s == num
end

def operation_message(op)
  case op
  when '1'
    'Adding'
  when '2'
    'Subtracting'
  when '3'
    'Multiplying'
  when '4'
    'Dividing'
  end
end

prompt(MESSAGES['welcome'])

name = ''
loop do
  name = gets.chomp

  if name.empty?
    prompt(MESSAGES['valid_name'])
  else
    break
  end
end

prompt(MESSAGES['say_hi'] + name)

loop do # Main loop
  numb1 = ''
  loop do
    prompt(MESSAGES['first_number'])
    numb1 = gets.chomp

    if valid_number?(numb1)
      break
    else
      prompt(MESSAGES['invalid_number'])
    end
  end

  numb2 = ''
  loop do
    prompt(MESSAGES['second_number'])
    numb2 = gets.chomp

    if valid_number?(numb2)
      break
    else
      prompt(MESSAGES['invalid_number'])
    end
  end

  prompt(MESSAGES['operator_prompt'])
  oper = ''
  loop do
    oper = gets.chomp

    if %w(1 2 3 4).include?(oper)
      break
    else
      prompt('Must choose 1, 2, 3 or 4')
    end
  end

  prompt("#{operation_message(oper)} the two numbers...")

  result =  case oper
            when '1'
              numb1.to_i + numb2.to_i
            when '2'
              numb1.to_i - numb2.to_i
            when '3'
              numb1.to_i * numb2.to_i
            when '4'
              numb1.to_f / numb2.to_f
            end
  prompt("The result is #{result}")

  prompt("Do you want perform again?")
  answer = gets.chomp.downcase.start_with?('y')
  break unless answer
end
