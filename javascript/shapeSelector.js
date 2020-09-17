const loadShapeSelector = () => {
    $("#shapeList").empty();
    for (var i = currentInstanceIndex - 1; i >= 0; i--) {
        $("#shapeList").append(`<li id=shape${i} class="shapes">${currentInstance[i].name} ${i}</li>`);
        $(`#shape${i}`).append(`<button class="changeStrokeStyle id="changeStrokeStyle${i}" index="${i}">a</button>`);
        $(`#shape${i}`).append(`<button class="changeStrokeWidth" id="changeStrokeWidth${i}" index="${i}">b</button>`);
        $(`#shape${i}`).append(`<button class="changeFillStyle" id="changeFillStyle${i}" index="${i}">c</button>`);
    }; 
};

const changeFillStyle = () => {
    document.querySelectorAll(".changeFillStyle").forEach( (element) => {
        element.addEventListener("click", (event) => {
            var targetIndex = event.target.getAttribute("index");
            
            // currentInstance[currentInstanceIndex] = currentInstance[targetIndex];
            // for(keys in currentInstance[currentInstanceIndex]) {
            //     currentInstance[currentInstanceIndex][keys] = Object.assign({}, currentInstance[targetIndex])[keys]
            // };
            currentInstance[currentInstanceIndex].strokeStyle = currentDrawColor;
            refresh(contextReal);
            // (Object.assign({}, currentInstance[targetIndex]));
        })
    })
};




// ************ function calls ************ //

loadShapeSelector();

changeFillStyle();