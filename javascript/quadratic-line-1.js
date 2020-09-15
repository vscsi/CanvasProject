/**********************************************
 * Drawing Quadratic Line (single control point) Functionality
 * ==================================
 ***********************************************/

let clickTracker = 0;
let q1a = 0;
let q1aa = 0;
let q1b = 0;
let q1bb = 0;

class QuadraticLine1 extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = currentDrawColor;
    this.contextReal.lineWidth = currentBrushSize;
    this.contextDraft.strokeStyle = currentDrawColor;
    this.contextDraft.lineWidth = currentBrushSize;
    if (clickTracker == 0) {
      q1a = coord[0];
      q1aa = coord[1];
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(q1a, q1aa);
      this.contextDraft.quadraticCurveTo(coord[0], coord[1], q1b, q1bb);
      this.contextDraft.stroke();
    }
    
  }
  // Draw draft lines according to click count
  onDragging(coord, event) {
    if (clickTracker == 0) {
      contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      contextDraft.beginPath();
      contextDraft.strokeStyle = currentDrawColor;
      contextDraft.lineWidth = currentBrushSize;
      contextDraft.moveTo(coord[0],coord[1]);
      contextDraft.lineTo(q1a,q1aa);
      contextDraft.stroke();
    } else {
      contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      contextDraft.beginPath();
      contextDraft.moveTo(q1a, q1aa);
      contextDraft.quadraticCurveTo(coord[0], coord[1], q1b, q1bb);
      contextDraft.stroke();
      //change style of indicators
      this.contextDraft.strokeStyle = "#DCDCDC";
      this.contextDraft.lineWidth = 1;
      //linear indicator from point A to control point
      this.contextDraft.moveTo(coord[0],coord[1]);
      this.contextDraft.lineTo(q1a, q1aa);
      this.contextDraft.stroke();
      //linear indicator from point B to control point
      this.contextDraft.moveTo(coord[0],coord[1]);
      this.contextDraft.lineTo(q1b, q1bb);
      this.contextDraft.stroke();
      //change back style to user selected style
      this.contextDraft.strokeStyle = currentDrawColor;
      this.contextDraft.lineWidth = currentBrushSize;
      console.log(currentDrawColor)
    }
  }
  // onMouseMove() {}
  onMouseUp(coord) {
    if (clickTracker == 0) {
      q1b = coord[0];
      q1bb = coord[1];
    } else {
      contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      contextReal.beginPath();
      contextReal.moveTo(q1a, q1aa);
      contextReal.quadraticCurveTo(coord[0], coord[1], q1b, q1bb);
      contextReal.stroke();
    }

    // click tracking & reset
    clickTracker += 1
    console.log(clickTracker)
    if (clickTracker > 1) {
      clickTracker = 0
    } else {}
  }

    
  
  onMouseLeave() {
    clickTracker = 0
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
  onMouseEnter() {}
}
