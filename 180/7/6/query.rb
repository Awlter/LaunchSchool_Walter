require 'sequel'

DB = Sequel.connect("postgres://localhost/sequel-single-table")

dataset = DB[:menu_items]

def format_money(numeric)
  format("$%0.2f", numeric)
end

result = dataset.select do
  labor_val = prep_time / 60.0 * 12
  profit_val = menu_price - ingredient_cost - labor_val
  [item,
  menu_price,
  ingredient_cost,
  labor_val.as(:labor),
  profit_val.as(:profit)]
end

result.each do |row|
  puts row[:item]
  puts format_money(row[:menu_price])
  puts format_money(row[:ingredient_cost])
  puts format_money(row[:labor])
  puts format_money(row[:profit])
end  