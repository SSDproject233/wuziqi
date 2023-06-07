(function (window) {

    function startCanvasGame(wrap) {

        // 获得画布上下文（相当于画笔）
        const context = canvas.getContext("2d");

        // 绘制棋盘
        function drawBoard() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < ROWS; i++) {
                context.beginPath();
                context.moveTo(PADDING, (i + 1) * SIZE - PADDING);
                context.lineTo(canvas.width - PADDING, (i + 1) * SIZE - PADDING);
                context.stroke();

                context.beginPath();
                context.moveTo((i + 1) * SIZE - PADDING, PADDING);
                context.lineTo((i + 1) * SIZE - PADDING, canvas.height - PADDING);
                context.stroke();
            }
        }

        // 绘制棋子
        function drawPiece(row, col, player) {
            context.beginPath();
            context.arc((col + 1) * SIZE - PADDING, (row + 1) * SIZE - PADDING, SIZE / 2, 0, 2 * Math.PI);
            if (player === "black") {
                context.fillStyle = "black";
            } else if (player === "white") {
                context.fillStyle = "white";
            }

            context.fill();
        }

        canvas.addEventListener("click", placePiece);
        window.drawBoard = drawBoard
        window.drawPiece = drawPiece
        initBoard();
        drawBoard();
    }

    window.startCanvasGame = startCanvasGame

})(window)