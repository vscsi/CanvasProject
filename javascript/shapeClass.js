class Line {
    // instantiating a new Line saves the coordinates and color(default: black), does not actually draw it yet
    constructor (startX, startY, endX, endY, strokeStyle="black", lineWidth=2, context) {
        this.name = "line";
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
    constructor (options) {
        this.name = `${options.type} circle`;
        this.centerX = options.centerX;
        this.centerY = options.centerY;
        this.radiusX = options.radiusX;
        this.radiusY = options.radiusY;
        this.type = options.type;
        this.strokeStyle = options.strokeStyle;
        this.fillStyle = options.fillStyle;
        this.context = options.context;
        this.lineWidth = options.lineWidth;
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
    constructor (options) {
        this.name = `${options.type} rectangle`
        this.startX = options.startX;
        this.startY = options.startY;
        this.endX = options.endX;   
        this.endY = options.endY;
        this.strokeStyle = options.strokeStyle;
        this.lineWidth = options.lineWidth;
        this.fillStyle = options.fillStyle;
        this.type = options.type;
        this.context = options.context;
    }

    commit = () => {
        this.context.fillStyle = this.color;
        if (this.type === "fill") {
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = this.strokeStyle;
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

class Background extends Rect {
    constructor(options) {
        super(options);
        this.name = "background"
    };

    commit = () => {
        this.context.fillStyle = currentBgColor;
        this.context.fillRect(this.startX, this.startY, this.endX-this.startX, this.endY-this.startY)
    }
};

class Square {
    constructor (options) {
        this.name = "square";
        this.startX = options.startX;
        this.startY = options.startY;
        this.width = options.width;
        this.type = options.type;
        this.strokeStyle = options.strokeStyle;
        this.lineWidth = options.lineWidth;
        this.fillStyle = options.fillStyle;
        this.context = options.context;
    };

    commit = () => {
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
        this.name = "brush";
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
};

class Erasor extends Brush {
    constructor(options) {
        super(options);
    }
    commit = () => {
        this.context.strokeStyle = currentBgColor;
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

class Quadline1 extends Brush{
    constructor(options = {}) {
        super(options);
        this.name = "Quadline1"
    };
    append = (x, y) => {
        this.x.push(x);
        this.y.push(y);
    };
    commit = () => {
        this.context.strokeStyle = this.strokeStyle;
        this.context.lineWidth = this.lineWidth;
        this.context.beginPath();
        this.context.moveTo(this.x[0], this.y[0]);
        contextReal.quadraticCurveTo(this.x[2], this.y[2], this.x[1], this.y[1]);
        contextReal.stroke();
    }
};

class Quadline2 extends Quadline1{
    constructor(options = {}) {
        super(options);
        this.name = "Quadline2"
    };
    commit = () => {
        this.context.beginPath();
        this.context.moveTo(this.x[0], this.y[0]); // (x1, x2)
        this.context.bezierCurveTo(this.x[2], this.y[2], this.x[3], this.y[3], this.x[1], this.y[1]); 
        this.context.stroke();
    }
};

class Textbox {
    constructor(options) {
        this.name = "textbox"
        this.text = "";
        this.x = options.x;
        this.y = options.y;
        this.font = `${options.lineWidth * 10}px`;
        this.lineWidth = options.lineWidth;
        this.fillStyle = options.fillStyle;
    };
    textInput = (value) => {
        this.text = value
    };
    commit = () => {
        this.context.textBaseline = 'top';
        this.context.textAlign = 'left';
        this.context.font = this.font;
        this.context.fillStyle = this.fillStyle;
        this.context.fillText(this.text, this.x, this.y);
    }
};

class Polygon extends Brush {
    constructor(options){
        super(options);
        this.name = "polygon";
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
    append = (x, y) => {
        this.x.push(x);
        this.y.push(y);
    };
};

class SprayBrush1 extends Brush {
    constructor(options) {
        super(options);
        this.name = "spray brush";
        this.fillStyle = options.fillStyle;
        this.lineWidth = "X";
    };
    reassign = (x, y) => {
        this.x = x.slice();
        this.y = y.slice()
    };
    commit = () => {
        this.context.fillStyle = this.fillStyle;
        this.context.lineJoin = this.context.lineCap = 'round';
        for (var j = 0; j < this.x.length; j++) {
            this.context.fillRect(
                this.x[j],
                this.y[j],
                1, 1);
        };
    };
}