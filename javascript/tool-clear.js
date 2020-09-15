/**********************************************
 * Tool: Clear Functionality
 * ==================================
 ***********************************************/

function clearFunction() {
    // contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    currentInstance[currentInstanceIndex] = new Rect(0, 0, canvasReal.width, canvasReal.height, "clear", "#", 2, "#", contextReal);
    refresh(contextReal);
}