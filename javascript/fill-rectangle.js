/**********************************************
 * Fill Rectangle Functionality
 * ==================================
 ***********************************************/

class FillRectangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextReal.fillStyle = currentDrawColor;
        this.contextReal.lineWidth = currentBrushSize;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.fillStyle = currentDrawColor;
        this.contextDraft.lineWidth = currentBrushSize;
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
        );
    }

    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        drawFillRect(coord[0], coord[1], this.origX, this.origY, "fill", this.contextReal.fillStyle, this.contextReal.lineWidth, currentDrawColor, this.contextReal);
    }
}