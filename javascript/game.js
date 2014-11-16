/**
 * Created by Vance Miller, Sarah Rust, Andrew Park, and Kerry Ellwanger on 11/15/2014.
 */
var game_board;

function init() {
    var Q = Quintus({development: true})
        .include("Sprites, Scenes, Input, 2D, Touch, UI")
        .setup("gameCanvas")
        .controls()
        .touch();
    Q.scene("level", function(stage) {
        var g = new GameBoard(3, 3, )
    });
    Q.state.reset({
        electricity: 100,
        water: 100,
        oil: 100,
        level: 100
    });
    game_board = new GameBoard(3, 3, game_stage, game_state);
    game_board.addEventListener("click", function (e) {
        var coordinates = game_board.coordinates_to_box(e.stageX, e.stageY);
        alert(coordinates[0] + "," + coordinates[1] + "->" + game_board.box_corners(coordinates[0], coordinates[1]));
    });

    Q.load("lamp.png", function() {
        var lamp = new Q.Lamp();
        Q.gameLoop(function(dt) {

        });
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