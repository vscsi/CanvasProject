const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const wrapper = document.querySelector("#wrapper");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Created classes for different shapes
class Line {

    // instantiating a new Line saves the coordinates and color(default: black), does not actually draw it yet
    constructor (startX, startY, endX, endY, color="black") {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.color = color;
    };

    // actually draws on the context using the commit method
    commit = () => {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
    };
};

// same thing for rectangles
class Rect {
    constructor (startX, startY, endX, endY, type="fill", color="black") {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.color = color;
        this.type = type;
    };

    commit = () => {
        ctx.fillStyle = this.color;
        if (this.type === "fill") {ctx.fillRect(this.startX, this.startY, this.endX-this.startX, this.endY-this.startY)};
        if (this.type === "stroke") {ctx.strokeRect(this.startX, this.startY, this.endX-this.startX, this.endY-this.startY)};

        // clearRect can be used as the erasor
        if (this.type === "clear") {ctx.clearRect(this.startX, this.startY, this.endX-this.startX, this.endY-this.startY)};
    }
}

// currentInstance is where the shapes get instantiated into, like a drawing board.
currentInstance = {0: ""};
instances = {0: ""};

// instances are unshift() to the stack for loading
// each time changes is made (drawing a new shape, undoing or change colors), new instances is created and unshift() to the stack
// so stack[0] will be the newest instance
stack = [];

// load() is to commit all the shapes in stack[0]
const load = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const key in stack[0]) {
        stack[0][key].commit()
    };

};

// undo is done by shift()ing the stack, then load again
const undo = () => {
    stack.shift();
    currentInstance = {...stack[0]}
    load()
};

// this is to do with the z-index.
const swap = (original, swapTo) => {
    var temp = currentInstance[swapTo];
    currentInstance[swapTo] = currentInstance[original];
    currentInstance[original] = temp
};


// --------------------------------------------------drawing board---------------------------------------------------------- //


// draw line1
currentInstance[0] = new Line(10, 10, 200, 200);
instances[0] = {...currentInstance};
stack.unshift(instances[0]);


currentInstance[1] = new Line(10, 10, 10, 200);
instances[1] = {...currentInstance};
stack.unshift(instances[1]);

currentInstance[2] = new Rect(10, 10, 200, 200, "fill", "yellow");
swap(2, 0);
instances[2] = {...currentInstance};
stack.unshift(instances[2]);


load();
console.log(currentInstance); // you can find all the shapes in currentInstance


// try below in the browser console
// changing color: 
// currentInstance[0].color = "red"
// instances[3] = {...currentInstance};
// stack.unshift(instances[3]);
// load();

// undo()

// cannot undo color change yet, need a more robust function for changing color
// my plan is to pack these into functions for us to call in the mouse up events
