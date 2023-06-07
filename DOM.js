// 原生DOM版本的五子棋
(function (window) {

    function startDomGame(wrap) {
        // 绘制棋盘
        function drawBoard() {
            for (let row = 0; row < ROWS; row++) {
                for (let col = 0; col < ROWS; col++) {
                    const cell = document.createElement("div");
                    cell.style.width = `${SIZE}px`;
                    cell.style.height = `${SIZE}px`;
                    cell.style.border = "1px solid #000";
                    cell.style.boxSizing = "border-box";
                    cell.style.position = "absolute";
                    cell.style.top = `${row * SIZE}px`;
                    cell.style.left = `${col * SIZE}px`;
                    container.appendChild(cell);
                }
            }
        }

        // 绘制棋子
        function drawPiece(row, col, player) {
            const piece = document.createElement("div");
            piece.style.width = `${SIZE - 5}px`;
            piece.style.height = `${SIZE - 5}px`;
            piece.style.borderRadius = "50%";
            piece.style.backgroundColor = player;
            piece.style.position = "absolute";
            piece.style.top = `${row * SIZE + 2.5}px`;
            piece.style.left = `${col * SIZE + 2.5}px`;
            piece.style.boxSizing = "border-box";
            container.appendChild(piece);
        }

        container.addEventListener("click", placePiece);

        // 暴露出
        window.drawBoard = drawBoard
        window.drawPiece = drawPiece

        initBoard();
        drawBoard();
    }
    window.startDomGame = startDomGame

})(window)