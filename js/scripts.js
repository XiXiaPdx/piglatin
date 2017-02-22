
//business logic:
var latinOutput;
var englishInput;
var vowels = ["a","e","i","o","u","A","E","I","O","U"];
//Behavior1: A year that is NOT a leap year
var translateLetter = function (letter) {
  for (i=0;i<vowels.length;i++) {
      if (letter === vowels[i]) {
      latinOutput = letter+"ay"
      return;
    }
    else {
      latinOutput = letter;
    }
  }
};

//user interface logic:
$(document).ready(function() {
  $("form#englishForm").submit(function(event) {
      event.preventDefault();
      var englishInput = $("input#english").val();
      translateLetter (englishInput);

      $("#result").text(latinOutput);
      $("#result").show();
  });
});
