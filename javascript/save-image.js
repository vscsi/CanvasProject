
    // Save canvas image as data url ( default: PNG)
    var saveButton = document.getElementById('save');

    saveButton.addEventListener('click', function() {
      var imageName = prompt('Save as...?');
      var canvasDataURL = canvas.toDataURL();
      var a = document.createElement('a');
      a.href = canvasDataURL;
      a.download = imageName || 'drawing';
      a.click();
    });
  
  