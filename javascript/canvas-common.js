/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
let currentBgColor = 'white';
let currentDrawColor = "black";
let currentBrushSize = 5;

/***** setting background white for canvas *******/ 
contextReal.fillStyle = 'white';
contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  // currentFunction.onMouseMove([mouseX, mouseY], e);
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

// $("#canvas-draft").mouseleave(function (e) {
//   dragging = false;
//   let mouseX = e.offsetX;
//   let mouseY = e.offsetY;
//   currentFunction.onMouseLeave([mouseX, mouseY], e);
// });

// $("#canvas-draft").mouseenter(function (e) {
//   let mouseX = e.offsetX;
//   let mouseY = e.offsetY;
//   currentFunction.onMouseEnter([mouseX, mouseY], e);
// });

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


// Color picker
$(".sp-val").click(function () {
  t = $("#color-picker").spectrum("get");
  currentDrawColor = t.toRgbString()
  console.log(currentDrawColor)
});
$(".sp-hue").click(function () {
  t = $("#color-picker").spectrum("get");
  currentDrawColor = t.toRgbString()
  console.log(currentDrawColor)
});

// Size picker
$(".size-picker").click(function () {
  let brushSizeID = $(this).css("order");
  if (brushSizeID == 1) {
    currentBrushSize = 2;
  } else if (brushSizeID == 2) {
    currentBrushSize = 5;
  } else if (brushSizeID == 3) {
    currentBrushSize = 10;
  };
});

//cursor tracker with coordinates     *need to add canvas element detector to hide coords outside of canvas
$(document).bind('mousemove', function(e){
  $('#mouse-coords').css({
     left:  e.offsetX + 18,
     top:   e.offsetY + 18
  });
  $('#mouse-coords').text(`x:${e.offsetX} y:${e.offsetY}`);
});

