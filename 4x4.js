const map = [
    ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"],
    ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
    ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
    ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"]
];

const canvas = document.getElementById("myCanvas"); 
const context = canvas.getContext("2d");

width = map[0].length; 
height = map.length;
var cellSize = 128;

canvas.width = 4 * cellSize;
canvas.height = 4 * cellSize;

for(var row = 0; row < height; row++) {
    for(var col = 0; col < width; col++) {
        context.fillStyle = map[row][col];
        context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
}
