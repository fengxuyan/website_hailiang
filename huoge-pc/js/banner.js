// jQuery.fn.LoadImage=function(scaling,obj){
// 	var n = obj.length;
// 	return this.each(function(){
// 		var $t = $(this);
// 		var src = $(this).find("img").attr("src");
// 		var img = new Image();
// 		img.src = src;
// 		//处理ff下会自动读取缓存图片
// 		if(img.complete || img.width){
// 			n -- ;
// 			if(n == 0){
// 				banner();
// 			}
// 		    return;
// 		}
// 		$(img).load(function(){
// 			$t.find("img").attr("src",src);
// 			n -- ;
// 			if(n == 0){
// 				banner();
// 			}
// 		});
// 	});
// }
function banner(){
	//初始化banner样式
	$(".banner").css("background","none");

	var listN = $(".banner > ul > li").length;
	$(".banner > ul > li").eq(0).fadeIn(300);

	for(i=0;i<listN;i++){
		$(".btnbox").append('<span class="span'+i+' png"></span>');
	}
	// $(".btnbox").css("margin-left",-$(".btnbox").width()/2);
	$(".banner .btnbox span").eq(0).addClass("on");

	//执行效果
	var sw = 1;
	$(".banner .btnbox span").mouseover(function(){
		sw = $(".btnbox span").index(this);
		myShow(sw);
	});
	function myShow(i){
		$(".banner .btnbox span").eq(i).addClass("on").siblings("span").removeClass("on");
		$(".banner > ul > li").eq(i).stop().fadeIn(300).siblings().stop().fadeOut(300);
	}

	$(".banner-btnbox .up").click(function(){
        var n=$(".btnbox span.on").index();
        if ( n == 0){
            n = $(".btnbox span").length-1
        }else{
            n--
        }
        myShow(n)
    });

    $(".banner-btnbox .down").click(function(){
        var n=$(".btnbox span.on").index();
        if (n == $(".btnbox span").length-1) {
            n =0
        }else{
            n++
        };
        myShow(n)
    });
	//滑入停止动画，滑出开始动画
	$(".banner").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		clearInterval(myTime);
		myTime = setInterval(function(){
		  myShow(sw);
		  sw++;
		  if(sw==listN){sw=0;}
		} , 3000);
	});
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw);
	   sw++;
	   if(sw==listN){sw=0;}
	} , 3000);
}

$(function(){
	banner()
	// $(".banner > ul > li").LoadImage(true,$(".banner > ul > li"));
})