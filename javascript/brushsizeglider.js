// ==== Displaying Brush Size on HTML ==== //
$('#brushSize').html(currentBrushSize);

// ==== Check brush size when moving glider ==== //
function checkBrushSize() {
    currentBrushSize = $('#brushSizeGlider').val();
    $('#brushSize').html(currentBrushSize);
}

$('#brushSizeGlider[type="range"]').mousemove(() => {
    checkBrushSize()
});

$('#brushSizeGlider').click(() => checkBrushSize());
$('#brushSizeGlider').mouseup(() => checkBrushSize());