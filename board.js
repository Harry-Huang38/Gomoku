if (canvas != null) {
    window.onload = function () {
        placeChess();
        drawBoard();
    }
    
    //check place chess
    placeChess(75,75,Gomoku[1].color)
    placeChess(125,125,Gomoku[0].color)

    function drawBoard() {
        for (let i = 0; i <= lineNum; i++) {
            //Vertical line
            context.beginPath();
            context.moveTo(radius + boxPx * i, radius);
            context.lineTo(radius + boxPx * i, 775);
            context.stroke();
            //Horizontal line
            context.beginPath();
            context.moveTo(radius, radius + boxPx * i);
            context.lineTo(775, radius + boxPx * i);
            context.stroke();
        };
    }

    function placeChess(x, y, color) {
        context.save()
        context.beginPath();
        context.fillStyle = color;
        context.arc(x, y, radius, 0, 2 * Math.PI)
        context.fill()
        context.restore()
    }
}
else{
    console.log("error");
}


