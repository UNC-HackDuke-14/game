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
    this.duration = duration * 1000;
    this.start_time = new Date().getTime();
    this.game_square = game_square;
    this.drawing = new createjs.Text(type + " request");
    this.drawing.alpha = 1;
    this.paint(true);
    createjs.Ticker.on("tick", this.tick, this);

}

ResourceRequest.prototype = {
    type: undefined,
    duration: 2000,
    start_time: 0,
    drawing: undefined,
    game_square: undefined,
    paint: function (add) {
        if (add) {
            this.drawing.x = this.game_square.x * this.game_square.square_dim;
            this.drawing.y = this.game_square.y * this.game_square.square_dim;
            this.game_square.game_board.game_stage.addChild(this.drawing);
            console.log("draw");
        } else {
            this.game_square.game_board.game_stage.removeChild(this.drawing);
            console.log("un-draw");
        }
        this.game_square.game_board.game_stage.update();
    },
    tick: function(e) {
        if (this.start_time + this.duration < new Date().getTime()) {
            this.paint(false);
            e.remove();
        }
    },
    addEventListener: function(event, fn) {
        this.drawing.addEventListener(event, fn);
    }

}