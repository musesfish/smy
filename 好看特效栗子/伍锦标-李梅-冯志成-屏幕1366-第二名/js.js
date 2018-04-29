/**
 * Created by bjwsl-001 on 2017/8/15.
 */
"use strict";
(function(){
    document.getElementById("ssaas5").onclick=function(e){
        if(e.target.nodeName=="A"){
            e.preventDefault();
            var es = document.querySelectorAll("#ccccc >div.row");
            for(var i=0; i<es.length; i++){
                es[i].style.display="none";
            }

            document.getElementById(`ssaas${e.target.innerHTML-1}`).style.display="block";



        }
    };
})();

(function(){
    var as=document.getElementById("carousel").onclick=function(e){
        e.preventDefault();
        var div=document.getElementById("contaier");
        var pos = parseInt(div.style.left);
        if(e.target.dataset.index==0){
            if(isNaN(pos))
                pos=0;
            if(pos > -2400){
                pos = pos - 800;
                div.style.left = pos + "px";
            }
        }
        else
        {
            if(isNaN(pos))
                pos=0;
            if(pos<-1){
           pos+=800;
                div.style.left = pos + "px";
            }

        }


        /*
        for(var i=0;i<divs.length;i++){
            divs[i].onclick=function(){
                console.log(this);
            }
            console.log(divs);
        }*/
    }
})();
//1234
(function(){
    $("div.d11").click(function(e){
        e.preventDefault();
        document.getElementById("k3").style.display="none";
        document.getElementById("k2").style.display="none";
        if(	document.getElementById("k1").style.display="block"){
            console.log(1);
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $(".k1").k();
        }
    });
})();
(function(){
    $("div.d22").click(function(e){
        e.preventDefault();
        document.getElementById("k1").style.display="none";
        document.getElementById("k3").style.display="none";
        if(	document.getElementById("k2").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $(".k2").k();
        }
    });
})();
(function(){
    $("div.d33").click(function(e){
        e.preventDefault();
        document.getElementById("k1").style.display="none";
        document.getElementById("k2").style.display="none";
        if(	document.getElementById("k3").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $(".k3").k();
        }
    });
})();
//默认
(function(){
    $(".liw").click(function(e){
        e.preventDefault();
        document.getElementById("k1").style.display="block";
        document.getElementById("k3").style.display="none";
        document.getElementById("k2").style.display="none";
    });
    $(".lie").click(function(e){
        e.preventDefault();
        document.getElementById("r1").style.display="block";
        document.getElementById("r2").style.display="none";
        document.getElementById("r3").style.display="none";
        document.getElementById("r4").style.display="none";
        document.getElementById("r5").style.display="none";
        document.getElementById("r6").style.display="none";
        document.getElementById("r7").style.display="none";
        document.getElementById("r8").style.display="none";
        document.getElementById("r9").style.display="none";
    });
})();
//9
(function(){
    $("#d1").click(function(e){
        e.preventDefault();
        document.getElementById("r2").style.display="none";
        document.getElementById("r3").style.display="none";
        document.getElementById("r4").style.display="none";
        document.getElementById("r5").style.display="none";
        document.getElementById("r6").style.display="none";
        document.getElementById("r7").style.display="none";
        document.getElementById("r8").style.display="none";
        document.getElementById("r9").style.display="none";
        if(	document.getElementById("r1").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $("#r1").k();
        }
    });
})();
(function(){
    $("#d2").click(function(e){
        e.preventDefault();
        document.getElementById("r1").style.display="none";
        document.getElementById("r3").style.display="none";
        document.getElementById("r4").style.display="none";
        document.getElementById("r5").style.display="none";
        document.getElementById("r6").style.display="none";
        document.getElementById("r7").style.display="none";
        document.getElementById("r8").style.display="none";
        document.getElementById("r9").style.display="none";
        if(	document.getElementById("r2").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $("#r2").k();
        }
    });
})();
(function(){
    $("#d3").click(function(e){
        e.preventDefault();
        document.getElementById("r2").style.display="none";
        document.getElementById("r1").style.display="none";
        document.getElementById("r4").style.display="none";
        document.getElementById("r5").style.display="none";
        document.getElementById("r6").style.display="none";
        document.getElementById("r7").style.display="none";
        document.getElementById("r8").style.display="none";
        document.getElementById("r9").style.display="none";
        if(	document.getElementById("r3").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $("#r3").k();
        }
    });
})();
(function(){
    $("#d4").click(function(e){
        e.preventDefault();
        document.getElementById("r2").style.display="none";
        document.getElementById("r3").style.display="none";
        document.getElementById("r1").style.display="none";
        document.getElementById("r5").style.display="none";
        document.getElementById("r6").style.display="none";
        document.getElementById("r7").style.display="none";
        document.getElementById("r8").style.display="none";
        document.getElementById("r9").style.display="none";
        if(	document.getElementById("r4").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $("#r4").k();
        }
    });
})();
(function(){
    $("#d5").click(function(e){
        e.preventDefault();
        document.getElementById("r2").style.display="none";
        document.getElementById("r3").style.display="none";
        document.getElementById("r4").style.display="none";
        document.getElementById("r1").style.display="none";
        document.getElementById("r6").style.display="none";
        document.getElementById("r7").style.display="none";
        document.getElementById("r8").style.display="none";
        document.getElementById("r9").style.display="none";
        if(	document.getElementById("r5").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $("#r5").k();
        }
    });
})();
(function(){
    $("#d6").click(function(e){
        e.preventDefault();
        document.getElementById("r2").style.display="none";
        document.getElementById("r3").style.display="none";
        document.getElementById("r4").style.display="none";
        document.getElementById("r5").style.display="none";
        document.getElementById("r1").style.display="none";
        document.getElementById("r7").style.display="none";
        document.getElementById("r8").style.display="none";
        document.getElementById("r9").style.display="none";
        if(	document.getElementById("r6").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $("#r6").k();
        }
    });
})();
(function(){
    $("#d7").click(function(e){
        e.preventDefault();
        document.getElementById("r2").style.display="none";
        document.getElementById("r3").style.display="none";
        document.getElementById("r4").style.display="none";
        document.getElementById("r5").style.display="none";
        document.getElementById("r6").style.display="none";
        document.getElementById("r1").style.display="none";
        document.getElementById("r8").style.display="none";
        document.getElementById("r9").style.display="none";
        if(	document.getElementById("r7").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $("#r7").k();
        }
    });
})();
(function(){
    $("#d8").click(function(e){
        e.preventDefault();
        document.getElementById("r2").style.display="none";
        document.getElementById("r3").style.display="none";
        document.getElementById("r4").style.display="none";
        document.getElementById("r5").style.display="none";
        document.getElementById("r6").style.display="none";
        document.getElementById("r7").style.display="none";
        document.getElementById("r1").style.display="none";
        document.getElementById("r9").style.display="none";
        if(	document.getElementById("r8").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $("#r8").k();
        }
    });
})();
(function(){
    $("#d9").click(function(e){
        e.preventDefault();
        document.getElementById("r2").style.display="none";
        document.getElementById("r3").style.display="none";
        document.getElementById("r4").style.display="none";
        document.getElementById("r5").style.display="none";
        document.getElementById("r6").style.display="none";
        document.getElementById("r7").style.display="none";
        document.getElementById("r8").style.display="none";
        document.getElementById("r1").style.display="none";
        if(	document.getElementById("r9").style.display="block"){
            $.fn.k = function(){
                var $text = $(this);
                //console.log('this',this);
                var str = $text.html();//返回被选 元素的内容
                var index = 0;
                var x = $text.html('');
                var timer = setInterval(function(){
                    var current = str.substr(index, 1);
                    if(current == '<'){
                        //indexOf() 方法返回">"在字符串中首次出现的位置。
                        index = str.indexOf('>', index) + 1;
                    }else{
                        index ++ ;
                    }
                    $text.html(str.substring(0, index) + (index & 1 ? '': ''));
                    if(index >= str.length){
                        clearInterval(timer);
                    }
                },50);
            };
            $("#r9").k();
        }
    });
})();
// 花
(function(){
    var LeafScene = function(el) {
        this.viewport = el;
        this.world = document.createElement('div');
        this.leaves = [];
        this.options = {
            numLeaves:20,
            wind: {
                magnitude: 1.2,
                maxSpeed: 12,
                duration: 300,
                start: 0,
                speed: 0
            }
        };
        this.width = this.viewport.offsetWidth;
        this.height = this.viewport.offsetHeight;
        this.timer = 0;
        this._resetLeaf = function(leaf) {
            leaf.x = this.width * 2 - Math.random()*this.width*1.75;
            leaf.y = -10;
            leaf.z = Math.random()*200;
            if (leaf.x > this.width) {
                leaf.x = this.width + 10;
                leaf.y = Math.random()*this.height/2;
            }
            if (this.timer == 0) {
                leaf.y = Math.random()*this.height;
            }
            leaf.rotation.speed = Math.random()*10;
            var randomAxis = Math.random();
            if (randomAxis > 0.5) {
                leaf.rotation.axis = 'X';
            } else if (randomAxis > 0.25) {
                leaf.rotation.axis = 'Y';
                leaf.rotation.x = Math.random()*180 + 90;
            } else {
                leaf.rotation.axis = 'Z';
                leaf.rotation.x = Math.random()*360 - 180;
                leaf.rotation.speed = Math.random()*3;
            }
            leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
            leaf.ySpeed = Math.random() + 1.5;
            return leaf;
        };
        this._updateLeaf = function(leaf) {
            var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);
            var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
            leaf.x -= xSpeed;
            leaf.y += leaf.ySpeed;
            leaf.rotation.value += leaf.rotation.speed;
            var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
            if (leaf.rotation.axis !== 'X') {
                t += ' rotateX(' + leaf.rotation.x + 'deg)';
            }
            leaf.el.style.webkitTransform = t;
            leaf.el.style.MozTransform = t;
            leaf.el.style.oTransform = t;
            leaf.el.style.transform = t;
            if (leaf.x < -10 || leaf.y > this.height + 10) {
                this._resetLeaf(leaf);
            }
        };
        this._updateWind = function() {
            if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {
                this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
                this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
                this.options.wind.start = this.timer;
                var screenHeight = this.height;
                this.options.wind.speed = function(t, y) {
                    var a = this.magnitude/2 * (screenHeight - 2*y/3)/screenHeight;
                    return a * Math.sin(2*Math.PI/this.duration * t + (3 * Math.PI/2)) + a;
                }
            }
        }
    };
    LeafScene.prototype.init = function() {
        for (var i = 0; i < this.options.numLeaves; i++) {
            var leaf = {
                el: document.createElement('div'),
                x: 0,
                y: 0,
                z: 0,
                rotation: {
                    axis: 'X',
                    value: 0,
                    speed: 0,
                    x: 0
                },
                xSpeedVariation: 0,
                ySpeed: 0,
                path: {
                    type: 1,
                    start: 0
                },
                image: 1
            };
            this._resetLeaf(leaf);
            this.leaves.push(leaf);
            this.world.appendChild(leaf.el);
        }
        this.world.className = 'leaf-scene';
        this.viewport.appendChild(this.world);
        this.world.style.webkitPerspective = "400px";
        this.world.style.MozPerspective = "400px";
        this.world.style.oPerspective = "400px";
        this.world.style.perspective = "400px";
        var self = this;
        window.onresize = function(event) {
            self.width = self.viewport.offsetWidth;
            self.height = self.viewport.offsetHeight;
        };
    };
    LeafScene.prototype.render = function() {
        this._updateWind();
        for (var i = 0; i < this.leaves.length; i++) {
            this._updateLeaf(this.leaves[i]);
        }
        this.timer++;
        requestAnimationFrame(this.render.bind(this));
    };
    var leafContainer = document.querySelector('.falling-leaves'),
        leaves = new LeafScene(leafContainer);
    leaves.init();
    leaves.render();
})();
// 第四
(function(){
    //window.onload = function() {
    //    var demo1 = document.getElementById("wx1");
    //    function Marquee() {
    //        demo1.scrollTop = demo1.scrollTop + 1;
    //    }
    //    var MyMar = setInterval(Marquee, 100)
    //};
    $("#container_tu").click(function () {
        console.log(1);
        document.getElementById("wt-a1").style.display="block";
        document.getElementById("container_a").style.display="none";
    });
    $("#wt-a1").click(function () {
        console.log(2);
        document.getElementById("wt-a1").style.display="none";
        document.getElementById("container_a").style.display="block";
    });
})();
(function(){
    //window.load = function() {
    //    var demo2 = document.getElementById("wx2");
    //    console.log(demo2);
    //    function Marquee() {
    //        demo2.scrollTop = demo2.scrollTop + 1;
    //    }
    //    var MyMar = setInterval(Marquee, 100)
    //};
    $("#container_tu1").click(function () {
        console.log(1);
        document.getElementById("wt-a2").style.display="block";
        document.getElementById("container_a1").style.display="none";
    });
    $("#wt-a2").click(function () {
        console.log(2);
        document.getElementById("wt-a2").style.display="none";
        document.getElementById("container_a1").style.display="block";
    });
})();
(function(){
    //window.onload = function() {
    //    var demo3 = document.getElementById("wx3");
    //    function Marquee() {
    //        demo3.scrollTop = demo3.scrollTop + 1;
    //    }
    //    var MyMar = setInterval(Marquee, 100)
    //};
    $("#container_tu2").click(function () {
        console.log(1);
        document.getElementById("wt-a3").style.display="block";
        document.getElementById("container_a2").style.display="none";
    });
    $("#wt-a3").click(function () {
        console.log(2);
        document.getElementById("wt-a3").style.display="none";
        document.getElementById("container_a2").style.display="block";
    });
})();
(function(){
    //window.onload = function() {
    //    var demo4 = document.getElementById("wx4");
    //    console.log(demo4);
    //    function Marquee() {
    //        demo4.scrollTop = demo4.scrollTop + 1;
    //    }
    //    var MyMar = setInterval(Marquee, 100)
    //};
    $("#container_tu3").click(function () {
        console.log(1);
        document.getElementById("wt-a4").style.display="block";
        document.getElementById("container_a3").style.display="none";
    });
    $("#wt-a4").click(function () {
        console.log(2);
        document.getElementById("wt-a4").style.display="none";
        document.getElementById("container_a3").style.display="block";
    });
})();