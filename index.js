var canvas = document.getElementById("myCanvas"), 
context = canvas.getContext("2d");

var img = new Image();
img.src = 'data/image.png';

img.onload = function() {
    context.drawImage(img, 0, 0);
};
var imageData = context.getImageData(0,0, 512, 512);
