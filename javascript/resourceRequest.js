/**
 * Created by Vance Miller on 11/15/2014.
 */
var REQUEST_BOX_HEIGHT_FRACTION = 1 / 5;
ResourceRequest.resourceEnum = Object.freeze({
    ELECTRICITY: "Electricity",
    WATER: "Water",
    OIL: "Oil"
});

function ResourceRequest(type, duration, game_square) {
    this.type = type;
    this.duration = duration;
    this.percent_remaining = 1;
    this.game_square = game_square;
    this.drawing = new createjs.Shape();
    this.paint(1);
    createjs.Ticker.addEventListener("tick", function (event) {
        // (elapsedTimeInMS / 1000msPerSecond * number of pixels / numbers second):
        var dy = event.delta / 1000 * REQUEST_BOX_HEIGHT_FRACTION * this.game_square.square_dim / this.duration;
        this.paint(this.percent_remaining -= this.game_square.square_dim / this.duration);
        game_square.game_board.game_stage.update();
    });
}

ResourceRequest.prototype = {
    type: null,
    duration: 2,
    percent_remaining: 1,
    drawing: undefined,
    game_square: undefined,
    paint: function (percentRemaining) {
        this.drawing.graphics.beginFill("green").drawRect(0 + (1 - percentRemaining) * REQUEST_BOX_HEIGHT_FRACTION, 0, this.game_square.square_dim, this.game_square.square_dim / 5);
        this.drawing.x = this.game_square.x * this.game_square.square_dim;
        this.drawing.y = this.game_square.y * this.game_square.square_dim;

        this.game_square.game_board.game_stage.addChild(this.drawing);
        this.game_square.game_board.game_stage.update();
    }
}