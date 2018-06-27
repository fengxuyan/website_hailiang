$(function(){
	$(".header .nav-ico").click(function() {
		if ($(".header .m-navwrap").is(':hidden')) {
			$(".header .m-navwrap").stop().slideDown();
		}else{
			$(".header .m-navwrap").stop().slideUp();
		}
	});
	$(".header .m-navwrap .tit").click(function() {
		if ($(this).siblings('.sub-box').is(':hidden')) {
			$(this).siblings('.sub-box').stop().slideDown().parent().siblings().find('.sub-box').slideUp();
		}else{
			$(this).siblings('.sub-box').stop().slideUp()
		}
	});

	// 下拉一整个的大菜单
	// $(".header .nav ul").hover(function() {
	// 	$(".nav-sub-wrap").stop(true,true).slideDown();
	// }, function() {
	// 	$(".nav-sub-wrap").stop(true,true).slideUp();
	// });
	// $(".nav-sub-wrap").hover(function() {
	// 	$(this).stop(true,true).show();
	// }, function() {
	// 	$(this).stop(true,true).slideUp();
	// });

	$(".header .nav li.subli").hover(function() {
		var n = $(this).index();
		// $(".nav-sub-wrap").stop(true,true).slideDown();
		// $(".nav-sub-wrap .boxs").eq(n).show().siblings('.boxs').hide();
		$(this).children('.subbox').stop(true,true).show();
		$(this).addClass('hover').siblings('.subli').removeClass('hover');
	}, function() {
		// $(".nav-sub-wrap").stop(true,true).slideUp();
		$(this).children('.subbox').stop(true,true).hide();
		$(this).removeClass('hover');
	});

	// 下拉一整个的大菜单
	$(".nav-sub-wrap .boxs").hover(function() {
		var n = $(this).index();
		$(".header .nav li.subli").eq(n).addClass('hover');
	}, function() {
		$(".header .nav li.subli").removeClass('hover');
	});

	// $(".nav-sub-wrap li").hover(function() {
	// 	var n = $(this).index();
	// 	$(".header .nav li").eq(n).children('a').addClass('hover');
	// }, function() {
	// 	$(".header .nav li a").removeClass('hover');
	// });

	$(".header .sharebox .wei").hover(function() {
		$(this).children('img').stop().show();
	}, function() {
		$(this).children('img').stop().hide();
	});

	$(".footer .thibox .subbox li").hover(function() {
		$(this).stop().children('.second-level').show();
	}, function() {
		$(this).stop().children('.second-level').hide();
	})

	//搜索
	$(".header a.search-btn").click(function() {
		$(".searchbox,.search-bg,.close-search").show();
	});
	$(".close-search").click(function() {
		$(".searchbox,.search-bg,.close-search").hide();
	});

	$(".m-searchbtn").click(function() {
		$(".search-bg,.m-search-box,.m-close-search").show();
	});
	$(".m-close-search").click(function() {
		$(".search-bg,.m-search-box,.m-close-search").hide();
	});

	$(".site-link-box").hover(function() {
		$(this).children('.sub-box').stop(true,true).slideDown();
	}, function() {
		$(this).children('.sub-box').stop(true,true).slideUp();
	});
});

function Hover(obj, calssName) {
	obj.hover(function(){
		$(this).addClass(calssName);
	},function(){
		$(this).removeClass(calssName);
	})
}