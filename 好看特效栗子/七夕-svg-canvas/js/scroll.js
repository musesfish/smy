window.onscroll = function(){
	var top = 0;//当前滚动条高度
        if(document.documentElement && document.documentElement.scrollTop)
            top = document.documentElement.scrollTop;
        else if(document.body)
            top = document.body.scrollTop;
	var es = document.querySelectorAll("body >div.back_star");
	for(var i=0; i<es.length; i++){
		es[i].style.cssText = `background-position: center -${top / (10+(i*7)) * 3 }px`;
	}
    if(top > 8700){
        svg163r.style.cssText="stroke-dashoffset: 0;";
        svg163l.style.cssText="stroke-dashoffset: 0;";
		svg_bottom.style.cssText="stroke-dashoffset: 0;";
    }
    //console.log(top);
	
};
window.onload = function(){
    document.getElementById("svgl").style.cssText = "stroke-dashoffset: 0;";
    document.getElementById("svgr").style.cssText = "stroke-dashoffset: 0;";
    setTimeout(()=>{
        svg_tit.style.cssText = "stroke-dashoffset: 0;";
        line_tit_r.style.cssText = "stroke-dashoffset: 0;";
        line_tit_l.style.cssText = "stroke-dashoffset: 0;";
    }, 1800);
    var e = document.getElementById("btn_video");
    e.style.cssText = "opacity: 1;";
    e.onmousedown = function(){
        e.style.cssText = "transform:scale(0.95);";
    };
    e.onmouseup = function(){
        e.removeAttribute("style");
    };
    e.onclick = function(){
        //video_tit.style.visibility = "visible";
        if(++this.dataset.index ==1){
            video_tit.play();
            video_box.style.cssText="position: absolute;width: 100%;";
            video_tit.style.cssText="position: absolute; left:0; bottom:0; right:0;";
            this.addEventListener("mouseover",on_video_in);
            this.addEventListener("mouseout",on_video_out);
        }
        else{
            video_tit.paused ? video_tit.play() : video_tit.pause();
        }
    };
	danceword.init;
};

function on_video_out(){
    btn_video.style.opacity=0;
}
function on_video_in(){
    btn_video.style.opacity=1;
}

var danceword={
	interval:60,
	loop:false,
	isComeHere:function(obj){
		var h1 = document.body.scrollTop;
		if (!/Chrome|Safari/.test(navigator.userAgent)) {
			h1 = document.documentElement.scrollTop;
		}
		var h2 = $(window).height();
		return (h1 + h2 - $(obj).offset().top) >= $(obj).height();
	},
	isVisible:function(obj){
		var h1 = document.body.scrollTop;
		if (!/Chrome|Safari/.test(navigator.userAgent)) {
			h1 = document.documentElement.scrollTop;
		}
		var h2 = $(window).height();
		return h1 + h2 - $(obj).offset().top >= $(obj).height() && $(obj).offset().top + $(obj).height() >= h1;
	},
	showCore:function(){
		var me=this;
		if(!me.loop){
			$("[class^='danceWord']:not(.past)").each(function(){
				var tmp=$.trim($(this).text());
				var h='';
				for(var i in tmp){
					h += "<span>"+tmp[i]+"</span>";
				}
				h=h.replace(/<\/span><span>([\，\,\。\.\!\！\?\？])/g,"$1");
				$(this).html(h);
			});
			$("[class^='danceWord']:not(.past)").each(function(){
				var m1=this;
				var l=$(this).text().length;
				if(me.isComeHere(m1)){
					$(m1).find("span").each(function(k,v){
						var me2=this;
						setTimeout(function(){$(me2).addClass('ele')},(k+1)*me.interval);
					});
					setTimeout(function(){
						$(m1).html($(m1).text());
					},l*me.interval+1000);
					$(m1).addClass('past');
				}
			});
		}else{
			$("[class^='danceWord']").each(function(){
				var m1=this;
				var l=$(this).text().length;
				if(!me.isVisible(m1)){
					$(m1).removeClass('past');
					var tmp=$.trim($(m1).text());
					var h='';
					for(var i in tmp){
						h += "<span>"+tmp[i]+"</span>";
					}
					h=h.replace(/<\/span><span>([\，\,\。\.\!\！\?\？])/g,"$1");
					$(m1).html(h);
				}
				if(me.isVisible(m1)&&!$(m1).hasClass('past')){
					var tmp=$.trim($(m1).text());
					var h='';
					for(var i in tmp){
						h += "<span>"+tmp[i]+"</span>";
					}
					h=h.replace(/<\/span><span>([\，\,\。\.\!\！\?\？])/g,"$1");
					$(m1).html(h).addClass('past');
					$(m1).find("span").each(function(k,v){
						var me2=this;
						setTimeout(function(){$(me2).addClass('ele')},(k+1)*me.interval);
					});
					setTimeout(function(){
						$(m1).html($(m1).text());
					},l*me.interval+1000);
				};
			});
		}
		if(/MSIE/.test(navigator.userAgent)||navigator.userAgent.indexOf("Trident/7.0;")>-1){
			$('[class^="danceWord"] span').css('display','inline');
		}
	},
	init:function(a){
		var me=danceword;
		if(typeof a=='object'){
			$.extend(me,a);
		}
		me.showCore();
		window.onscroll=function(){
			me.showCore();
		}
	}
};
	