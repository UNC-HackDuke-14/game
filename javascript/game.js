/**
 * Created by Vance Miller on 11/15/2014.
 */

var stage;
var roomType = Object.freeze({
    ENTERTAINMENT: "Entertainment",
    BATHROOM: "Bathroom",
    STUDY: "Study",
    BEDROOM: "Bedroom",
    WORKSHOP: "Workshop",
    ENTRANCE: "Entrance"
});

function init() {
    stage = new createjs.Stage("gameCanvas");
    var game = new GameBoard(3, 3, stage);
    game.draw_boxes();
    game.addEventListener("click", function (e) {
        var coords = game.coordinates_to_box(e.stageX, e.stageY);
        alert(coords[0] + "," + coords[1] + "->" + game.box_corners(coords[0], coords[1]));
    })

}

function paintBox(x, y, width, height, stage) {
    box = new createjs.Shape();
    box.graphics.beginFill("black").drawRect(0, 0, width, height).beginFill("white").drawRect(2, 2, width - 4, height - 4);
    box.x = x;
    box.y = y;
    stage.addChild(box);
    stage.update();
}

function GameBoard(n, m, stage) {
    this.n = n;
    this.m = m;
    this.box_dim = Math.min(stage.canvas.width / n, stage.canvas.height / m);
    this.stage = stage;
}

GameBoard.prototype = {
    n: 0,
    m: 0,
    box_dim: 0,
    stage: null,
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
    }
};



$('document').ready(function () {
    init();
});