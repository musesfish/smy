var itop = window.itop || {};

itop.setShareConfig = {
    /*
    * 设置微信分享
    */
    ShareWeixin: function (title, desc, imgUrl, url, callback) {
        //alert("title:" + title + "\ndesc:" + desc + "\nimgUrl:" + imgUrl + "\nurl:" + url);
        wx.config({
            debug: false,
            appId: Global.WxConfig.AppId,
            timestamp: Global.WxConfig.Timestamp,
            nonceStr: Global.WxConfig.NonceStr,
            signature: Global.WxConfig.Signature,
            jsApiList: [
                'onMenuShareTimeline',      //分享到朋友圈
                'onMenuShareAppMessage',    //分享给朋友
                'onMenuShareQQ',            //分享到QQ
                'onMenuShareWeibo',         //分享到腾讯微博
                'onMenuShareQZone',         //分享到QQ空间
                'translateVoice',
                'startRecord',
                'stopRecord'
            ]
        });
        console.info(wx);
        wx.ready(function () {
            var imgURL = imgUrl;
            $('body').prepend('<div style="display:none;"><img src="' + imgURL + '" /></div>'); // 确保旧版本手机操作系统也能取到图片
            //分享到朋友圈
            wx.onMenuShareTimeline({
                title: title,
                desc: desc,
                link: url,
                imgUrl: imgURL,
                success: function () {
                    if (callback) {
                        callback(1);
                    }
                }
            });
            //分享给朋友
            wx.onMenuShareAppMessage({
                title: title,
                desc: desc,
                link: url,
                imgUrl: imgURL,
                success: function () {
                    if (callback) {
                        callback(2);
                    }
                }
            });
            //分享到QQ
            wx.onMenuShareQQ({
                title: title,
                desc: desc,
                link: url,
                imgUrl: imgURL,
                success: function () {
                    if (callback) {
                        callback(3);
                    }
                }
            });
            //分享到腾讯微博
            wx.onMenuShareWeibo({
                title: title,
                desc: desc,
                link: url,
                imgUrl: imgURL,
                success: function () {
                    if (callback) {
                        callback(4);
                    }
                }
            });
            //分享到QQ空间
            wx.onMenuShareQZone({
                title: title,
                desc: desc,
                link: url,
                imgUrl: imgURL,
                success: function () {
                    if (callback) {
                        callback(5);
                    }
                }
            });
            //===
        });
}
};

itop.loadShareConfig = function (config) {
    window.Global = window.Global || {};
    var _url = window.location.href;
    $.ajax({
        url: config.jssdkConfigUrl,
        data: { url: _url },
        dataType: 'json',
        success: function (response) {
            console.info('response', response);
            //设置微信分享所需配置
            Global.WxConfig = response.data;
            //console.info('Global.WxConfig', Global.WxConfig);
            if (Global.WxConfig == null) {
                return;
            }

            itop.setShareConfig.ShareWeixin(config.title, config.desc, config.imgUrl, config.url, function (shareTo) {
                var data = {
                    appid: Global.WxConfig.AppId,
                    openid: '',
                    share_to: shareTo,
                    share_title: config.title,
                    share_desc: config.desc,
                    share_imgurl: config.imgUrl,
                    share_link: config.url,
                    current_url: _url,
                    activity_category_id: config.activity_category_id,
                    activity_table_id: config.activity_table_id
                };
                $.ajax({
                    url: config.shareRecordUrl,
                    data: data,
                    dataType: 'json',
                    type: 'post',
                    success: function (data) {
                        if (data.code < 0) {
                            alert(data.msg);
                        }
                        else { }
                    }
                });
            });
        }
    });
};
/*加载JSSDK接口相关参数*/
itop.loadWXConfig = function (config) {
    window.Global = window.Global || {};
    var _url = window.location.href;
    $.ajax({
        url: config.jssdkConfigUrl,
        data: { url: _url },
        dataType: 'json',
        success: function (response) {
            console.info('response', response);
            //设置微信分享所需配置
            Global.WxConfig = response.data;
            //console.info('Global.WxConfig', Global.WxConfig);
            if (Global.WxConfig == null) {
                return;
            }
            else
            {
                window.location.href = "https://open.weixin.qq.com/connect/qrconnect?appid=" + Global.WxConfig.AppId + "&redirect_uri=http%3A%2F%2Fvoice.i-top.cn%2FUser%2FUser%2FLogin&response_type=code&scope=snsapi_login&state=" + Math.ceil(Math.random() * 1000)+"#wechat_redirect";
            }
        }
    });
};