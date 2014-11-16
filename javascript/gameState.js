/**
 * Created by Vance Miller, Sarah Rust, Andrew Park, and Kerry Ellwanger on 11/15/2014.
 */
function GameState(electricity, water, oil, level) {
    this.electricity = electricity;
    this.water = water;
    this.oil = oil;
    this.level = level;
}

GameState.prototype = {
    electricity: 100,
    water: 100,
    oil: 100,
    level: 100
}