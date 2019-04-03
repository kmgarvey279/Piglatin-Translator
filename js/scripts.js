function abcCheck(word) {
  var letters = /^[a-zA-Z]+$/.test(word);
  if (letters === true) {
    alert(word)
    if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u") {
      word = word.concat("ay");
      alert (word)
    } else if (word !== "a"){
      alert("not a vowel")
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
