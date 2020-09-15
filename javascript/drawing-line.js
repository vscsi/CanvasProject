/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/

class DrawingLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    // this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
    
  }
  onDragging(coord, event) {
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    contextDraft.beginPath();
    contextDraft.strokeStyle = currentDrawColor;
    contextDraft.lineWidth = currentBrushSize;
    contextDraft.moveTo(coord[0],coord[1]);
    contextDraft.lineTo(this.origX,this.origY);
    contextDraft.stroke();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    // this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // this.contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    drawStraightLine(coord[0], coord[1], this.origX, this.origY, this.contextReal.strokeStyle, this.contextReal.lineWidth, this.contextReal);
    // this.contextReal.beginPath();
    // this.contextReal.moveTo(coord[0],coord[1]);
    // this.contextReal.lineTo(this.origX,this.origY);
    // this.contextReal.stroke();
  }
  onMouseLeave() {
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
  onMouseEnter() {}
}
