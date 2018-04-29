
addEvent(window,'load',function(){
    /*显示个人中心菜单*/
    var profile=getClass('profile')[0];
    var proUl=profile.getElementsByTagName('ul')[0];
    addEvent(profile,'mouseover',function(){
        this.style.background='url(img/arrow2.png) no-repeat right 13px';
        proUl.style.display='block';
    });
    addEvent(profile,'mouseout',function(){
        this.style.background='url(img/arrow.png) no-repeat right 13px';
        proUl.style.display='none';
    });
    /*登录界面*/
    var logIn=getClass('logIn')[0];
    var screen=getClass('screen')[0];
    var login=getClass('login')[0];
    var close=login.getElementsByClassName('close')[0];
    addEvent(logIn,'click',function(){
        lock(screen);               //锁屏
        login.style.display='block';
        center(login);              //局中显示
        /*登录界面拖拽事件*/
        var h2=login.getElementsByTagName('h2')[0];
        drag(h2,login);
    });
    /*改变浏览器视口事件*/
    addEvent(window,'resize',function(){
        if(getStyle(screen,'display')=='block'){
            lock(screen);
        }
        if(getInner().width-login.offsetLeft<=login.offsetWidth||getInner().height-login.offsetTop<=login.offsetHeight){
            center(login);
        }
    });
    //关闭登录界面
    addEvent(close,'click',function(){
        unlock(screen);
        login.style.display='none';
    });

    /*注册界面*/
    var signIn=getClass('signIn')[0];
    var sign=getClass('sign')[0];
    var signClose=sign.getElementsByClassName('signClose')[0];
    addEvent(signIn,'click',function(){
        lock(screen);               //锁屏
        sign.style.display='block';
        center(sign);
        /*注册界面拖拽事件*/
        var signH2=sign.getElementsByTagName('h2')[0];
        drag(signH2,sign);
    });
    /*改变浏览器视口事件*/
    addEvent(window,'resize',function(){
        if(getStyle(screen,'display')=='block'){
            lock(screen);
        }
        if(getInner().width-sign.offsetLeft<=sign.offsetWidth||getInner().height-sign.offsetTop<=sign.offsetHeight){
            center(sign);
        }
    });
    //关闭注册界面
    addEvent(signClose,'click',function(){
        unlock(screen);
        sign.style.display='none';
    });
    /*注册验证*/
    var signForm=getName('signForm')[0];
    var username=getId('username');
    var info_user=getClass('info_user')[0];
    var error_user=getClass('error_user')[0];
    var succ_user=getClass('succ_user')[0];
    var loading=getClass('loading')[0];
    //验证用户名
    addEvent(username,'focus',function(){
        info_user.style.display='block';
        error_user.style.display='none';
        succ_user.style.display='none';
    });
    addEvent(username,'blur',function(){
        if(this.value==''){
            info_user.style.display='none';
            error_user.style.display='none';
            succ_user.style.display='none';
            loading.style.display='none';
        }else if(!check_user()){
            error_user.style.display='block';
            info_user.style.display='none';
            succ_user.style.display='none';
            loading.style.display='none';
        }else{
            succ_user.style.display='block';
            info_user.style.display='none';
            error_user.style.display='none';
            loading.style.display='none';
        }
    });
    function check_user(){
        var flag=true;
        if(!/[\w]{2,20}/.test(trim(username.value))){
            error_user.innerHTML='输入不合法，请重新输入！';
            return false;
        }else{
            loading.style.display='inline-block';
            info_user.style.display='none';
            ajax({
                method:'post',
                url:'test_user.php',
                data:serialize(signForm),
                success:function(text){
                    if(text==1){
                        error_user.innerHTML='用户名已占用！';
                        flag=false;
                }else{
                    flag=true;
                }
                    loading.style.display='none';
                },
                async:false
            });
         }
    return flag;
    }
    //验证密码
    var pass=getId('pass');
    var info_pass=getClass('info_pass')[0];
    var error_pass=getClass('error_pass')[0];
    var succ_pass=getClass('succ_pass')[0];
    addEvent(pass,'focus',function(){
        info_pass.style.display='block';
        error_pass.style.display='none';
        succ_pass.style.display='none';
    });
    addEvent(pass,'blur',function(){
       if(this.value==''){
           info_pass.style.display='none';
           error_pass.style.display='none';
           succ_pass.style.display='none';
       }else if(!check_pass()){
           error_pass.style.display='block';
           info_pass.style.display='none';
           succ_pass.style.display='none';
       }else{
           succ_pass.style.display='block';
           info_pass.style.display='none';
           error_pass.style.display='none';
       }
    });
    addEvent(pass,'keyup',check_pass);
    function check_pass(){
        var q1=getClass('q1')[0];
        var q2=getClass('q2')[0];
        var q3=getClass('q3')[0];
        var s1=getClass('s1')[0];
        var s2=getClass('s2')[0];
        var s3=getClass('s3')[0];
        var s4=getClass('s4')[0];
        var value=trim(pass.value);
        var num=0;
        if(/[a-z]/g.test(value)){
            num++;
        }
        if(/[A-Z]/g.test(value)){
            num++;
        }
        if(/[0-9]/g.test(value)){
            num++;
        }
        if (/[^\w]/.test(value)) {
            num++;
        }
        if(value.length>=6&&value.length<=20){
            q1.style.color='green';
        }else{
            q1.style.color='#fff';
        }
        if(num>0&&!(/\s/.test(value))){
            q2.style.color='green';
        }else{
            q2.style.color='#fff';
        }
        if(num>=2){
            q3.style.color='green';
        }else{
            q3.style.color='#fff';
        }
        if (value.length >= 10 && num >= 3) {
            s1.style.color='green';
            s2.style.color='green';
            s3.style.color='green';
            s4.innerHTML='高';
            s4.style.color='green';
        } else if (value.length >= 8 && num >= 2) {
            s1.style.color='#f60';
            s2.style.color='#f60';
            s3.style.color='#ccc';
            s4.innerHTML='中';
            s4.style.color='#f60';
        } else if (value.length >= 1) {
            s1.style.color='maroon';
            s2.style.color='#ccc';
            s3.style.color='#ccc';
            s4.innerHTML='低';
            s4.style.color='maroon';
        } else {
            s1.style.color='#ccc';
            s2.style.color='#ccc';
            s3.style.color='#ccc';
            s4.innerHTML='';
        }
        if (value.length>= 6 && value.length<= 20 && !/\s/.test(value) && num >= 2) {
            return true;
        } else {
            return false;
        }
    }
    //密码确认
    var passfirm=getId('passfirm');
    var info_passfirm=getClass('info_passfirm')[0];
    var error_passfirm=getClass('error_passfirm')[0];
    var succ_passfirm=getClass('succ_passfirm')[0];
    addEvent(passfirm,'focus',function(){
        info_passfirm.style.display='block';
        error_passfirm.style.display='none';
        succ_passfirm.style.display='none';
    });
    addEvent(passfirm,'blur',check_passfirm);
    function check_passfirm(){
        if(passfirm.value==''){
            succ_passfirm.style.display='none';
            info_passfirm.style.display='none';
            error_passfirm.style.display='none';
            return false;
        }else if(passfirm.value==pass.value&&passfirm.value!=''){
            succ_passfirm.style.display='block';
            info_passfirm.style.display='none';
            error_passfirm.style.display='none';
            return true;
        }else{
            succ_passfirm.style.display='none';
            info_passfirm.style.display='none';
            error_passfirm.style.display='block';
            return false;
        }
    }
    //选择提问
    var signSel=getId('signSel');
    var error_ques=getClass('error_ques')[0];
    function check_signSel(){
        if(trim(signSel.value)==0){
            error_ques.style.display='block';
            return false;
        }else{
            error_ques.style.display='none';
            return true;
        }
    }
    //回答
    var answer=getId('answer');
    var info_ans=getClass('info_ans')[0];
    var error_ans=getClass('error_ans')[0];
    var succ_ans=getClass('succ_ans')[0];
    addEvent(answer,'focus',function(){
        if(answer.value==''){
            info_ans.style.display='block';
            error_ans.style.display='none';
            succ_ans.style.display='none';
        }
    });
    addEvent(answer,'blur',check_answer);
    function check_answer(){
        if(answer.value==''){
            succ_ans.style.display='none';
            info_ans.style.display='none';
            error_ans.style.display='none';
            return false;
        }else if(trim(answer.value).length>=2&&trim(answer.value).length<=32){
             succ_ans.style.display='block';
             info_ans.style.display='none';
             error_ans.style.display='none';
             return true;
         }else{
             succ_ans.style.display='none';
             info_ans.style.display='none';
             error_ans.style.display='block';
         }
    }
    //验证电子邮箱
    var email=getId('email');
    var info_email=getClass('info_email')[0];
    var error_email=getClass('error_email')[0];
    var succ_email=getClass('succ_email')[0];
    var all_email=getClass('all_email')[0];
    var all_email_span=all_email.getElementsByTagName('span');
    var all_email_li=all_email.getElementsByTagName('li');
    addEvent(email,'focus',function(){
        if(email.value==''){
            info_email.style.display='block';
            error_email.style.display='none';
            succ_email.style.display='none';
        }
        if(email.value.indexOf('@')==-1) {
            all_email.style.display = 'block';
        }
    });
    addEvent(email,'blur',function(){
        check_email();
        all_email.style.display='none';
    });
    addEvent(email,'keyup',function(e){
        //邮箱快捷键
        if(email.value.indexOf('@')==-1){
            all_email.style.display='block';
            for(var j=0;j<all_email_li.length;j++){
                all_email_li[j].className='';
            }
            for(var i=0;i<all_email_span.length;i++){
                all_email_span[i].innerHTML=email.value;
            }
            if(e.keyCode==40){
                if(email.index==undefined||email.index>=all_email_span.length-1){
                    email.index=0;
                }else{
                    email.index++;
                }
                all_email_li[email.index].className='on';
            }
            if(e.keyCode==38){
                if(email.index==undefined||email.index<=0){
                    email.index=all_email_li.length-1;
                }else{
                    email.index--;
                }
                all_email_li[email.index].className='on';
            }
            if(e.keyCode==13){
                email.value=all_email_li[email.index].innerText;
                all_email.style.display = 'none';
                email.index=undefined;
            }
        }else{
            all_email.style.display='none';
        }
    });
    for(var k=0;k<all_email_li.length;k++){
        addEvent(all_email_li[k],'mousedown',function(){
            email.value=this.innerText;
            all_email.style.display = 'none';
            email.index=undefined;
        })
    }
    function check_email(){
        if(email.value==''){
            info_email.style.display='none';
            error_email.style.display='none';
            succ_email.style.display='none';
            return false;
        }else if(/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim(email.value))){
            info_email.style.display='none';
            error_email.style.display='none';
            succ_email.style.display='block';
            return true;
        }else{
            info_email.style.display='none';
            error_email.style.display='block';
            succ_email.style.display='none';
            return false;
        }
    }

    //备注
    var add=getId('add');
    var signLeft1=getClass('signLeft')[0];
    var ps1=getClass('ps')[0];
    var signLeft2=getClass('signLeft')[1];
    var ps2=getClass('ps')[1];
    var ps_clear=getClass('ps_clear')[0];
    addEvent(add,'keyup',function(){
        if(add.value.length<=200){
            ps1.style.display='block';
            ps2.style.display='none';
            signLeft1.innerHTML=200-add.value.length;
        }else{
            ps2.style.display='block';
            ps1.style.display='none';
            signLeft2.innerHTML=add.value.length-200;
        }
    });
    addEvent(ps_clear,'click',function(){
        add.value=add.value.substring(0,200);
        ps2.style.display='none';
        ps1.style.display='block';
    });
    //注册按钮点击事件
    var signSub=getClass('signSub')[0];
    var button=signSub.getElementsByClassName('button')[0];
    addEvent(button,'click',function(){
        var _this=this;
       var flag=true;
       if(!check_user()){
           flag=false;
           error_user.style.display='block';
       }
       if(!check_pass()){
           flag=false;
           error_pass.style.display='block';
       }
       if(!check_passfirm()){
           flag=false;
           error_passfirm.style.display='block';
       }
       if(!check_signSel()){
           flag=false;
           error_ques.style.display='block';
       }
       if(!check_answer()){
           flag=false;
           error_ans.style.display='block';
       }
       if(!check_email()){
           flag=false;
           error_email.style.display='block';
       }
        //调用ajax
        if(flag){
            var loading=getClass('loading')[1];
            var success=getClass('success')[0];
            var success_p=success.getElementsByTagName('p')[0];
            var username=getName('username');
            loading.style.display='block';
            center(loading);
            _this.disabled=true;
            _this.style.backgroundPosition='right';
            ajax({
                method:'POST',
                url:'add.php',
                data:{
                    'username':username
                },
                success:function(text){
                    if(text==1){
                        success.style.display='block';
                        center(success);
                        success_p.innerHTML='注册完成，请登录！';
                        setTimeout(function(){
                            sign.style.display='none';
                            loading.style.display='none';
                            success.style.display='none';
                            screen.style.display='none';
                            _this.disabled=false;
                            _this.style.backgroundPosition='left';
                            signForm.reset();
                        },1000);
                    }
                },
                async:true
            })

        }


    });
/*网页主体*/
    /*主体导航栏导航滑动*/
    var navBg=getClass('navBg')[0];
    var white=navBg.getElementsByClassName('white')[0];
    var topLi=getClass('top')[0].getElementsByTagName('li');
    var navBgW=parseInt(getStyle(navBg,'width'));
    var navBg_currLeft=parseInt(getStyle(navBg,'left'));
    var white_currLeft=parseInt(getStyle(white,'left'));
    /*导航栏滑动*/
    for(var i=0;i<topLi.length;i++) {
        topLi[i].setAttribute('index', i);
        addEvent(topLi[i],'mouseover',function(){
            var currIndex = this.getAttribute('index');
            var navBg_target=currIndex * navBgW + navBg_currLeft;
            var white_target=white_currLeft-(currIndex) * navBgW;
            moveElem(navBg,navBg_target,0,20);
            moveElem(white,white_target,0,20);
        });
        addEvent(topLi[i],'mouseout',function(){
            moveElem(navBg,navBg_currLeft,0,20);
            moveElem(white,white_currLeft,0,20);
        })
    }
    /*中部左侧导航slide*/
    var sidebar=getClass('sidebar')[0];
    var sidebar_h2=sidebar.getElementsByTagName('h2');
    for(var j=0;j<sidebar_h2.length;j++){
        addEvent(sidebar_h2[j],'click',function(){
            if(this.nextSibling.nodeName=='#text'){
                //清理空格，浏览器将换行也当做DOM元素
                var sidebar_ul=this.nextSibling.nextSibling;
            }else{
                sidebar_ul=this.nextSibling;
            }
            if(getStyle(sidebar_ul,'display')=='block'){
                sidebar_ul.style.display='none';
            }else{
                sidebar_ul.style.display='block';
            }
        });
    }

    //轮播器
    var carousel=getClass('carousel')[0];
    var carousel_wrap=carousel.getElementsByClassName('wrap')[0];
    var carousel_li=carousel.getElementsByTagName('li');
    var carousel_str=carousel.getElementsByTagName('strong');
    carousel_li.index=0;
    carousel.timer=setInterval(function(){
        hideInfo(carousel_li,carousel_str,carousel_li.index);
        carousel_li.index++;
        if(carousel_li.index==3){
            carousel_li.index=0;
        }
        var left=-(carousel_li.index*900);
        showInfo(carousel_li,carousel_str,left,carousel_li.index);
    },1000);

    for(var l=0;l<carousel_li.length;l++){
        carousel_li[l].setAttribute('index',l);
        addEvent(carousel_li[l],'mouseover',function(){
            var li_index=parseInt(this.getAttribute('index'));
            for(var m=0;m<carousel_li.length;m++){
                hideInfo(carousel_li,carousel_str,m);
            }
            clearInterval(carousel.timer);
            var left=-(li_index*900);
            showInfo(carousel_li,carousel_str,left,li_index);

        });
        addEvent(carousel_li[l],'mouseout',function(){
            carousel.timer=setInterval(function(){
                hideInfo(carousel_li,carousel_str,carousel_li.index);
                carousel_li.index++;
                if(carousel_li.index==3){
                    carousel_li.index=0;
                }
                var left=-(carousel_li.index*900);
                showInfo(carousel_li,carousel_str,left,carousel_li.index);
            },1000);
        });
    }
    //轮播器显示附加信息
    function showInfo(li,str,x_pos,index){
        carousel_wrap.style.left=x_pos+'px';
        li[index].style.color='rgb(51,51,51)';
        str[index].style.display='block';
    }
    function hideInfo(li,str,index){
        li[index].style.color='rgb(153,153,153)';
        str[index].style.display='none';
    }

    /*图片加载*/

    var  wait_load=getClass('wait_load');
    var bigImg=getClass('bigImg')[0];
    var img_close=getClass('img_close')[0];
    var img_sl=bigImg.getElementsByClassName('sl')[0];
    var img_sr=bigImg.getElementsByClassName('sr')[0];
    var img_left=bigImg.getElementsByClassName('left')[0];
    var img_right=bigImg.getElementsByClassName('right')[0];
    var img_em=bigImg.getElementsByTagName('em')[0];
    var bigImg_img=bigImg.getElementsByTagName('img')[1];
    var img_src=bigImg_img.getAttribute('src');
    //延迟加载图片
    addEvent(window,'scroll',function(){
        //延迟加载
            setTimeout(function(){
                for(j=0;j<wait_load.length;j++) {
                    if (getScroll().top + getInner().height >= offsetTop(wait_load[j])) {
                        var xsrc = wait_load[j].getAttribute('xsrc');
                        wait_load[j].setAttribute('src', xsrc);
                    }
                }
            },500);
    });

    //预加载图片
    for(var n=0;n<wait_load.length;n++){
            wait_load[n].setAttribute('index',n);
            addEvent(wait_load[n],'click',function(){
            var _this=this;
            var curr_index=parseInt(_this.getAttribute('index'));
            lock(screen);               //锁屏
            bigImg.style.display='block';
            center(bigImg);
            //大图界面拖拽事件
            var bigImg_h2=bigImg.getElementsByTagName('h2')[0];
            drag(bigImg_h2,bigImg);
            //显示左右键
            addEvent(img_left,'mouseover',function(){
                img_sl.style.display='block';
            });
            addEvent(img_right,'mouseover',function(){
                img_sr.style.display='block';
            });
            //点击图片
            var temp_img=new Image();
            temp_img.src=_this.getAttribute('bigsrc');
            bigImg_img.setAttribute('src',temp_img.src);
            bigImg_img.className='big';
            img_em.innerHTML=curr_index+1+'/12';
            //预加载
            function pre(){
                var curr_left=curr_index;
                if(curr_left==0){
                    curr_left=12;
                }
                var pre_img=wait_load[curr_left-1].getAttribute('bigsrc');
                img_left.setAttribute('src',pre_img);
            }
            pre();
            function next(){
                var curr_right=curr_index;
                if(curr_right==11){
                    curr_right=-1;
                }
                var next_img=wait_load[curr_right+1].getAttribute('bigsrc');
                img_right.setAttribute('src',next_img);;
            }
            next();
            //上一张
            addEvent(img_left,'click',function(){
                pre();
                if(curr_index==0){
                    curr_index=11;
                }else{
                    curr_index--;
                }
                temp_img.src=img_left.getAttribute('src');
                bigImg_img.setAttribute('src',temp_img.src);
                img_em.innerHTML=curr_index+1+'/12';
            });
            //下一张
            addEvent(img_right,'click',function(){
                next();
                if(curr_index==11){
                    curr_index=0;
                }else{
                    curr_index++;
                }
                temp_img.src=img_right.getAttribute('src');
                bigImg_img.setAttribute('src',temp_img.src);
                img_em.innerHTML=curr_index+1+'/12';
            });

            //隐藏左右键
            addEvent(img_left,'mouseout',function(){
                img_sl.style.display='none';
            });
            addEvent(img_right,'mouseout',function(){
                img_sr.style.display='none';
            });
        });

        /*改变浏览器视口事件*/
        addEvent(window,'resize',function(){
            if(getStyle(screen,'display')=='block'){
                lock(screen);
            }
            if(getInner().width-bigImg.offsetLeft<=bigImg.offsetWidth||getInner().height-offsetTop(bigImg)<=bigImg.offsetHeight){
                center(bigImg);
            }
        });
        //关闭登录界面
        addEvent(img_close,'click',function(){
            unlock(screen);
            bigImg.style.display='none';
            bigImg_img.className='';
            bigImg_img.setAttribute('src',img_src);
        });
    }



    //侧边栏分享滑入滑出
    var share=getClass('share')[0];
    share.style.top=(getInner().height-share.offsetHeight)/2+getScroll().top+'px';
    addEvent(share,'mouseover',function(){
        var share_target_y=share.offsetTop;
        var share_target_x=0;
        moveElem(share,share_target_x,share_target_y,10);
    });
    addEvent(share,'mouseout',function(){
        var share_target_y=share.offsetTop;
        var share_target_x=-211;
        moveElem(share,share_target_x,share_target_y,10);
    });
    //侧边栏分享垂直居中
    addEvent(window,'scroll',function(){
        var share_target_y=(getInner().height-share.offsetHeight)/2+getScroll().top;
        var dist=0;
        var ypos=share.offsetTop;
        setTimeout(function() {
                if (ypos < share_target_y) {
                    dist = Math.ceil((share_target_y - ypos) / 2);
                    ypos += dist;
                } else if (ypos > share_target_y) {
                    dist = Math.ceil((ypos - share_target_y) / 2);
                    ypos -= dist;
                    }
              share.style.top=ypos+'px';
        },50)
    });

















});
















