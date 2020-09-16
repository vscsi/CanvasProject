// currentInstance is where the shapes get instantiated into, like a drawing board.
currentInstance = {0: ""};
currentInstanceIndex = 0;
instances = {0: ""};
instancesIndex = 0;

// instances are unshift() to the stack for loading
// each time changes is made (drawing a new shape, undoing or change colors), new instances is created and unshift() to the stack
// so stack[0] will be the newest instance
stack = [];
redoStack = [];

// load() is to commit all the shapes in stack[0]
const load = (context) => {
    context.clearRect(0, 0, canvasReal.width, canvasReal.height);
    for (const key in stack[0]) {
        stack[0][key].commit()
    };
    // Shape Selector Events
    loadShapeSelector();
    changeFillStyle();
};

// undo is done by shift()ing the stack, then load again
const undo = (context) => {
    redoStack.unshift(stack.shift());
    currentInstance = {...stack[0]};
    load(context);
};

const redo = (context) => {
    stack.unshift(redoStack.shift());
    currentInstance = {...stack[0]};
    load(context);
};

// this is to do with the z-index.
const swap = (original, swapTo) => {
    var temp = currentInstance[swapTo];
    currentInstance[swapTo] = currentInstance[original];
    currentInstance[original] = temp
};

const refresh = (context) => {
    currentInstanceIndex ++;
    instances[instancesIndex] = {...currentInstance};
    stack.unshift(instances[instancesIndex]);
    instancesIndex ++;
    load(context);
};
