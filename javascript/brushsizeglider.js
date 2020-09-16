// brush size displaying on html
$('#brushSize').html(currentBrushSize);

// Brush size
function checkBrushSize() {
    currentBrushSize = $('#brushSizeGlider').val();
    $('#brushSize').html(currentBrushSize);
}

$('#brushSizeGlider[type="range"]').mousemove(() => {
    checkBrushSize()
});

$('#brushSizeGlider').click(() => checkBrushSize());
$('#brushSizeGlider').mouseup(() => checkBrushSize());