//Alterar classe da navbar
$(function(){
    	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
            $('nav').removeClass('nav-scroll');
            
		} else {
            $('nav').addClass('nav-scroll');
		}
	});
});
