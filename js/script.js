$(document).ready(function(){
	$('.carousel').slick({
	autoplay: true,
  dots: false,
	arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
	});

	$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
	});

});
