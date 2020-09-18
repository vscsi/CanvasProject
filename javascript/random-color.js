/**********************************************
 * Randomizing Color Functionality
 * ==================================
 ***********************************************/
// == Basic Randomizing == //
const randomColor = () => {
    for (var i = 0; i < currentInstanceIndex; i++) {
        var r = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        currentInstance[i].fillStyle = `rgb(${r}, ${b}, ${g})`
        currentInstance[i].strokeStyle = `rgb(${r}, ${b}, ${g})`
    };
    currentBgColor = `rgb(${r}, ${b}, ${g})`
    load(contextReal);
}

// == Depending on which palette chosen (or not chosen), and radomize according to palette ==//
$('#random-color').click(() => {
    if(clickOnPalette1){
        randomPalette1();
    }
    else if(clickOnPalette2){
        randomPalette2();
    }
    else if(clickOnPalette3){
        randomPalette3();
    }
    else if(clickOnPalette4){
        randomPalette4();
    }
    else if(clickOnPalette5){
        randomPalette5();
    }
    else if(clickOnPalette6){
        randomPalette6();
    }
    else if(clickOnPalette7){
        randomPalette7();
    }
    else if(clickOnPalette8){
        randomPalette8();
    }
    else if(clickOnPalette1 == false && clickOnPalette2 == false && clickOnPalette3 == false && clickOnPalette4 == false && clickOnPalette5 == false && clickOnPalette6 == false && clickOnPalette7 == false && clickOnPalette8 == false){
        randomColor();
    }
});


