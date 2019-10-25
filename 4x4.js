var canvas = document.getElementById("myCanvas"), 
    context = canvas.getContext("2d");

let cellSize = 128;
var img = new Image();
let map = [
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];
canvas.width = 4 * cellSize;
canvas.height = 4 * cellSize;

img.onload = function(){
    context.drawImage(img, 512, 512);
};