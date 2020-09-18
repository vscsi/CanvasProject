// ==== Brush and Text color picker ==== //
$('#color-picker').spectrum({
  type: "color"
});

$(".sp-val").click(function () {
  t = $("#color-picker").spectrum("get");
  console.log(currentDrawColor);
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
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#252A4A'
})
$("#a50717B").click(() => {
  clickOnPalette1 = true;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#50717B'
})
$("#aA09552").click(() => {
  clickOnPalette1 = true;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#A09552'
})
$("#aECA25A").click(() => {
  clickOnPalette1 = true;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#ECA25A'
})

// == palette 2 == //
$("#bDDFFF7").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = true;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#DDFFF7'
})
$("#b93E1D8").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = true;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#93E1D8'
})
$("#bFFA69E").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = true;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#FFA69E'
})
$("#bAA4465").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = true;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#AA4465'
})

// == palette 3 == //
$("#ceeecda").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = true;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#eeecda'
})
$("#cf08a5d").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = true;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#f08a5d'
})
$("#cb83b5e").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = true;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#b83b5e'
})
$("#c6a2c70").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = true;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#6a2c70'
})

// == palette 4 == //
$("#df4f4f4").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = true;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#f4f4f4'
})
$("#df0a500").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = true;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#f0a500'
})
$("#dcf7500").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = true;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#cf7500'
})
$("#d1a1c20").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = true;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#1a1c20'
})

// == palette 5 == //
$("#e28df99").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = true;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#28df99'
})
$("#e99f3bd").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = true;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#e99f3bd'
})
$("#ed2f6c5").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = true;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#d2f6c5'
})
$("#ef6f7d4").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = true;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#f6f7d4'
})

// == palette 6 == //
$("#f1d2d50").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = true;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#1d2d50'
})
$("#f133b5c").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = true;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#133b5c'
})
$("#f1e5f74").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = true;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#1e5f74'
})
$("#ffcdab7").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = true;
  clickOnPalette7 = false;
  clickOnPalette8 = false;
  currentDrawColor = '#fcdab7'
})

// == palette 7 == //
$("#gf1f3de").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = true;
  clickOnPalette8 = false;
  currentDrawColor = '#f1f3de'
})
$("#geb8f8f").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = true;
  clickOnPalette8 = false;
  currentDrawColor = '#eb8f8f'
})
$("#gec0101").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = true;
  clickOnPalette8 = false;
  currentDrawColor = '#ec0101'
})
$("#gcd0a0a").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = true;
  clickOnPalette8 = false;
  currentDrawColor = '#cd0a0a'
})

// == palette 8 == //
$("#hf09ae9").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = true;
  currentDrawColor = '#f09ae9'
})
$("#hffc1fa").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = true;
  currentDrawColor = '#ffc1fa'
})
$("#hffe78f").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = true;
  currentDrawColor = '#ffe78f'
})
$("#hffd36b").click(() => {
  clickOnPalette1 = false;
  clickOnPalette2 = false;
  clickOnPalette3 = false;
  clickOnPalette4 = false;
  clickOnPalette5 = false;
  clickOnPalette6 = false;
  clickOnPalette7 = false;
  clickOnPalette8 = true;
  currentDrawColor = '#ffd36b'
})