/**
 * Created by Vance Miller on 11/15/2014.
 */

var roomEnum = Object.freeze({
    ENTERTAINMENT: "Entertainment",
    BATHROOM: "Bathroom",
    STUDY: "Study",
    BEDROOM: "Bedroom",
    WORKSHOP: "Workshop",
    ENTRANCE: "Entrance"
});

function GameBoard(n, m, stage, state) {
    this.n = n;
    this.m = m;
    this.stage = stage;
    this.state = state;
    this.boxes = createArray(n, m);
}

GameBoard.prototype = {
    n: 0,
    m: 0,
    stage: null,
    state: null,
    boxes: [],
    coordinates_to_box: function (x, y) {
        return [Math.floor(x / this.box_dim), Math.floor(y / this.box_dim)];
    },
    box_corners: function (x, y) {
        return [x * this.box_dim, y * this.box_dim, (x + 1) * this.box_dim - 1, (y + 1 ) * this.box_dim - 1];
    },
    draw_boxes: function () {
        var box_dim = Math.min(stage.canvas.width / n, stage.canvas.height / m);
        for (var i = 0; i < this.n; i++) {
            for (var j = 0; j < this.m; j++) {
                var coords = this.box_corners(i, j);
                squares[i][j] = new GameSquare(i, j, gameState);
            }
        }
    },
    addEventListener: function (event, fn) {
        stage.addEventListener(event, fn);
    },
    generateRoom: function (x, y, type) {
        switch (type) {
            case roomEnum.BATHROOM:

                break;
            case roomEnum.BEDROOM:

                break;
            case roomEnum.ENTERTAINMENT:

                break;
            case roomEnum.ENTRANCE:

                break;
            case roomEnum.STUDY:

                break;
            case roomEnum.WORKSHOP:

                break;
            default:

                break;
        }
    }
};

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
}