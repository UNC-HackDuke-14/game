/**
 * Created by Vance Miller, Sarah Rust, Andrew Park, and Kerry Ellwanger on 11/15/2014.
 */
function GameSquare(x, y, box_dim, game_board, game_state) {
    this.x = x;
    this.y = y;
    this.box_dim = box_dim;
    this.game_board = game_board;
    this.game_state = game_state;
    this.box = new createjs.Shape();
}

GameSquare.prototype = {
    x: 0,
    y: 0,
    box_dim: 0,
    game_board: null,
    game_state: null,
    items: [],
    box: null,
    paint: function () {
        this.box.graphics.beginFill("black").drawRect(0, 0, this.box_dim, this.box_dim).beginFill("white").drawRect(2, 2, this.box_dim - 4, this.box_dim - 4);
        this.box.x = this.x * this.box_dim;
        this.box.y = this.y * this.box_dim;

        this.game_board.stage.addChild(this.box);
        this.game_board.stage.update();
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