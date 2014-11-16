/**
 * Created by Vance Miller on 11/15/2014.
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
    level: 100,
    addElectricity: function (amount) {
        electricity += amount;
    },
    addWater: function (amount) {
        water += amount;
    },
    addOil: function (amount) {
        oil += amount;
    },
    addLevel: function (amount) {
        level += amount;
    }
}