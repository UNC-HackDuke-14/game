/**
 * Created by Vance Miller on 11/15/2014.
 */

var stage;

function init() {
    stage = new createjs.Stage("gameCanvas");
    paintBox(0, 0, stage);
    paintBox(100,0,stage);
    paintBox(0,100,stage);
    paintBox(100,100,stage);
}

function paintBox(x, y, stage) {
    box = new createjs.Shape();
    box.graphics.beginFill("black").drawRect(x, y, x + 100, y + 100).beginFill("white").drawRect(x + 2, y + 2, x + 96, y + 96);
    stage.addChild(box);
    stage.update();
}

$('document').ready(function () {
    init();
});