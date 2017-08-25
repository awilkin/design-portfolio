$(function(){

  var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))


// on hover over project img, nearest card will show
// document.getElementById('gform').style.display = 'none'; // hide form

  // hover on a link card, card will show
  $("article").hover(function() {
    $(".card").css("opacity", "1");
    // this.children(".card").css("opacity", "1");
  }); // hover function

}); //ready
