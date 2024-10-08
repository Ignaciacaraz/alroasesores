
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

	// Menu 
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	// poner modo oscuro
	$("body").addClass("dark");

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
	
	$(document).ready(function() {
		// Suavizar el desplazamiento al hacer clic en los enlaces de navegación
		$('a.nav-link, a.dropdown-item').on('click', function(event) {
			// Asegurarse de que el enlace tenga un destino de desplazamiento
			if (this.hash !== "") {
				// Prevenir el comportamiento predeterminado del clic
				event.preventDefault();
	
				// Almacenar el destino del enlace
				var hash = this.hash;
	
				// Realizar la transición suave
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){
					// Agregar el hash a la URL después de la animación
					window.location.hash = hash;
				});
			}
		});
	});
	

})(jQuery);
