var leapYear = function(year) {
   if ((year%4===0) && (year%100!==0) || (year%400===0)) {
     return true;
   } else {
    return false;
    }
};

var factorial = function(number) {
  if (number===0) {
    return 1;
  } else {
    return (number * factorial(number-1));
  }
}

$(document).ready(function (){
  $("#theYear").submit(function(event){
    event.preventDefault();
    var yearInput = parseInt($("input#year").val());
    var yearChecked = leapYear(yearInput);
      $(".year").text(yearInput);
     if (yearChecked) {
       $(".not").hide();
     } else {
        $(".not").show();
     }
     $("#result").show();
  })
  var total=factorial(5);
  console.log(total);
  $("#factorial").text(total);
});
