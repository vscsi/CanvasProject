drawBg(0, 0, canvasReal.width, canvasReal.height, "fill", currentBgColor, 2, currentBgColor, contextReal);

const changeBg = (color, context) => {
    currentBgColor = color;
    instances[instancesIndex] = {...currentInstance};
    stack.unshift(instances[instancesIndex]);
    instancesIndex ++;
    load(context);
}