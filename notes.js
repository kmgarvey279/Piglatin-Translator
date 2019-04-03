var vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

for (i = 0; (vowels.includes(i)) === false; i += 1) {
  var slicedLetter = word.slice(i);
  alert(slicedLetter);
  word = word.append(slicedLetter);
  alert(word);
}

for (i = 0; i < vowels.length; i++) {
  if (vowels.includes[i]) {
    return [i]
