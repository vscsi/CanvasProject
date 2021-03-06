/**********************************************
 * Topol: Brush Functionality
 * ==================================
 ***********************************************/
class ToolBrush extends PaintFunction {
    // This class extends the PaintFunction class
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }
  
    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
      this.context.strokeStyle = currentDrawColor;
      this.context.lineJoin = "round";
      this.context.lineWidth = currentBrushSize;
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
      this.draw(coord[0], coord[1]);

      // script for stack
      drawBrushInit(coord[0], coord[1], this.context.strokeStyle, this.context.lineWidth, this.context);
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
    };
    onMouseLeave() {}
    onMouseEnter() {}
  
    draw(x, y) {
      this.context.lineTo(x, y);
      this.context.moveTo(x, y);
      this.context.closePath();
      this.context.stroke();
    }
  }
  