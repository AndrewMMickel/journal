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

Entry.prototype.getTeaser = function () {
  var sentenceSplit = this.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")[0];
  var words = this.numWords(sentenceSplit);
  var firstEightWords = sentenceSplit.split(' ');
  if (words > 8) {
    return firstEightWords.slice(0, 8).join(" ");
  } else {
    return sentenceSplit;
  }
}