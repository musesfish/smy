/**
 * Created by bjwsl-001 on 2017/8/18.
 */
(function(){
    var as=document.getElementById("carousel").onclick=function(e){
        e.preventDefault();
        var div=document.getElementById("contaier");
        var pos = parseInt(div.style.left);
        if(e.target.dataset.index==0){
            if(isNaN(pos))
                pos=0;
            if(pos > -1365){
                pos = pos - 455;
                div.style.left = pos + "px";
            }
        }
        else
        {
            if(isNaN(pos))
                pos=0;
            if(pos<-1){
                pos+=455;
                div.style.left = pos + "px";
            }

        }


        /*
         for(var i=0;i<divs.length;i++){
         divs[i].onclick=function(){
         console.log(this);
         }
         console.log(divs);
         }*/
    }
})();