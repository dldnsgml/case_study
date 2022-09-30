$(function(){

	$("#gnb > ul > li").hover(
			function(){
				$(this).addClass("active");
				$(this).parent().parent().stop().animate({height:200}, 30);
			},
			function(){
				$(this).removeClass("active");
				$(this).parent().parent().stop().animate({height:40}, 30);
			}
		);

		$("#gnb li li a").hover(
			function(){
				$(this).addClass("active");
			},
			function(){
				$(this).removeClass("active");
			}
		);
		
		$("#gnb > ul > li > a").focusin(function(){
			$(this).parent().addClass("active");
			$(this).parent().parent().parent().stop().animate({height:200}, 30);
		});
		$("#gnb li li:last-child").focusout(function(){
			$(this).parent().parent().removeClass("active");
		});
		$("#gnb li:last-child li:last-child").focusout(function(){
			$("#gnb").stop().animate({height:40}, 100);
		});

	var n=0;
	var total=4;
	$(".slider_moving li").eq(n).addClass("current");

	var id=setInterval(function(){
		if(n < (total-1)){
			n=n+1;
		}
		else{
			n=0;
		}

		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(n).addClass("current");
	}, 6000);

	$(".left_controlls").click(function(e){
		e.preventDefault();

		if(n > 0){
			n=n-1;
		}
		else{
			n=total-1;
		}

		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(n).addClass("current");
	});
	$(".right_controlls").click(function(e){
		e.preventDefault();

		if(n < (total-1)){
			n=n+1;
		}
		else{
			n=0;
		}

		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(n).addClass("current");
	});
});