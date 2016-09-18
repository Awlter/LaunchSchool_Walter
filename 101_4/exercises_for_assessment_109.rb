numbers = {
  high: 100,
  medium: 50,
  low: 10
}

half_numbers = numbers.map {|_, value| value / 2 }

p half_numbers

low_numbers = numbers.select! do |key, value|
                  value < 25
              end
p low_numbers              
p numbers