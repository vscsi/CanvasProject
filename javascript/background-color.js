// ==== Background color picker ==== //

$('#bgcolor-picker').spectrum({
    type: "color",
    showAlpha: "false"
});

$(".sp-choose").click(function () {
    g = $("#bgcolor-picker").spectrum("get");
    currentBgColor = g.toRgbString();
    console.log(currentBgColor);
    changeBg(currentBgColor, contextReal);
});