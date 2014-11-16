/**
 * Created by Vance Miller, Sarah Rust, Andrew Park, and Kerry Ellwanger on 11/15/2014.
 */

var roomEnum = Object.freeze({
    ENTERTAINMENT: "Entertainment",
    BATHROOM: "Bathroom",
    STUDY: "Study",
    BEDROOM: "Bedroom",
    WORKSHOP: "Workshop",
    ENTRANCE: "Entrance"
});

function GameSquare(x, y, square_dim, game_board) {
    this.x = x;
    this.y = y;
    this.square_dim = square_dim;
    this.game_board = game_board;
    this.box = new createjs.Shape();
}

GameSquare.prototype = {
    x: 0,
    y: 0,
    square_dim: 0,
    game_board: undefined,
    items: [],
    box: undefined,
    paint: function () {
        this.box.graphics.beginFill("black").drawRect(0, 0, this.square_dim, this.square_dim).beginFill("white").drawRect(2, 2, this.square_dim - 4, this.square_dim - 4);
        this.box.x = this.x * this.square_dim;
        this.box.y = this.y * this.square_dim;

        this.game_board.game_stage.addChild(this.box);
        this.game_board.game_stage.update();
    },
    generateRoom: function (x, y, type) {
        switch (type) {
            case roomEnum.BATHROOM:

                break;
            case roomEnum.BEDROOM:

                break;
            case roomEnum.ENTERTAINMENT:

                break;
            case roomEnum.ENTRANCE:

                break;
            case roomEnum.STUDY:

                break;
            case roomEnum.WORKSHOP:

                break;
            default:

                break;
        }
    },
    addEventListener: function (event, fn) {
        this.box.addEventListener(event, fn);
    }
}