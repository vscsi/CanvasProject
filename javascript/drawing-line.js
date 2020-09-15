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
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.strokeStyle = currentDrawColor;
    this.contextReal.lineWidth = currentBrushSize;
    this.contextReal.moveTo(coord[0],coord[1]);
    this.contextReal.lineTo(this.origX,this.origY);
    this.contextReal.stroke();
  }
  onMouseLeave() {
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
  onMouseEnter() {}
}
