# $ ruby average_values.rb
# What database do you want to use? billing2
# What table do you want to access? services
# id: 4.500000
# price: 197.106250

require 'sequel'
require 'pg'

print "What database do you want to use? "
database = gets.chomp
print "What table do you want to access? "
table = gets.chomp.to_sym

DB = Sequel.connect("postgres://localhost/#{database}")

dataset = DB[table]

dataset.columns.sort.each do |column|
  begin
    average = dataset.select{ avg(column) }.first
    puts "#{column}: #{format('%f', average[:avg])}" if average
  rescue Sequel::DatabaseError
  end
end