 // Save canvas image as data url 
 var canvas = document.getElementById("canvas-real");

 var saveButton = document.getElementById('save');

 saveButton.addEventListener('click', function () {
   var imageName = prompt('Save as...?');
   var canvasDataURL = canvas.toDataURL('image/jpeg', 1);
   var a = document.createElement('a');
   a.href = canvasDataURL;
   a.download = imageName || 'drawing';
   a.click();
 });