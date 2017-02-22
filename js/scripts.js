var leapYear = function(year) {
   if ((year%400)===0 ) {
     return true;
   } else if (((year%4)=== 0) && ((year%100 )!=0)) {
     return true;
   } else {
    return false;
    }
};

$(document).ready(function (){
  $("#theYear").submit(function(event){
    event.preventDefault();
    var yearInput = parseInt($("input#year").val());
    var yearChecked = leapYear(yearInput);
    $("#result").text(yearChecked);
  })
});
