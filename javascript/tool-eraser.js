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

       // script for stack
       drawErasorInit(coord[0], coord[1], this.context.strokeStyle, this.context.lineWidth, this.context);
    }
    onDragging(coord, event) {
      this.draw(coord[0], coord[1]);

      // script for stack
      drawBrushDrag(coord[0], coord[1], this.context);
    }
  
    onMouseMove() {}
    onMouseUp() {
      // script for stack
      refresh(this.context)
    }
    onMouseLeave() {}
    onMouseEnter() {}
  
    draw(x, y) {
      this.context.lineTo(x, y);
      this.context.moveTo(x, y);
      this.context.closePath();
      this.context.stroke();
    }
  }
  