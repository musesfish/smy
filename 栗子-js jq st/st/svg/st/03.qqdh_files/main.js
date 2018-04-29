function page_list(){
  //$('.page_1').append('<embed src="images/SVG/h5-07.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/"/>');
 // $('.page_2').append('<embed src="images/SVG/h5-02-1-02.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/"/>');
 // $('.page_3').append('<embed src="images/SVG/h5-08.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/"/>');
 // $('.page_4').append('<embed src="images/SVG/h5-09.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/"/>');
 // $('.page_5').append('<embed src="images/SVG/h5-10.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/"/>');
 // $(".page_word").append('<img src="images/SVG/wenzi_na.png" alt="" class="word_1"><img src="images/SVG/wenzi_ganjin.png" alt="" class="word_2"><img src="images/SVG/wenzi_wenhou.png" alt="" class="word_3">');
  $(".word_1").css("-webkit-animation","3s 60.5s wenzi_12 ease-out forwards");
  $(".word_2").css("-webkit-animation","3s 64s wenzi_13 ease-out forwards");
  $(".word_3").css("-webkit-animation","3s 65s wenzi_13 ease-out forwards");
  $(".word_4").css("-webkit-animation","3s 66s wenzi_14 ease-out forwards");
}
function word_1_no(){
  $(".word_1").css("display","none");
}
setTimeout("word_1_no()",64000);
setTimeout("page_list()",1500);

var page_1H = $(window).height();
var page_1W = $(window).width();
var page_6H = $(window).height();
for (var i = 0; i <= 5; i++) {
  $('.page_'+i).height(page_1H);
}

var page_2W = $(".page_2").width(page_1W);
var page_3W = $(".page_3").width(page_1W);
var page_5W = $(".page_5").width(page_1W);
var page_6W = $(".page_6").width(page_1W);
$(".page_2and_3box").width(page_1W);
$(".page_5and_6box").width(page_1W);
function page_1(){
  $(".page_box").animate({top:-page_1H},3000);
  console.log(1);
}
function page_2(){
  $(".page_2and_3").animate({left:-page_1W},2500);
  console.log(2);
}
function page_3(){
  $(".page_box").animate({top:-2*page_1H},3000);
  console.log(3);
}
function page_4(){
  $(".page_box").animate({top:-3*page_1H},3000);
  console.log(4);
}
function page_5(){
  $('.page_6').append('<embed src="images/SVG/h5-11.svg" class="page_6_img" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/"/>');
  $(".page_6_img").height(page_6H);
  $(".page_6_img").width(page_1W);
  $(".page_5and_6").animate({left:-page_1W},2000);
  $('.page_5').css('-webkit-animation','2s aniLogo5 ease-out forwards');
  $('.page6_word1').css('-webkit-animation','2s page6_word1 ease-out forwards');
  $('.page6_word2').css('-webkit-animation','2s 0.5s page6_word2 ease-out forwards');
  $('.click_num').css('-webkit-animation','2s 0.5s page6_word2 ease-out forwards');
}
setTimeout("page_1()",14500);//page1移动2
setTimeout("page_2()",27500);//page2移动4
setTimeout("page_3()",41000);//page3移动6
setTimeout("page_4()",55500);//page4移动8

$(".phone_al").on("click",function(){
  page_5();
})
// 获取点击数量
  $(".phone_al").on("click",function(){
    $(".phone img").css("-webkit-transform","scale(1.1)");
    $(".phone_al img").css("-webkit-transform","scale(0.9)");
    $.ajax({
        url:"http://panatom.w157.mc-test.com/kaixin/pro_h5/click_num.php",
        type: "GET",
        dataType: "text",
        success: function(data){
            $(".click_num").html(data);
            document.title = '2017年即将到来，我是第'+data+'个拨通家人电话的';
            _title();
        }
    })
  })

function _title(){
  var $body = $('body');
    var $iframe = $("<iframe style='display:none;' src='/favicon.ico'></iframe>");
    $iframe.on('load',function() {
      setTimeout(function() {
        $iframe.off('load').remove();
      }, 0);
    }).appendTo($body);
}

  $(".phone").on("click",function(){
    $(".phone img").css("-webkit-transform","scale(0.9)");
    $(".phone_al img").css("-webkit-transform","scale(1.1)");
  })

  function orientationChange() {
      switch (window.orientation) {
          case 0:
          case 180:
              $(".mask").hide()
              break;
          case -90:
          case 90:
              $(".mask").show()
              break;
      }
  }
  window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);

  var phnum = ""
  $(function () {

      touch.on('.code_phone .b .s,.code_phone .b .s10', 'touchstart', function (ev) {
          phnum += $(this).text();
          $(".code_phone .n .top-n").text(phnum);
          $(".code_phone .n a").attr({ "href": "tel:" + phnum });
          $(this).addClass("on")
      });

      touch.on('.code_phone .b .s12', 'touchstart', function (ev) {
          phnum = phnum.substring(0, phnum.length - 1)
          $(".code_phone .n .top-n").text(phnum);
          $(".code_phone .n a").attr({ "href": "tel:" + phnum });
          $(this).addClass("on")
      });

      touch.on('.code_phone .b', 'touchend', function (ev) {
          $(".code_phone .b a").removeClass("on")
      });

  })

  //拨打电话
      var browser = {
          versions: function () {
              var u = navigator.userAgent, app = navigator.appVersion;
              return {//移动终端浏览器版本信息
                  trident: u.indexOf('Trident') > -1, //IE内核
                  presto: u.indexOf('Presto') > -1, //opera内核
                  webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                  gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                  mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                  ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                  android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                  iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                  iPad: u.indexOf('iPad') > -1, //是否iPad
                  webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
              };
          }(),
          language: (navigator.browserLanguage || navigator.language).toLowerCase()
      }

      if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
          $(".phone").attr("href", "javascript:;");
          $(document).on("click", ".phone", function () {
              $(".code_phone .n .top-n").text("");
              phnum = ""
              $(".code_phone .n a").attr("href", "javascript:;");
              $(".code_phone,.code_phone_mask").show();
          })
          //取消拨打电话
          $(document).on("click", ".code_phone_mask", function () {
              $(".code_phone,.code_phone_mask").hide();
          });
          $(document).on("click", ".code_phone .n a", function () {
              $(".code_phone,.code_phone_mask").hide();
          });
      }
      else if (browser.versions.android) {
          $(".phone").attr("href", "tel:#mp.weixin.qq.com");
      }
      else {

      }
  //end
