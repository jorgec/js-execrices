function makeArray(w, h) {
    var val = 0;
    var arr = [];
    for (i = 0; i < h; i++) {
        arr[i] = [];
        for (j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}

function makeMove(x, y, current_player, board, moves) {
    if (board[x][y] != 0) {
        alert("Illegal move!");
        return false;
    }
    if (moves >= 9) {
        alert("Game is over!");
        return false;
    }

    board[x][y] = current_player;
    return true;

}

function winnerCheck(board, current_player) {

    // horizontal
    for (var x = 0; x < 3; x++) {
        var counter = 0;
        for (var y = 0; y < 3; y++) {
            if (board[x][y] == current_player) counter++;
        }
        if (counter == 3) return true;
    }

    // vertical
    for (var y = 0; y < 3; y++) {
        var counter = 0;
        for (var x = 0; x < 3; x++) {
            if (board[x][y] == current_player) counter++;
        }
        if (counter == 3) return true;
    }

    // diagonal
    if (
        (
            board[0][0] == current_player &&
            board[1][1] == current_player &&
            board[2][2] == current_player
        ) ||
        (
            board[0][2] == current_player &&
            board[1][1] == current_player &&
            board[2][0] == current_player
        )
    ) {
        return true;
    }

    return false;
}

function start() {
    var board = makeArray(3, 3);
    var p1 = 'X';
    var p2 = 'O';
    var moves = 0;
    var current_player = p1;
    var has_winner = false;

    $(".cell").click(function(e) {

        var x = $(this).attr("data-x");
        var y = $(this).attr("data-y");
        var move = makeMove(x, y, current_player, board, moves);
        if (move) {
            $("#cell-" + x + y).html(current_player).addClass(current_player);

            if (moves > 3) {
                has_winner = winnerCheck(board, current_player);
            }

            if (has_winner) {
                alert(current_player + " has won!");
            } else {
                if (current_player == p1) {
                    current_player = p2;
                } else {
                    current_player = p1;
                }
                moves++;
            }

            if (moves == 9 && !has_winner) {
                alert('It\'s atay!');
            }
        }

    });

}

start();