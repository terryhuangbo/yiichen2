<?php if (get_option('wpyou_sliderposts')) { $sliderposts = get_option('wpyou_sliderposts'); } else { $sliderposts = 6; } ?>
<script language="javascript">
// SlideShow
$(function(){
	 var index = 0;
	 $("#operate span:first").addClass("hov");
	 $("#operate span").mouseover(function(){
		index  =  $("#operate span").index(this);
		showImg(index);
	});	
	 $('#slideshow').hover(function(){
			  if(MyTime){
				 clearInterval(MyTime);
			  }
	 },function(){
			  MyTime = setInterval(function(){
			    showImg(index)
				index++;
				if(index==<?php echo $sliderposts; ?>){index=0;}
			  } , 3000);
	 });
	 var MyTime = setInterval(function(){
		showImg(index)
		index++;
		if(index==<?php echo $sliderposts; ?>){index=0;}
	 } , 3000);
})
function showImg(i){
	$("#showimg img")
		.eq(i).stop(true,true).fadeIn(1000)
		.parent().siblings().find("img").hide();
	$("#msg li")
		.eq(i).stop(true,true).fadeIn(1000)
		.siblings().hide();
	$("#operate span")
		.eq(i).addClass("hov")
		.siblings().removeClass("hov");
}
<?php if (get_option('wpyou_ad_coupleleft')) { ?>
//AD_CoupleLeftBanner
$(document).ready(function(){
        $(".closeadl").click( function(){$('#ad_coupleleft').css('display','none');})
        var menuYloc = $("#ad_coupleleft").offset().top;
        $(window).scroll(function (){ 
            var offsetTop = menuYloc + $(window).scrollTop() +"px";
            $("#ad_coupleleft").animate({top : offsetTop },{ duration:100 , queue:false });
        });
    });
<?php } ?>
<?php if (get_option('wpyou_ad_coupleright')) { ?>
//AD_CoupleRightBanner
$(document).ready(function(){
	$(".closeadr").click( function(){$('#ad_coupleright').css('display','none');})
	var menuYloc = $("#ad_coupleright").offset().top;
	$(window).scroll(function (){ 
		var offsetTop = menuYloc + $(window).scrollTop() +"px";
		$("#ad_coupleright").animate({top : offsetTop },{ duration:100 , queue:false });
	});
});
<?php } ?>
</script>