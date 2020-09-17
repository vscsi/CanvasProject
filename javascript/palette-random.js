/**********************************************
 * Palette Functionality
 * ==================================
 ***********************************************/

 // == Palette stored in an array == //
let palette1 = ['rgb(37, 42, 74)', 'rgb(80, 113, 123)', 'rgb(160, 149, 82)', 'rgb(236, 162, 90)']
let palette2 = ['rgb(221, 255, 247)', 'rgb(147, 225, 216)', 'rgb(255, 166, 158)', 'rgb(170, 68, 101)']
let palette3 = ['rgb(238, 236, 218)', 'rgb(240, 138, 93)', 'rgb(184, 59, 94)', 'rgb(106, 44, 112)']

// == Triggering Value for Randomizing Color usage == //
let clickOnPalette1 = false;
let clickOnPalette2 = false;
let clickOnPalette3 = false;

// == Randomizing Color with current selected Palette == //
const randomPalette1 = () => {
    for (let j = 0; j < currentInstanceIndex; j++){
        var random = Math.round(Math.random() * palette1.length)
        currentInstance[j].fillStyle = palette1[random]
        currentInstance[j].strokeStyle = palette1[random]
    }
    currentBgColor = palette1[random];
    load(contextReal);
}

const randomPalette2 = () => {
    for (let j = 0; j < currentInstanceIndex; j++){
        var random = Math.round(Math.random() * palette1.length)
        currentInstance[j].fillStyle = palette2[random]
        currentInstance[j].strokeStyle = palette2[random]
    }
    currentBgColor = palette2[random];
    load(contextReal);
}

const randomPalette3 = () => {
    for (let j = 0; j < currentInstanceIndex; j++){
        var random = Math.round(Math.random() * palette1.length)
        currentInstance[j].fillStyle = palette3[random]
        currentInstance[j].strokeStyle = palette3[random]
    }
    currentBgColor = palette3[random];
    load(contextReal);
}




