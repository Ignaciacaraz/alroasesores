/* Please ❤ this if you like it! */

(function($) { 
	"use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	// Animation for Hero Section
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
		
		// Card Fade-In Animation
		$('.card').css('opacity', 0); // Set the initial opacity of the cards to 0

		// Animate each card to fade in with a delay
		$('.card').each(function(index) {
			$(this).delay(500 * index).animate({opacity: 1}, 1000);
		});
	});

	// Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	// Switch light/dark mode
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  

    // Enlace de WhatsApp
const whatsappLink = "https://wa.me/tuNumeroDeTelefono";

// Función para actualizar los enlaces de los botones
function updateButtonLinks() {
    // Selecciona todos los botones de contratar
    const buttons = document.querySelectorAll('.btn-contratar');

    // Actualiza el atributo href de cada botón
    buttons.forEach(button => {
        button.href = whatsappLink;
    });
}

// Llama a la función después de que el contenido de la página se haya cargado
document.addEventListener('DOMContentLoaded', updateButtonLinks);



	
})(jQuery);
