/**********************************************
 * Drawing Quadratic Line (Two control points) Functionality
 * ==================================
 ***********************************************/

let clickTracker2 = 0;
let q2a = 0;
let q2aa = 0;
let q2b = 0;
let q2bb = 0;
let q2c = 0;
let q2cc = 0;

class QuadraticLine2 extends PaintFunction {
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
    //Activate click tracker & track click coordinates
    if (clickTracker2 == 0) {
      q2a = coord[0];
      q2aa = coord[1];
    } else if (clickTracker2 == 1) {
      q2c = coord[0];
      q2cc = coord[1];
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(q2a, q2aa);
      this.contextDraft.quadraticCurveTo(coord[0], coord[1], q2b, q2bb);
      this.contextDraft.stroke();
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(q2a, q2aa);
      this.contextDraft.bezierCurveTo(q2c, q2cc, coord[0], coord[1], q2b, q2bb);
      this.contextDraft.stroke();
    }
  }

  // Draw draft lines according to click count
  onDragging(coord, event) {
    if (clickTracker2 == 0) {
      contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      contextDraft.beginPath();
      contextDraft.moveTo(q2a, q2aa);
      contextDraft.lineTo(coord[0], coord[1]);
      contextDraft.stroke();
    } else if (clickTracker2 == 1) {
      contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      contextDraft.beginPath();
      contextDraft.moveTo(q2a, q2aa);
      contextDraft.quadraticCurveTo(coord[0], coord[1], q2b, q2bb);
      contextDraft.stroke();
      q2c = coord[0];
      q2cc = coord[1];
      //change style of indicators
      this.contextDraft.strokeStyle = "#DCDCDC";
      this.contextDraft.lineWidth = 1;
      //linear indicator from point A to control point 1
      this.contextDraft.moveTo(coord[0],coord[1]);
      this.contextDraft.lineTo(q2a, q2aa);
      this.contextDraft.stroke();
      //linear indicator from point B to control point 1
      this.contextDraft.moveTo(coord[0],coord[1]);
      this.contextDraft.lineTo(q2b, q2bb);
      this.contextDraft.stroke();
      //change back style to user selected style
      this.contextDraft.strokeStyle = currentDrawColor;
      this.contextDraft.lineWidth = currentBrushSize;
    } else {
      contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      contextDraft.beginPath();
      contextDraft.moveTo(q2a, q2aa);
      contextDraft.bezierCurveTo(q2c, q2cc, coord[0], coord[1], q2b, q2bb);
      contextDraft.stroke();
      //change style of indicators
      this.contextDraft.strokeStyle = "#DCDCDC";
      this.contextDraft.lineWidth = 1;
      //linear indicator from point A to control point 1
      this.contextDraft.moveTo(q2c,q2cc);
      this.contextDraft.lineTo(q2a, q2aa);
      this.contextDraft.stroke();
      //linear indicator from point B to control point 2
      this.contextDraft.moveTo(coord[0],coord[1]);
      this.contextDraft.lineTo(q2b, q2bb);
      this.contextDraft.stroke();
      //linear indicator from control point 1 to control point 2
      this.contextDraft.moveTo(coord[0],coord[1]);
      this.contextDraft.lineTo(q2c, q2cc);
      this.contextDraft.stroke();
      //change back style to user selected style
      this.contextDraft.strokeStyle = currentDrawColor;
      this.contextDraft.lineWidth = currentBrushSize;
    }
  }
  // onMouseMove() {}
  onMouseUp(coord) {
    if (clickTracker2 == 0) {
      q2b = coord[0];
      q2bb = coord[1];
    } else if (clickTracker2 == 1) {
    } else {
      contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      contextReal.beginPath();
      contextReal.moveTo(q2a, q2aa);
      contextReal.bezierCurveTo(q2c, q2cc, coord[0], coord[1], q2b, q2bb);
      contextReal.stroke();
    }
    clickTracker2 += 1
    console.log(clickTracker2)
    if (clickTracker2 > 2) {
      clickTracker2 = 0
    } else {}
  }

    
  
  onMouseLeave() {
    clickTracker2 = 0
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
  // onMouseEnter() {}
}
