(function(e) {
    function u(u) {
        function c() {
            function h(e) {
                e.show();
                n.removeClass("loading")
            }
            var t = e(this),
            r = parseInt(n.css("borderLeftWidth")),
            i = s - r * 2,
            u = o - r * 2,
            a = t.width(),
            f = t.height();
            if (a == n.width() && a <= i && f == n.height() && f <= u) {
                h(t);
                return
            }
            if (a > i || f > u) {
                var l = u < f ? u: f,
                c = i < a ? i: a;
                if (l / f <= c / a) {
                    t.width(a * l / f);
                    t.height(l)
                } else {
                    t.width(c);
                    t.height(f * c / a)
                }
            }
            n.animate({
                width: t.width(),
                height: t.height(),
                marginTop: -(t.height() / 2) - r,
                marginLeft: -(t.width() / 2) - r
            },
            200,
            function() {
                h(t)
            })
        }
        if (u) u.preventDefault();
        var a = e(this),
        f = a.attr("href");
        if (!f) return;
        var l = e(new Image).hide();
        e("#zoom .previous, #zoom .next").show();
        if (a.hasClass("zoom")) e("#zoom .previous, #zoom .next").hide();
        if (!r) {
            r = true;
            t.show();
            e("body").addClass("zoomed")
        }
        n.html(l).delay(500).addClass("loading");
        l.load(c).attr("src", f);
        i = a
    }
    function a() {
        var t = i.parent("li").prev();
        if (t.length == 0) t = e(".gallery li:last-child");
        t.find("a").trigger("click")
    }
    function f() {
        var t = i.parent("li").next();
        if (t.length == 0) t = e(".gallery li:first-child");
        t.children("a").trigger("click")
    }
    function l(s) {
        if (s) s.preventDefault();
        r = false;
        i = null;
        t.hide();
        e("body").removeClass("zoomed");
        n.empty()
    }
    function c() {
        s = e(window).width();
        o = e(window).height()
    }
    e("body").append('<div id="zoom"><div class="content loading"></div></div>');
    var t = e("#zoom").hide(),
    n = e("#zoom .content"),
    r = false,
    i = null,
    s = e(window).width(),
    o = e(window).height(); (function() {
        t.on("click",
        function(t) {
            t.preventDefault();
            if (e(t.target).attr("id") == "zoom") l()
        });
       
        e(document).keydown(function(e) {
            if (!i) return;
            if (e.which == 38 || e.which == 40) e.preventDefault();
            if (e.which == 27) l();
            if (e.which == 37 && !i.hasClass("zoom")) a();
            if (e.which == 39 && !i.hasClass("zoom")) f()
        });
        if (e(".gallery li a").length == 1) e(".gallery li a")[0].addClass("zoom");
        e(".zoom, .gallery li a").on("click", u)
    })(); (function() {
        e(window).on("resize", c)
    })(); (function() {
        e(window).on("mousewheel DOMMouseScroll",
        function(e) {
            if (!i) return;
            e.stopPropagation();
            e.preventDefault();
            e.cancelBubble = false
        })
    })()
})(jQuery);

var trues=true;
//第二部分开始
(function(){
    window.onscroll=function(){

        var scrollTop=document.body.scrollTop;
        //console.log(scrollTop)
        if(scrollTop>=300){
            var lis=document.querySelectorAll("#nav ul>li");
            var li_div=document.querySelector(".li_div");
            li_div.style.cssText="opacity:1";
            $(lis).each((i,elem)=>{
                elem.style.cssText="transform: translatex(0) translatey(0);opacity:1";
            })
        }
        if(scrollTop>=2000){
            var my_lis=document.querySelectorAll(".f-photo li");
            console.log(my_lis)
            console.log(scrollTop);
            $(my_lis).each((i,elem)=>{
                elem.style.cssText="transform: translate(0);opacity:1;";
            })
        }
        //第四部分的切入文字
//===============================================
//body往上滚上去的距离大于2400才触发
        if(scrollTop>=2400){

            var L=2;
            var M=0.8;
            var p=document.querySelectorAll("#trans>p");
            var trans=document.querySelector("#trans");
            var trans_big=document.getElementById("trans_big");
            var trans_img=document.querySelectorAll(".trans_img>img");

//鼠标放上事件
            trans_big.onmouseover=function(){
                var L=1;
                var M=1;
                trues=false;
                //$(trans_img).each(function(i,elem){
                //    elem.style.cssText="top:-3px;opacity:1;";
                //});


                for(var i= 0;i<p.length;i++){
                    //console.log(p.length);
                    (function(n){
                        //筛选图片0到3被选中，执行以下过度
                        if(n>=0&&n<4){
                            L-=0.20;
                            p[n].style.cssText="transform:translatex(-1200px);opacity:0;transition:all "+L+"s linear ";
                        }else if(n>=4){//筛选图片大于等于4，执行以下过度
                            M-=0.5;
                            p[n].style.cssText="transform:translatex(-1200px);opacity:0;transition:all "+M+"s linear ";
                        }

                    })(i)

                }
                //鼠标放上背景div右移动

                trans.style.cssText="transform:translatex(650px);opacity:0;transition:all 1s linear ";
            };
            //鼠标 移出事件

            trans_big.onmouseleave=function(){
                var L=2.5;
                var M=2;
                //$(trans_img).each(function(i,elem){
                //    elem.style.cssText="top:-425px;opacity:0;";
                //});

                trans.style.cssText="transform:translatex(0px);opacity:1;transition:all 1.5s ease-int ";
                //trues=true;
                for(var i= 0;i<p.length;i++){
                    console.log(p.length);
                    (function(n){
                        //筛选图片0到3被选中，执行以下过度
                        if(n>=0&&n<4){
                            L-=0.20;
                            p[n].style.cssText="transform:translatex(0px);opacity:1;transition:all "+L+"s linear ";
                        }else if(n>=4){//筛选图片大于等于4，执行以下过度
                            M-=0.2;
                            p[n].style.cssText="transform:translatex(0px);opacity:1;transition:all "+M+"s linear ";
                        }

                    })(i)

                }
                //鼠标放上背景div右移动

            };
            if(trues){//自定义trues为真时才触发的行为
                //切入图右背景divk框
                trans.style.cssText="transform:translatex(0px);opacity:1;transition:all 1s linear ";
                //循环文字依次修改位置
                for(var i= 0;i<p.length;i++){
                    console.log(p.length);
                    (function(n){
                        //筛选图片0到3被选中，执行以下过度
                        if(n>=0&&n<4){
                            L-=0.20;
                            p[n].style.cssText="transform:translatex(0px);opacity:1;transition:all "+L+"s linear ";
                        }else if(n>=4){//筛选图片大于等于4，执行以下过度
                            M+=0.15;
                            p[n].style.cssText="transform:translatex(0px);opacity:1;transition:all "+M+"s linear ";
                        }

                    })(i)

                }
            }


        }

    }

})();
//鼠标放上切换相应文字模块
var lis=document.querySelectorAll("#nav_ul>li");
var ps=document.querySelectorAll(".li_div>p");
for(var i=0;i<lis.length;i++){
    (function(n){

        lis[n].onmouseover=function(){
            for(j=0;j<lis.length;j++){
                ps[j].style.cssText="transform:translate(310px);opacity:0;background:#FFF;";
                lis[j].firstElementChild.style.cssText="transform:scale(1);";
            }
            this.firstElementChild.style.cssText="transform:scale(1.2);";
            ps[n].style.cssText="transform:translate(0px);opacity:1;z-index:1000;background:"+rc(100,200,120,255)+";";
        }
    })(i)


}

function rn(min,max){
    return Math.floor(
        Math.random()*(max-min)+min);
}
function rc(gmin,gmax,bmin,bmax){
    var r=250;
    var g=rn(gmin,gmax);
    var b=rn(bmin,bmax);
    return `rgba(${r},${g},${b},0.5)`;
}
//第二部分结束


$(".img").mouseenter(function () {
    var $this = $(this);
    var $div = $this.find(".inner div");
    $div.eq(1).stop();
    $div.eq(1).css({ "top": "0px", "left": "0px", "width": "300px", "height": "200px" });
    $div.eq(0).stop().animate({ "top": "-25px", "left": "-25px", "width": "350px", "height": "250px", "opacity": "0" }, 500);
    $div.eq(1).stop().animate({ "top": "-25px", "left": "-25px", "width": "350px", "height": "250px", "opacity": "1" }, 500);
}).mouseleave(function () {
    var $this = $(this);
    var $div = $this.find(".inner div");
    $div.eq(0).stop().animate({ "top": "0", "left": "0", "width": "300px", "height": "200px", "opacity": "1" }, 500);
    $div.eq(1).stop().animate({ "top": "0", "left": "0", "width": "300px", "height": "200px", "opacity": "0" }, 500);
});



var imgs=document.querySelectorAll(
    "#list>img"
);
function task(){
    //查找id为slider下的class为show的img
    var img=document.querySelector(
        "#list>.show"
    );
    //清空img的className
    img.className="";
    //如果img的下一个兄弟元素不为null
    if(img.nextElementSibling!=null){
        //设置img的下一个兄弟元素的class为show
        img.nextElementSibling
            .className="show";
    }else{//否则
        //设置id为slider的元素的第一个子元素的class为show
        document.getElementById("list")
            .children[0].className="show";
    }
}

var timer=setInterval(task,5000);

//当鼠标进入div，停止定时器，当鼠标移出div时，再次启动定时器
var div=
    document.getElementById("list");
div.onmouseover=function(){
    clearInterval(timer);
    timer=null;
}
div.onmouseout=function(){
    timer=setInterval(task,2000);
}



//第三部分
var $img_b=$(".my-big");
$(".my-small").click(e=>{
    $img_b.attr("src",
        $(e.target).data("target")
    )
});
//第三部分结束



