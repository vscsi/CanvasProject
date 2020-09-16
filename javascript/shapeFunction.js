const drawFillRect = (startX, startY, endX, endY, type="fill", strokeStyle="black", lineWidth=2, fillStyle="black", context) => {
    currentInstance[currentInstanceIndex] = new Rect(startX, startY, endX, endY, type, strokeStyle, lineWidth, fillStyle, context);
    refresh(context)
};

const drawStrokeRect = (startX, startY, endX, endY, type="stroke", strokeStyle="black", lineWidth=2, fillStyle="black", context) => {
    currentInstance[currentInstanceIndex] = new Rect(startX, startY, endX, endY, type, strokeStyle, lineWidth, fillStyle, context);
    refresh(context)
};

const drawStraightLine = (startX, startY, endX, endY, strokeStyle, lineWidth, context) => {
    currentInstance[currentInstanceIndex] = new Line(startX, startY, endX, endY, strokeStyle, lineWidth, context);
    refresh(context)
};

const drawCircle = (centerX, centerY, radiusX, radiusY, type, strokeStyle, lineWidth, fillStyle, context) => {
    currentInstance[currentInstanceIndex] = new Circle(centerX, centerY, radiusX, radiusY, type, strokeStyle, lineWidth, fillStyle, context);
    refresh(context)
};

// constructor (startX, startY, width, type="fill", strokeStyle="black", lineWidth=2, fillStyle="black", context)

const drawFillSquare = (startX, startY, width, type="fill", strokeStyle, lineWidth, fillStyle, context) => {
    currentInstance[currentInstanceIndex] = new Square(startX, startY, width, type, strokeStyle, lineWidth, fillStyle, context);
    refresh(context)
};

const drawStrokeSquare = (startX, startY, width, type="stroke", strokeStyle, lineWidth, fillStyle, context) => {
    currentInstance[currentInstanceIndex] = new Square(startX, startY, width, type, strokeStyle, lineWidth, fillStyle, context);
    refresh(context)
};

const drawBrushInit = (x, y, strokeStyle, lineWidth, context) => {
    currentInstance[currentInstanceIndex] = new Brush({context : context, strokeStyle : strokeStyle, lineWidth : lineWidth});
    currentInstance[currentInstanceIndex].append(x, y);
    // refresh or not? no, refresh will increment the currentInstanceIndex
};

const drawBrushDrag = (x, y) => {
    currentInstance[currentInstanceIndex].append(x, y);
};

const drawQuadline1Init = (x, y, strokeStyle, lineWidth, context) => {
    currentInstance[currentInstanceIndex] = new Quadline1({context: context, strokeStyle : strokeStyle, lineWidth: lineWidth});
    currentInstance[currentInstanceIndex].append(x, y);
};

const drawQuadline1Drag = (x, y) => {
    currentInstance[currentInstanceIndex].append(x, y);
};

const drawQuadline1End = (x, y, context) => {
    currentInstance[currentInstanceIndex].append(x, y);
    refresh(context)
};

const drawQuadline2Init = (x, y, strokeStyle, lineWidth, context) => {
    currentInstance[currentInstanceIndex] = new Quadline2({context: context, strokeStyle : strokeStyle, lineWidth: lineWidth});
    currentInstance[currentInstanceIndex].append(x, y);
};

const drawQuadline2Drag = (x, y) => {
    currentInstance[currentInstanceIndex].append(x, y);
};

const drawQuadline2Drag2nd = (x, y) => {
    // change (x3, y3)
    // maybe not needed
};

const drawQuadline2End = (x, y, context) => {
    // append (x4, y4)
    currentInstance[currentInstanceIndex].append(x, y);
    refresh(context)
}