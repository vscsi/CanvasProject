/**********************************************
 * Tool: Clear Functionality
 * ==================================
 ***********************************************/

function clearFunction() {
    // currentInstance[currentInstanceIndex] = new Rect(0, 0, canvasReal.width, canvasReal.height, "fill", currentBgColor, 2, currentBgColor, contextReal);
    // refresh(contextReal);
    drawFillRect(0, 0, canvasReal.width, canvasReal.height, "fill", currentBgColor, 2, currentBgColor, contextReal);
}