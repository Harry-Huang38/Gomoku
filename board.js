if (canvas != null) {
    window.onload = function () {
        context.drawImage(img, 0, 0, 750, 750);
        drawBoard();
    }

    function drawBoard() {
        for (let i = 0; i < lineNum; i++) {
            //Vertical line
            context.beginPath();
            context.moveTo(radius + boxPx * i, radius);
            context.lineTo(radius + boxPx * i, 725);
            context.stroke();
            //Horizontal line
            context.beginPath();
            context.moveTo(radius, radius + boxPx * i);
            context.lineTo(725, radius + boxPx * i);
            context.stroke();
        };
    }

// black chess
    function drawB(x, y) {
        context.drawImage(img_b, x * boxPx, y * boxPx);
        // black
        array[x][y] = 1;
    }

//  white chess
    function drawW(x, y) {
        context.drawImage(img_w, x * boxPx, y * boxPx);
        // white
        array[x][y] = 2;
    }

// place the chess 
    function placeChess(x, y) {
        if (isBlack) {
            if (!chess_rec.includes(x + ':' + y)) {
                drawB(x, y);
                h2.innerHTML="White turn";
                if (isWin(x, y)) {
                    h2.innerHTML="Black Win !!";
                    isOver = true;
                    return;
                }
                isBlack = false;
            }

        } else {
            if (!chess_rec.includes(x + ':' + y)) {
                drawW(x, y);
                h2.innerHTML="Black turn";
                if (isWin(x, y)) {
                    h2.innerHTML="White Win !!";
                    isOver = true;
                    return;
                }
                isBlack = true;
            }

        }
    }
//place the chess on the correct position -------------------------------------------
    function play(event) {
        if(isOver){
            alert("Winner Have Emerged, Please Restart Game!");
            return;
        }
        var index_X = event.offsetX,
            index_Y = event.offsetY;
        //get click event positon screen
        var x = parseInt(index_X / boxPx),
            y = parseInt(index_Y / boxPx);
        placeChess(x, y);

        if (!chess_rec.includes(x + ':' + y)) {
            //record the positon
            chess_rec.push(x + ':' + y)
        } else {
            alert("Here is Already Have Chess");
        }
        // console.log(x + ':' + y)
    }

    function isWin(x, y) {
        //vertically
        if (up_down(x, y) == 5) {
            return true;
        }
        //horizontally
        if (left_right(x, y) == 5) {
            return true;
        }
        //diagonally Upper left lower right
        if (up_left_low_right(x, y) == 5) {
            return true;
        }
        //diagonally Bottom left top right
        if(up_right_left_down(x,y) == 5){
            return true;
        }
    }

//check how many chess on the different prositon

//check chess number vertically---------------------------------
    function up_down(x, y) { //black is 1----white is 2
        var currentChess = array[x][y];
        var sumOfChess = 1; // how many chess we have
        //upsite y--
        for (let i = y - 1; i >= 0; i--) {
            if (array[x][i] == currentChess) {
                sumOfChess = sumOfChess + 1;
            } else {
                break;
            }
        }
        //downsite y++
        for (let i = y + 1; i <= 14; i++) {
            if (array[x][i] == currentChess) {
                sumOfChess = sumOfChess + 1;
            } else {
                break;
            }
        }
        return sumOfChess;
    }

//check chess number horizontally-------------------------------
    function left_right(x, y) { //black is 1----white is 2
        var currentChess = array[x][y];
        var sumOfChess = 1; // how many chess we have
        //left x--
        for (let i = x - 1; i >= 0; i--) {
            if (array[i][y] == currentChess) {
                sumOfChess = sumOfChess + 1;
            } else {
                break;
            }
        }
        //right x++
        for (let i = x + 1; i <= 14; i++) {
            if (array[i][y] == currentChess) {
                sumOfChess = sumOfChess + 1;
            } else {
                break;
            }
        }
        return sumOfChess;
    }

//check chess number diagonally Upper left lower right-------------
    function up_left_low_right(x, y) {
        var currentChess = array[x][y];
        var sumOfChess = 1;
        //Up_left x-- y--
        for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
            if (array[i][j] == currentChess) {
                sumOfChess = sumOfChess + 1
            } else {
                break;
            }
        }
        //low_right x++ y++
        for (let i = x + 1, j = y + 1; i <= 14 && j <= 14; i++, j++) {
            if (array[i][j] == currentChess) {
                sumOfChess = sumOfChess + 1
            } else {
                break;
            }
        }
        return sumOfChess;
    }

//check chess number diagonally Upper left lower right -------------
    function up_right_left_down(x,y){
        var currentChess = array[x][y];
        var sumOfChess = 1;
        //up_right x++ y--
        for(let i = x+1,j=y-1;i<=14&&j>=0; i++,j--){
            if (array[i][j] == currentChess) {
                sumOfChess = sumOfChess + 1
            } else {
                break;
            }
        }
        //left_down x-- y++
        for (let i = x - 1, j = y + 1; i >= 0 && j <= 14; i--, j++) {
            if (array[i][j] == currentChess) {
                sumOfChess = sumOfChess + 1
            } else {
                break;
            }
        }
        return sumOfChess;
    }
        var array = new Array();
        for (let i = 0; i < 15; i++) {
            array[i] = new Array();
            for (let j = 0; j < 15; j++) {
                array[i][j] = 0;
            }
        }

        


}else {
    console.log("error");
}