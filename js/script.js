// event pada saat link diklik
$(document).ready(function(){
	$('.page-scroll').on('click', function(e){

			// ambil isi href
			var tujuan = $(this).attr('href');
			// ambil elemen ybs
			var elemenTujuan = $(tujuan);
			

			$('html, body').animate({
				scrollTop: elemenTujuan.offset().top - 60
			},800, 'swing');


			e.preventDefault();
		});
	});

// parallax
// about
$(window).on('load', function(){
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/8 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2.2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
	});

	// portfolio 
	if(wScroll > $('.portfolio').offset().top - 250 ) {
		$('.portfolio .img-thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .img-thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}
});
