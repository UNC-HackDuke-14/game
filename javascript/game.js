/**
 * Created by Vance Miller, Sarah Rust, Andrew Park, and Kerry Ellwanger on 11/15/2014.
 */
var game_board;
var start_time;

function init() {
    var game_stage = new createjs.Stage("gameCanvas");
    var status_stage = new createjs.Stage("statusCanvas");
    var game_state = new GameState(100, 100, 100, 100);
    var status_bars = new StatusBars(status_stage, game_state);
    start_time = new Date().getTime();
    game_board = new GameBoard(3, 3, game_stage, game_state);
    game_board.addEventListener("click", function (e) {
        var coordinates = game_board.coordinates_to_box(e.stageX, e.stageY);
        console.log("Clicked on square " + coordinates[0] + "," + coordinates[1] + "->" + game_board.box_corners(coordinates[0], coordinates[1]));
    });

    createjs.Ticker.on("tick", status_bars.update, status_bars);
    loop();
}

function loop() {

    createjs.Ticker.on("tick",function() {
        if (game_board.game_state.level <= 0) {
            var finish = new Date().getTime();
            console.log("Game over. Score: " + finish - start_time);
            createjs.Ticker.pause();
        } else {
            var rv = Math.floor(Math.random() * 100);
            if (rv < 2) {
                var x = Math.floor(Math.random() * game_board.n);
                var y = Math.floor(Math.random() * game_board.m);
                game_board.game_squares[x][y].random_event();
            }
        }
    }, this);
    // select empty gameSquare
    // call gameSquare.doEvent()
    // delay for some time, decreasing as game progresses
    // while "green bar" != zero - from gameState object
}

$('document').ready(function () {
    init();
});