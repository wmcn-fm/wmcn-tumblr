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

	//TUMBLR:
	//var tumblr = require('index.js');
	/*
	var client = tumblr.createClient({
	  //consumer_key: 'GwinmSoZc7RkdQ6kcfEHvHAZxQyu0lpj3t82v4EST0nrYE6B1e',
	  //consumer_secret: '7gm6oRJPHQ5X6efapzS9znstk8itNbce6uzERblEo7T0Q7E26W',
	  //token: 'vwE3Cv3NJqeUOFPiuwEfRHMsGcMCb8QUKi4URgre40e2wiQI2X',
	  //token_secret: 'cKTa4KOiukaJ64DeDlH1ft57Ba4qsLCdquSL9dPjAEZk7DHCI6'
	  consumer_key: 'GwinmSoZc7RkdQ6kcfEHvHAZxQyu0lpj3t82v4EST0nrYE6B1e',
	  consumer_secret: '7gm6oRJPHQ5X6efapzS9znstk8itNbce6uzERblEo7T0Q7E26W',
	  token: 'QoI8b6ndrx2BZAtapb4CweGMh4YOA4TnZzDXPeJrzbiQcWdC9N',
	  token_secret: 'xGbkCZGbHwUDFT9Od0gWiS9FxyMHAnqBJdmzCd3Pmvnb3QpqhE'
	});
	*/
	var counter = 1;
	$.ajax({
		url: 'http://api.tumblr.com/v2/blog/wmcn.tumblr.com/posts/text?api_key=GwinmSoZc7RkdQ6kcfEHvHAZxQyu0lpj3t82v4EST0nrYE6B1e&limit=9',
		dataType: "jsonp",
		success: function(data) {
	  	$.each(data.response.posts, function(index, item) {
	  		var post_url = item.short_url,
	  		date = item.date,
	  		heading = item.title,
	  		content = item.body

	  		console.log(date);
	  		$('div#' + counter).first().append("<a href=" + post_url + "><h2>" + heading + "</a></h2>");
	  		$('div#' + counter).first().append(content);


	  		counter++;
	  	});
	  }
	});





	//TABLE:
	$('div.summary').hide();
	$('td').hover(function() {
		$(this).find('div.summary').slideToggle();
	});

	//CONTACT:.
	$('div.tooltip').hide();
	$('img.tooltip').hover(function() {
	    which = $(this).attr("class").replace('tooltip', '').replace(' ','');
	    selector = 'div.' + which;
	    slide = $(selector).delay(500).toggle("slide");
	    console.log(slide);
	});








}); // end ready