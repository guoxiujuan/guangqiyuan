
$(document).ready(function($) {

    // 加载
    $(window).load(function() {
      $(".loading").fadeOut();
    });
	
	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=959 ){
				$('.nv,.nav').stop().fadeIn();
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=959 ){
				$('.nv,.nav').stop().fadeOut();
			}
		}
	});

    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        if( _top>1 ){
            $('#hd').css("background","#111");
        }else{
            $('#hd').css("background","none");
        }
    });


   
        $('.nv').hover(function(){
            $('#hd').css("background","#111");
        },function(){
            $(window).scrollTop()<1 && $('#hd').css("background","none");
        });







    // 导航
    function myNav(){
        var _winw = $(window).width();
        if( _winw>959 ){
            $('.nav').show();
            $('.nav li').bind('mouseenter',function() {
                $(this).find('.subBox').stop().slideDown();
                if( $(this).find('.subBox').length ){
                    $(this).addClass('ok');
                }
            });
            $('.nav li').bind('mouseleave',function() {
                $(this).removeClass('ok');
                $(this).find('.subBox').stop().slideUp();
            });
            $('body,.menuBtn').removeClass('open');
        }else{
            $('.nav').hide();
            $('.nav li').unbind('mouseenter mouseleave');
            $('.nav .v1').click(function(){
                if( $(this).siblings('.subBox').length ){
                    $(this).siblings('.subBox').stop().slideToggle("fast");
                    return false;
                }
            });
        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
    });


    // 弹出框
    $('.myfancy').click(function(){
        var _id = $(this).attr('href');
        $(_id).fadeIn();
        $(_id).find(".pop-bg").fadeIn();
    });
    $('.pop-bg,.close').click(function(){
        $(this).parents('.m-pop').fadeOut();
        $(".pop-bg").fadeOut();
    });

	
});