
var wordRay =[];

function abcCheck(word) {
  wordRay.push(word);
  var letters = /^[a-zA-Z]+$/.test(word);
  if (letters === true) {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
  var firstLetter = word.charAt(0)
  alert(vowels)
  alert(firstLetter)
  if (vowels.includes(firstLetter)) {
      word = word.concat("ay")
      alert(word) }
  //     word = word.concat("ay");
  //   if word.charAt(0.includes(vowels) {
  //     word = word.concat("ay");
  //     alert (word)
  //   } else if (word.charAt(0).includes(vowels) === false){
  //     alert("first letter is not a vowel")
  //   }
  // } else {
  //   alert("Please enter letters only");
  //   return word
  }
}






$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    var word = $("input#wordToTranslate").val();
    var letters= abcCheck(word);
    //alert(word);
    // if (letters === true) {
    //   alert("letter")
    // } else {
    //   alert("not a letter")
    // }

    //  $("#convertedWord").append(word);
  });
});
