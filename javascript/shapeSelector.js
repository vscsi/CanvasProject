const loadShapeSelector = () => {
    $("#shapeList").empty();
    for (var i = currentInstanceIndex - 1; i >= 0; i--) {
        $("#shapeList").append(`<li id=shape${i} class="shapes">#${i+1}: ${currentInstance[i].name}</li>`);
        $(`#shape${i}`).append(`
            <div class="action-btn-container">
                <span class="action-btn changeStrokeStyle" id="changeStrokeStyle${i}" index="${i}" style="background: ${currentInstance[i].strokeStyle}">S</span>
                <span class="action-btn changeFillStyle" id="changeFillStyle${i}" index="${i}" style="background: ${currentInstance[i].fillStyle}">F</span>
                <span class="action-btn changeLineWidth" id="changeLineWidth${i}" index="${i}">${currentInstance[i].lineWidth}</span>
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
            console.log("fillstyle called");
            // Plan B:
            currentInstance[targetIndex].fillStyle = currentDrawColor;
            load(contextReal);
            // (Object.assign({}, currentInstance[targetIndex]));
        })
    })
};

const changeLineWidth = () => {
    document.querySelectorAll(".changeLineWidth").forEach( (element) => {
        element.addEventListener("click", (event) => {
            var targetIndex = event.target.getAttribute("index");
            console.log("lineWidth called");
            // Plan B:
            currentInstance[targetIndex].lineWidth = currentBrushSize;
            load(contextReal);
            // (Object.assign({}, currentInstance[targetIndex]));
        })
    })
};

const changeStrokeStyle = () => {
    document.querySelectorAll(".changeStrokeStyle").forEach( (element) => {
        element.addEventListener("click", (event) => {
            console.log("strokeStyle called");
            var targetIndex = event.target.getAttribute("index");
            // Plan B:
            currentInstance[targetIndex].strokeStyle = currentDrawColor;
            load(contextReal);
            // (Object.assign({}, currentInstance[targetIndex]));
        })
    })
};

const changeButtons = () => {
    loadShapeSelector();
    changeFillStyle();
    changeStrokeStyle();
    changeLineWidth();
}




// ************ function calls ************ //
