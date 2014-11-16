/**
 * Created by Vance Miller on 11/15/2014.
 */

var stage;

function init() {
    stage = new createjs.Stage("gameCanvas");
    var game = new GameBoard(5, 9, stage);
    game.draw_boxes();
    makeBoxArray(1, 2, stage);
}

function makeBoxArray(n, m, stage) {
    var mid_w = stage.canvas.width;
    var mid_h = stage.canvas.height;

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
    box_start_coordinates: function (x, y) {
        return [x * this.box_dim, y * this.box_dim];
    },
    draw_boxes: function () {
        for (var i = 0; i < this.n; i++) {
            for (var j = 0; j < this.m; j++) {
                var coords = this.box_start_coordinates(i, j);
                paintBox(coords[0], coords[1], this.box_dim, this.box_dim, stage);
            }
        }
    }
}



$('document').ready(function () {
    init();
});