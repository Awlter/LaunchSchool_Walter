# def find_nb(m)
#     sum = 0
    
#     result = (1..Float::INFINITY).each do |num|
#       sum += num ** 3
#       break(num) if sum == m
#       break(-1) if sum > 999999999999999
#     end
    
#     result
# end

# p find_nb(24723578342962)

# def url?(text)
#   !!text.match(/\Ahttps?:\/\/\S+\z/)
# end

# p url?('http://launchschool.com')   # -> true
# p url?('https://example.com')       # -> true
# p url?('https://example.com hello') # -> false
# p url?('   https://example.com')    # -> false

# def fields(text)
#   text.split(/[ \t,]+/)
# end

# p fields("Pete,201,Student")
# # -> ['Pete', '201', 'Student']

# p fields("Pete \t 201    ,  TA")
# # -> ['Pete', '201', 'TA']

# p fields("Pete \t 201")
# # -> ['Pete', '201'']

# def mystery_math(equation)
#   equation.sub(/[+\-*\/]/, '?')
# end

# p mystery_math('4 / 3 - 5 = 2')
# # -> '4 ? 3 - 5 = 2'

# p mystery_math('(4 * 3 + 2) / 7 - 1 = 1')
# # -> '(4 ? 3 + 2) / 7 - 1 = 1'

# def mysterious_math(equation)
#   equation.gsub(/[+\-*\/]/, '?')
# end

# p mysterious_math('4 + 3 - 5 = 2')           # -> '4 ? 3 ? 5 = 2'
# p mysterious_math('(4 * 3 + 2) / 7 - 1 = 1') # -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

# def danish(string)
#   string.sub(/\b(apple|blueberry|cherry)\b/, 'danish')
# end

# p danish('An apple a day keeps the doctor away')
#   # -> 'An danish a day keeps the doctor away'

# p danish('My favorite is blueberry pie')
# # -> 'My favorite is danish pie'

# p danish('The cherry of my eye')
# # -> 'The danish of my eye'

# p danish('apple. cherry. blueberry.')
# # -> 'danish. cherry. blueberry.'

# danish('I love pineapple')
# # -> 'I love pineapple'

# def format_date(date)
#   date.gsub(/(\d\d\d\d)([-\/])(\d\d)\2(\d\d)/, '\4.\3.\1')
# end

# p format_date('2016-06-17') # -> '17.06.2016'
# p format_date('2017/05/03') # -> '03.05.2017'
# p format_date('2015/01-31')

VALUES ('2016-03-01', 34, 43),
('2016-03-02', 32, 44),
('2016-03-03', 31, 47),
('2016-03-04', 33, 42),
('2016-03-05', 39, 46),
('2016-03-06', 32, 43),
('2016-03-07', 29, 32),
('2016-03-08', 23, 31),
('2016-03-09', 17, 28);









