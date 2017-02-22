
//business logic:
var latinOutput;
var englishInput;
var vowels = ["a","e","i","o","u","A","E","I","O","U"];
var inputArray = [];

//Behavior1: A year that is NOT a leap year
var makeIndCharacterArray = function (word) {
  inputArray=word.split("");
}

var rejoinCharacterArray = function (latinArray) {
  latinOutput=latinArray.join("");
}


var translateString = function (inputString) {
  for (j=0;j<inputString.length;j++) {
    if (checkLetterIsVowel(inputString[0])){
       inputArray.push("ay");
       return;
    } else if
        ((inputString[0] === "q" || inputString[0] === "Q") && (inputString[1] === "u" || inputString[1] ==="U")) {
                inputArray.push(inputString[0]);
                inputArray.push(inputString[1]);
                inputArray.push("ay");
                inputArray.splice(0,2);      
                return;
              }
                else {
                var consonant = inputString[0];
                inputArray.push(consonant);
                inputArray.splice(0,1);
                console.log(inputArray);
              };
        };
  };


var checkLetterIsVowel = function (letter) {
  for (i=0;i<vowels.length;i++) {
      if (letter === vowels[i]) {
      return true;
    }
    else {

    }
  };
};

//user interface logic:
$(document).ready(function() {
  $("form#englishForm").submit(function(event) {
      event.preventDefault();
      var englishInput = $("input#english").val();
      makeIndCharacterArray (englishInput);
      translateString (inputArray);
      rejoinCharacterArray (inputArray);
      $("#result").text(latinOutput);
      $("#result").show();
  });
});
