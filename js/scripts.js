$(document).ready(function() {
  $("#beer").append("<h3>How many bottles of beer were there?");
  for ( var bottles = 99; bottles >= 1; bottles -= 1) {
    $("#beer").append("<p> " + bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. You take one and pass it around. " + (bottles - 1) + " bottles of beer on the wall.</p>");

  };
  $("#beer").append("<strong> There is no more beer.</strong>");
});
