// ==== Brush and Text color picker ==== //
$('#color-picker').spectrum({
  type: "color",
  showAlpha: "false"
});

$(".sp-val").click(function () {
  t = $("#color-picker").spectrum("get");
  currentDrawColor = t.toRgbString()
});

$(".sp-hue").click(function () {
  t = $("#color-picker").spectrum("get");
  currentDrawColor = t.toRgbString()
});


//==== from palette ====//

// == palette1 == //
$("#a252A4A").click(() => {
  clickOnPalette1 = true;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  currentDrawColor = '#252A4A'
})
$("#a50717B").click(() => {
  clickOnPalette1 = true; 
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  currentDrawColor = '#50717B'
})
$("#aA09552").click(() => {
  clickOnPalette1 = true;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  currentDrawColor = '#A09552'
})
$("#aECA25A").click(() => {
  clickOnPalette1 = true;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  currentDrawColor = '#ECA25A'
})

// == palette 2 == //
$("#bDDFFF7").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = true;
  clickOnPalette3 = false;
  currentDrawColor = '#DDFFF7'
})
$("#b93E1D8").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = true;
  clickOnPalette3 = false;
  currentDrawColor = '#93E1D8'
})
$("#bFFA69E").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = true;
  clickOnPalette3 = false;
  currentDrawColor = '#FFA69E'
})
$("#bAA4465").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = true;
  clickOnPalette3 = false;
  currentDrawColor = '#AA4465'
})

// == palette 3 == //
$("#ceeecda").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = true;
  currentDrawColor = '#eeecda'
})
$("#cf08a5d").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = true;
  currentDrawColor = '#f08a5d'
})
$("#cb83b5e").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = true;
  currentDrawColor = '#b83b5e'
})
$("#c6a2c70").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = true;
  currentDrawColor = '#6a2c70'
})
