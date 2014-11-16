/**
 * Created by Vance Miller, Sarah Rust, Andrew Park, and Kerry Ellwanger on 11/15/2014.
 */
var game_board;

function init() {
    var game_stage = new createjs.Stage("gameCanvas");
    
    /*(spriteWidth, spriteHeight, numSprites, imagepath, stage)*/
    initSprite(512, 256, 8,"images/runningcat.png", game_stage);
    
    var game_state = new GameState(100, 100, 100, 100);
    game_board = new GameBoard(3, 3, game_stage, game_state);
    game_board.addEventListener("click", function (e) {
        var coordinates = game_board.coordinates_to_box(e.stageX, e.stageY);
        alert(coordinates[0] + "," + coordinates[1] + "->" + game_board.box_corners(coordinates[0], coordinates[1]));
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