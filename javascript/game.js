/**
 * Created by Vance Miller on 11/15/2014.
 */

var stage;

function init() {
    stage = new createjs.Stage("gameCanvas");
    circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    circle.x = circle.y = 50;
    stage.addChild(circle);
    stage.update();
}

document.ready(function () {
    init();
});