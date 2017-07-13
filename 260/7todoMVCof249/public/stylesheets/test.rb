def loop(n)
  original_arr = (0..n).to_a
  temp_arr = []

  while (original_arr.length > 3)
    original_arr.each_with_index do |num, i|
      temp_arr.push(num) if i % 3 != 0 || num == 0
      original_arr = temp_arr
    end
    p original_arr
    temp_arr = []
  end

  original_arr.last
end

p loop(8)