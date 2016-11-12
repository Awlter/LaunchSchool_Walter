def find_nb(m)
    sum = 0
    
    result = (1..Float::INFINITY).each do |num|
      sum += num ** 3
      break(num) if sum == m
      break(-1) if sum > 999999999999999
    end
    
    result
end

p find_nb(24723578342962)