$(document).ready(function(){

document.onreadystatechange = function () {    
                if(document.readyState=="complete") {          
                    setTimeout("$('#box_loading').animate({top:'-1100px'}, 500); ", 1000)
                }   
            }
	    
	    
$('#menu > li').click(function(){
       $(this).removeClass("selected");       
	   $(this).addClass("selected");
	   $(this).siblings().removeClass('selected');
	   
});
$('.top_rim a').click(function(){
	   $("#menu li").removeClass("selected"); 
	   $("#menu li#mn_home").addClass("selected");
});

});
$(document).ready(function(){

$("#box_loading a").click(function(){
				$('#box_loading').stop().animate({top:"-1100px"},500);
				});
				
  $("#about .extendLink a").click(function(){
					setTimeout("$('#about_cont').stop().animate({height:'1100px'},500); ", 850)
});
$("#about_cont .close_btu").click(function(){
					    $('#about_cont').stop().animate({height:"0px"},500);
});

				 		
$('#nav').localScroll(1100);
$('.top_rim').localScroll(1100);
$('.extendLink').localScroll(1100);
$('.about_rim').localScroll(1100);
//.parallax(xPosition, speedFactor, outerHeight) options:
//xPosition - Horizontal position of the element
//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
$('#home').parallax("50%", 0.1);
$('#about').parallax("50%", 0.1);
$('#about_cont').parallax("50%", 0.1);
$('#famous').parallax("50%", 0.1);
$('#news').parallax("50%", 0.1);
$('#products').parallax("50%", 0.1);
$('#sector').parallax("50%", 0.1);
$('.sprite').parallax("50%", 0);
$('#products .sprite').parallax("50%", 0-0.5);
$('#products .screen').parallax("50%", 0-0.2);
$('#about .screen').parallax("50%", 0-0.5);
$('#about_cont .screen').parallax("50%", 0-0.5);
$('#about_cont .sprite').parallax("50%", 0-0.5);
$('#about_cont .screen1').parallax("50%", 0-0.1);
$('#sector .screen').parallax("50%", 0-0.5);
$('#home .sprite1').parallax("50%", 0-0.5);
$('#famous .sprite').parallax("50%", 0-0.5);
$('#sector .sprite').parallax("50%", 0-0.2);
})
function SlyarErrors() { 
	return true;
} 
window.onerror = SlyarErrors;