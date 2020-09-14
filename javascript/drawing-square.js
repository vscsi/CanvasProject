/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
class DrawingSquare extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
      this.contextReal.fillStyle = currentDrawColor;
      this.origX = coord[0];
      this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.fillStyle = currentDrawColor;
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillRect(
          this.origX,
          this.origY,
          coord[1] - this.origY,
          coord[1] - this.origY
        );
      }
    
      onMouseMove() {}
      onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.fillRect(
          this.origX,
          this.origY,
          coord[1] - this.origY,
          coord[1] - this.origY
        );
      }
    onMouseLeave() {}
    onMouseEnter() {}
  }
  