
(function () {
    //������
    var mImg = document.getElementById("mImg");
    var ul = document.getElementById("iconList");
    //Ϊul����������¼�
    ul.onmouseover = function (e) {
        if (e.target.nodeName === "IMG") {
            var src = e.target.src;
            var i = src.lastIndexOf(".");
            src = src.slice(0, i) + "-m" + src.slice(i);
            mImg.src = src;
        }
    }
})();
