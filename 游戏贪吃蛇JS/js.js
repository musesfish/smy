/**
 * author ：后盾马震宇
 * mail   : houdunwangmzy@gmai.com
 */
$(function(){
	var home = $('#home');
	var snakeArr = [];
	var direction = 'l';
	var speed = 0;
	//460/20=23
	var rows = 23;
	//500/20=25
	var cols = 25;
	var timer = '';
	var food = [];
	var die = false;
	var score = 0; 

	//创造蛇
	for(var i = 0; i < 4; i++){
		var snakeDiv = $('<div style="background:url(./images/snake' + i + '.png) no-repeat;z-index:999"></div>');
		home.append(snakeDiv);
		snakeArr[i] = {r : 11, c : 10 + i, div : snakeDiv, d : direction};
		setPostion(snakeArr[i]);
	}
	$('#res').click(function() {
		location.reload();
	});

	$('#start').click(function() {
		if(die){
			alert('请点击“重玩”');
			return;
		}
		clearInterval(timer);
		speed = $('input[name=time]:checked').val();
		move();
	});
	function move(){
		timer = setInterval(function(){
			for(var i = snakeArr.length-1; i > 0; i--){
				snakeArr[i].r = snakeArr[i-1].r;
				snakeArr[i].c = snakeArr[i-1].c;
				snakeArr[i].d = snakeArr[i-1].d;
			}
			switch(direction){
				case 'l' : 
					snakeArr[0].c--;
					snakeArr[0].d = 'l';
					break;
				case 't' : 
					snakeArr[0].r--;
					snakeArr[0].d = 't';
					break;
				case 'r' : 
					snakeArr[0].c++;
					snakeArr[0].d = 'r';
					break;
				case 'b' : 
					snakeArr[0].r++;
					snakeArr[0].d = 'b';
					break;

			}

			$(window).keydown(function(event) {
				switch(event.keyCode){
					case 37 : 
						direction = 'l';
						break;
					case 38 : 
						direction = 't';
						break;
					case 39 : 
						direction = 'r';
						break;
					case 40 : 
						direction = 'b';
						break;
				}
			});

			for(var i = 0; i < snakeArr.length; i++){
				setPostion(snakeArr[i]);
			}

			//蛇事故
			//1.撞墙
			if(snakeArr[0].c < 0 || snakeArr[0].r < 0 || snakeArr[0].c >= cols || snakeArr[0].r >= rows){
				clearInterval(timer);
				die = true;
				alert('GAME OVER');
			}

			//2.撞到自己
			for(var i = 1; i < snakeArr.length; i++){
				if(snakeArr[0].r == snakeArr[i].r && snakeArr[0].c == snakeArr[i].c){
					clearInterval(timer);
					die = true;
					alert('GAME OVER');
				}
			}

			//蛇进食
			if(snakeArr[0].r == food[0].r && snakeArr[0].c == food[0].c){
				food[0].div.css({background : 'url(./images/snake2.png) no-repeat'})
				snakeArr.splice(snakeArr.length-1, 0, food[0]);
				food.shift();
				score += 10;
				$('#score').html(score);
			}

			if(food.length == 0){
				createFood();
			}

		}, speed)
	}

	function createFood(){

		while(food.length == 0){
			var crash = false;

			var r = parseInt(Math.random() * rows);
			var c = parseInt(Math.random() * cols);

			for(var i = 0; i < snakeArr.length; i++){
				if(r == snakeArr[i].r && c== snakeArr[i].c){
					crash = true;
				}
			}

			if(!crash){
				var i = parseInt(4 * Math.random());
				var foodDiv = $('<div style="background:url(./images/fruit' + i +'.png)"></div>');
				home.append(foodDiv);
				food.push({r : r, c : c, div : foodDiv});
				setPostion(food[0]);
				
			}
		}


	}	

	//设置位置
	function setPostion(obj){
		obj.div.css({left : obj.c * 20, top : obj.r * 20});
		obj.div.removeClass().addClass(obj.d);
	}
	createFood();
})