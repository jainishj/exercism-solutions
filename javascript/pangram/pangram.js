let Pangram = function(text) {
  this.text = text;
}

Pangram.prototype.isPangram = function() {
  if(!this.text)
    return false;
  this.text = this.text.toLowerCase();
  let testArr = Array(26).fill(true);
  this.text.split('').forEach(function(x) {
    if(/[a-z]/g.test(x)) {
      testArr[x.charCodeAt(0) - 'a'.charCodeAt(0)] = false;
    }
  });
  return !testArr.includes(true);
}
module.exports = Pangram;
