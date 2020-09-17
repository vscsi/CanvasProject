/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

// == Basic Canvas settings == //
let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let canvasDraft2 = document.getElementById("canvas-draft2");
let contextDraft2 = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
let currentBgColor = 'white';
let currentBrushSize = 2;
let currentDrawColor = "black";

// == Mouse Events for canvas == //
$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}

// == Cursor Tracker with Coordinates == //
$(document).bind('mousemove', function (e) {
  $('#mouse-coords').css({
    left: e.offsetX + 20,
    top: e.offsetY + 32
  });
  $('#mouse-coords').text(`x:${e.offsetX} y:${e.offsetY}`);
});