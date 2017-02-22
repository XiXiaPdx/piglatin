
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
  for (j=0;j<inputString.length;j++)
  if (checkLetterIsVowel(inputString[0])){
     inputArray.push("ay");
     console.log(inputArray);
     return;
  } else {

  };
};

var checkLetterIsVowel = function (letter) {
  for (i=0;i<vowels.length;i++) {
      if (letter[j] === vowels[i]) {
      return true;
    }
    else {
      latinOutput = letter;
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
