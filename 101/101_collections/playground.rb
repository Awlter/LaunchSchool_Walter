def multiply_numbers(numbers, times)
  counter = 0

  loop do
    break if counter == numbers.size

    numbers[counter] *= times

    counter += 1
  end

  numbers
end

numbers = [ 1, 2, 3, 4]

p numbers

p multiply_numbers(numbers, 3)

p numbers