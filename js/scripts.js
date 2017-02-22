
//business logic:

//Behavior1: A year that is NOT a leap year
var leapYear = function(year) {
  return false;
};

//user interface (front end) logic:
$(document).ready(function (){
  $("form#leap-year").submit(function(event) {
      event.preventDefault();
      var year = parseInt($("input#year").val());
      var result = leapYear(year);
      $("#result").text(result);
  });
});
