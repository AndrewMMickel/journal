export function Entry(title, text) {
  this.title = title;
  this.text = text;
}

Entry.prototype.numWords = function (sentence) {
  return sentence.split(' ').length;
}

Entry.prototype.numVowels = function () {
  var vowels = this.text.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
}

Entry.prototype.numConsonants = function () {
  var consonants = this.text.match(/[bcdfghjklmnpqrstvxzwy]/gi);
  return consonants === null ? 0 : consonants.length;
}