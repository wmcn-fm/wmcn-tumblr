$(document).ready(function(){

isMobile = false;
mobileWidth = 500;

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
		desktop = $('header, footer').find('desktop');
		for (i=0; i<desktop.length; i++) {
			$(this).removeClass('active').addClass('inactive');
		};

		mobile = $('header, footer').find('mobile');
		for (i=0; i<mobile.length; i++) {
			$(this).removeClass('inactive').addClass('active');
		};
	};

	getWidth();

	$(window).resize(function() {
		console.log('hey');
		if ($(window).width<500) {
			isMobile = true;
			mobileAdjusts();
		} else {
			isMobile = false;
		}
	});



}); // end ready