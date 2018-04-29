/**
 * Created by ManderLiang on 2017/8/16.
 */

window.onload = function () {

    const SCREEN_HEIGHT = "715px";

    var arr = [
        document.getElementById("part1"),
        document.getElementById("part1_next"),
        document.getElementById("sec2"),
        document.getElementById("sec3"),
        document.getElementById("sec4"),
        document.getElementById("part5")
    ];

    var section = document.getElementById("section");

    section.style.width = "1050px";
    section.style.height = SCREEN_HEIGHT;
    section.style.overflow = "hidden";

    //document.body.style.height = SCREEN_HEIGHT;

    var currentItem = 0;

    document.getElementById("pre").onclick = function () {
        setCurrentItem(currentItem - 1);
    }

    var pointGroup = document.getElementById("pointGroup");
    var divs = pointGroup.getElementsByTagName("div");
    divs[0].className = "selected";

    document.getElementById("next").onclick = function () {
        setCurrentItem(currentItem + 1);
    }

    var setCurrentItem = function (position) {
        if (0 > position || arr.length <= position)return;
        if (currentItem > position) {
            back(arr[position]);
        } else {
            out(arr[currentItem]);
        }
        for (var i = 0, len = divs.length; i < len; i++) {
            if (i == position) {
                divs[i].className = "selected";
            } else {
                divs[i].className = "default";
            }
        }
        currentItem = position;
    }

    var photos = document.getElementsByClassName("photo stage6");
    var part5_title = document.getElementsByClassName("part5_title stage3");
    var part5_bg_new = document.getElementsByClassName("part5_bg_new stage4");
    var part5photos = document.getElementsByClassName("photos clear-both stage5");
    var array1 = "结婚是两个人一生中最重要的事情".split("");
    array1[array1.length] = "<br>";
    var array2 = "也是两个人爱情的见证".split("");

    var used = [];

    var bgBallTimer;
    var ballDiv = document.getElementById("ball");
    // 气球
    const balls = ["hongqiqiu.png", "huangqiqiu.png", "ziqiqiu.png"];

    var out = function (elem) {
        elem.style.top = "-" + SCREEN_HEIGHT;
        if (4 !== currentItem) {
            ballDiv.style.display = "none";
            clearInterval(bgBallTimer);
            bgBallTimer = null;
        }
        switch (currentItem) {
            case 0:
                if (used[0])break;
                used[0] = true;
                document.getElementsByClassName("part1_detail stage3")[0].style.opacity = "1";
                document.getElementsByClassName("part1_title stage3")[0].style.opacity = "1";
                document.getElementsByClassName("content")[0].style.opacity = "1";
                photos[0].className = "photo stage6 animation_active pt1";
                photos[1].className = "photo stage6 animation_active pt2";
                photos[2].className = "photo stage6 animation_active pt3";
                photos[3].className = "photo stage6 animation_active pt4";
                break;
            case 1:
                if (used[1])break;
                used[1] = true;
                document.getElementById("game").style.opacity = "1";
                document.getElementsByClassName("part2_detail")[0].style.opacity = "1";
                document.getElementsByClassName("part2_detail p2")[0].style.opacity = "1";
                document.getElementsByClassName("part2_detail p3")[0].style.opacity = "1";
                break;
            case 2:
                if (used[2])break;
                used[2] = true;
                break;
            case 3:
                if (used[3])break;
                used[3] = true;
                var rightTop = document.getElementsByClassName("right_top clear-both");
                rightTop[0].className = rightTop[0].className + " active";
                var leftBottom = document.getElementsByClassName("left_bottom");
                leftBottom[0].className = leftBottom[0].className + " active";
                var p = document.getElementsByClassName("pic-top")[0].getElementsByTagName("p");
                for (var i = 0, len = p.length; i < len; i++) {
                    p[i].style.opacity = "1";
                }
                //setTimeout(function () {
                var cover = document.getElementById("cover");
                var divs = cover.getElementsByTagName("div");
                //console.log(cover);
                //console.log(divs);
                var order = [0, 1, 2, 5, 8, 7, 6, 3, 4];
                var i = 0;
                var coverTimer = setInterval(function () {
                    if (i >= order.length) {
                        clearInterval(coverTimer);
                        return;
                    }
                    divs[order[i]].style.opacity = "0";
                    i++;
                }, 2100 / 9);
                //}, 1900);
                break;
            case 4:
                ballDiv.style.display = "block";
                bgBallTimer = bgAnimation(ballDiv, balls, "ball", HORIZONTAL);
                if (used[4])break;
                used[4] = true;
                part5_title[0].className = part5_title[0].className + " part5_active";
                part5_bg_new[0].className = part5_bg_new[0].className + " active";
                part5photos[0].style.opacity = "1";
                var span = document.createElement("span");
                span.className = "part5_span stage4";
                part5_bg_new[0].appendChild(span);
                var time = parseInt(4000 / (array1.length + array2.length));
                var i = 0;
                setTimeout(function () {
                    setTimer(span, time, array1, function () {
                        setTimer(span, time, array2, null);
                    });
                }, 2500);
                break;
        }
    }

    var setTimer = function (span, time, array, onCompletedListener) {
        var i = 0;
        var timer2 = setInterval(function () {
            if (i >= array.length) {
                clearInterval(timer2);
                if ("function" === typeof onCompletedListener)onCompletedListener();
                return;
            }
            span.innerHTML = span.innerHTML + array[i];
            i++;
        }, time);
    }

    var back = function (elem) {
        elem.style.top = "0";
        if (5 === currentItem) {
            ballDiv.style.display = "none";
            clearInterval(bgBallTimer);
            bgBallTimer = null;
        }
    }

    var dialogBg = document.getElementById("dialog_bg");
    var bigPhotoImg = dialogBg.getElementsByTagName("img");
    var bigPhotos = ["36_big.png", "37_big.png", "38_big.png", "39_big.png"];

    var showPhoto = function (src) {
        bigPhotoImg[0].src = src;
        dialogBg.style.zIndex = "1000";
        dialogBg.style.opacity = "1";
    }

    // 7s之后才允许点击图片
    //setTimeout(function () {
    for (i = 0, len = photos.length; i < len; i++) {
        (function (n) {
            photos[n].onclick = function () {
                //console.log("onclick--------------------------");
                showPhoto("images/diyizhang/" + bigPhotos[n]);
            }
        })(i);
    }
    //}, 7000);

    dialogBg.onclick = function () {
        //console.log("onclick--------------------------");
        dialogBg.style.opacity = "0";
        setTimeout(function () {
            dialogBg.style.zIndex = "0";
        }, 500);
    }

    //}

    // 气球
    var bgAnimation = function (container, images, clazz, direction) {

        if (!images || !images.length)return;

        /****************************************************************************************/
        var transitionEvent = whichTransitionEvent();

        function whichTransitionEvent() {
            var t;
            var el = document.createElement('fakeelement');
            var transitions = {
                'transition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'MozTransition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd'
            }
            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    return transitions[t];
                }
            }
        }

        /****************************************************************************************/

        var createImage = function () {
            //　随机图片数组中的图片
            var randomNum = parseInt(Math.random() * images.length + 1);
            //　创建图片
            var image = document.createElement("img");
            // 设置图片的src
            image.src = "images/diyizhang/" + images[randomNum - 1];
            // 设置图片的ClassName
            if (clazz)image.className = clazz;
            if (VERTICAL == direction) {
                // 计算左边的距离
                var left = parseInt(Math.random() * document.body.clientWidth + 1);
                // 设置底端距离为０
                image.style.bottom = 0;
                //　设置左边距离
                image.style.left = left.toFixed(2) + "px";
                //image.style.transform = "scale(1)";
                // 将图片加到容器中
                container.appendChild(image);
                // 设置移动动画
                image.style.bottom = `${document.body.clientHeight}px`;
            } else if (HORIZONTAL == direction) {
                // 计算上边的距离
                var top = parseInt(Math.random() * document.body.clientHeight + 1 - 105);
                //console.log("top---->" + top);
                // 设置左侧距离为０
                image.style.left = "-343px";
                //　设置顶端距离
                image.style.top = top.toFixed(2) + "px";
                //image.style.transform = "scale(1)";
                // 将图片加到容器中
                container.appendChild(image);
                // 设置移动动画
                image.style.left = `${document.body.clientWidth}px`;
            }
            // 动画结束之后回收气球的内存
            transitionEvent && image.addEventListener(transitionEvent, function () {
                //console.log("removeChild-----------------------" + image);
                // 从容器中删除图片
                container.removeChild(image);
                image = null;
            });
        }
        return setInterval(createImage, 1000);
    }

    var cloudDiv = document.getElementById("cloud");
    const clouds = ["yunceng2.png", "yunceng3.png", "yunceng4.png"];

    const VERTICAL = 0x1001;

    const HORIZONTAL = 0x0110;

    cloudDiv.style.display = "block";
    // 云动画
    var cloudDivTimer = bgAnimation(cloudDiv, clouds, "bg_clouds", HORIZONTAL);
    //bgAnimation(ballDiv, balls, "ball", VERTICAL, `translateY(${-document.body.clientHeight - 100}px) rotate(-45deg)`);

    /*-----------------------------------屏幕适配-------------------------------------*/
    //console.log(window.innerWidth);
    //console.log(window.innerHeight);
    var coefficient = (window.innerHeight / 735).toFixed(2);
    //if (window.innerHeight - 735 >= 0) {
    document.body.style.top = (window.innerHeight - 735) / 2 + "px";
    document.body.style.transform = `scale(${coefficient})`;
    var width = window.innerWidth / coefficient;
    document.body.style.width = width + "px";
    document.body.style.marginLeft = (window.innerWidth - width) / 2 + "px";
}
