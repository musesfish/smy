
(function(){
    window.onscroll=function(){

        var scrollTop=document.body.scrollTop;
        //console.log(scrollTop)
        if(scrollTop>=100){
            var lis=document.querySelectorAll("#nav ul>li");
            $(lis).each((i,elem)=>{
                elem.style.cssText="transform: translatex(0) translatey(0);";
            })
        }

    }

})()



















