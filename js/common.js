head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	// console.log($('body').html());

	//sliders

	$('.js-slick').slick({
		fade: true,
		arrows: false,
		dots: true
	});

	$('.js-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
		   {
		     breakpoint: 980,
		     settings: {
		       slidesToShow: 2
		     }
		   },
		   {
		     breakpoint: 768,
		     settings: {
		       slidesToShow: 1,
		     }
		   }
		 ]
	});

	//header fixed

	$(window).scroll(function() {
		header = $('.top').offset().top;
		scrollTop = $(window).scrollTop();
		if (scrollTop > header) {
			$('.js-fixed').addClass('is-active');
		}
		else {
			$('.js-fixed').removeClass('is-active');
		};
	});
	$(window).load(function() {
		header = $('.top').offset().top;
		scrollTop = $(window).scrollTop();
		if (scrollTop > header) {
			$('.js-fixed').addClass('is-active');
		}
		else {
			$('.js-fixed').removeClass('is-active');
		};
	});

	//header nav

	$('.js-nav').each(function() {
		$('body').on('click', function() {
			$('.js-nav').removeClass('is-active');
		});
		$(this).on('click', function(event) {
			event.stopPropagation();
		});
	});


	$('.js-nav-btn').on('click', function() {
		$('.js-nav').toggleClass('is-active');
		return false;
	});

	//inputs focus 

	$('.js-input').focusin(function() {
		$(this).parent('.js-field').addClass('is-active');
	});	
	$('.js-input').focusout(function() {
			$(this).parent('.js-field').removeClass('is-active');	
	});

	//effects
	function visibility(){
		var window_top = $(window).scrollTop();
		var window_height = $(window).height();
		var start_visibility = window_top + window_height;
	  
		$(".js-visibility").each(function(){
		
			var block_position = $(this).offset().top;

			if(start_visibility >= block_position + 150){
				$(this).addClass('is-visible');
			}
		});
	}
	visibility();
	$(window).scroll(function(){
		visibility();
	});
	$(window).load(function(){
		visibility();
	});

	autosize(document.querySelectorAll('.js-textarea'));

});