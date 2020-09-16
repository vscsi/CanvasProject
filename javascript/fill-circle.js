/**********************************************
 * Fill Circle Functionality
 * ==================================
 ***********************************************/

class FillCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
      this.contextReal.fillStyle = currentDrawColor;
      this.contextReal.lineWidth = currentBrushSize;
      this.contextDraft.lineWidth = currentBrushSize;
      this.origX = coord[0];
      this.origY = coord[1];
    }
    onDragging(coord, event) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.fillStyle = currentDrawColor;
      this.contextDraft.arc(this.origX, this.origY, Math.sqrt(Math.pow(coord[0] - this.origX, 2) + Math.pow(coord[1] - this.origY, 2)), 0, 2 * Math.PI,false);
      this.contextDraft.fill();
    }
  
    onMouseMove() {}
    onMouseUp(coord) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      drawCircle(this.origX, this.origY, coord[0], coord[1], "fill", this.contextReal.fillStyle, this.contextReal.lineWidth, this.contextReal.fillStyle, this.contextReal);
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }
  