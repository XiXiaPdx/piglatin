
//business logic:
var latinOutput="";
var englishInput;
var vowels = ["a","e","i","o","u","A","E","I","O","U"];
var inputArray = [];
var masterArray =[];
var endSymbol = []; // check word, if symbol at end, make endSymbol = that symbol. And chop off that symbol from the word. Run our program as usual.

var makeIndWordArrays = function(words){
  masterArray=words.split(" ");
}

//Behavior1: A year that is NOT a leap year
var makeIndCharacterArray = function (word) {
  inputArray=word.split("");
    if(inputArray[inputArray.length - 1] ==="."){
      endSymbol[0]=".";
      inputArray.splice((inputArray.length-1),1);
    } else {
      endSymbol[0]="";
    }
    console.log(endSymbol);
    console.log(inputArray);
}

var rejoinCharacterArray = function (latinArray) {
  latinOutput=latinOutput+latinArray.join("")+endSymbol[0]+" ";
}


var translateString = function (inputString) {
  for (var j=0;j<inputString.length;j++) {
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
  for (var i=0;i<vowels.length;i++) {
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
      makeIndWordArrays (englishInput);

      for (var b=0;b<masterArray.length;b++) {
      makeIndCharacterArray (masterArray[b]);
      translateString (inputArray);
      rejoinCharacterArray (inputArray);
      };

      $("#result").text(latinOutput);
      $("#result").show();
  });
});
