/**
 * Created by Vance Miller on 11/15/2014.
 */
var REQUEST_BOX_HEIGHT_FRACTION = 1 / 5;
ResourceRequest.resourceEnum = Object.freeze({
    ELECTRICITY: "Electricity",
    WATER: "Water",
    OIL: "Oil"
});

function test(){
    //do nothing
}

function ResourceRequest(type, duration, game_square) {
    this.type = type;
    this.duration = duration;
    this.percent_remaining = 1;
    this.game_square = game_square;
    this.drawing = new createjs.Text(type + " request");
    this.paint(true);
    createjs.Ticker.addEventListener("tick", this.tick.bind(this));
    //console.log(this);
}

ResourceRequest.prototype = {
    type: null,
    duration: 2,
    percent_remaining: 1,
    drawing: undefined,
    game_square: undefined,
    paint: function (add) {
        if (add) {
            this.game_square.game_board.game_stage.addChild(this.drawing);
            console.log("draw");
        } else {
            this.game_square.game_board.game_stage.removeChild(this.drawing);
            console.log("un-draw");
        }
        this.game_square.game_board.game_stage.update();
    },
    tick: function(me) {
        /*console.log(this);
        console.log(me);*/
    },
    addEventListener: function(event, fn) {
        this.drawing.addEventListener(event, fn);
    }

}