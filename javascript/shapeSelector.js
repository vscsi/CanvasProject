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
    }; 
};

const changeFillStyle = () => {
    document.querySelectorAll(".changeFillStyle").forEach( (element) => {
        element.addEventListener("click", (event) => {
            var targetIndex = event.target.getAttribute("index");
            // Plan B:
            currentInstance[targetIndex].fillStyle = currentDrawColor;
            load(contextReal);
        })
    })
};

const changeLineWidth = () => {
    document.querySelectorAll(".changeLineWidth").forEach( (element) => {
        element.addEventListener("click", (event) => {
            var targetIndex = event.target.getAttribute("index");
            // Plan B:
            currentInstance[targetIndex].lineWidth = currentBrushSize;
            load(contextReal);
        })
    })
};

const changeStrokeStyle = () => {
    document.querySelectorAll(".changeStrokeStyle").forEach( (element) => {
        element.addEventListener("click", (event) => {
            var targetIndex = event.target.getAttribute("index");
            // Plan B:
            currentInstance[targetIndex].strokeStyle = currentDrawColor;
            load(contextReal);
        })
    })
};

const changeButtons = () => {
    loadShapeSelector();
    changeFillStyle();
    changeStrokeStyle();
    changeLineWidth();
}

