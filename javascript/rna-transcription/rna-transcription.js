let DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  if(/[^CGTA]/g.test(dna))
    throw new Error('Invalid input');

  let rnaTransMap = {'G' : 'C', 'C' : 'G', 'T': 'A', 'A': 'U'};
  return dna.replace(/C|G|T|A/g, function(match) { return rnaTransMap[match]});
}

module.exports = DnaTranscriber;
