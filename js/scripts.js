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

	function getWidth() {
		winW = $(window).width();
		if ( winW > 500 ) {
			isMobile = false;
			return false;
		} else{
			isMobile = true;
			return true;
			mobileAdjusts();
		};
	}

	function mobileAdjusts() {
		desktop = $('.header').find('img.desktop');
		for (i=0; i<desktop.length; i++) {
			$(this).removeClass('active').addClass('inactive');
		};

		mobile = $('.header, .footer').find('img.mobile');
		for (i=0; i<mobile.length; i++) {
			$(this).removeClass('inactive').addClass('active');
		};
	};

	getWidth();

	$(window).resize(function() {
		if (window.innerWidth < 500) {
			isMobile = true;
			console.log(isMobile);
			console.log(window.innerWidth);
			mobileAdjusts();
		} else {
			isMobile = false;
			console.log(isMobile);
			console.log(window.innerWidth);
		}
	});



}); // end ready