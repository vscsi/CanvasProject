class DrawText extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0
    }
    onMouseUp(coord, event) {

        if (this.clickNum !== 1) {
            $('#textBox').css('display', 'block')

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            this.contextDraft.strokeStyle = curStroke;
            this.contextDraft.fillStyle = curFill;
            this.contextDraft.lineWidth = curWidth;
            this.contextDraft.font = curFont;

            this.origX = coord[0];
            this.origY = coord[1];

            textBox.style.left = this.origX + 'px';
            textBox.style.top = this.origY + 'px';
            textContent = textBox.value;
            textBox.style['z-index'] = 6;
            textBox.value = "";

            this.contextDraft.fillText(textContent, this.origX, this.origY);
            this.clickNum++
        }

        else if (this.clickNum === 1) {
            $('#textBox').css('display', '')

            this.contextReal.strokeStyle = curStroke;
            this.contextReal.fillStyle = curFill;
            this.contextReal.lineWidth = curWidth;
            this.contextReal.font = curFont;

            textContent = textBox.value;
            textBox.style['z-index'] = 1;
            textBox.value = "";

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.fillText(textContent, this.origX, this.origY);
            this.clickNum = 0
        }
    }
    onMouseLeave() { }
    onMouseEnter() { }
    onDragging() { }
    onMouseDown() { }
}
