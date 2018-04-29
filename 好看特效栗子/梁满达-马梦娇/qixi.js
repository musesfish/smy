
(function () {
    //第三章
    var mImg = document.getElementById("mImg");
    var ul = document.getElementById("iconList");
    //为ul绑定鼠标移入事件
    ul.onmouseover = function (e) {
        if (e.target.nodeName === "IMG") {
            var src = e.target.src;
            var i = src.lastIndexOf(".");
            src = src.slice(0, i) + "-m" + src.slice(i);
            mImg.src = src;
        }
    }
})();
