require 'minitest/autorun'
require_relative 'sieves'

class SieveTest < Minitest::Test
  def test_primes
    primes = Sieve.new(30)
    expected_result = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    actual_reault = primes.primes

    assert_equal expected_result, actual_reault
  end

end