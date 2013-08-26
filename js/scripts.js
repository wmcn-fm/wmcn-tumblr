isMobile = false;
mobileWidth = 500;
slideSpeed = 5000;

$(document).ready(function(){

	//SMOOTH SCROLL:
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	}); //end click

	//MOBILE IMAGES:

	var onResize = function() {
		if (window.innerWidth < mobileWidth) {

			isMobile = true;
			$('.header, .footer').find('img.desktop').removeClass('active').addClass('inactive');
			$('.header, .footer').find('img.mobile').removeClass('inactive').addClass('active');

		} else {

			isMobile = false;
			$('.header, .footer').find('img.mobile').removeClass('active').addClass('inactive');
			$('.header, .footer').find('img.desktop').removeClass('inactive').addClass('active');
		}
	};

	window.onresize = onResize;
	window.onload = onResize;

	// CYCLE:

	$('.slideshow-container').each( function() {
		$(this).cycle({
			slides: '> div.slide-wrapper',
			speed: 200,
			//timeout: 4000,
			fx: 'scrollHorz'
			//log: false,
			//pauseOnHover: true,
			//updateView: 0
		});
	});



	/*$(function(){
		var swiper = $('.swiper-container').swiper({
			mode: 'horizontal',
			loop: true,
			calculateHeight: true,
			autoplay: slideSpeed
		});

		$('.prev, .next, .swiper-container').hover(function(){
			swiper.stopAutoplay();
			//console.log(autoSpeed);
		});

	})*/



	$('.prev').click(function() {
		$swiper
	})

	


}); // end ready