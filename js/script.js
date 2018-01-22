
var typed = new Typed('.typed', {
  strings: ["" , "Food Festival", "Fun Festival", "Music Festival", "Festival"],
  typeSpeed: 60,
  smartBackspace: true,
	loop: true
  
});




$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

