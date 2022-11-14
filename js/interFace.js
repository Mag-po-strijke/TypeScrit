var firstRect = {
    id: 123,
    color: '#892084',
    size: {
        width: 80,
        height: 90
    }
};
var fecondRect = {
    id: 121,
    color: "#243872",
    size: {
        width: 80,
        height: 90
    }
};
var thirdRect = {}; /*or <Rect>{} */
var fifthRect = {
    id: 123,
    size: {
        width: 90,
        height: 80
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var rect6 = /** @class */ (function () {
    function rect6() {
    }
    rect6.prototype.getArea = function () {
        return this.size.width * this.size.height;
    };
    return rect6;
}());
//===============================================
