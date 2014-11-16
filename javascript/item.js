/**
 * Created by andrew and kerry on 11/15/14.
 */

function Item(game_square, item_type) {
    /*
     resource_consumption should be of the form:
     {oilUsageRate: ???, waterUsageRate: ???, waterUsageRate: ???}
     */

    this.width = item_type.width * game_square.square_dim;
    this.height = item_type.height * game_square.square_dim;
    this.box = game_square.box;
    this.game_square = game_square;
    this.display_obj = new createjs.Shape();
    this.x = item_type.x * game_square.square_dim; //float
    this.y = item_type.y * game_square.square_dim; //float
    this.resource_consumption = item_type.resource_consumption;
    this.item_type = item_type;
    createjs.Ticker.on("tick", this.consumeResource, this);
    this.paint();
}

var ItemType = Object.freeze({
    TV: {
        name: "TV",
        resource_type: ResourceRequest.resourceEnum.ELECTRICITY,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 1},
        height: 0.1,
        width: 0.1,
        x: 0,
        y: 0.45
    },
    LAMP: {
        name: "Lamp",
        resource_type: ResourceRequest.resourceEnum.ELECTRICITY,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 0.25},
        height: 0.05,
        width: 0.05,
        x: 0,
        y: 0
    },
    SPEAKERS: {
        name: "Speakers",
        resource_type: ResourceRequest.resourceEnum.ELECTRICITY,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 0.5},
        height: 0.1,
        width: 0.2,
        x: 0,
        y: 0.4
    },
    TUB: {
        name: "Tub",
        resource_type: ResourceRequest.resourceEnum.WATER,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 5, electricUsageRate: 0},
        height: 0.8,
        width: 0.3,
        x: 0.7,
        y: 0.2
    },
    FAN: {
        name: "Fan",
        resource_type: ResourceRequest.resourceEnum.WATER,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 1},
        height: 0.2,
        width: 0.2,
        x: 0.4,
        y: 0.4
    },
    STOVE: {
        name: "Stove",
        resource_type: ResourceRequest.resourceEnum.OIL,
        resource_consumption: {oilUsageRate: 2, waterUsageRate: 0, electricUsageRate: 0},
        height: 0.2,
        width: 0.2,
        x: 0.4,
        y: 0.8
    },
    SINK: {
        name: "Sink",
        resource_type: ResourceRequest.resourceEnum.WATER,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 1, electricUsageRate: 0},
        height: 0.1,
        width: 0.1,
        x: 0.45,
        y: 0
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
    resource_consumption: undefined,
    resource_request: undefined,

    paint: function () {
        this.display_obj.x = this.box.x;
        this.display_obj.y = this.box.y;
        this.display_obj.graphics.beginFill("black").drawRect(this.x, this.y, this.width, this.height);
        this.game_square.game_board.game_stage.addChild(this.display_obj);
        this.game_square.game_board.game_stage.update();
        this.display_obj.addEventListener("click", this.toggleState.bind(this));
    },

    toggleState: function () {
        this.isOn = !this.isOn;
        if (this.resource_consumption.oilUsageRate > this.game_square.game_board.game_state.oil ||
            this.resource_consumption.waterUsageRate > this.game_square.game_board.game_state.water ||
            this.resource_consumption.electricUsageRate > this.game_square.game_board.game_state.electricity) {
            console.log("not enough resources! Must construct additional pylons.");
            this.isOn = false;
        }
        return this.isOn;
    },

    consumeResource: function () {
        if (this.isOn) {
            this.game_square.game_board.game_state.oil -= this.resource_consumption.oilUsageRate;
            this.game_square.game_board.game_state.water -= this.resource_consumption.waterUsageRate;
            this.game_square.game_board.game_state.electricity -= this.resource_consumption.electricUsageRate;
            console.log(this.game_square.game_board.game_state.oil + " "  + this.game_square.game_board.game_state.water + " " + this.game_square.game_board.game_state.electricity);
            if (this.resource_consumption.oilUsageRate > this.game_square.game_board.game_state.oil ||
                this.resource_consumption.waterUsageRate > this.game_square.game_board.game_state.water ||
                this.resource_consumption.electricUsageRate > this.game_square.game_board.game_state.electricity) {
                console.log("Ran out of resources! Must construct additional pylons.");
                this.isOn = false;
            }
        }
    },

    random_event: function () {
        var request_duration = 3;
        this.resource_request = new ResourceRequest(this, request_duration);
    }
}
