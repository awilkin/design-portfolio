$(function(){

  $(".m-nav").click(function() {

    console.log('working');
    $('m-links').slideToggle(200, function() {
      // Animation complete.
    });
  });



}); //ready
