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

$(window).resize(function(){

	if ($(window).width() <= 767) {  
		$('.titulo-responsivo').removeClass('offset-6');
	} else {
		$('.titulo-responsivo').addClass('offset-6');
	}     
});
