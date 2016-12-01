def prompt(message)
  puts "=> #{message}"
end

def valid_number(num)
  num.to_i.to_s == num || num.to_f.to_s == num
end

prompt "Welcome to the mortgage calculator, your name is:"

name = gets.chomp

prompt "Hi, #{name.capitalize}"

loop do
  prompt "The loan amount?"

  loan_amount = ''
  loop do
    loan_amount = gets.chomp

    if valid_number(loan_amount)
      break
    else
      prompt "This does not seem like a number"
    end
  end

  prompt "The APR? (2.3 stands for 2.3%)"

  apr = ''
  loop do
    apr = gets.chomp

    if valid_number(apr)
      break
    else
      prompt "This does not seem like a number"
    end
  end

  prompt "The loan duration?"

  loan_duration = ''
  loop do
    loan_duration = gets.chomp

    if valid_number(loan_duration)
      break
    else
      prompt "This does not seem like a number"
    end
  end

  monthly_interest_rate = apr.to_f / 100 / 12
  months = loan_duration.to_i * 12

  monthly_payment = loan_amount.to_f * (monthly_interest_rate /
                    (1 - (1 + monthly_interest_rate)**-months))

  prompt "Your monthly payment is: #{monthly_payment}"

  prompt "Do you want to perform again?"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end
