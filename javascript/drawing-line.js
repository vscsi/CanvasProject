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
    this.contextReal.strokeStyle = currentDrawColor;
    this.contextReal.lineWidth = currentBrushSize;
    // this.contextDraft.lineWidth = currentBrushSize;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    // this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.strokeStyle = currentDrawColor;
    this.contextDraft.moveTo(coord[0],coord[1]);
    this.contextDraft.lineTo(this.origX,this.origY);
    this.contextDraft.stroke();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    // this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // this.contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0],coord[1]);
    this.contextReal.lineTo(this.origX,this.origY);
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
