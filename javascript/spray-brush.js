/**********************************************
 * Spray Brush Functionality
 * ==================================
 ***********************************************/
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

var x, y, timeout;
var density = 50;


class SprayBrush extends PaintFunction {
    // This class extends the PaintFunction class
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
        this.context.fillStyle = currentDrawColor;
        contextReal.lineJoin = contextReal.lineCap = 'round';
        x = coord[0];
        y = coord[1];
        timeout = setTimeout(function draw() {
            for (var i = density; i > 0; i--) {
                var angle = getRandomFloat(0, Math.PI * 2);
                var radius = getRandomFloat(0, 20);
                contextReal.fillRect(
                    x + radius * Math.cos(angle),
                    y + radius * Math.sin(angle),
                    1, 1);
            }

            if (!timeout) return;
            timeout = setTimeout(draw, 50);
            console.log(timeout)
        }, 50);

        // script for stack
        // drawBrushInit(coord[0], coord[1], this.context.fillStyle, this.context.lineWidth, this.context);
    }
    onDragging(coord, event) {
        x = coord[0];
        y = coord[1];

        // script for stack
        // drawBrushDrag(coord[0], coord[1], this.context);

    }

    onMouseMove() {}
    onMouseUp() {
        clearTimeout(timeout);
        return
        // script for stack
        // refresh(this.context)
    };
    onMouseLeave() {}
    onMouseEnter() {}
}