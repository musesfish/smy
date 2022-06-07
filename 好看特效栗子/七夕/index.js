

var t=setInterval(function(){
   //.addClass('act').siblings('.act').removeClass('act');
   // var liList = $("#nine-img  li");
   // for(var i=0; i<liList.length; i++){
   //     var li = liList[i];
   //     li.addClass('act').siblings('.act').removeClass('act');
        //li.onmouseenter = function(){
        //    this.className = 'act';
        //}
        //li.onmouseleave = function(){
        //    this.className = '';
        //}
    //}
    $(this).addClass('active').siblings('.act').removeClass('act');
    var i =  $("#nine-img  li").index(this);
    $( $("#nine-img  li")[i]).addClass('act').siblings('.act').removeClass('act');
},50);
var t1=setInterval(function(){
    var divlist=$( "#flower div");
    for(var i=0; i<divlist.length; i++) {
        var li= divlist[i];
         return li;
    }
    $(li).addClass('act').siblings('act').removeClass('act');  console.log(li);
},50)