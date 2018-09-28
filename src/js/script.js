$(function(){

	//Iniciar AOS Lib

	AOS.init();

	//Alterar classe da navbar
    	
	$(window).scroll(function(){		
		if($(window).scrollTop() <= 40){
			$('nav').removeClass('nav-scroll');
			$('nav').addClass('navbar-dark');
			$('nav').removeClass('navbar-light');
			if ($(window).width() <= 767) {  
				$('#navbarNav').addClass('federal-nav');
			}		            
		} else {
			$('nav').addClass('nav-scroll');
			$('nav').removeClass('navbar-dark');
			$('nav').addClass('navbar-light');
			if ($(window).width() <= 767) {  
				$('#navbarNav').removeClass('federal-nav');
			}
		}
	});

	//Alterar posição do titulo no onload
	if ($(window).width() <= 767) {  
		$('.titulo-responsivo').removeClass('offset-6');
	} else {
		$('.titulo-responsivo').addClass('offset-6');
	} 

	if($(window).scrollTop() <= 40){
		$('nav').removeClass('nav-scroll');
		$('nav').addClass('navbar-dark');
		if ($(window).width() <= 767) {  
			$('#navbarNav').addClass('federal-nav');
		}		            
	} else {
		$('nav').addClass('nav-scroll');
		if ($(window).width() <= 767) {  
			$('#navbarNav').removeClass('federal-nav');
		}
	}
	
});

//Alterar posição do titulo no resize da página

$(window).resize(function(){
	if ($(window).width() <= 767) {  
		$('.titulo-responsivo').removeClass('offset-6');
	} else {
		$('.titulo-responsivo').addClass('offset-6');
	} 
});
