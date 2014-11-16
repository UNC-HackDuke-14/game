/**
 * Created by Vance Miller on 11/15/2014.
 */

var stage;
var gameState;
var gameBoard;

function init() {
    stage = new createjs.Stage("gameCanvas");
    gameState = new GameState(100, 100, 100, 100);
    gameBoard = new GameBoard(3, 3, stage, gameState);
    gameBoard.draw_boxes();
    gameBoard.addEventListener("click", function (e) {
        var coords = gameBoard.coordinates_to_box(e.stageX, e.stageY);
        alert(coords[0] + "," + coords[1] + "->" + gameBoard.box_corners(coords[0], coords[1]));
    });
}

function loop() {
    // select empty gameSquare
    // call gameSquare.doEvent()
    // delay for some time, decreasing as game progresses
    // while "green bar" != zero - from gameState object
}

$('document').ready(function () {
    init();
});