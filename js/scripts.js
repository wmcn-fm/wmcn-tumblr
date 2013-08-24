isMobile = false;
mobileWidth = 500;

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

	


}); // end ready