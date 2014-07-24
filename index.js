$(document).ready(function(){




	var winHeight = $(window).height();

	if (winHeight>800 || winHeight<600) {
		function homeResize () {
			$('.homeBody .sec1').css('height',winHeight);
		}
		homeResize();
	};

	

	function circlePosition(){
		function circleMarginTop(top){
			$('.circleContain').css('margin-top',top);
		}

		if(winHeight<600){
			circleMarginTop(-55);
		}
		else if(winHeight>800){
			circleMarginTop((winHeight-140)*0.07);
		}
	}
	circlePosition();







	$('.circle').hover(function(){
		$('.aboutTab').toggleClass('aboutTabOut');
		$('.bookTab').toggleClass('bookTabOut');
		$('.linksTab').addClass('linksTabOut');
		$('.circle').toggleClass('circleOut');
	});

	$('.circleContain').mouseleave(function(){
		if($('.linksTab').hasClass('linksTabOut')){
			$('.linksTab').removeClass('linksTabOut');
		}
	});






















})