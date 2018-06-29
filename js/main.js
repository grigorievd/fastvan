$(function() {
	var $window = $(window);

	//accordeon
	$('.accordeon-toggle').click(function(event){
		$(this).toggleClass('active').next().slideToggle(400);
	});

	//sticky header
	$window.scroll(function(event) {
		if($window.scrollTop() > 0) {
			$('.header-main').addClass('sticky');
		} else {
			$('.header-main').removeClass('sticky');
		}
	});

	//popup
	$('.toggle-popup, .popup__mask').click(function(event) {
		event.preventDefault();

		$($(this).attr('href')).toggleClass('popup--active');
	});

	//testimonials

	function changeTestimonial(testimonial) {
		var $testimonial = testimonial,
			testimonialPosition = $testimonial.data('testimonial');

		$testimonial.removeClass('next');
		$testimonial.siblings(':not(.testimonials__quote--active)').addClass('next');

		if(!$testimonial.hasClass('testimonials__quote--active')) {
			$('.testimonials__quote--active').addClass('testimonials__quote--' + testimonialPosition).data('testimonial', testimonialPosition).removeClass('testimonials__quote--active testimonials__quote--center');
			$testimonial.addClass('testimonials__quote--active testimonials__quote--center').removeClass('testimonials__quote--left testimonials__quote--right');	
		}
	}

	$('.testimonials__quote').click(function(event) {
		changeTestimonial($(this));
	});

	setInterval(function(){
		changeTestimonial($('.testimonials__quote.next'));	
	}, 4000);

	//logos
	$('.logos').slick({
	  infinite: true,
	  slidesToShow: 6,
		slidesToScroll: 1,
	  // centerMode: true
	  autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
	    {
	      breakpoint: 1023,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2
	      }
	    }
	  ]
	});

	//menu

	$('.toggle-mobile-menu').click(function(event) {
		$('.header-main nav').toggleClass('active');
	});

});