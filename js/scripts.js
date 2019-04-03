
var wordRay =[];

function abcCheck(word) {
  // wordRay.push(word);
  var letters = /^[a-zA-Z]+$/.test(word);

  if (letters === true) {
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    var firstLetter = word.charAt(0);

    if (vowels.includes(firstLetter)) {
      //if (vowel first occurence = 0)
      return word.concat("ay");
    } else if (vowels.includes(firstLetter) === false) {
      //alert("first letter is not a vowel");
      for (i = 0; i < word.length; i++) {
        //console.log(word[i]);
        if (vowels.includes(word[i])) {
          var slicePartOne = word.slice(0, i);
          var slicePartTwo = word.slice(i);
          concatWord = slicePartTwo.concat(slicePartOne);
          return concatWord.concat("ay");



            // $(word).append(word[i]);
            // console.log(word)

          //var slicedLetters = word.length
          // var slicedWord = word.slice(i);
          // var splicedWord = slicedWord.concat();
          // alert(splicedWord);
        console.log("it's a vowel");
      }
      }
          //var slicedLetter = word.slice[i];
        }
      //
      // alert("alert3");
      // word = word.concat(slicedLetter);
      // word = word.concat("ay");
      // return word;
      // alert("alert2");

  } else {
    alert("Please enter letters only");
    return word;
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
