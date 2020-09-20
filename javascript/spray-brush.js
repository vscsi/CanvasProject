/**********************************************
 * Spray Brush Functionality
 * ==================================
 ***********************************************/
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

var x, y, timeout;
var density = 50;
// script for stack:
var tempX = [];
var tempY = [];
// end of script for stack

class SprayBrush extends PaintFunction {
    // This class extends the PaintFunction class
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
        this.context.fillStyle = currentDrawColor;
        console.log(`current draw color = ${currentDrawColor}`);
        contextReal.lineJoin = contextReal.lineCap = 'round';
        x = coord[0];
        y = coord[1];
        timeout = setTimeout(function draw() {
            for (var i = density; i > 0; i--) {
                var angle = getRandomFloat(0, Math.PI * 2);
                var radius = getRandomFloat(0, 20);
                var randomX = x + radius * Math.cos(angle);
                var randomY = y + radius * Math.sin(angle);
                console.log(this.tempX);
                
                // script for stack
                tempX.push(randomX);
                tempY.push(randomY);
                // end of script for stack

                contextReal.fillRect(
                    randomX,
                    randomY,
                    1, 1);
            }

            if (!timeout) return;
            timeout = setTimeout(draw, 50);
        }, 50);

    }
    onDragging(coord, event) {
        x = coord[0];
        y = coord[1];
    }

    onMouseMove() {}
    onMouseUp() {
        clearTimeout(timeout);

        // script for stack
        drawSprayBrush1(tempX, tempY, this.context.fillStyle, this.context);
        tempX =[];
        tempY =[];
        // end of script for stack
    };
    onMouseLeave() {}
    onMouseEnter() {}
}