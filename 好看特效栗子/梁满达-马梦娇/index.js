/**
 * Created by ManderLiang on 2017/8/15.
 */
(function () {
    document.getElementsByClassName("qi stage-bg")[0].className = "qi stage-bg active";
    document.getElementsByClassName("xi stage-bg")[0].className = "xi stage-bg active";
    document.getElementsByClassName("qing stage-bg")[0].className = "qing stage-bg active";
    document.getElementsByClassName("qi_cloud stage-bg")[0].className = "qi_cloud stage-bg active";
    document.getElementsByClassName("xi_cloud stage-bg")[0].className = "xi_cloud stage-bg active";
    document.getElementsByClassName("qing_cloud stage-bg")[0].className = "qing_cloud stage-bg active";
    document.getElementsByClassName("bike stage2")[0].className = "bike stage2 active";
    document.getElementsByClassName("msg1")[0].className = "msg1 active";
    document.getElementsByClassName("msg2")[0].className = "msg2 active";
})();

// 拼图游戏
(function () {

    const SIZE = 3;

    const UP = 0x1011;
    const DOWN = 0x1022;
    const LEFT = 0x1033;
    const RIGHT = 0x1044;

    const GIDE_SIZE = 200;

    var game = document.getElementById("game");

    var filter = false;

    var grid =
        [
            [1, 2, 3],
            [5, 7, 6],
            [4, 8, 0]
        ];

    var gameDivs = game.getElementsByTagName("div");

    var gameDivs2D =
        [
            [gameDivs[0], gameDivs[1], gameDivs[2]],
            [gameDivs[3], gameDivs[4], gameDivs[5]],
            [gameDivs[6], gameDivs[7]]
        ];

    for (var i = 0; i < SIZE; i++) {
        for (var j = 0; j < SIZE; j++) {
            if (gameDivs2D[i][j] && 0 != grid[i][j]) {
                gameDivs2D[i][j].style.background = `url(images/diyizhang/grid${grid[i][j]}.png)`;
                //gameDivs2D[i][j].innerHTML = `<img src=images/diyizhang/grid${grid[i][j]}.png/>`;
                //gameDivs2D[i][j].innerHTML = grid[i][j];
                gameDivs2D[i][j].style.top = GIDE_SIZE * i + "px";
                gameDivs2D[i][j].style.left = GIDE_SIZE * j + "px";
            }
        }
    }

    game.onclick = function (e) {
        console.log("onclick---------------------");
        if (filter)return;
        for (var i = 0; i < SIZE; i++) {
            for (var j = 0; j < SIZE; j++) {
                if (e.target === gameDivs2D[i][j]) {
                    move(i, j);
                    return;
                }
            }
        }
    }

    var canMoveTo = function (x, y) {
        //console.log(x, y);
        if (x - 1 >= 0 && grid[x - 1][y] == 0) {
            return UP;
        }
        if (x + 1 < SIZE && grid[x + 1][y] == 0) {
            return DOWN;
        }
        if (y - 1 >= 0 && grid[x][y - 1] == 0) {
            return LEFT;
        }
        if (y + 1 < SIZE && grid[x][y + 1] == 0) {
            return RIGHT;
        }
        return 0;
    }

    var move = function (x, y) {
        var canMove = canMoveTo(x, y);
        if (!canMove)return;
        moveTo(x, y, canMove);
    }

    var moveTo = function (x, y, moveTo) {
        console.log(x, y, moveTo.toString(16));
        filter = true;
        setTimeout(function () {
            filter = isClear();
            if (filter) {
                game.style.boxShadow = "0 0 10px #ff0000";
                console.log("gameOver");
                var img = document.createElement("img");
                img.src = "images/diyizhang/grid9.png";
                var div = document.createElement("div");
                div.style.opacity = "0";
                div.style.top = "400px";
                div.style.left = "400px";
                div.appendChild(img);
                game.appendChild(div);
                div.style.opacity = "1";
                //document.getElementsByClassName("part2_detail p3")[0].innerHTML = "恭喜·拼图已完成";
                //var con = document.createElement("div");
                //con.style.width = "auto";
                //con.style.height = "auto";
                //con.style.top = "50%";
                //con.style.left = "50%";
                //con.style.transform = "translateX(-50%) translateY(-50%) rotate(-15deg)"
                //con.style.padding = "20px";
                //con.style.border = "2px solid red";
                //con.style.color = "red";
                //con.innerHTML = "拼图已完成";
                //con.style.fontSize = "4rem";
                //con.style.borderRadius = "5px"
                //con.style.fontWeight = "bold";
                //con.zIndex = 1000;
                //game.appendChild(con);
                game.getElementsByTagName("p")[0].className = "active"
            }
        }, 700);
        //console.log(grid);
        var temp;
        var divTemp;
        temp = grid[x][y];
        divTemp = gameDivs2D[x][y];
        switch (moveTo) {
            case UP:
                // 改变位置
                gameDivs2D[x][y].style.top = (x - 1) * GIDE_SIZE + "px";
                // 改变位置数组
                grid[x][y] = grid[x - 1][y];
                grid[x - 1][y] = temp;
                // 改变div数组
                gameDivs2D[x][y] = gameDivs2D[x - 1][y];
                gameDivs2D[x - 1][y] = divTemp;
                break;
            case DOWN:
                console.log((x + 1) * GIDE_SIZE + "px");
                // 改变位置
                gameDivs2D[x][y].style.top = (x + 1) * GIDE_SIZE + "px";
                // 改变位置数组
                grid[x][y] = grid[x + 1][y];
                grid[x + 1][y] = temp;
                // 改变div数组
                gameDivs2D[x][y] = gameDivs2D[x + 1][y];
                gameDivs2D[x + 1][y] = divTemp;
                break;
            case LEFT:
                // 改变位置
                gameDivs2D[x][y].style.left = (y - 1) * GIDE_SIZE + "px";
                // 改变位置数组
                grid[x][y] = grid[x][y - 1];
                grid[x][y - 1] = temp;
                // 改变div数组
                gameDivs2D[x][y] = gameDivs2D[x][y - 1];
                gameDivs2D[x][y - 1] = divTemp;
                break;
            case RIGHT:
                // 改变位置
                gameDivs2D[x][y].style.left = (y + 1) * GIDE_SIZE + "px";
                // 改变位置数组
                grid[x][y] = grid[x][y + 1];
                grid[x][y + 1] = temp;
                // 改变div数组
                gameDivs2D[x][y] = gameDivs2D[x][y + 1];
                gameDivs2D[x][y + 1] = divTemp;
                break;
        }
    }

    var isClear = function () {
        var x = 1;
        for (var i = 0; i < SIZE; i++) {
            for (var j = 0; j < SIZE; j++) {
                if (!grid[i][j])return false;
                if (grid[i][j] == x) {
                    x++;
                    if (9 == x)return true;
                } else {
                    return false;
                }
            }
        }
    }
})();

(function () {
    var mImgs = document.querySelectorAll("#mpic>img");
    var sImgs = document.querySelectorAll("#iconList img");
    for (var i = 0; i < sImgs.length; i++) {
        (function (n) {
            sImgs[n].onmouseover = function () {
                console.log("onclick--------------" + n);
                for (var j = 0; j < mImgs.length; j++) {
                    if (n == j) {
                        mImgs[j].style.opacity = "1";
                    } else {
                        mImgs[j].style.opacity = "0";
                    }
                }
            };
        })(i);
    }
})();

(function () {
    var pre = document.getElementById("pre");
    var next = document.getElementById("next");

    pre.onmouseover = function () {
        pre.src = "images/diyizhang/pre_hover.png";
    }
    pre.onmouseout = function () {
        pre.src = "images/diyizhang/pre.png";
    }
    next.onmouseover = function () {
        next.src = "images/diyizhang/next_hover.png";
    }
    next.onmouseout = function () {
        next.src = "images/diyizhang/next.png";
    }
})();