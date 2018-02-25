let Cipher = function(key) {
  if(key === undefined) {
    let charArray = Array.from(Array(26), function(_, i) { return (String.fromCharCode('a'.charCodeAt(0) + i))});
    this.key = Array.from(Array(100), function() { 
      return charArray[Math.floor(Math.random() * 26)];})
      .join('');
  } else if(key.length === 0 || /[^a-z]/g.test(key))
    throw new Error('Bad key');
  else
    this.key = key;
}

Cipher.prototype.encode = function(plainText) {
  let key = this.key;
  let encryptedText = plainText.split('').map(
    function(x, index) { 
      let diff = key.charCodeAt(index % key.length) - 'a'.charCodeAt(0);  //get delta
      return String.fromCharCode('a'.charCodeAt(0) + (x.charCodeAt(0) + diff - 'a'.charCodeAt(0))%26);
    }).join('');
  return encryptedText;
}

Cipher.prototype.decode = function(encryptedText) {
  let key = this.key;
  let plainText = encryptedText.split('').map(
    function(x, index) {
      let diff = key.charCodeAt(index % key.length) - 'a'.charCodeAt(0);
      let result = x.charCodeAt(0) - diff - 'a'.charCodeAt(0);
      let code = 'a'.charCodeAt(0) + (result < 0 ? (26 + result) : result);
      return String.fromCharCode(code);
    }).join('');
  return plainText;
}

module.exports = Cipher;
