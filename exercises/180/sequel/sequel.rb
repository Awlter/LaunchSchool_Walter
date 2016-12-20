require 'sequel'
require 'pg'

def create_database
  system('dropdb', '--if-exists', 'billing2')
  system('createdb', 'billing2')
end

def create_customers
  DB.create_table(:customers) do
    primary_key :id
    String      :name, text: true, null: false
    String      :payment_token, fixed: true, size: 8, null: false, unique: true

    constraint(:customers_payment_token_pattern_constraint) do
      payment_token =~ /^[A-Z]{8}$/
    end
  end
end

def insert_customer_row(name, payment_token)
  DB[:customers].insert(name: name, payment_token: payment_token)
end

def insert_customers
  insert_customer_row('Pat Johnson', 'XHGOAHEQ')
  insert_customer_row('Nancy Monreal', 'JKWQPJKL')
  insert_customer_row('Lynn Blake', 'KLZXWEEE')
  insert_customer_row('Chen Ke-Hua', 'KWETYCVX')
  insert_customer_row('Scott Lakso', 'UUEAPQPS')
  insert_customer_row('Jim Pornot', 'XKJEYAZA')
end

def create_services
  DB.create_table(:services) do
    primary_key :id
    String      :description, text: true, null: false
    BigDecimal  :price, size: [10, 2], null: false

    constraint(:services_price_range_constraint) do
      price > 0.00
    end
  end
end

def insert_service_row(description, price)
  DB[:services].insert(description: description, price: price)
end

def insert_services
  insert_service_row('Unix Hosting', 5.95)
  insert_service_row('DNS', 4.95)
  insert_service_row('Whois Registration', 1.95)
  insert_service_row('High Bandwidth', 15.00)
  insert_service_row('Business Support', 250.00)
  insert_service_row('Dedicated Hosting', 50.00)
  insert_service_row('Bulk Email', 250.00)
  insert_service_row('One-to-one Training', 999.00)
end

def create_customers_services
  DB.create_table(:customers_services) do
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

def get_customers_with_services
  customers_with_services = DB[:customers].select do
    [customers__id, name, payment_token]
  end.join(:customers_services, customer_id: :id).distinct

  customers_with_services.each do |row|
    puts "#{row[:id]}, #{row[:name]}, #{row[:payment_token]}"
  end
end

def get_customers_without_services
  DB[:customers].select(%i(customers__id name payment_token))
  .left_outer_join(:customers_services, customer_id: :customers__id)
  .where(customers_services__customer_id: nil).each { |row| puts row}
end

def get_customers_with_services_over_15
  DB[:customers].select do
    [split_part(name, ' ', 1).as(:first_name),
    split_part(name, ' ', 2).as(:last_name)]
  end
  .order(:last_name, :first_name)
  .limit(3)
  .distinct
  .where { price >= 15.00 }
  .left_join(:customers_services, customer_id: :customers__id)
  .left_join(:services, services__id: :service_id)
  .each { |row| puts "#{row[:last_name]}, #{row[:first_name]}" }
end

def get_services_with_over_3cus
  DB[:services].select {[description, count(:services__id)]}
  .join(:customers_services, service_id: :id)
  .group(:services__id)
  .having { count(:services__id) >= 3}
  .each{ |row| puts "#{row[:description]}, #{row[:count]}"}
end

def get_gross_income
  DB[:customers_services].select {[sum(:price).cast(:money)]}
  .join(:services, id: :service_id)
  .each { |row| puts "#{row[:sum]}"}
end

def services_for_each_customer
  DB[:customers_services].select do
    service_info = concat(' ', description, ' ', price.cast(:money))
    service_list = string_agg(service_info, "\n").order(lower(service_info))
    [customers__name, service_list.as(:service_list)]
  end
  .join(:customers, id: :customers_services__customer_id)
  .join(:services, id: :customers_services__service_id)
  .group(:customers__name)
  .each { |row| puts row[:name], row[:service_list]}
end

def services_for_each_customer1
  services_by_customer =
  DB[:customers].join(:customers_services, customer_id: :customers__id)
                .join(:services, services__id: :service_id)
                .select(:name, :description, :price)
                .order(:name, :description)

services_by_name = services_by_customer.all#.group_by { |row| row[:name] }

p services_by_name.to_a
end

def delete_rows
  bulk_email_dataset = DB[:services][:description => 'Bulk Email']
  bulk_email_id = bulk_email_dataset[:id]
  DB[:customers_services].where(service_id: bulk_email_id).delete

  DB[:services].where(description: 'Bulk Email').delete

  p DB[:services].map(:id)
  DB[:customers].where(name: 'Chen Ke-Hua').delete
  p DB[:customers].all
end

create_database
DB = Sequel.connect("postgres://localhost/billing2")

create_customers
insert_customers

create_services
insert_services

create_customers_services
insert_customers_services

delete_rows
