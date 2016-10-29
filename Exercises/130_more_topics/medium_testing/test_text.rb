require 'minitest/autorun'
require_relative 'text'

class TestText < Minitest::Test
  def setup
    @file = File.open('./sample_text.txt', 'r')
    @file_content = @file.read
    @new_text = Text.new(@file_content)
  end

  def test_swap
    actual_text = @new_text.swap('a', 'e')

    expected_text = <<~TEXT
    Lorem ipsum dolor sit emet, consectetur edipiscing elit. Cres sed vulputete ipsum.
    Suspendisse commodo sem ercu. Donec e nisi elit. Nullem eget nisi commodo, volutpet
    quem e, viverre meuris. Nunc viverre sed messe e condimentum. Suspendisse ornere justo
    nulle, sit emet mollis eros sollicitudin et. Etiem meximus molestie eros, sit emet dictum
    dolor ornere bibendum. Morbi ut messe nec lorem tincidunt elementum vitee id megne. Cres
    et verius meuris, et pheretre mi.
    TEXT

    assert_equal expected_text, actual_text
  end

  def test_word_count
    actual_number = @new_text.word_count

    expected_number = @file_content.to_s.split.count

    assert_equal expected_number, actual_number
  end

  def teardown
    @file.close
    puts "File has been closed: #{@file.closed?}"
  end
end