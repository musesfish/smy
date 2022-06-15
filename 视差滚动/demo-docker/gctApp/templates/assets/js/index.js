window.addEventListener("load", function() {
    let lock = false;
    //点赞
    $(".thumbs-a").click(function(){
        let newsid = $(this).data("id"),newslike,_this = $(this);
        if(lock) return false;
        lock = true;
        if($(this).css("color") !== 'rgb(255, 0, 0)'){
            newslike = $(this).siblings(".like").html()-0+1;
            $.ajax({
                type: "POST",
                url: '/updateNewsLike/',
                data:  "id=" + newsid + "&like=" + newslike,
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
                data:  "id=" + newsid + "&like=" + newslike,
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
    feather.replace({
        'width': '1em',
        'height': '1em'
    })
});