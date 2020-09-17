/**********************************************
 * Drawing polygon Functionality
 * ==================================
 ***********************************************/

let clickCount = 0;
let lastX = 0;
let lastY = 0;
function between(x,min,max) {
    if (x > min && x < max) {
      return true;
    } else {
      return false;
    }
}

class DrawingPolygon extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    clickCount += 1
    dragging = false;

    // run on first click
    if (clickCount == 1) {
      contextDraft.strokeStyle = currentDrawColor;
      contextDraft.lineWidth = currentBrushSize;
      contextReal.strokeStyle = currentDrawColor;
      contextReal.lineWidth = currentBrushSize;
      this.origX = coord[0];
      this.origY = coord[1];
      lastX = coord[0];
      lastY = coord[1];

      // script for stack:
      drawPolygonInit(coord[0], coord[1], currentDrawColor, currentBrushSize, contextReal);

    } else {
      // check if click is last stroke
      if (between(coord[0],this.origX -21, this.origX + 21) == true && between(coord[1],this.origY -21, this.origY + 21) == true) {
        contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        contextReal.beginPath();
        contextReal.moveTo(lastX,lastY);
        contextReal.lineTo(this.origX, this.origY);
        contextReal.stroke();
        clickCount = 0;   //reset counter so drag won't run

        // script for stack:
        drawBrushDrag(this.origX, this.origY);
        refresh(contextReal)

      } else {
        contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        contextReal.beginPath();
        contextReal.moveTo(coord[0],coord[1]);
        contextReal.lineTo(lastX, lastY);
        contextReal.stroke();
        lastX = coord[0];
        lastY = coord[1];

        // script for stack:
        drawBrushDrag(coord[0], coord[1]);

      }
    }
  }

  onMouseMove() {}
  onMouseUp(coord) {
    dragging = true;
  }

  onDragging(coord, event) {

    if (clickCount !== 0) {
      contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      contextDraft.strokeStyle = currentDrawColor;
      contextDraft.lineWidth = currentBrushSize;
      contextDraft.beginPath();
      contextDraft.moveTo(coord[0],coord[1]);
      contextDraft.lineTo(lastX, lastY);
      contextDraft.stroke();
    } else {
      dragging = false;
    }
    
  }

  onMouseLeave() {contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);}
  onMouseEnter() {}
}
