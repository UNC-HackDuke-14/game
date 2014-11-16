/**
 * Created by Vance Miller on 11/15/2014.
 */

var stage;


function init() {
    stage = new createjs.Stage("gameCanvas");
    var gameState = new GameState(100, 100, 100, 100);
    var game = new GameBoard(3, 3, stage, gameState);
    game.draw_boxes();
    game.addEventListener("click", function (e) {
        var coords = game.coordinates_to_box(e.stageX, e.stageY);
        alert(coords[0] + "," + coords[1] + "->" + game.box_corners(coords[0], coords[1]));
    });

}

$('document').ready(function () {
    init();
});