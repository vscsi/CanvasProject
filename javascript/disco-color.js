// ==== Randomize Color loop ==== //

const discoColor = () => {

    setTimeout(function randomColor() {
        for (var i = 0; i < currentInstanceIndex; i++) {
            var r = Math.round(Math.random() * 255);
            var b = Math.round(Math.random() * 255);
            var g = Math.round(Math.random() * 255);
            currentInstance[i].fillStyle = `rgb(${r}, ${b}, ${g})`
            currentInstance[i].strokeStyle = `rgb(${r}, ${b}, ${g})`
        };
        currentBgColor = `rgb(${r}, ${b}, ${g})`
        load(contextReal);
        discoColor();
    }, 2000);

}


$('#disco-color').click(() => {
    discoColor();
})