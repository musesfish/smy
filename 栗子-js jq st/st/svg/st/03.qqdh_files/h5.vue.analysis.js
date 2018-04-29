/// <reference path="../../vue_v2.5.1/vue.min.js" />

//用户h5页面解析
window.itop = window.itop || {};
itop.initWechatJSSDK = itop.initWechatJSSDK || function () {
};
(function ($) {
    //数据源
    var jsonResponse = '';
    //jsonResponse = '{"code":0,"msg":"","data":{"id":11,"site_name":"k微网名称","share_title":"k分享标题","share_desc":"k分享摘要","share_link":"","share_imgurl":"/Upload/images/2017-11-02/201711021414377229140.jpg","add_time":"2017/11/2 14:15:19","update_time":"2017/11/2 14:15:19","user_name":"keroro","template_page_list":[{"id":54,"template_id":1,"activity_table_id":11,"activity_category_id":1,"title":"index","page_index":1,"file_path":"template/card/index.html","add_time":"2017/11/2 14:15:19","update_time":"2017/11/2 14:15:19","user_name":"keroro","template_field_list":[{"id":78,"activity_table_id":11,"activity_category_id":1,"template_page_id":54,"field_property_id":9,"label_name":"公司名称","sign_name":"company_name","default_value":"k公司名称","sort_num":1508509567,"add_time":"2017/11/2 14:15:19","update_time":"2017/11/2 14:15:19","user_name":"keroro","mf_field_property":{"id":9,"label_type":"input","field_name":"input","field_name_zh":"普通文本","max_length":50,"regex":null,"remark":null,"sort_num":1508508678,"add_time":"2017/10/20 14:11:18","update_time":"2017/10/20 14:11:18"}},{"id":79,"activity_table_id":11,"activity_category_id":1,"template_page_id":54,"field_property_id":3,"label_name":"公司简介","sign_name":"company_profile","default_value":"k公司简介","sort_num":1508509671,"add_time":"2017/11/2 14:15:19","update_time":"2017/11/2 14:15:19","user_name":"keroro","mf_field_property":{"id":3,"label_type":"textarea","field_name":"text","field_name_zh":"备注","max_length":4000,"regex":null,"remark":null,"sort_num":1508508904,"add_time":"2017/10/20 14:15:04","update_time":"2017/10/20 14:15:04"}},{"id":80,"activity_table_id":11,"activity_category_id":1,"template_page_id":54,"field_property_id":4,"label_name":"公司logo","sign_name":"company_logo","default_value":"/Upload/images/2017-11-02/201711021415140328422.jpg","sort_num":1508509769,"add_time":"2017/11/2 14:15:19","update_time":"2017/11/2 14:15:19","user_name":"keroro","mf_field_property":{"id":4,"label_type":"file","field_name":"image","field_name_zh":"图片","max_length":100,"regex":null,"remark":null,"sort_num":1508508979,"add_time":"2017/10/20 14:16:19","update_time":"2017/10/20 14:16:19"}},{"id":81,"activity_table_id":11,"activity_category_id":1,"template_page_id":54,"field_property_id":6,"label_name":"公司电话","sign_name":"company_tel","default_value":"k公司电话","sort_num":1508509814,"add_time":"2017/11/2 14:15:19","update_time":"2017/11/2 14:15:19","user_name":"keroro","mf_field_property":{"id":6,"label_type":"input","field_name":"tel","field_name_zh":"电话号码","max_length":20,"regex":null,"remark":null,"sort_num":1508509058,"add_time":"2017/10/20 14:17:38","update_time":"2017/10/20 14:17:38"}}],"template_form_list":null},{"id":55,"template_id":1,"activity_table_id":11,"activity_category_id":1,"title":"contact","page_index":2,"file_path":"template/card/contact.html","add_time":"2017/11/2 14:15:19","update_time":"2017/11/2 14:15:19","user_name":"keroro","template_field_list":[{"id":82,"activity_table_id":11,"activity_category_id":1,"template_page_id":55,"field_property_id":11,"label_name":"公司地址","sign_name":"company_address","default_value":"林和西aa","sort_num":1508509902,"add_time":"2017/11/2 14:15:19","update_time":"2017/11/2 14:15:19","user_name":"keroro","mf_field_property":{"id":11,"label_type":"input","field_name":"address","field_name_zh":"地址","max_length":200,"regex":null,"remark":null,"sort_num":0,"add_time":"2017/10/20 14:56:56","update_time":"2017/10/20 14:56:56"}}],"template_form_list":null}]}}';

    var id = GetQueryString('id');
    var tid = GetQueryString('tid');
    var _cache = false;
    var _id = 0;
    var url;
    if (id > 0) {
        //用户模板信息
        _id = id;
        url = window.Global.UserTemplateInfoUrl;
    }
    else {
        //系统模板信息
        _id = tid;
        url = '/Admin/SysTemplate/GetSysTemplateInfo';
        _cache = true;
    }
    if (!_id) {
        alert('error: 未指定模板id');
        return;
    }
    $.ajax({
        url: url,
        //async: false,
        cache: _cache,
        data: { id: _id },
        dataType: 'json',
        beforeSend: function () {
            var str = '<div id="loading" style="width:100%;height:100%;background:rgba(255, 255, 255,1);position: fixed;left: 0;top: 0;z-index: 9999;">';
            str += '<div style="width: 80px;height: 40px;margin: -20px 0 0 -20px;font-size:16px;position: fixed;left: 50%;top: 50%;z-index: 999;border-radius: 5px;">加载中...</div>';
            str += '</div>';
            $('body').append(str);
        },
        complete: function () {
            $('#loading').remove();
        },
        success: function (response) {
            jsonResponse = response;
            //console.info('jsonResponse', jsonResponse);
            //alert('_id: ' + jsonResponse);
            //itop.jsonResponseObj = JSON.parse(jsonResponse);
            itop.jsonResponseObj = response;
            //alert('itop.jsonResponseObj.code: ' + itop.jsonResponseObj.code);
            if (itop.jsonResponseObj.code < 0) {
                alert(itop.jsonResponseObj.msg);
                return;
            }
            else {
                //初始化微信分享
                itop.initWechatJSSDK();
                if (parserDate(itop.jsonResponseObj.data.end_time) < new Date()) {
                    //alert('活动已结束');
                    //console.info('活动已结束');//活动已结束后应该要跳转
                    window.location.href = "/User/Home/H5End";
                }
            }
            //字段
            itop.data = {};
            //表单项
            itop.data.formitems = [];

            //构造数据对象
            //step1: 设置分享
            //...
            //step2: 设置页面动态值
            $.each(itop.jsonResponseObj.data.template_page_list, function (idx, row) { //读取模板中的所有页
                //var _page_index = row.page_index;
                if (row.template_field_list != null) {
                    $.each(row.template_field_list, function (idx2, row2) { //读取页里面的所有字段
                        //console.log("idx2=>" + idx2 + "row2=>" + row2);

                        //var _sign_name = row2.sign_name;
                        //var _field_name = row2.mf_field_property.field_name;
                        //var _label_type = row2.mf_field_property.label_type;

                        ////itop.data[_sign_name + '_' + _page_index] = row2.default_value;
                        itop.data[row2.sign_name] = row2.default_value;

                        ////web app
                        //$('[sign-name=' + row2.sign_name + ']').attr('field_name', _field_name);
                        //$('[sign-name=' + row2.sign_name + ']').attr('label_type', _label_type);

                        //测试显示
                        //alert(Global.isTest.toUpperCase());
                        if (Global.isTest && Global.isTest.toUpperCase() == 'TRUE') {


                            //元素样式改变
                            $(document).on('click touchstart', '[sign-name=' + row2.sign_name + ']', function () {
                                var _field_name = row2.mf_field_property.field_name;
                                //alert(_field_name);
                                var btnid = "txt_" + row2.sign_name + "_" + row2.id + "_" + row2.template_page_id;


                                $('[is-select="true"]').attr('is-select', 'false').css('border', 'none');
                                $(this).attr('is-select', 'true').css('border', '1px dashed white');
                                $(this).attr('is-select', 'true').css('cursor', 'pointer');
                                $('#item_display_area > li', parent.document).hide();
                                $('li[data-sign_name="' + row2.sign_name + '"]', parent.document).show();
                                console.log("sign_name=>" + row2.sign_name + " field_name=> " + _field_name + " btnid=>" + btnid);

                                switch (_field_name) {
                                    case 'input':
                                    case 'tel':
                                    case 'mail':
                                    case 'number':
                                    case 'address':
                                    case 'url':
                                        //console.log(btnid);
                                        window.parent.clickText(row2.sign_name, btnid);
                                        break;
                                    case 'text':
                                        window.parent.clickText(row2.sign_name, btnid);
                                        break;
                                    case 'image':
                                        $(this).css('cursor', 'pointer');
                                        $(this).attr("size", Math.ceil($(this).width()) + "," + Math.ceil($(this).height()));
                                        window.parent.clickImg(row2.sign_name,btnid);
                                        break;
                                    default:
                                        break;
                                }

                            });

                            //为图片添加style="cursor:pointer;"，不然IOS无法识别点击事件
                            //console.log($("img[sign-name]").length);
                            //$("#appvue img[sign-name]").each(function () {
                            //    $(this).css('cursor', 'pointer');
                            //    $(this).attr("size", $(this).width() + "," + $(this).height());
                            //});
                        }
                    });
                }
                if (row.template_form_list != null) {
                    $.each(row.template_form_list, function (idx2, row2) { //读取页里面的所有字段
                        //console.log("idx3=>" + idx2 + "row3=>" + row2);
                        $.extend(row2, {
                            placeholder: '请输入' + row2.label_name,
                            idx: idx2
                        });
                        itop.data.formitems.push(row2);
                    });
                }
            });

            //有无关联的邀请函
            if (itop.jsonResponseObj.data.activity_invitation_id > 0) {
                $.ajax({
                    url: '/User/ActivityAttendance/lastYaoqinghan',
                    type: 'post',
                    dataType: 'json',
                    data: {
                        activity_table_id: itop.jsonResponseObj.data.activity_invitation_id,
                        openid: Global.openid || 'empty openid'
                    },
                    success: function (response) {
                        console.info('success', response);
                        if (response.code < 0)
                            alert(response.msg);
                        else {
                            //alert('已提交');
                            //itop.data.mf_activity_invitation = itop.jsonResponseObj.data.mf_activity_invitation;
                            if (response.data != null && response.data.activity_jsondata != '') {
                                itop.data.activity_jsondata = JSON.parse(response.data.activity_jsondata);
                                $.each(itop.data.activity_jsondata, function (idx, row) {
                                    $('input[name="' + row.sign_name + '"]').val(row.val);
                                });
                            }
                        }
                    },
                    error: function (response) {
                        console.info('error', response);
                        alert(response.msg);
                    }
                });
            }

            // 该对象被加入到一个 Vue 实例中
            window.vm = new Vue({
                el: '#appvue',
                data: itop.data
            });
            //Swiper初始化
            swiperInit();
        }
    });
})(jQuery);