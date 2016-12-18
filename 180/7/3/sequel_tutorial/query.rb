require 'pg'
require 'sequel'

DB = Sequel.connect("postgres://localhost/sequel-single-table")

dataset = DB[:menu_items]

def format_money(num)
  format("$%.2f", num)
end

result = dataset.select do
    labor_cal = (prep_time / 60.0 * 12)
    profit_cal = (menu_price - ingredient_cost - labor_cal)
   [item,
    menu_price,
    ingredient_cost,
    labor_cal.as(labor),
    profit_cal.as(profit)]
  end

result.each do |item|
  puts item[:item]
  puts "menu_price #{format_money(item[:menu_price])}"
  puts "ingredient cost: #{format_money(item[:ingredient_cost])}"
  puts "labor: #{format_money(item[:labor])}"
  puts "profit: #{format_money(item[:profit])}"
  puts ''
end