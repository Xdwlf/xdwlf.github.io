 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        if($(this).html() == '<i class="fas fa-angle-double-left"></i>'){
        	$(this).html('<i class="fas fa-angle-double-right"></i>');
        	$("div .container-fluid #main-content").css("filter","none");
        	$("#fadeoutbackground").css("background-image","url(images/background2.jpg)");
        } else{ 
        	$(this).html('<i class="fas fa-angle-double-left"></i>')
        	$("div .container-fluid #main-content").css("filter","blur(2px)");
        	$("#fadeoutbackground").css("background-image","linear-gradient(rgba(0,0,10,0.6),rgba(0,0,10,0.6)), url(images/background2.jpg)");
        }
        $("#wrapper").toggleClass("toggled");

    });


$(document).ready(function() {
    $('#fadeoutbackground').animate({opacity: 0}, 0).css({'background-image': 'url(images/background2.jpg)'}).animate({opacity: 1}, 2000);
});