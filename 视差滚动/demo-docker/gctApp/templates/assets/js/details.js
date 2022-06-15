window.addEventListener("load", function() {
    // 获取url参数 tag id
    var search = window.location.search.split('?')[1];
    let id,tag;
    if(search.indexOf("&")==-1){
        id = search.split("=")[1];
        tag = null;
    }else{
        let arr = search.split("&"),obj={};
        for(var i in arr){
            obj[arr[i].split("=")[0]] = arr[i].split("=")[1];
        }
        id = obj.id;
        tag = obj.tag;
    }
    if(tag){
        document.getElementById("comment").scrollIntoView();
    }
    // 获取新闻详情并渲染
    $.ajax({
        url:"/selectNews/",
        type:"GET",
        success:function(res){
            let html = ``,comments;
            let news = res[id-1].fields;
            if(news){
                const dateTme = (new Date(news.time)).toLocaleString();
                html = `
                <div class="row row-grid justify-content-between align-items-center">
                    <div class="col-lg-12">
                        <h5 class="h3">${news.title}</h5>
                        <p>
                            <span class="author">${news.author}</span>
                            <a class="a ml-2"><i data-feather="clock" class="icon"></i></a>
                            <span class="ml-1">${dateTme}</span>
                        </p>
                        <p class="lead my-4 elli-6">
                            ${news.content}
                        </p>
                        <div class="card mb-0 ml-lg-5">
                            <div class="card-body p-2">
                                <img alt="Image placeholder" src="/media/${news.path} " class="img-fluid shadow rounded">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-div">
                    <a class="like">${news.like||0}</a>
                    <a class="a thumbs-a"><i data-feather="thumbs-up" class="thumbs"></i></a>
                </div>
                `;
                $(".container-top").html(html)
                //评论渲染
                html = '';
                if(news.comments){
                    comments = JSON.parse(news.comments);
                    if(!Array.isArray(comments)){
                        comments = [comments];
                    }
                }else{
                    comments = [];
                }
                for(var ind in comments){
                    html += `
                    <p class="comment-p">
                        <img src="../assets/img/avatar.png" alt="avatar">
                        <span>${comments[ind]}</span>
                    </p>
                    `;
                }
                $(".comment-lines").html(html);
            }
            //icon渲染
            feather.replace({
                'width': '1em',
                'height': '1em'
            })
            let lock = false;
            //点赞
            $(".thumbs-a").click(function(){
                let newslike,_this = $(this);
                if(lock) return false;
                lock = true;
                if($(this).css("color") !== 'rgb(255, 0, 0)'){
                    newslike = $(this).siblings(".like").html()-0+1;
                    $.ajax({
                        type: "POST",
                        url: '/updateNewsLike/',
                        data:  "id=" + id + "&like=" + newslike,
                        success: function (data) {
                            if(data == 'ok'){
                                _this.css("color","red");
                                _this.siblings(".like").html(newslike);
                                setTimeout(()=>{lock = false;},100)
                            }
                        }
                    })
                }else{
                    newslike = $(this).siblings(".like").html()-1;
                    $.ajax({
                        type: "POST",
                        url: '/updateNewsLike/',
                        data:  "id=" + id + "&like=" + newslike,
                        success: function (data) {
                            if(data == 'ok'){
                                _this.css("color","gray");
                                _this.siblings(".like").html(newslike);
                                setTimeout(()=>{lock = false;},100)
                            }
                        }
                    })
                }
            });
            //评论
            $("#sendMessage").click(function(){
                let txt = $("#textComments").val(),lock2 = false,_this=$(this);
                if(txt && !lock2){
                    $(this).prop("disabled",true);
                    comments.push(txt);
                    $.ajax({
                        type: "POST",
                        url: '/updateNewsComments/',
                        data:  "id=" + id + "&comments=" + JSON.stringify(comments),
                        success: function (data) {
                            if(data){
                                data = data[0].fields;
                                //评论渲染
                                html = '';
                                if(data.comments){
                                    comments = JSON.parse(data.comments);
                                }else{
                                    comments = [];
                                }
                                for(var ind in comments){
                                    html += `
                                    <p class="comment-p">
                                        <img src="../assets/img/avatar.png" alt="avatar">
                                        <span>${comments[ind]}</span>
                                    </p>
                                    `;
                                }
                                $(".comment-lines").html(html);
                                $("#textComments").val('');
                                setTimeout(()=>{lock2 = false;_this.prop("disabled",false);},100)
                            }
                        }
                    })
                }
            });
        }
    })
});