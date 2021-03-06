require 'sequel'
require 'io/console'

def create_database
  system("dropdb", "--if-exists", "billing2")
  system("createdb", "billing2")
end

def create_tables
  DB.create_table :customers do
    primary_key :id
    String :name, text: true, null: false
    String :payment_token, unique: true, null: false
    check{payment_token =~ /^[A-Z]{8}$/}
  end

  DB.create_table :services do
    primary_key :id
    String :description, null: false
    Numeric :price, size: [10, 2], null: false
    check{ price >= 0.0}
  end
end

def insert_data
  DB[:customers].insert([:name, :payment_token], ["Pat Johnson", "XHGOAHEQ"] )
  DB[:customers].insert([:name, :payment_token], ["Nancy Monreal", "JKWQPJKL"])
  DB[:customers].insert([:name, :payment_token], ["Lynn Blake", "KLZXWEEE"])
  DB[:customers].insert([:name, :payment_token], ["Chen Ke-Hua", "KWETYCVX"])
  DB[:customers].insert([:name, :payment_token], ["Scott Lakso", "UUEAPQPS"])
  DB[:customers].insert([:name, :payment_token], ["Jim Pornot", "XKJEYAZA"])

  DB[:services].insert([:description, :price], ["Unix Hosting", 5.95])
  DB[:services].insert([:description, :price], ["DNS", 4.95])
  DB[:services].insert([:description, :price], ["Whois Registration", 1.95])
  DB[:services].insert([:description, :price], ["High Bandwidth", 15.00])
  DB[:services].insert([:description, :price], ["Business Support", 250.00])
  DB[:services].insert([:description, :price], ["Dedicated Hosting", 50.00])
  DB[:services].insert([:description, :price], ["Bulk Email", 250.00])
  DB[:services].insert([:description, :price], ["One-to-one Training", 999.00])
end

def create_join_table
  DB.create_table :customers_services do
    primary_key :id
    foreign_key :customer_id, :customers, on_delete: :cascade
    foreign_key :service_id, :services
  end
end

def insert_customer_service_row(customer_id, service_id)
  DB[:customers_services].insert(customer_id: customer_id, service_id: service_id)
end

def insert_customers_services
  insert_customer_service_row(1, 1) # Pat Johnson/Unix Hosting
  insert_customer_service_row(1, 2) #            /DNS
  insert_customer_service_row(1, 3) #            /Whois Registration
  insert_customer_service_row(3, 1) # Lynn Blake/Unix Hosting
  insert_customer_service_row(3, 2) #           /DNS
  insert_customer_service_row(3, 3) #           /Whois Registration
  insert_customer_service_row(3, 4) #           /High Bandwidth
  insert_customer_service_row(3, 5) #           /Business Support
  insert_customer_service_row(4, 1) # Chen Ke-Hua/Unix Hosting
  insert_customer_service_row(4, 4) #            /High Bandwidth
  insert_customer_service_row(5, 1) # Scott Lakso/Unix Hosting
  insert_customer_service_row(5, 2) #            /DNS
  insert_customer_service_row(5, 6) #            /Dedicated Hosting
  insert_customer_service_row(6, 1) # Jim Pornot/Unix Hosting
  insert_customer_service_row(6, 6) #           /Dedicated Hosting
  insert_customer_service_row(6, 7)
end

# create_database
# create_tables
# insert_data
# create_join_table
# insert_customers_services

# Retrieve data of customers who have at least subscribed one services
# result = DB[:customers].select{customers.*}.distinct.join(:customers_services, customer_id: :id).order(:id)

# result.each do |row|
#   puts "(#{row[:id]}, \"#{row[:name]}\", #{row[:payment_token]})"
# end

# DB[:customers].select(%i(customers__id name payment_token))
#               .distinct
#               .left_outer_join(:customers_services, customer_id: :customers__id)
#               .where(service_id: nil)
#               .each {|row| puts row[:row] }


# DB[:customers].select(%i(customers__id name payment_token))
#               .distinct
#               .join(:customers_services, customer_id: :customers__id)
#               .each { |row| puts row[:row] }


# dataset = DB[:customers].join(:customers_services, :customer_id => :id)
#                         .select([:customer_id, :name, :payment_token])
#                         .distinct

# dataset.each { |r| puts r[:row] }

# SELECT
#   DISTINCT SPLIT_PART(c.name, ' ', 1) AS first_name,
#            SPLIT_PART(c.name, ' ', 2) AS last_name
# FROM customers c
# JOIN customers_services cs ON cs.customer_id = c.id
# JOIN services s ON s.id = cs.service_id
# WHERE price >= 15 ORDER BY last_name;


# result = DB[:customers].select do
#                                   first_name = split_part(customers__name, ' ', 1)
#                                   last_name = split_part(customers__name, ' ', 2)
#                                   [first_name.as('first_name'), last_name.as('last_name')]
#                                 end
#                                 .order(:last_name, :first_name)
#                                 .limit(3)
#                                 .left_join(:customers_services, customer_id: :customers__id)
#                                 .left_join(:services, services__id: :service_id)
#                                 .distinct
#                                 .where { price >= 15.00 }
#                                 .each { |row| puts "#{row[:last_name]}, #{row[:first_name]}" }

# result = DB[:services].select{[services__description, count(:customer_id)]}
#                       .join(:customers_services, service_id: :id)
#                       .group(:services__description)
#                       .having{count(:customer_id) >= 3}


# result = DB[:customers].join(:customers_services, customer_id: :id)
#                        .join(:services, id: :customers_services__service_id)
#                        .select{sum(price).cast(:money)}
#                        .each {|row| puts row[:sum]}

# result = DB[:customers].join(:customers_services, customer_id: :id)
#                        .join(:services, id: :customers_services__service_id).
#                        group(:customers__name).
#                        order(:customers__name).
#                        select do
#                         subscription = concat('  ', services__description, ' ', services__price.cast(:money))
#                         subscriptions = string_agg(subscription, "\n").order(lower(subscription))
#                         [customers__name, subscriptions.as(:subscriptions)]
#                        end.
#                        each do |row|
#                         puts row[:name]
#                         puts row[:subscriptions]
#                       end

# puts result.sql

# t1 = Time.now
# DB[:customers].join(:customers_services, customer_id: :id)
#               .join(:services, id: :service_id)
#               .order(:name)
#               .group(:name)
#               .select do
#                 service_info = concat('  ', description, ' ', price.cast(:money))
#                 service_infos = string_agg(service_info, "\n").order(service_info)
#                 [name, service_infos.as(services)]
#               end
#               .each do |subscription|
#                 puts subscription[:name]
#                 puts subscription[:services]
#               end
# t2 = Time.now
# puts t2 - t1

# t3 = Time.now
# services_by_customer = 
#   DB[:customers].join(:customers_services, customer_id: :id)
#                 .join(:services, id: :service_id)
#                 .select {[name, description, price]}
#                 .order(:name, :description)

# services_by_name = services_by_customer.all.group_by {|row| row[:name]}
# services_by_name.each do |name, service_info|
#   puts name
#   service_info.each do |info|
#     price = format('$%.2f', info[:price])
#     puts "  #{info[:description]} #{price}"
#   end
# end
# t4 = Time.now
# puts t4 - t3
# $ ruby average_values.rb
# What database do you want to use? billing2
# What table do you want to access? services
# id: 4.500000
# price: 197.106250

# $ ruby average_values.rb
# What database do you want to use? billing2
# What table do you want to access? customers_services
# customer_id: 3.687500
# id: 8.500000
# service_id: 3.062500

print "What database do you want to use? "
database = gets.chomp
DB = Sequel.connect("postgres://localhost/#{database}")
print "What table do you want to access? "
table = gets.chomp
DB[table.to_sym].




