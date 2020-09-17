/**********************************************
 * Palette Functionality
 * ==================================
 ***********************************************/

 // == Palette stored in an array == //
let palette1 = ['rgb(37, 42, 74)', 'rgb(80, 113, 123)', 'rgb(160, 149, 82)', 'rgb(236, 162, 90)']
let palette2 = ['rgb(221, 255, 247)', 'rgb(147, 225, 216)', 'rgb(255, 166, 158)', 'rgb(170, 68, 101)']
let palette3 = ['rgb(238, 236, 218)', 'rgb(240, 138, 93)', 'rgb(184, 59, 94)', 'rgb(106, 44, 112)']
let palette4 = ['rgb(244, 244, 244)', 'rgb(240, 165, 0)', 'rgb(207, 117, 0)', 'rgb(26, 28, 32)']
let palette5 = ['rgb(40, 223, 153)', 'rgb(153, 243, 189)', 'rgb(210, 246, 197)', 'rgb(246, 247, 212)']
let palette6 = ['rgb(29, 45, 80)', 'rgb(19, 59, 92)', 'rgb(30, 95, 116)', 'rgb(252, 218, 183)']
let palette7 = ['rgb(241, 243, 222)', 'rgb(235, 143, 143)', 'rgb(236, 1, 1)', 'rgb(205, 10, 10)']
let palette8 = ['rgb(240, 154, 233)', 'rgb(255, 193, 250)', 'rgb(255, 231, 143)', 'rgb(255, 211, 107)']

// == Triggering Value for Randomizing Color usage == //
let clickOnPalette1 = false;
let clickOnPalette2 = false;
let clickOnPalette3 = false;
let clickOnPalette4 = false;
let clickOnPalette5 = false;
let clickOnPalette6 = false;
let clickOnPalette7 = false;
let clickOnPalette8 = false;


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

const randomPalette4 = () => {
    for (let j = 0; j < currentInstanceIndex; j++){
        var random = Math.round(Math.random() * palette1.length)
        currentInstance[j].fillStyle = palette4[random]
        currentInstance[j].strokeStyle = palette4[random]
    }
    currentBgColor = palette4[random];
    load(contextReal);
}

const randomPalette5 = () => {
    for (let j = 0; j < currentInstanceIndex; j++){
        var random = Math.round(Math.random() * palette1.length)
        currentInstance[j].fillStyle = palette5[random]
        currentInstance[j].strokeStyle = palette5[random]
    }
    currentBgColor = palette5[random];
    load(contextReal);
}

const randomPalette6 = () => {
    for (let j = 0; j < currentInstanceIndex; j++){
        var random = Math.round(Math.random() * palette1.length)
        currentInstance[j].fillStyle = palette6[random]
        currentInstance[j].strokeStyle = palette6[random]
    }
    currentBgColor = palette6[random];
    load(contextReal);
}

const randomPalette7 = () => {
    for (let j = 0; j < currentInstanceIndex; j++){
        var random = Math.round(Math.random() * palette1.length)
        currentInstance[j].fillStyle = palette7[random]
        currentInstance[j].strokeStyle = palette7[random]
    }
    currentBgColor = palette7[random];
    load(contextReal);
}

const randomPalette8 = () => {
    for (let j = 0; j < currentInstanceIndex; j++){
        var random = Math.round(Math.random() * palette1.length)
        currentInstance[j].fillStyle = palette8[random]
        currentInstance[j].strokeStyle = palette8[random]
    }
    currentBgColor = palette8[random];
    load(contextReal);
}