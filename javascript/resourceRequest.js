/**
 * Created by Vance Miller on 11/15/2014.
 */

var resourceEnum = Object.freeze({
    ELECTRICITY: "Electricity",
    WATER: "Water",
    OIL: "Oil"
});

ResourceRequest = function (x, y, type, game_board) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.game_board = game_board;
}

ResourceRequest.prototype = {
    type: null,
    time_remaining: 2,
    x: 0,
    y: 0,
    game_state: null,
    paint: function () {
        this.game_board
    }
}