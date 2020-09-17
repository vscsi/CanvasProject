/**********************************************
 * Drawing Circle Functionality
 * ==================================
 ***********************************************/

class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = currentDrawColor;
    this.contextReal.lineWidth = currentBrushSize;
    this.contextDraft.lineWidth = currentBrushSize;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.strokeStyle = currentDrawColor;
    this.contextDraft.arc(this.origX, this.origY, Math.sqrt(Math.pow(coord[0] - this.origX, 2) + Math.pow(coord[1] - this.origY, 2)), 0, 2 * Math.PI,false);
    this.contextDraft.stroke();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    drawCircle(this.origX, this.origY, coord[0], coord[1], "stroke", this.contextReal.strokeStyle, this.contextReal.lineWidth, this.contextReal.fillStyle, this.contextReal);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
