/**
 * Created by Vance Miller on 11/15/2014.
 */

var stage;
var roomEnum = Object.freeze({
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
    });
}

function paintBox(x, y, width, height, stage) {
    var box = new createjs.Shape();
    box.graphics.beginFill("black").drawRect(0, 0, width, height).beginFill("white").drawRect(2, 2, width - 4, height - 4);
    box.x = x;
    box.y = y;
    stage.addChild(box);
    stage.update();
}

$('document').ready(function () {
    init();
});