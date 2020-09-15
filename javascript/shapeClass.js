class Line {
    // instantiating a new Line saves the coordinates and color(default: black), does not actually draw it yet
    constructor (startX, startY, endX, endY, strokeStyle="black", lineWidth=2, context) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.lineWidth = lineWidth;
        this.strokeStyle = strokeStyle;
        this.context = context;
    };

    // actually draws on the context using the commit method
    commit = () => {
        this.context.lineWidth = this.lineWidth;
        this.context.strokeStyle = this.strokeStyle;
        this.context.beginPath();
        this.context.moveTo(this.startX, this.startY);
        this.context.lineTo(this.endX, this.endY);
        this.context.stroke();
    };
};

class Circle {
    constructor (centerX, centerY, radiusX, radiusY, type="stroke", strokeStyle="black", lineWidth=2, fillStyle="black", context) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        this.type = type;
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
        this.context = context;
        this.lineWidth = lineWidth;
    };

    commit = () => {
        this.context.fillStyle = this.fillStyle;
        this.context.strokeStyle = this.strokeStyle;
        this.context.lineWidth = this.lineWidth;
        this.context.beginPath();

        this.context.arc(this.centerX, this.centerY, Math.sqrt(Math.pow(this.radiusX - this.centerX, 2) + Math.pow(this.radiusY - this.centerY, 2)), 0, 2 * Math.PI,false);
        this.context.stroke();
        if (this.type === "fill") {
            this.context.fill()
        }
    };
};

// same thing for rectangles
class Rect {
    constructor (startX, startY, endX, endY, type="fill", strokeStyle="black", lineWidth=2, fillStyle="black", context) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;   
        this.endY = endY;
        this.strokeStyle = strokeStyle;
        this.lineWidth = lineWidth;
        this.fillStyle = fillStyle;
        this.type = type;
        this.context = context;
    };

    commit = () => {
        this.context.fillStyle = this.color;
        if (this.type === "fill") {
            this.context.fillStyle = this.fillStyle;
            this.context.fillRect(this.startX, this.startY, this.endX-this.startX, this.endY-this.startY)
        };
        if (this.type === "stroke") {
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = this.strokeStyle;
            this.context.strokeRect(this.startX, this.startY, this.endX-this.startX, this.endY-this.startY)
        };

        // clearRect can be used as the erasor
        if (this.type === "clear") {
            this.context.clearRect(this.startX, this.startY, this.endX-this.startX, this.endY-this.startY)
        };
    }
};

class Square {
    constructor (startX, startY, width, type="fill", strokeStyle="black", lineWidth=2, fillStyle="black", context) {
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.type = type;
        this.strokeStyle = strokeStyle;
        this.lineWidth = lineWidth;
        this.fillStyle = fillStyle;
        this.context = context;
    };

    commit = () => {
        // this.context.fillStyle = this.color;
        if (this.type === "fill") {
            this.context.fillStyle = this.fillStyle;
            this.context.fillRect(this.startX, this.startY, this.width, this.width)
        };
        if (this.type === "stroke") {
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = this.strokeStyle;
            this.context.strokeRect(this.startX, this.startY, this.width, this.width)
        };
    }
};

class Brush {
    constructor(options = {}) {
        this.x = [];
        this.y = [];
        this.context = options.context;
        this.strokeStyle = options.strokeStyle;
        this.lineWidth = options.lineWidth;
    };

    append = (x, y) => {
        this.x.push(x);
        this.y.push(y);
    };

    commit = () => {
        this.context.strokeStyle = this.strokeStyle;
        this.context.lineJoin = "round";
        this.context.lineWidth = this.lineWidth;
        this.context.beginPath();
        this.context.moveTo(this.x[0], this.y[0]);
        for (var i=1; i < this.x.length; i++) {
            this.context.lineTo(this.x[i], this.y[i]);
            this.context.moveTo(this.x[i], this.y[i]);
            this.context.closePath();
            this.context.stroke();
        };
    };
}