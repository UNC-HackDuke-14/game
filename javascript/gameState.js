/**
 * Created by Vance Miller, Sarah Rust, Andrew Park, and Kerry Ellwanger on 11/15/2014.
 */
function GameState(electricity, water, oil, level) {
    this.electricity = electricity;
    this.water = water;
    this.oil = oil;
    this.level = level;
    this.maxVal = level;
}

GameState.prototype = {
    electricity: 100,
    water: 100,
    oil: 100,
    level: 100,
    maxVal: 100
}

function StatusBars(stage, state) {
    this.stage = stage;
    this.state = state;
    this.waterBar = new createjs.Shape();
    this.oilBar = new createjs.Shape();
    this.electricBar = new createjs.Shape();
    this.greenBar = new createjs.Shape();
    this.paint();
}

StatusBars.prototype = {
    paint: function () {
        this.waterBar.graphics.beginFill("blue").drawRect(0, 250 - 250 * this.state.water / this.state.maxVal, 40, 250 * this.state.water / this.state.maxVal);
        this.oilBar.graphics.beginFill("orange").drawRect(0, 250 - 250 * this.state.oil / this.state.maxVal, 40, 250 * this.state.oil / this.state.maxVal);
        this.electricBar.graphics.beginFill("purple").drawRect(0, 250 - 250 * this.state.electricity / this.state.maxVal, 40, 250 * this.state.electricity / this.state.maxVal);
        this.greenBar.graphics.beginFill("green").drawRect(0, 250 - 250 * this.state.level / this.state.maxVal, 40, 250 * this.state.level / this.state.maxVal);
        this.waterBar.x = 0;
        this.oilBar.x = 50;
        this.electricBar.x = 100;
        this.greenBar.x = 150;
        this.waterBar.y = 100;
        this.oilBar.y = 100;
        this.electricBar.y = 100;
        this.greenBar.y = 100;
        this.stage.addChild(this.waterBar);
        this.stage.addChild(this.oilBar);
        this.stage.addChild(this.electricBar);
        this.stage.addChild(this.greenBar);
        this.stage.update();
    },
    update: function () {
        this.waterBar.graphics.clear();
        this.electricBar.graphics.clear();
        this.oilBar.graphics.clear();
        this.greenBar.graphics.clear();

        this.waterBar.graphics.beginFill("blue").drawRect(0, 250 - 250 * this.state.water / this.state.maxVal, 40, 250 * this.state.water / this.state.maxVal);
        this.oilBar.graphics.beginFill("orange").drawRect(0, 250 - 250 * this.state.oil / this.state.maxVal, 40, 250 * this.state.oil / this.state.maxVal);
        this.electricBar.graphics.beginFill("purple").drawRect(0, 250 - 250 * this.state.electricity / this.state.maxVal, 40, 250 * this.state.electricity / this.state.maxVal);
        this.greenBar.graphics.beginFill("green").drawRect(0, 250 - 250 * this.state.level / this.state.maxVal, 40, 250 * this.state.level / this.state.maxVal);
        this.stage.update();
    }
}