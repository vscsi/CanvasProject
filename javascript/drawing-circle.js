class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
      this.contextReal.fillStyle = "#f44";
      this.origX = coord[0];
      this.origY = coord[1];
    }
    onDragging(coord, event) {
      this.contextDraft.fillStyle = "#f44";
      this.contextDraft.fill();
      this.contextDraft.lineWidth = 1;
      this.contextDraft.arc(
        this.origX,
        this.origY,
        
      );
    }
  
    onMouseMove() {}
    onMouseUp(coord) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }
  