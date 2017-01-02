# - input
#   - two strings with different length

# - output
#   - integer

# - rule
#   - return the number of the same pair of two strings based on the shorter one
require 'pry'
class DNA
  def initialize(strand)
    @strand = strand
  end

  def hamming_distance(distance)
    count = 0
    @strand.chars.each_with_index do |acid, indx|
      count += 1 if acid != distance[indx] && !distance[indx].nil?
    end
    count
  end
end