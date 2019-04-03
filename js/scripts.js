function abcCheck(word) {
  var letters = /^[a-zA-Z]+$/.test(word);
  alert(letters);
  alert(word);
  // if word.includes(letters) {
  //   return true
  // }
  // else{
  //   return false
  // }
}






$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    var word = $("input#wordToTranslate").val();
    var stringIsABC = abcCheck(word);
    if (stringIsABC === true) {
      alert("letter")
    } else {
      alert("not a letter")
    }

    //  $("#convertedWord").append(word);
  });
});
