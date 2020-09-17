// ==== Initiates background color as white ==== //
drawBg(0, 0, canvasReal.width, canvasReal.height, "fill", currentBgColor, 2, currentBgColor, contextReal);

// == Function that allowing to change background color == //
const changeBg = (color, context) => {
    currentBgColor = color;
    instances[instancesIndex] = {...currentInstance};
    stack.unshift(instances[instancesIndex]);
    instancesIndex ++;
    load(context);
}