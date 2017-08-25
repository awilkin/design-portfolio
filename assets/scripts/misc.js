$(function(){

  var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

  // hover on a link card, card will show
  $("article").hover(function() {
    $(this).children(".card").fadeToggle(100);
  }); // hover function


}); //ready
