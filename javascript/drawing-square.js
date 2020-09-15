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
      this.contextReal.strokeStyle = currentDrawColor;
      this.contextReal.lineWidth = currentBrushSize;
      this.origX = coord[0];
      this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.strokeStyle = currentDrawColor;
        this.contextDraft.lineWidth = currentBrushSize;
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.strokeRect(
          this.origX,
          this.origY,
          coord[0] - this.origX,
          coord[1] - this.origY
        );
      }
    
      onMouseMove() {}
      onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        drawStrokeSquare(this.origX, this.origY, coord[1] - this.origY, "stroke", this.contextReal.strokeStyle, this.contextReal.lineWidth, "#", this.contextReal)
        // this.contextReal.strokeRect(
        //   this.origX,
        //   this.origY,
        //   coord[1] - this.origY,
        //   coord[1] - this.origY
        // );
      }
    onMouseLeave() {}
    onMouseEnter() {}
  }
  