const randomColor = () => {
    for (var i = 0; i < currentInstanceIndex; i++) {
        var r = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        currentInstance[i].fillStyle = `rgb(${r}, ${b}, ${g})`
        currentInstance[i].strokeStyle = `rgb(${r}, ${b}, ${g})`
        console.log(`rgb(${r}, ${g}, ${b})`)
    };
    currentBgColor = `rgb(${r}, ${b}, ${g})`
    load(contextReal);
}

$('#random-color').click(() => {
    if(clickOnPalette1){
        console.log(`cp1 is true`)
        randomPalette1();
    }
    else if(clickOnPalette2){
        console.log(`cp2 is true`)
        randomPalette2();
    }
    else if(clickOnPalette3){
        randomPalette3();
    }
    else if(clickOnPalette1 == false && clickOnPalette2 == false && clickOnPalette3 == false){
        randomColor();
    }
});


