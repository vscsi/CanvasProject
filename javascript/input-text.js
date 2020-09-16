let containInput = false;

class DrawText extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
    }

    onMouseDown(coord, event) {
        commitText(event);
    }

    onDragging() {}
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
}

function commitText(event) {
    const font = '26px san-serif';

    function addInput(x, y) {
        if (containInput == false) {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Enter your text here';
            input.style.background = 'transparent';
            input.style.position = 'fixed';
            input.style.top = `${y}px`;
            input.style.left = `${x}px`;
            input.style.width = `${300}px`;
            input.style.zIndex = 999999;
            input.onkeydown = handleEnter;
            document.body.appendChild(input);
            containInput = true;
        }
    }

    function handleEnter(event) {
        const keyCode = event.keyCode;
        if (keyCode == 13) {
            drawText(this.value);
            document.body.removeChild(this);
        } else if (keyCode == 27) {
            document.body.removeChild(this);
        }
    }

    function drawText(text, x, y) {
        contextReal.textBaseline = 'top';
        contextReal.textAlign = 'left';
        contextReal.font = font;
        contextReal.fillStyle = currentDrawColor;
        contextReal.fillText(text, event.offsetX, event.offsetY);
    }

    addInput(event.clientX, event.clientY);

}