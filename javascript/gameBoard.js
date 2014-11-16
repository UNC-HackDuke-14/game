/**
 * Created by Vance Miller, Sarah Rust, Andrew Park, and Kerry Ellwanger on 11/15/2014.
 */

var roomEnum = Object.freeze({
    ENTERTAINMENT: "Entertainment",
    BATHROOM: "Bathroom",
    STUDY: "Study",
    BEDROOM: "Bedroom",
    WORKSHOP: "Workshop",
    ENTRANCE: "Entrance"
});

/**
 * GameBoard constructor
 * @param n the width of the board
 * @param m the height of the board
 * @param stage a reference to the canvas
 * @param state a reference to the game state object
 * @constructor
 */
function GameBoard(n, m, stage, state) {
    this.n = n;
    this.m = m;
    this.stage = stage;
    this.state = state;
    this.squares = createArray(n, m);
}

GameBoard.prototype = {
    n: 0,
    m: 0,
    stage: null,
    state: null,
    squares: [],
    coordinates_to_box: function (x, y) {
        return [Math.floor(x / this.box_dim), Math.floor(y / this.box_dim)];
    },
    box_corners: function (x, y) {
        return [x * this.box_dim, y * this.box_dim, (x + 1) * this.box_dim - 1, (y + 1 ) * this.box_dim - 1];
    },
    draw_boxes: function () {
        var box_dim = Math.min(stage.canvas.width / this.n, stage.canvas.height / this.m);
        for (var i = 0; i < this.n; i++) {
            for (var j = 0; j < this.m; j++) {
                var coords = this.box_corners(i, j);
                this.squares[i][j] = new GameSquare(i, j, box_dim, stage, gameState);
                this.squares[i][j].paint();
            }
        }
    },
    addEventListener: function (event, fn) {
        stage.addEventListener(event, fn);
    }
};

/**
 * Helper function to create a n-dimensional array
 * @param length
 * @returns {Array}
 */
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }
    return arr;
}