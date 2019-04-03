
var wordRay =[];

function abcCheck(word) {
  // wordRay.push(word);
  var letters = /^[a-zA-Z]+$/.test(word);

  if (letters === true) {
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
    var y = ["y", "Y"]
    var queue = ["qu" || "QU" || "qU" || "Qu"]
    var firstLetter = word.charAt(0);
    if (word.includes(queue)=== true) {
      var qULocation = word.search(queue);
        newQu1 = word.slice(0, qULocation+2)
        newQu2 = word.slice((qULocation+2), word.length)
        word = newQu2.concat(newQu1);
      alert(word)

    }

    if (vowels.includes(firstLetter)) {
      //if (vowel first occurence = 0)
      return word.concat("ay");

    } else if ((vowels.includes(firstLetter) === false)|| word.charAt(0) === y) {
      alert("first letter is not a vowel");
      for (i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          var slicePartOne = word.slice(0, i);
          var slicePartTwo = word.slice(i);
          concatWord = slicePartTwo.concat(slicePartOne);
          return concatWord.concat("ay");
      }
    }
  }
  } else {
    alert("Please enter letters only");
    return word;
  }//else
}//letters if







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
