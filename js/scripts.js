
var wordRay =[];

function abcCheck(word) {
  // wordRay.push(word);
  var letters = /^[a-zA-Z]+$/.test(word);
  if (letters === true) {
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    var firstLetter = word.charAt(0)
    if (vowels.includes(firstLetter)) {
      word = word.concat("ay")
      return word
    } else if (vowels.includes(firstLetter) === false){
      alert("first letter is not a vowel")
    }
  } else {
    alert("Please enter letters only");
    return word
  }
}






$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    var word = $("input#wordToTranslate").val();
    var result= abcCheck(word);
    //alert(word);
    // if (letters === true) {
    //   alert("letter")
    // } else {
    //   alert("not a letter")
    // }

   $("#convertedWord").append(result);
  });
});
