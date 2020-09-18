/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/

class DrawingLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    ontextReal.strokeStyle = currentDrawColor;
    contextReal.lineWidth = currentBrushSize;
    contextDraft.lineWidth = currentBrushSize;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    contextDraft.beginPath();
    contextDraft.strokeStyle = currentDrawColor;
    contextReal.strokeStyle = currentDrawColor;
    contextDraft.lineWidth = currentBrushSize;
    contextReal.lineWidth = currentBrushSize;
    contextDraft.moveTo(coord[0],coord[1]);
    contextDraft.lineTo(this.origX,this.origY);
    contextDraft.stroke();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    drawStraightLine(coord[0], coord[1], this.origX, this.origY, this.contextReal.strokeStyle, this.contextReal.lineWidth, this.contextReal);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
