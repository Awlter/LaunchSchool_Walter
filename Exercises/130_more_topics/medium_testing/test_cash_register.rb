require 'minitest/autorun'
require_relative 'cash_register'
require_relative 'transaction'

class TestCashRegister < Minitest::Test
  attr_reader :transaction, :register

  def test_accept_money
    register = CashRegister.new(1000)
    transaction = Transaction.new(100)
    transaction.amount_paid = 100

    previous_amount = register.total_money
    register.accept_money(transaction)
    current_amount = register.total_money

    assert_equal previous_amount + 100, current_amount
  end

  def test_change
    register = CashRegister.new(1000)
    transaction = Transaction.new(100)
    transaction.amount_paid = 145

    change = register.change(transaction)

    assert_equal 45, change
  end

  def test_give_receipt
    register = CashRegister.new(1000)
    transaction = Transaction.new(100)
    receipt = "You are paid 100.\n"
    assert_output(receipt) do 
      register.give_receipt(transaction)
    end
  end

  def test_prompt_for_payment
    transaction = Transaction.new(20)
    input = StringIO.new('30\n')
    output = StringIO.new

    transaction.prompt_for_payment(input: input, output: output)
    assert_equal 30, transaction.amount_paid
  end
end











