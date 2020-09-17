const loadShapeSelector = () => {
    $("#shapeList").empty();
    for (var i = currentInstanceIndex - 1; i >= 0; i--) {
        $("#shapeList").append(`<li id=shape${i} class="shapes">#${i+1}: ${currentInstance[i].name}</li>`);
        $(`#shape${i}`).append(`
            <div class="action-btn-container">
                <span class="action-btn changeStrokeStyle" id="changeStrokeStyle${i}" index="${i}">a</span>
                <span class="action-btn changeStrokeWidth" id="changeStrokeWidth${i}" index="${i}">b</span>
                <span class="action-btn changeFillStyle" id="changeFillStyle${i}" index="${i}">c</span>
            </div>
            `);
        // $(`#shape${i}`).append(`<span class="action-btn changeStrokeWidth" id="changeStrokeWidth${i}" index="${i}">b</span>`);
        // $(`#shape${i}`).append(`<span class="action-btn changeFillStyle" id="changeFillStyle${i}" index="${i}">c</span>`);
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