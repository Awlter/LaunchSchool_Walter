require 'minitest/autorun'
require_relative 'series'

# my version
# class SeriesTest < Minitest::Test
#   def setup
#     @series = Series.new('01234')
#   end

#   def test_consecutive_of_n
#     input = StringIO.new('3')

#     expected_result = ['012', '123', '234']

#     actual_result = @series.consecutive_of_n(input: input)

#     assert_equal expected_result, actual_result
#   end
# end

# sample answer

class SeriesTest < Minitest::Test
  def test_slice_one
    series = Series.new('01234')
    actual_result = series.slices(1)
    expected_result = [[0], [1], [2], [3], [4]]

    assert_equal expected_result, actual_result
  end

   def test_more_complicated_slice_that_blows_up
    slice_string = '01032987583'

    series = Series.new(slice_string)
    assert_raises ArgumentError do
      series.slices(slice_string.length + 1)
    end

  end
end