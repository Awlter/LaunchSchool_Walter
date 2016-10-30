require 'minitest/autorun'
require_relative 'octal'

class OctalTest < Minitest::Test
  def test_Octal_1
    octal = Octal.new('1')

    assert_equal 1, octal.octal_to_decimal
  end

  def test_octal_10
    octal = Octal.new('233')

    assert_equal 155, octal.octal_to_decimal
  end
end