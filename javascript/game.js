/**
 * Created by Vance Miller, Sarah Rust, Andrew Park, and Kerry Ellwanger on 11/15/2014.
 */
var stage;
var gameState;
var gameBoard;

function init() {
    stage = new createjs.Stage("gameCanvas");
    initSprite(1, 1, "./images/explosion-sprite-sheet-i0.png", stage);
    gameState = new GameState(100, 100, 100, 100);
    gameBoard = new GameBoard(3, 3, stage, gameState);
    gameBoard.addEventListener("click", function (e) {
        var coordinates = gameBoard.coordinates_to_box(e.stageX, e.stageY);
        alert(coordinates[0] + "," + coordinates[1] + "->" + gameBoard.box_corners(coordinates[0], coordinates[1]));
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