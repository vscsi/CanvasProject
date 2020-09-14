/**********************************************
 * Tool: Eraser Functionality
 * ==================================
 ***********************************************/
class ToolEraser extends PaintFunction {
    // This class extends the PaintFunction class
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }
  
    // On mouse down, ensure that the eraser has these features
    onMouseDown(coord, event) {
      this.context.strokeStyle = currentBgColor;
      this.context.lineJoin = "round";
      this.context.lineWidth = currentBrushSize;
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
      this.draw(coord[0], coord[1]);
    }
    onDragging(coord, event) {
      this.draw(coord[0], coord[1]);
    }
  
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
  
    draw(x, y) {
      this.context.lineTo(x, y);
      this.context.moveTo(x, y);
      this.context.closePath();
      this.context.stroke();
    }
  }
  