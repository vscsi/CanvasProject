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