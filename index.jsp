<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ include file="/WEB-INF/page/sys/admin/includes/tags.jsp"%>

<%@ include file="/WEB-INF/page/wechat/wechatLink.jsp"%>
<html>

<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<meta http-equiv="Access-Control-Allow-Origin" content="*" />
	<style type="text/css">
		html,body{
			//height:100%;
			overflow-x:hidden;
		}
		::-webkit-scrollbar{
		  // display: none;
		  width:0;
		}
		.priA{
			color:#000;
		}
		.mui-table-view-cell>a:not(.mui-btn).mui-active {
		    color: #fff !important;
		    background-color:#fff!important;
		}
		.mui-table-view-cell>a.priA.mui-active {
		    color: #000 !important;
		    background-color:#fff!important;
		}
		//轮播
            .mui-slider .mui-slider-group .mui-slider-item{
                height:auto!important;
            }
            .mui-bar-nav~.mui-content{
				padding-top:0px!important;
			}
			html body .mui-bar-nav{
				background: transparent!important;
			}
			html body #back{
				width:100%;
				height:100%;
				position: absolute;
				top:0;
				left:0;
				background: rgb(255,255,255);
				opacity:0.6;
				z-index: -1;
			}
			html body .mui-bar .city-gps .gps-rectangle{
				background: transparent url('${ctx}/resources/wechat/img/home/icon/fff.png') no-repeat 0 0!important;
				background-size:cover!important;
			}
			html body .mui-bar .mui-input-row input[type=search]{
				background: transparent url('${ctx}/resources/wechat/img/home/icon/dh01_a@2x.png') no-repeat 12px 6px;
				background-size:16px 16px;
				background-color: rgba(255,255,255,0.6);
				height:28px;
				margin-top:9px;
			}
			html body .searchA{
				color:#fff!important;
			}
			.hyc-yjxc .mui-content .mui-table-view .mui-media .mui-media-body{
				padding-right:5px;
			}
	</style>
    <link rel="icon" type="image/x-icon" href="${ctx}/resources/favicon.ico">
</head>

<body class="hyc-yjxc">
<!--顶部悬停框-->
<header class="mui-bar mui-bar-nav bar-flex" style="padding-left:20px;">
	<div id="back"></div>
    <a class="mui-btn mui-btn-link city-gps flex-item-a" href="${ctx }/wechat/home/cityList">
        
        <c:choose>
        	<c:when test="${city != null && city != '' }">
        	<span id="cityLocation" class="city-span ellipsis-1" style="color:#fff;">${city }</span>
        	</c:when>
        	<c:otherwise>
        	<span id="cityLocation" class="city-span ellipsis-1" style="color:#fff;">深圳</span>
        	</c:otherwise>
        </c:choose>
        <span class="gps-rectangle"  id="hyc-index-rect"></span>
    </a>
    <div class="mui-input-row">
        <input type="search" placeholder="输入车型试试" style="text-align: left;" id="searchInp">
        <%-- <img src="${ctx}/resources/wechat/img/home/icon/dh02_a@2x.png" alt="voice" class="voice"/> --%>
    </div>
    <a class="searchA" id="search">搜索</a>
</header>

<!--底部选项卡-->
<nav class="mui-bar mui-bar-tab hyc-bar-tab">
    <a id="defaultTab" class="mui-tab-item" href="${ctx }/wechat/home/index">
        <img src="${ctx}/resources/wechat/img/home/icon/car_a@2xx.png" class="hyc-db-icon" />
        <span class="mui-tab-label" style="color:#E24F39">优价选车</span>
    </a>
    <a class="mui-tab-item" href="${ctx }/wechat/service/service">
        <img src="${ctx}/resources/wechat/img/home/icon/service_@2x.png" class="hyc-db-icon" />
        <span class="mui-tab-label">金融服务</span>
    </a>
    <a class="mui-tab-item" href="${ctx }/wechat/userCenter/userCenter">
        <img src="${ctx}/resources/wechat/img/home/icon/my_@2x.png" class="hyc-db-icon" />
        <span class="mui-tab-label">我的</span>
    </a>
</nav>

<!--主体-->
<div class="mui-content">
	<!--图片轮播-->
    <div id="slider" class="mui-slider" style="max-height: 180px;">
        <div class="mui-slider-group mui-slider-loop">
            <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate">
                <a href="${bannerList[fn:length(bannerList)-1].link }">
                    <img src="${bannerList[fn:length(bannerList)-1].imageUrl }">
                </a>
            </div>
			<c:forEach items="${bannerList }" var="bannerView">
				<div class="mui-slider-item">
                <a href="${bannerView.link }">
                    <img src="${bannerView.imageUrl }">
                </a>
            </div>
			</c:forEach>            
            <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate">
                <a href="${bannerList[0].link }">
                    <img src="${bannerList[0].imageUrl }">
                </a>
            </div>
        </div>
        <div class="mui-slider-indicator">
            <div class="mui-indicator mui-active"></div>
            <div class="mui-indicator"></div>
            <div class="mui-indicator"></div>
            <div class="mui-indicator"></div>
        </div>
    </div>
	<!--图片动画-->
	<img src="${ctx}/resources/wechat/img/home/tip.png" class="ind-to-right"/>
    <!--快报滚动-->
    <div>
        <div class="hyc-pmd-out">
            <div style="float:left" class="lfdiv">
                <img src="${ctx}/resources/wechat/img/home/index/hckb.png"/>
            </div>
            <div class="hyc-pmd-in" id="hyc-pmd">
	            <c:forEach items="${noticeList }" var="noticeView">
	            	<a href="${ctx }/wechat/userCenter/messageDetail/${noticeView.id}"><p>${noticeView.title }</p></a>
	            </c:forEach>
            </div>
        </div>
    </div>

    <!--价格分类-->
    <div class="mui-row" style="margin-bottom:9px;">
        <div class="mui-col-xs-3">
            <li class="mui-table-view-cell">
                <a href="${ctx }/wechat/home/priceList/1" class="priA">
                    10万以下
                </a>
            </li>
        </div>
        <div class="mui-col-xs-3">
            <li class="mui-table-view-cell">
                <a href="${ctx }/wechat/home/priceList/2" class="priA">
                    10-15万
                </a>
            </li>
        </div>
        <div class="mui-col-xs-3">
            <li class="mui-table-view-cell">
                <a href="${ctx }/wechat/home/priceList/3" class="priA">
                    15-20万
                </a>
            </li>
        </div>
        <div class="mui-col-xs-3">
            <li class="mui-table-view-cell">
                <a href="${ctx }/wechat/home/priceList/4" class="priA">
                    20万以上
                </a>
            </li>
        </div>
    </div>

    <!--品牌-->
    <div class="mui-row">
        <div class="mui-col-xs-6">
            <li class="mui-table-view-cell l-title">
                常见品牌
            </li>
        </div>
        <div class="mui-col-xs-6">
            <p class="r-li-h">
                <a class="more" href="${ctx }/wechat/home/brandList">更多</a>
                <img src="${ctx}/resources/wechat/img/home/icon/rt.svg" alt="icon"/>
            </p>
        </div>
    </div>
    <!--品牌内容-->
    <div class="hyc-flex-5">
       <c:forEach items="${brandList }" var="brandView" begin="0" end="4" step="1">
       		<a href="${ctx }/wechat/car/brandModel/${brandView.name }">
            <img src="${brandView.imgUrl }" alt="fti"/>
            <p>${brandView.name }</p>
        </a>
       </c:forEach>    
    </div>
    <div class="hyc-flex-5" style="margin-bottom:9px;">
       <c:forEach items="${brandList }" var="brandView" begin="5" end="9" step="1">
       		<a href="${ctx }/wechat/car/brandModel/${brandView.name }">
            <img src="${brandView.imgUrl }" alt="fti"/>
            <p>${brandView.name }</p>
        </a>
       </c:forEach>
    </div>

    <!--爆款-->
    <div class="mui-row" style="border-bottom:0;">
        <div class="mui-col-xs-6">
            <li class="mui-table-view-cell l-title">
                本期爆款团购
            </li>
        </div>
        <div class="mui-col-xs-6">
            <p class="r-li-h">
                <a class="more" href="${ctx }/wechat/home/agencyList2/爆款">更多</a>
                <img src="${ctx}/resources/wechat/img/home/icon/rt.svg" alt="icon"/>
            </p>
        </div>
    </div>
    <!--爆款内容-->
    <ul class="mui-table-view" style="margin-bottom:9px;">
        <c:forEach items="${gPurchaseList }" var="gPurchaseView" varStatus="loop">
        	<div onclick="window.location.href='${ctx }/wechat/car/carDetialsHot/${gPurchaseView.id}'" class="div-add">
        		<img src="${ctx}/resources/wechat/img/home/index/hot.png" alt="hot" class="hot"/>
	        	<li class="mui-table-view-cell mui-media mui-row" style="border-bottom:0;padding:11px 0px;">
	        		<a class="mui-col-xs-4">
		                <img class="mui-pull-left"
		                     src="${gPCarModelViews[loop.count-1].imgUrl }">
		            </a>
		            <div class="mui-media-body mui-col-xs-8" style="margin-top:-10px;padding-left:20px;">
		                <p class="sec-head ellipsis-2" style="font-size:16px;">${gPCarModelViews[loop.count-1].name }</p>
		                <p>
		                    <span class="hot-price" style="font-size:13px;">爆团价 ￥${(gPurchaseView.groupPrice-(gPurchaseView.groupPrice%10000))/10000 }万</span>
		                    <span class="fix-price">￥${(gPCarIndexViews[loop.count-1].price-(gPCarIndexViews[loop.count-1].price%10000))/10000 }万</span>
		                </p>
		            </div>
	       		</li>
	       		<li class="mui-row li-add">
	       			<p class="discribe">
	       				<img src="${ctx}/resources/wechat/img/home/tg.png" style="width:24px;position:relative;top:-2px;"/>
	                   <!--  <span class="red-border">团购</span> -->
	                    <c:if test="${gPurchaseView.existingNumbers == null || gPurchaseView.existingNumbers == 0 }">
	                    	<span><i style="color:#F23030;font-style:normal;">0</i>人已报名</span>
	                    </c:if>
	                    <c:if test="${gPurchaseView.existingNumbers > 0 }">
	                    	<span>
	                    		<i style="color:#F23030;font-style:normal;">${gPurchaseView.existingNumbers }</i>人已报名
	                    	</span>
	                    </c:if>
	                    <span>差<i style="color:#F23030;font-style:normal;">${gPurchaseView.peopleNumber - gPurchaseView.existingNumbers }</i>人</span>
	                    <a type="button" class="mui-btn bk-apply" href="${ctx }/wechat/car/carDetialsHot/${gPurchaseView.id}">即刻报名&gt;</a>
	                </p>
	       		</li>
        	</div>
        </c:forEach>
    </ul>

    <!--推荐-->
    <div style="display:table;background:#fff;width:100%;">
	    <div class="mui-row" style="border-bottom:2px solid #ededed;margin:0 5%;">
	        <div class="mui-col-xs-6">
	            <li class="mui-table-view-cell l-title" style="padding-left:0;">
	                为您推荐
	            </li>
	        </div>
	        <div class="mui-col-xs-6">
	            <p class="r-li-h" style="padding-right:0;">
	                <a class="more" href="${ctx }/wechat/home/agencyList3/推荐">更多</a>
	                <img src="${ctx}/resources/wechat/img/home/icon/rt.svg" alt="icon"/>
	            </p>
	        </div>
	    </div>
	</div>
    <!--推荐内容-->
    <div class="tj-rows" style="background:#fff!important;margin-bottom:50px;">
	    <div style="text-align:left;height:195px;" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
	        <div class="mui-scroll">
		        <c:forEach items="${recommendList }" var="recommendView" varStatus="loop" begin="0" end="3" step="1">
		        <div class="one-div" onclick="window.location.href='${ctx }/wechat/car/carDetials/${recommendCarList[loop.count-1].id }'">
		            <div class="mui-card l-card">
		                <div class="tj-card-header">
		                    <img src="${ctx}/resources/wechat/img/home/index/tuijian_@2x.png" alt="tt" class="tj-img1"/>
		                    <a>
		                        <img src="${recommendCarModelList[loop.count-1].imgUrl }" alt="tj" class="tj-img2"/>
		                    </a>
		                </div>
		                <div class="mui-card-content">
		                    <p class="ellipsis-1" style="font-size:14px;padding-bottom:3px;">${recommendCarModelList[loop.count-1].name }</p>
		                    <p>
		                        <span class="tj-price">￥${(recommendCarList[loop.count-1].price-(recommendCarList[loop.count-1].price%10000))/10000 }万</span>
		                        <span class="fix-price">￥${(recommendCarList[loop.count-1].guidancePrice-(recommendCarList[loop.count-1].guidancePrice%10000))/10000 }万</span>
		                    </p>
		                </div>
		                <div class="mui-card-footer">
		                    <div class="icons mui-inline">
		                    <c:if test="${recommendCarList[loop.count-1].score == null }">
		                    	<span class="tj-score">暂未评分</span>
		                    </c:if>
		                    <c:if test="${recommendCarList[loop.count-1].score !=null }">
		                        <c:forEach begin="1" end="${recommendCarList[loop.count-1].score }">
		                        	<i data-index="1" class="mui-icon mui-icon-star tj-star mui-icon-star-filled"></i>
		                        </c:forEach>
		                        <c:forEach begin="1" end="${5 - recommendCarList[loop.count-1].score }">
		                        	<i data-index="5" class="mui-icon mui-icon-star tj-star"></i>
		                        </c:forEach>
		                        <span class="tj-score">评分${recommendCarList[loop.count-1].score }</span>
		                        </c:if>
		                    </div>
		                </div>
		            </div>
		        </div>
		        </c:forEach>
	    	</div>
	    </div>
    </div>
    <%-- <div class="mui-row tj-row" style="margin-bottom:10px;">
        <c:forEach items="${recommendList }" var="recommendView" begin="2" end="3" step="1">
        	<div class="mui-col-xs-6">
            <div class="mui-card l-card">
                <div class="tj-card-header">
                    <img src="${ctx}/resources/wechat/img/home/index/tuijian_@2x.png" alt="tt" class="tj-img1"/>
                    <a href="${ctx }/wechat/car/carDetials/${recommendCarList[loop.count+1].id }">
                        <img src="${recommendCarModelList[loop.count+1].imgUrl }" alt="tj" class="tj-img2"/>
                    </a>
                </div>
                <div class="mui-card-content">
                    <p class="ellipsis-1">${recommendCarModelList[loop.count+1].name }</p>
                    <p>
                        <span class="tj-price">￥${(recommendCarList[loop.count+1].price-(recommendCarList[loop.count+1].price%10000))/10000 }万</span>
                        <span class="fix-price">￥${(recommendCarList[loop.count+1].guidancePrice-(recommendCarList[loop.count+1].guidancePrice%10000))/10000 }万</span>
                    </p>
                </div>
                <div class="mui-card-footer">
                    <div class="icons mui-inline">
                        <c:if test="${recommendCarList[loop.count+1].score == null }">
                    	<span class="tj-score">暂未评分</span>
                    </c:if>
                    <c:if test="${recommendCarList[loop.count+1].score !=null }">
                        <c:forEach begin="1" end="${recommendCarList[loop.count+1].score }">
                        	<i data-index="1" class="mui-icon mui-icon-star tj-star mui-icon-star-filled"></i>
                        </c:forEach>
                        <c:forEach begin="1" end="${5 - recommendCarList[loop.count+1].score }">
                        	<i data-index="5" class="mui-icon mui-icon-star tj-star"></i>
                        </c:forEach>
                        <span class="tj-score">评分${recommendCarList[loop.count+1].score }</span>
                        </c:if>
                    </div>
                </div>
            </div>
        </div>
        </c:forEach>
    </div> --%>
</div>

<script type="text/javascript">
	//进入页面前先获取数据
	window.addEventListener('pageshow', function( e ){
	    if (e.persisted) {
	    	//城市选择
			var city=window.sessionStorage.getItem('city');
			if(city!=null) document.querySelector('.city-span').innerHTML=city;
	    }
	});
    (function(){
    	//获得code
        var urlinfo=window.location.href; //获取当前页面的url
		var len=urlinfo.length;//获取url的长度
		var offset=urlinfo.indexOf("code");//设置参数字符串开始的位置
		var newsidinfo=urlinfo.substr(offset,len)//取出参数字符串 这里会获得类似“id=1”这样的字符串
		var newsids=newsidinfo.split("&");//对获得的参数字符串按照“=”进行分割
		var newsid=newsids[0];//得到参数值
		var news=newsid.split("=");
		var wechatCode = news[1];
		if(wechatCode != null && wechatCode != "" && wechatCode != undefined){
			$.ajax({
					url:"${ctx}/wechat/login/getWCode/"+wechatCode,
					type:"post",
					success:function(data){
						if(data.status == "1"){
						}else{
							mui.toast(data.message,{ duration:'short', type:'div' });
						}
					}
				});
		}
		console.log(urlinfo);
		console.log(news);
		console.log(wechatCode);
        mui.init();
      //城市选择
		var city=window.sessionStorage.getItem('city');
		if(city!=null) document.querySelector('.city-span').innerHTML=city;
        //轮播
        var slider = mui("#slider");
        slider.slider({
            interval: 3000
        });
        //快报跑马灯
        pmdMove(3000);
        var pmdTop=0,pmdNum=-29;
        var pmd=document.getElementById("hyc-pmd");
        var pmdp=pmd.getElementsByTagName("p");
        var pmdLen=pmdp.length;
        pmd.innerHTML+='<p>'+pmdp[0].innerHTML+'</p>';
        function pmdMove(time){
            var timer=setTimeout(function(){
                pmdTop+=pmdNum;
                pmd.style.top=pmdTop+"px";
                pmd.style.transition="all 1s linear";
                if(parseInt(pmd.style.top)<pmdLen*pmdNum){
                    pmd.style.top="0px";
                    pmd.style.transition="none";
                    pmdTop=0;
                    pmdMove(30);
                }else{
                    pmdMove(3000);
                }
            },time);
        }
        //底部栏中a无法跳转
        mui('.hyc-bar-tab').on('tap','a',function(){
            document.location.href=this.href;
        });
        //搜索按钮
        document.getElementById('search').addEventListener('click',function(){
        	var val=document.getElementById('searchInp').value;
        	if(val==null || $.trim(val)==""){
        		//中间
        		mui.toast("搜索为空",{ duration:'short', type:'div' });
        		return;
        	}
            document.location.href="${ctx }/wechat/home/agencyList/"+val;
            document.getElementById('searchInp').value=null;
        });
        var needRefresh = window.sessionStorage.getItem("need-refresh");
        if(needRefresh){
        	window.sessionStorage.removeItem("need-refresh");
        	window.location.reload();
        }
        //公用函数
		function $$(id){
			return document.getElementById(id);
		}
		//搜索框渐变
		var a=0;
	  	var back=$$('back'),
	  		cityLocation=$$('cityLocation'),
	  		hycRect=$$("hyc-index-rect"),
	  		searchInp=$$('searchInp'),
	  		search=$$('search');
	  	var h=document.getElementById("slider").offsetHeight-50;
	  	//console.log("h"+h);//152
	  	window.onscroll=function(){
	  		var t = document.documentElement.scrollTop || document.body.scrollTop;
            //console.log('t'+t);
            if(t==0){
	  			back.style.opacity=0;
	  		}
	  		if(t<h){
	  			a-=0.2;
	  			if(a<0) {a=0;}
	  			back.style.opacity=a;
	  			cityLocation.style.color="#fff";
	  			hycRect.style.background="transparent url('${ctx}/resources/wechat/img/home/icon/dh03_a@2x.png') no-repeat 0 0";
	  			hycRect.style.backgroundSize="cover";
	  			search.style.color="#fff";
	  			searchInp.style.backgroundColor="rgba(255,255,255,0.6)";
	  		}
	  		if(t>h){
	  			a+=0.2;
	  			if(a>0) {a=1;}
	  			back.style.opacity=a;
	  			cityLocation.style.color="#333";
	  			hycRect.setAttribute('style', "background:transparent url('${ctx}/resources/wechat/img/home/icon/dh03_a@2x.png') no-repeat 0 0 !important;background-size:cover!important");
	  			search.setAttribute('style', 'color: #333 !important');			  			
	  			searchInp.style.backgroundColor="#F8F8F8";
	  		}
	  	}
    })();
</script>
</body>

</html>