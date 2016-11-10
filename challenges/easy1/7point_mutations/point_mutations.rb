class DNA
  def initialize(dna)
    @dna = dna
  end

  def hamming_distance(mutated_dna)
    result = 0

    @dna.chars.each_with_index do |acid, indx|
      break if mutated_dna[indx].nil?
      result += 1 unless acid == mutated_dna[indx]
    end

    result
  end
end