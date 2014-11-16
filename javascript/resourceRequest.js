/**
 * Created by Vance Miller on 11/15/2014.
 */
var REQUEST_BOX_HEIGHT_FRACTION = 1 / 5;
var resourceEnum = Object.freeze({
    ELECTRICITY: "Electricity",
    WATER: "Water",
    OIL: "Oil"
});

ResourceRequest = function (x, y, type, duration, game_square) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.duration = duration;
    this.time_remaining = duration;
    this.game_square = game_square;
    this.drawing = new createjs.Shape();
    this.paint(1);
    createjs.Ticker(function (event) {
        // (elapsedTimeInMS / 1000msPerSecond * number of pixels / numbers second):
        var dy = event.delta / 1000 * REQUEST_BOX_HEIGHT_FRACTION * this.game_square.square_dim / this.duration;
        this.paint(this.percent_remaining -= this.game_square.square_dim / this.duration);
        game_board.game_stage.update();
    });
}

ResourceRequest.prototype = {
    x: 0,
    y: 0,
    type: null,
    duration: 2,
    time_remaining: 2,
    drawing: undefined,
    game_state: undefined,
    paint: function (percentRemaining) {
        this.game_square.box_corners(this.x, this.y);
        this.drawing.graphics.beginFill("green").drawRect(0 + (1 - percentRemaining) * REQUEST_BOX_HEIGHT_FRACTION, 0, this.box_dim, this.box_dim / 5);
        this.drawing.x = this.x * this.box_dim;
        this.drawing.y = this.y * this.box_dim;

        this.game_square.game_stage.addChild(this.box);
        this.game_square.game_stage.update();
    }
}