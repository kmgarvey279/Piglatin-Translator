function abcCheck(word) {
  var letters = /^[a-zA-Z]+$/.test(word);
  if (letters === true) {
    alert("true");
  } else {
    alert("Please enter letters only");
  }
}






$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    var word = $("input#wordToTranslate").val();
    var letters= abcCheck(word);
    // if (letters === true) {
    //   alert("letter")
    // } else {
    //   alert("not a letter")
    // }

    //  $("#convertedWord").append(word);
  });
});
