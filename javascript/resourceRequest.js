/**
 * Created by Vance Miller on 11/15/2014.
 */
var REQUEST_BOX_HEIGHT_FRACTION = 1 / 6;
ResourceRequest.resourceEnum = Object.freeze({
    ELECTRICITY: "Electricity",
    WATER: "Water",
    OIL: "Oil"
});

function ResourceRequest(item, duration) {
    this.item = item;
    this.duration = duration * 1000;
    this.start_time = new Date().getTime();
    this.text = new createjs.Text(item.item_type.name + " request");
    this.progress_bar = new createjs.Shape();
    this.paint(true, 0);
    createjs.Ticker.on("tick", this.tick, this);
    this.progress_bar.on("click", this.item.toggleState, this.item);
}

ResourceRequest.prototype = {
    item: undefined,
    duration: 2000,
    start_time: 0,
    text: undefined,
    progress_bar: undefined,
    paint: function (add, percentage) {
        if (add) {
            this.item.game_square.game_board.game_stage.removeChild(this.progress_bar);

            this.progress_bar.graphics.beginFill("green").drawRect(0, 0, this.item.game_square.square_dim - 10, this.item.game_square.square_dim * REQUEST_BOX_HEIGHT_FRACTION - 4).beginFill("white").drawRect(1, 1, (percentage) * this.item.game_square.square_dim - 12, this.item.game_square.square_dim * REQUEST_BOX_HEIGHT_FRACTION - 6);
            this.progress_bar.x = (this.item.game_square.x) * this.item.game_square.square_dim + 6;
            this.progress_bar.y = this.item.game_square.y * this.item.game_square.square_dim + 2;
            this.item.game_square.game_board.game_stage.addChild(this.progress_bar);

            this.text.x = this.item.game_square.x * this.item.game_square.square_dim + 6;
            this.text.y = this.item.game_square.y * this.item.game_square.square_dim + 2;
            this.item.game_square.game_board.game_stage.addChild(this.text);
        } else {
            this.item.game_square.game_board.game_stage.removeChild(this.text);
            this.item.game_square.game_board.game_stage.removeChild(this.progress_bar);
        }
        this.item.game_square.game_board.game_stage.update();
    },
    tick: function (e) {
        if (!this.item.isOn) {
            var t = new Date().getTime() - this.start_time;
            var c = this.duration;
            if (c < t) {
                this.item.game_square.game_board.game_state.level -= 5;
                this.paint(false, 0);
                e.remove();
            } else {
                this.paint(true, t / c);
            }
        } else {
            this.item.game_square.game_board.game_state.level++;
            this.paint(false, 0);
            e.remove();
        }
    }
}