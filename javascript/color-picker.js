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