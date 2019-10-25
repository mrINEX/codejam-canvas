var canvas = document.getElementById("myCanvas"), 
    context = canvas.getContext("2d");

let cellSize = 32;
var img = new Image();
img.src = 'data/image.png';
img.onload = function(){
    context.drawImage(img, 0, 0);
};