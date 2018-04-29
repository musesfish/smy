var pass_word='';var rePass_word='';var passwords = $('#password').get(0);
$(function(){
    var div = '\
	<div id="key" style="position:absolute;background-color:#A8A8A8;width:99.5%;bottom:0px;">\
		<ul id="keyboard" style="font-size:20px;margin:2px -2px 1px 2px">\
			<li class="symbol"><span class="off">1</span></li>\
			<li class="symbol"><span class="off">2</span></li>\
			<li class="symbol btn_number_"><span class="off">3</span></li>\
			<li class="tab"><span class="off">4</span></li>\
			<li class="symbol"><span class="off">5</span></li>\
			<li class="symbol btn_number_"><span class="off">6</span></li>\
			<li class="tab"><span class="off">7</span></li>\
			<li class="symbol"><span class="off">8</span></li>\
			<li class="symbol btn_number_"><span class="off">9</span></li>\
			<li class="delete lastitem">删除</li>\
			<li class="symbol"><span class="off">0</span></li>\
			<li class="cancle btn_number_">取消</li>\
		</ul>\
	</div>\
	';
    var character;	$("input.pass").attr("disabled",true);	$("#password").attr("disabled",true);$("#keyboardDIV").html(div);
    $('#keyboard li').click(function(){
        if ($(this).hasClass('delete')) {
            for(var i= 0,len=passwords.elements.length-1;len>=i;len--){
                if($(passwords.elements[len]).val()!=''){
                    $(passwords.elements[len]).val('');
                    if($(passwords.elements[5]).val()== null ||$(passwords.elements[5]).val()==undefined||$(passwords.elements[5]).val()==''){
                        if(pass_word==''){
                            $("#btn_next").attr("disabled",true);
                        }
                    }
                    break;
                }
            }
            return false;
        }
        if ($(this).hasClass('cancle')) {
            parentDialog.close();
            return false;
        }
		if ($(this).hasClass('symbol') || $(this).hasClass('tab')){
			character = $(this).text();
		}
		for(var i= 0,len=passwords.elements.length;i<len;i++){
			if($(passwords.elements[i]).val()== null ||$(passwords.elements[i]).val()==undefined||$(passwords.elements[i]).val()==''){
				$(passwords.elements[i]).val(character);
				break;
			}
		}
		if(!($(passwords.elements[5]).val()== null ||$(passwords.elements[5]).val()==undefined||$(passwords.elements[5]).val()=='')) {
			if (pass_word == '') {
				$("#btn_next").removeAttr("disabled");
			} else {
				var temp_rePass_word = '';
				for (var i = 0; i < passwords.elements.length; i++) {
					temp_rePass_word += $(passwords.elements[i]).val();
				}
				rePass_word = temp_rePass_word;
				$("#key").hide();
				if(rePass_word!=''&&pass_word==rePass_word){
					$("#key").hide();
					var result_text='\
						<span>两次密码一致</span>\
						';
					$("#set_text").html(result_text);
					$("input.pass").attr("disabled",true);
					$("#password").attr("disabled",true);
					$.ajax({
						url:'saveLadingPassword.do?action=set',
						type:'post',
						data:{userName:$("#userName").val(),ladingPassword:rePass_word},
						dataType:'json',
						success:function(data){
							var result_text='\
								<span>提货密码</span>\
								<span style="color: red;">设置成功</span>\
								<span style="color: red;">正在自动跳转</span>\
								';
							$("#set_text").html(result_text);
							var t=2;
							var t1 = window.setInterval(function(){
	    						t--;
	    						if(t==0){
		    						window.clearInterval(t1);
		    						var phone = $("#cellPhone").val();
		    						window.location.href="afterSaveLadingPassword.do?phone="+phone;
		    					}
	    					},1000);
						},
						error:function(data){
							
						}
					});
				}else{
					var result_text='\
						<span>两次</span>\
						<span style="color: red;">提货密码</span>\
						<span>不一致，请重新输入</span>\
						';
					$("#set_text").html(result_text);
					for(var i=0;i<passwords.elements.length;i++){
						$(passwords.elements[i]).val('');
					}
					rePass_word='';
					$("#key").show();
				}
			}
		}
		return false;
	});
});
$("#btn_next").click(function(){
	var reset_text='\
	<span>请再次输入</span>\
	<span style="color: red;">提货密码</span>\
	';
	$("#set_text").html(reset_text);
	var temp_password='';
	for(var i=0;i<passwords.elements.length;i++){
		temp_password+=$(passwords.elements[i]).val();
		$(passwords.elements[i]).val('');
	}
	pass_word=temp_password;
	$("#btn_next").attr("hidden",true);
});
(function () {
	function tabForward(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		if (target.value.length === target.maxLength) {
			var form = target.form;
			for (var i = 0, len = form.elements.length-1; i < len; i++) {
				if (form.elements[i] === target) {
					if (form.elements[i++]) {
						form.elements[i++].focus();
					}
					break;
				}
			}
		}
	}
	var form = document.getElementById("password");
	form.addEventListener("keyup", tabForward, false);
	var set_text='\
	<span>设置</span>\
	<span style="color: red;">提货密码</span>\
	<span>,建议与</span>\
	<span style="color: red;">登陆密码</span>\
	<span>不同</span>\
	';
	$("#set_text").html(set_text);
})();