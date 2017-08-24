function drawRowStart() {
    var markup = '<div class="row">';
    return markup;
}

function drawRowEnd() {
    var markup = '</div>';
    return markup;
}

function drawCell(id, x, y, cell_width, board) {
    var markup = '<div id="' + id + '" data-x="' + x + '" data-y="' + y + '" data-bomb="0" class="cell" style="width:' + cell_width + '%;">' + '-' + '</div>';
    return markup;
}

function drawBoard(width, height, board) {
    var cell_width = ((90 - (width * 2)) / width) - 1;
    for (var y = 0; y < height; y++) {
        $("#board").append(drawRowStart());
        for (var x = 0; x < width; x++) {
            var id = "cell-" + x.toString() + y.toString();
            $("#board").append(drawCell(id, x, y, cell_width, board));
        }
        $("#board").append(drawRowEnd());
    }
}

function makeArray(w, h, bomb_chance = 0, bomb_max = false) {
    var bomb_count = 0;
    var val = 0;
    var arr = [];
    for (i = 0; i < h; i++) {
        arr[i] = [];
        for (j = 0; j < w; j++) {
            var is_bomb = Math.random();
            if (bomb_chance > 0) {
                if (bomb_count < bomb_max) {
                    if (is_bomb <= bomb_chance) {
                        val = '*';
                        bomb_count++;
                    } else {
                        val = '/';
                    }
                }
            } else {
                val = 0;
            }
            arr[i][j] = val;
        }
    }
    return { 'board': arr, 'bombs': bomb_count };
}

function calculateCellProximity(x, y, board, width, height) {
    var proximity_counter = 0;
    y = parseInt(y);
    x = parseInt(x);
    if (x > 0) {
        if (y > 0) {
            if (board[x - 1][y - 1] == '*') proximity_counter++;
        }
        if (board[x - 1][y] == '*') proximity_counter++;
        if (y < height) {
            if (board[x - 1][y + 1] == '*') proximity_counter++;
        }
    }
    if (y > 0) {
        if (board[x][y - 1] == '*') proximity_counter++;
    }
    if (y < height) {
        if (board[x][y + 1] == '*') proximity_counter++;
    }
    if (x < width - 1) {
        if (y > 0) {
            if (board[x + 1][y - 1] == '*') proximity_counter++;
        }
        if (board[x + 1][y] == '*') proximity_counter++;
        if (y < height) {
            if (board[x + 1][y + 1] == '*') proximity_counter++;
        }
    }
    if (board[x][y] == '*') {
        proximity_counter = 9;
    }
    return proximity_counter;
}

function calculateProximities(width, height, board) {
    var arr_init = makeArray(width, height);
    var arr = arr_init.board;
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            arr[x][y] = calculateCellProximity(x, y, board, width, height);
        }
    }
    return arr;
}

function findFreeCellsLeft(x, y, board, proximities) {
    if (x > 0) {
        for (var cell_x = x; cell_x >= 0; cell_x--) {
            var cell = proximities[cell_x][y];
            if (cell == 0) {
                $("#cell-" + cell_x + y).html(cell).addClass('cleared');
            } else {
                if (proximities[cell_x][y] != 9) {
                    $("#cell-" + cell_x + y).html(cell).addClass('cleared');
                }

                break;
            }
        }
    }
}

function findFreeCellsRight(x, y, board, proximities, width) {
    if (x < width) {
        for (var cell_x = x; cell_x < width; cell_x++) {
            var cell = proximities[cell_x][y];
            if (cell == 0) {
                $("#cell-" + cell_x + y).html(cell).addClass('cleared');
            } else {
                if (proximities[cell_x][y] != 9) {
                    $("#cell-" + cell_x + y).html(cell).addClass('cleared');
                }

                break;
            }
        }
    }
}

function findFreeAdjacentCells(x, y, board, proximities, width, height) {
    for (var cell_y = y; cell_y >= 0; cell_y--) {
        var cell = proximities[x][cell_y];
        if (cell == 0) {
            findFreeCellsLeft(x, cell_y, board, proximities);
            findFreeCellsRight(x, cell_y, board, proximities, width);
        } else {
            if (cell != 9) {
                $("#cell-" + x + cell_y).html(cell).addClass('cleared');
            }
            break;
        }
    }

    for (var cell_y = y; cell_y < height; cell_y++) {
        var cell = proximities[x][cell_y];
        if (cell == 0) {
            findFreeCellsLeft(x, cell_y, board, proximities);
            findFreeCellsRight(x, cell_y, board, proximities);
        } else {
            if (cell != 9) {
                $("#cell-" + x + cell_y).html(cell).addClass('cleared');
            }
            break;
        }
    }

}

function makeBoard(width, height, bomb_chance, bomb_max) {

    var board_init = makeArray(width, height, bomb_chance, bomb_max);
    // if (board_init.bombs == bomb_max || board_init.bombs <= 5) location.reload(true);
    var board = board_init.board;
    drawBoard(width, height, board);
    var proximities = calculateProximities(width, height, board);

    var total_bombs = board_init.bombs;
    var bombs_defused = 0;
    var bombs_flagged = 0;
    var flags_left = total_bombs;

    $("#total-bombs").html(total_bombs);
    $("#bombs-flagged").html(bombs_flagged);
    $("#flags-left").html(flags_left);


    $(".cell").click(function(e) {
        var x = $(this).attr("data-x");
        var y = $(this).attr("data-y");
        var cell = board[x][y];
        var proximity = parseInt(calculateCellProximity(x, y, board, width, height));
        if (cell == '*') {
            $("#boom").removeClass('hide');
            $(this).addClass('has-bomb');
        }

        var free_adjacent = findFreeAdjacentCells(x, y, board, proximities, width, height);

        if (proximity != 0) {
            $(this).html(proximity);
        }
    });

    $(".cell").bind("contextmenu", function(e) {
        e.preventDefault();
        var x = $(this).attr("data-x");
        var y = $(this).attr("data-y");
        var cell = board[x][y];
        var proximity = parseInt(calculateCellProximity(x, y, board, width, height));
        if (flags_left > 0) {
            flags_left--;
            $("#flags-left").html(flags_left);
            $(this).addClass('flagged');
            $(this).html(cell);
            if (cell == '*') {
                bombs_flagged++;
                $("#bombs-flagged").html(bombs_flagged);
            }
        }
    })

}


makeBoard(10, 10, .1, 10);