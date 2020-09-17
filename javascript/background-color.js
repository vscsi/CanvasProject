// ==== Background color picker ==== //

$('#bgcolor-picker').spectrum({
    type: "color",
    showAlpha: "false"
});

$(".sp-val").click(function () {
    g = $("#bgcolor-picker").spectrum("get");
    currentBgColor = g.toRgbString();
    console.log(currentBgColor);
    changeBg(currentBgColor, contextReal);
});
$(".sp-hue").click(function () {
    g = $("#bgcolor-picker").spectrum("get");
    currentBgColor = g.toRgbString();
    console.log(currentBgColor);
    changeBg(currentBgColor, contextReal);
});