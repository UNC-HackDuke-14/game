/**
 * Created by andrew and kerry on 11/15/14.
 */



function Item(square, game_board, itemType) {
    /*
     resource_consumption should be of the form:
     {oilUsageRate: ???, waterUsageRate: ???, waterUsageRate: ???}
     */

    this.width = itemType.width * square.square_dim;
    this.height = itemType.height * square.square_dim;
    this.box = square.box;
    this.game_board = game_board;
    this.display_obj = new createjs.Shape();
    this.x = itemType.x * square.square_dim; //float
    this.y = itemType.y * square.square_dim; //float
    this.resource_consumption = itemType.resource_consumption;
    this.itemType = itemType;
    this.paint();
}

var ItemType = Object.freeze({
    TV: {
        name: "TV",
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 1},
        height: 0.1,
        width: 0.1,
        x: 0,
        y: 0.45
    },
    LAMP: {
        name: "Lamp",
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 0.25},
        height: 0.05,
        width: 0.05,
        x: 0,
        y: 0
    },
    SPEAKERS: {
        name: "Speakers",
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 0.5},
        height: 0.1,
        width: 0.2,
        x: 0,
        y: 0.4
    },
    TUB: {
        name: "Tub",
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 5, electricUsageRate: 0},
        height: 0.8,
        width: 0.3,
        x: 0.7,
        y: 0.2
    },
    FAN: {
        name: "Fan",
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 1},
        height: 0.2,
        width: 0.2,
        x: 0.4,
        y: 0.4
    },
    STOVE: {
        name: "Stove",
        resource_consumption: {oilUsageRate: 2, waterUsageRate: 0, electricUsageRate: 0},
        height: 0.2,
        width: 0.2,
        x: 0.4,
        y: 0.8
    },
    SINK: {
        name: "Sink",
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 1, electricUsageRate: 0},
        height: 0.1,
        width:0.1,
        x:0.45,
        y:0
    },
    BED: {
        name: "Bed",
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 0},
        height: 0.6,
        width: 0.25,
        x: 0.7,
        y: 0.4
    }
});

Item.prototype = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    isOn: false,
    display_obj: undefined,

    paint: function () {
        this.display_obj.x = this.box.x;
        this.display_obj.y = this.box.y;
        this.display_obj.graphics.beginFill("black").drawRect(this.x,this.y,this.width,this.height);
        this.game_board.game_stage.addChild(this.display_obj);       
        this.game_board.game_stage.update();
    },

    toggleState: function () {
        isOn = !isOn;
        if (this.resource_consumption.oilUsageRate > this.state.oil ||
            this.resource_consumption.waterUsageRate > this.state.water ||
            this.resource_consumption.electricUsageRate > this.state.electricUsageRate) {
            isOn = false;
        }
        ;
        return isOn;
    },

    consumeResource: function () {
        if (isOn) {
            this.state.oil -= this.resource_consumption.oilUsageRate;
            this.state.water -= this.resource_consumption.waterUsageRate;
            this.state.electricity -= this.resource_consumption.electricUsageRate;
            if (this.resource_consumption.oilUsageRate > this.state.oil ||
                this.resource_consumption.waterUsageRate > this.state.water ||
                this.resource_consumption.electricUsageRate > this.state.electricUsageRate) {
                isOn = false;
            }
        }
    }
}
