/**********************************************
 * Tool: Fill Color Functionality
 * ==================================
 ***********************************************/


  /*
    1. write fourSides() to get adjacent pixels of given set of coords (i.e. up, down, left, right of marker(an array of coords to be checked))
    1.2 push 4 new adjacent coords to newMarker
    2. write fillColor() that takes user selected pixel coord[0], coord[1], and pass to marker
        3. if marker not empty, for each marker coords, run fourSides(), remove coord from marker
        4. for each item in newMarker, check if color == currentColor:
            if true: change current pixel color, 
  */


class ToolFill extends PaintFunction {
    constructor(contextReal) {
      super();
      this.context = contextReal;
      
    }
  

    onMouseDown(coord, event) {
        
        // this.context.beginPath();
        // this.context.strokeStyle = currentDrawColor;
        // this.context.lineWidth = currentBrushSize;
        // this.context.beginPath();
        // this.context.moveTo(coord[0],coord[1]);
        // this.context.lineTo(coord[0],coord[1]+1);
        // this.context.stroke();

        let point = [coord[0],coord[1]]
        var targetColor = this.context.getImageData(coord[0], coord[1], canvasReal.width, canvasReal.height);

        console.log(point)
        console.log(targetColor)
        console.log(currentDrawColor)


        // getPixel(point)
        

        // var selectedX = coord[0]
        // var selectedY = coord[1]
        // var marker = [];

        // marker.push(selectedX, selectedY)
        // console.log(marker)
        

        // if (marker !== []) {
        //     marker.forEach(function(x){
           
        //     })
            
            
        // }



        // console.log(marker)

        var pixels = this.context.getImageData(coord[0], coord[1], canvasReal.width, canvasReal.height);

        console.log(pixels)

        for (let i = 0; i < pixels; i += 4) {
            var red = pixels.data[i];
            var green = pixels.data[i+1];
            var blue = pixels.data[i+2];

            pixels.data[i] = 0;
            pixels.data[i+1] = 0;
            pixels.data[i+2] = blue;

            this.context.getImageData(pixels, 0, 0);
        }

        console.log(pixels)
        // console.log(selectedPixel.data)
        // console.log(selected)
       

    }


    onDragging(coord, event) {}
    onMouseMove() {}
    onMouseUp(coord) {}
    onMouseLeave() {dragging = false}
    onMouseEnter() {dragging = true}

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.moveTo(x, y);
        this.context.closePath();
        this.context.stroke();
    }  

    /*
        #1 get selected color
        #2 mark selected pixel (push coords to new arr])
        #3 compare selected pixel's 4 adjacent pixels
        #4 change color, re-mark adjacent pixels with same original color
        #5 loop will marker !== empty
    */



   floodFill(point, targetColor, currentDrawColor) {
   
    }

    getPixel(point) {
        if (point.x < 0 || point.y < 0 || point.x >= this.imageData.width, point.y >= this.imageData.height) {
            return [-1, -1, -1, -1]
            }
    }

}   
  
