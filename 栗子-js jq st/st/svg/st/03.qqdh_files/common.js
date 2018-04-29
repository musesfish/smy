//$(function () {
//    $('<script src="/User/TongJi/Index?ver=' + Math.random() + '"></script>').appendTo('body');
//});

// $(function () {
//     var nowurl = document.URL;
//     var fromurl = document.referrer;
//     //var host = window.location.host;
//     var host = "http://" + document.domain;
//     //if (host.indexOf('http') = -1) {
//     //    host = "http://" + host;
//     //}
//     console.log("nowurl=>" + nowurl);
//     console.log("fromurl=>" + fromurl);
//     console.log("host=>" + host);

//     $.ajax({
//         url: host+'/User/TongJi/Index?ver=' + Math.random(),
//         // url: 'http://localhost:60129/User/TongJi/Index?ver=' + Math.random(),
//         type: 'GET',
//         dataType: 'json',
//         data: { "mf_aid": GetQueryString("id"), "mf_mid": GetQueryString("medium_id"), "aid": 0, "fromurl": escape(fromurl) },
//         success: function (response) {
//             console.info(response);
//         }
//     })
// });

//获取指定url参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
};
//日期转换，调用：parserDate("2017/11/9 22::00:00")
var parserDate = function (date) {
    var t = Date.parse(date);
    if (!isNaN(t)) {
        return new Date(Date.parse(date.replace(/-/g, "/")));
    } else {
        return new Date();
    }
};
//是否为正整数
function isPositiveInteger(s) {
    var re = /^[0-9]+$/;
    return re.test(s)
};
//浏览器类型
window.Browser = window.Browser || {};
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
if (isWeiXin()) {
    console.log(" 是来自微信内置浏览器");
    window.Browser.isWeiXin = true;
} else {
    console.log("不是来自微信内置浏览器");
    window.Browser.isWeiXin = false;
}