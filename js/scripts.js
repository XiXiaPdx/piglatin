
//business logic:
var latinOutput="";
var englishInput;
var vowels = /a|e|i|o|u/i;
var alphabet =/[a-z]/i;
var qu = /q|u/i;
var inputArray = [];
var masterArray =[];
var endSymbol = []; // check word, if symbol at end, make endSymbol = that symbol. And chop off that symbol from the word. Run our program as usual.

var makeIndWordArrays = function(words){
  masterArray=words.split(" ");
}

//Behavior1: A year that is NOT a leap year
var makeIndCharacterArray = function (word) {
  inputArray=word.split("");
  endSymbol[0] = inputArray[inputArray.length - 1] ;
    if(alphabet.test(endSymbol[0])){
      endSymbol[0]="";
    } else {
      inputArray.splice((inputArray.length-1),1);
    }
}

var rejoinCharacterArray = function (latinArray) {
  latinOutput=latinOutput+latinArray.join("")+endSymbol[0]+" ";
}


var translateString = function (inputString) {
  for (var j=0;j<inputString.length;j++) {
    if (vowels.test((inputString[0]))){
       inputArray.push("ay");
       return;
    } else if
        (qu.test((inputString[0]))) {
              inputArray.push("quay");
              inputArray.splice(0,2);
              return;
            }
              else {
              var consonant = inputString[0];
              inputArray.push(consonant);
              inputArray.splice(0,1);
              };
        };
  };

//user interface logic:
$(document).ready(function() {
  $("form#englishForm").submit(function(event) {
      event.preventDefault();
      latinOutput = "";
      var englishInput = $("input#english").val();
      makeIndWordArrays (englishInput);

      for (var b=0;b<masterArray.length;b++) {
      makeIndCharacterArray (masterArray[b]);
      translateString (inputArray);
      rejoinCharacterArray (inputArray);
      };
      $("#result").find("h1").remove();
      $("#result").prepend("<h1>"+latinOutput+"</h1>");
      $("#result").prepend("<h1>"+englishInput+"</h1>");
      $("#result").show();
      $("#englishForm").trigger("reset");

  });
});
