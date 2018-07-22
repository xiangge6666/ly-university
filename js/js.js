$(function(){
	
	var $ban = $('.in-banner');
	var $bul = $('.in-banner ul');
	var w = 1200;
	var num1 = 1;
	var he = window.innerHeight;
	
	$bul.append($bul.children().first().clone());
	$bul.prepend($bul.children().last().clone());
	
	var x = $('.in-banner li').length;
	$('.in-banner ul').css('width',1200*x);
	
	console.log(w)
	function domove1(){
		$bul.stop(false,false).animate({left: '-=' + w},1200,
		function(){
			num1++;
			if(num1 == x-1){
				$bul.css('left',-w);
				num1 = 1
			};
		})
	}
	
	var $ul = $('.in-right ul');
	var $li = $ul.children();
	var h = 70
	
	function domove2(){
		$ul.stop(true,false).animate({top: -h*2},1000,
		function(){
			$('.in-right ul').css({top:-h});
			$('.in-right li:last').after(
				$('.in-right li:first')
			);
		})
	};
	var timer1,timer2;
	timer1 = setInterval(domove1,3000);
	timer2 = setInterval(domove2,3000);
	
	var movie = $('.in-movie');
	
	movie.hover(function(){
		$(this).children('p').stop(false,false).fadeToggle(500);
		$(this).children('.five').stop(false,false).fadeToggle(500);
	});
	
	$ul.children().mouseenter(function(){
		$(this).find('.in-tages-text2 p').css('color','#8B43FF');
		clearInterval(timer2);
	});
	$ul.children().mouseleave(function(){
		$(this).find('.in-tages-text2 p').css('color','#000');
		timer2 = setInterval(domove2,3000);
	});
	//首页公告栏滚动
	
	$('.namecard').css('height',he + 'px');
	
	
	$('.g-leader li div').click(function(){
		$('.namecard').fadeIn(200);
	});
	
	$('.namecard>div>img').click(function(){
		$('.namecard').fadeOut(200);
	})
	//领导信息出入
	var arr1 = [];//领导图片
	var arr2 = [];//领导信息
	
	
	
	var $schman = $('.school-department');
	$schman.find('ul>li>p').click(function(){
		$(this).siblings('ol').find('li>p').stop(false,false).slideToggle(200);
	});
	
	$schman.find('ol li>p').click(function(){
		$(this).siblings('div').stop(false,false).slideToggle(100);
	});
	
})