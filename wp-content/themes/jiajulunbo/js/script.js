$(document).ready(function(){   
  
    $("ul.sub-menu").parent().append("<span></span>"); //Only shows drop down trigger when js is enabled (Adds empty span tag after ul.sub-menu*)   
  
    $("ul.menu li span").mouseover(function() { //When trigger is clicked...   
  
        //Following events are applied to the sub-menu itself (moving sub-menu up and down)   
        $(this).parent().find("ul.sub-menu").slideDown('fast').show(); //Drop down the sub-menu on click   
  
        $(this).parent().hover(function() {   
        }, function(){   
            $(this).parent().find("ul.sub-menu").slideUp('slow'); //When the mouse hovers out of the sub-menu, move it back up   
        });   
  
        //Following events are applied to the trigger (Hover events for the trigger)   
        }).hover(function() {   
            $(this).addClass("subhover"); //On hover over, add class "subhover"   
        }, function(){  //On Hover Out   
            $(this).removeClass("subhover"); //On hover out, remove class "subhover"   
    });   
  
});  


$(document).ready(function(){
		 $.getScript("http://www.themepark.com.cn/js/themepark.js");
	});