/**
 * Created by Vance Miller on 11/15/2014.
 */

function GameSquare(box_dim, game_state) {
    this.box_dim = box_dim;
    this.game_state = game_state;
}

GameSquare.prototype = {
    box_dim: 0,
    game_state: null,
    items: [],
    paint: function () {
        var box = new createjs.Shape();
        box.graphics.beginFill("black").drawRect(0, 0, box_dim, box_dim).beginFill("white").drawRect(2, 2, box_dim - 4, box_dim - 4);
        box.x = x;
        box.y = y;
        box.addEventListener("click", function () {
            alert("clicked " + this);
        });
        this.game_stage.addChild(box);
        this.game_stage.update();
    }
}