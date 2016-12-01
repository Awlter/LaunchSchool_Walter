# question 1
# flintstones = %w(x x x x x)

# question 2
# flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

# flintstones.push('Dino')

# solution:
# flintstones << 'Dino'

# p flintstones

# question 4
# advice = "Few things in life are as important as house training your pet dinosaur."
# advice.slice!(38..100)
# p advice

# solution
# remainer = advice.slice!(0, advice.index('house') - 1)

# p remainer
# p advice

#question 5
# statement = "The Flintstones Rock!"

# p statement.count('t')

# solution:

# p statement.scan('t').count
