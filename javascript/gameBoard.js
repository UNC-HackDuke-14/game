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
    this.box_dim = Math.min(stage.canvas.width / n, stage.canvas.height / m);
    this.stage = stage;
    this.state = state;
}

GameBoard.prototype = {
    n: 0,
    m: 0,
    box_dim: 0,
    stage: null,
    state: null,
    coordinates_to_box: function (x, y) {
        return [Math.floor(x / this.box_dim), Math.floor(y / this.box_dim)];
    },
    box_corners: function (x, y) {
        return [x * this.box_dim, y * this.box_dim, (x + 1) * this.box_dim - 1, (y + 1 ) * this.box_dim - 1];
    },
    draw_boxes: function () {
        for (var i = 0; i < this.n; i++) {
            for (var j = 0; j < this.m; j++) {
                var coords = this.box_corners(i, j);
                paintBox(coords[0], coords[1], this.box_dim, this.box_dim, stage);
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

function paintBox(x, y, width, height, stage) {
    var box = new createjs.Shape();
    box.graphics.beginFill("black").drawRect(0, 0, width, height).beginFill("white").drawRect(2, 2, width - 4, height - 4);
    box.x = x;
    box.y = y;
    stage.addChild(box);
    stage.update();
}