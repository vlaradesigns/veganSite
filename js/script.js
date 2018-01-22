
var typed = new Typed('.typed', {
  strings: ["" , "Food Festival", "Fun Festival", "Music Festival", "Festival"],
  typeSpeed: 60,
  smartBackspace: true,
  
});




$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
	    document.getElementById("open").style.display = "none";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open").style.display = "inline";

}

//If user scrolls while menu is open it will close it. 

$( document ).ready(function() {    
    $(window).scroll(function () {     
        if ($('body').scrollTop() < 800) {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("open").style.display = "inline";

			} else {
      document.getElementById("mySidenav").style.width = "0";


        }
    });
 });
	
	
