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
    this.display_obj = new createjs.Sprite();
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
        height: 0.48,
        width: 0.494,
        x: 0.25,
        y: 0.35,
        spriteWidth: 247,
        spriteHeight: 240,
        numSprites: 2,
        imgPath: "./images/TVss.png"
    },
    LAMP: {
        name: "Lamp",
        resource_type: ResourceRequest.resourceEnum.ELECTRICITY,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 0.25},
        height: 0.48,
        width: 0.114,
        x: 0.1,
        y: 0.35,
        spriteWidth: 57,
        spriteHeight: 240,
        numSprites: 2,
        imgPath: "./images/floorLamp1ss.png"
    },
    GAMES: {
        name: "games",
        resource_type: ResourceRequest.resourceEnum.ELECTRICITY,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 0.5},
        width: 0.188,
        height: 0.2,
        x: 0.8,
        y: 0.65,
        spriteWidth: 94,
        spriteHeight: 100,
        numSprites: 2,
        imgPath: "./images/Gamesss.png"
    },
    TUB: {
        name: "Tub",
        resource_type: ResourceRequest.resourceEnum.WATER,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 5, electricUsageRate: 0},
        height: 0.220,
        width: 0.556,
        x: 0.0,
        y: 0.780,
        spriteWidth: 278,
        spriteHeight: 110,
        numSprites: 2,
        imgPath: "./images/Bathtubss.png"
    },
    FAN: {
        //this is really a lamp
        name: "Fan",
        resource_type: ResourceRequest.resourceEnum.WATER,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 1},
        height: 0.241,
        width: 0.184,
        x: 0.4,
        y: 0.1,
        spriteWidth: 241,
        spriteHeight: 184,
        numSprites: 2,
        imgPath: "./images/CeilingLampss.png"
    },
    STOVE: { //add stove
        name: "Stove",
        resource_type: ResourceRequest.resourceEnum.OIL,
        resource_consumption: {oilUsageRate: 2, waterUsageRate: 0, electricUsageRate: 0},
        height: 0.2,
        width: 0.2,
        x: 0.4,
        y: 0.8,
        spriteWidth: 278,
        spriteHeight: 110,
        numSprites: 2,
        imgPath: "./images/Bathtubss.png"
    },
    SINK: {
        name: "Sink",
        resource_type: ResourceRequest.resourceEnum.WATER,
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 1, electricUsageRate: 0},
        height: 0.35,
        width: 0.21,
        x: 0.45,
        y: 0,
        spriteWidth: 105,
        spriteHeight: 175,
        numSprites: 2,
        imgPath: "./images/BathroomSinkss.png"
    },
    BED: {
        name: "Bed",
        resource_consumption: {oilUsageRate: 0, waterUsageRate: 0, electricUsageRate: 0},
        height: 0.5,
        width: 0.25,
        x: 0.7,
        y: 0.4,
        spriteWidth: 278,
        spriteHeight: 110,
        numSprites: 2,
        imgPath: "./images/Bathtubss.png"
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
    item_type: undefined,

    paint: function () {

        //this.display_obj.x = this.box.x;
        //this.display_obj.y = this.box.y;

        //this.display_obj.graphics.beginFill("black").drawRect(this.x, this.y, this.width, this.height);

        var boxwidth = this.game_square.square_dim;

        this.display_obj = initSprite(this.box.x + this.x, this.box.y + this.y, this.item_type.spriteWidth, this.item_type.spriteHeight, this.item_type.numSprites, boxwidth * this.item_type.width / this.item_type.spriteWidth, boxwidth * this.item_type.height / this.item_type.spriteHeight, 1, this.item_type.imgPath, this.game_square.game_board.game_stage);
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
