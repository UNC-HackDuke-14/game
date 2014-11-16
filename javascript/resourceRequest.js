/**
 * Created by Vance Miller on 11/15/2014.
 */

var resourceEnum = Object.freeze({
    ELECTRICITY: "Electricity",
    WATER: "Water",
    OIL: "Oil"
});

ResourceRequest = function (type) {
    this.type = type;
}

ResourceRequest.prototype = {
    type: null
}