/**
 * Created by Vance Miller on 11/15/2014.
 */
var REQUEST_BOX_HEIGHT_FRACTION = 1 / 6;
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
    this.text = new createjs.Text(type + " request");
    this.progress_bar = new createjs.Shape();
    this.paint(true, 0);
    createjs.Ticker.on("tick", this.tick, this);
    this.addEventListener("click", function () {
        switch (this.type) {
            case ResourceRequest.resourceEnum.ELECTRICITY:
                break;
            case ResourceRequest.resourceEnum.WATER:
                break;
            case ResourceRequest.resourceEnum.OIL:
                break;
            default:
                break;
        }
    });
}

ResourceRequest.prototype = {
    type: undefined,
    duration: 2000,
    start_time: 0,
    text: undefined,
    progress_bar: undefined,
    game_square: undefined,
    paint: function (add, percentage) {
        if (add) {
            this.game_square.game_board.game_stage.removeChild(this.progress_bar);

            this.progress_bar.graphics.beginFill("green").drawRect(0, 0, this.game_square.square_dim - 10, this.game_square.square_dim * REQUEST_BOX_HEIGHT_FRACTION - 4).beginFill("white").drawRect(0, 0, (percentage) * this.game_square.square_dim - 4, this.game_square.square_dim * REQUEST_BOX_HEIGHT_FRACTION - 4);
            this.progress_bar.x = (this.game_square.x) * this.game_square.square_dim + 6;
            this.progress_bar.y = this.game_square.y * this.game_square.square_dim + 2;
            this.game_square.game_board.game_stage.addChild(this.progress_bar);

            this.text.x = this.game_square.x * this.game_square.square_dim;
            this.text.y = this.game_square.y * this.game_square.square_dim;
            this.game_square.game_board.game_stage.addChild(this.text);
        } else {
            this.game_square.game_board.game_stage.removeChild(this.text);
            this.game_square.game_board.game_stage.removeChild(this.progress_bar);
        }
        this.game_square.game_board.game_stage.update();
    },
    tick: function (e) {
        var t = new Date().getTime() - this.start_time;
        var c = this.duration;
        if (c < t) {
            this.paint(false, 0);
            e.remove();
        } else {
            this.paint(true, t / c);
        }
    },
    addEventListener: function (event, fn) {
        this.text.addEventListener(event, fn);
    }

}