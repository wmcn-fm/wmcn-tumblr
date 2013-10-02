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

	var counter = 1;

	var prependTag1 = '<p class="post_tag"><a href="http://wmcn.tumblr.com/tagged/';
	var appendTag = '</a></p>';
	var bullet = '<span> &bull; </span>';
	var preContentContainer = '<div class="blog_item">';
	var postContentContainer = '</div>';

	$.ajax({
		url: 'http://api.tumblr.com/v2/blog/wmcn.tumblr.com/posts/text?api_key=GwinmSoZc7RkdQ6kcfEHvHAZxQyu0lpj3t82v4EST0nrYE6B1e&limit=9',
		dataType: "jsonp",
		success: function(data) {
		  	$.each(data.response.posts, function(index, item) {
		  		var post_url = item.post_url,
		  		date = item.date,
		  		heading = item.title,
		  		content = item.body,
		  		tags = item.tags

		  		wholeTags = [];


		  		for (var i = 0; i < tags.length; i++) {

		  			var dashed = tags[i].replace(/ /g,'-').replace(/'/g,"%27") + '/">';

		  			wholeTag = prependTag1 + dashed + tags[i] + appendTag + bullet;

		  			wholeTags.push(wholeTag);
				}

		  		$('div#' + counter).first().append("<a href=" + post_url + "#blog><h2>" + heading + "</a></h2>");
		  		$('div#' + counter).first().append(preContentContainer + content + postContentContainer);
		  		$('div#' + counter).first().append(wholeTags)

		  		counter++;
		  	}); //end each
		}
	});

	var counter2 = 1;

	$.ajax({
		url: 'http://api.tumblr.com/v2/blog/wmcn.tumblr.com/posts?api_key=GwinmSoZc7RkdQ6kcfEHvHAZxQyu0lpj3t82v4EST0nrYE6B1e&tag=blog',
		dataType: "jsonp",
		success: function(data) {
			$.each(data.response.posts, function(index,item) {
				var post_url = item.post_url,
				date = item.date,
				heading = item.title,
				content = item.body,
				tags = item.tags

				wholeTags = [];

		  		for (var i = 0; i < tags.length; i++) {

		  			var dashed = tags[i].replace(/ /g,'-').replace(/'/g,"").replace('.','') + '/">';

		  			wholeTag = prependTag1 + dashed + tags[i] + appendTag;
		  			wholeTags.push(wholeTag);
				}

				$('div#b' + counter2).first().append("<a href=" + post_url + "#blog><h2>" + heading + "</a></h2>");
		  		$('div#b' + counter2).first().append(preContentContainer + content + postContentContainer);
		  		$('div#b' + counter2).first().append(wholeTags);

		  		counter2++;
			}); // end each
		}
	}); //end ajax call

	//TABLE:
	$('div.summary').hide();
	$('td').hover(function() {
		$(this).find('div.summary').slideToggle();
	});

	//CYCLE:
/*
	$(window).scroll(function() {
		$('.cycle-slideshow').not(':visible').cycle('pause');
		$('.cycle-slideshow').is(':visible').cycle('resume');
		var slideshows = [];
		$('.cycle-slideshow').each(function(index, value) {
			slideshows.push($(this));

			for (var i = 0; i < slideshows.length; i++) {
				if (slideshows[i].not(':visible')) {
					slideshows[i].cycle('pause');
				} else if (slideshows[i].is(':visible').is('cycle-paused')) {
					slideshows[i].cycle('resume');

				};
			}

		});

	});
	
*/
	//CONTACT:.
/*
	$('#contacts').on('cycle-before', function(event, opts) {

	});

	if (true) {} else{};
	$('div.tooltip').each(function(i, obj) {
		if ($(this).hasClass('cycle-slide-active')) {
			which = $(this).attr("class").replace('tooltip', '').replace('cycle-slide-active','').replace('cycle-slide','').replace(' ','');
			selector = 'img.' + which;
			underscore = $(selector).mouseover();
		};
	});*/
	//$('div.contact-slides').hide();
	//$('div.icons').hover(function() {
	    //which = $(this).attr("class").replace('tooltip', '').replace(' ','');
	    //selector = 'div.' + which;
	    //slide = $('div.contact-slides').slideToggle();
	//});

}); // end ready