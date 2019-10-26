const map4 = [
    ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"],
    ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
    ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
    ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"]
];

const canvas = document.getElementById("myCanvas"); 
const context = canvas.getContext("2d");

width = map4[0].length; 
height = map4.length;
var cellSize = 128;

canvas.width = 4 * cellSize;
canvas.height = 4 * cellSize;

for(var row = 0; row < height; row++) {
    for(var col = 0; col < width; col++) {
        context.fillStyle = map4[row][col];
        context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
}
