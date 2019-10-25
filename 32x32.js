const canvas = document.getElementById("myCanvas"); 
const context = canvas.getContext("2d");

const imageData = context.createImageData(512, 512);

for (let i = 0; i < imageData.data.length; i += 4) {
    // Modify pixel data
    imageData.data[i + 0] = 190;  // R value
    imageData.data[i + 1] = 0;  // G value
    imageData.data[i + 2] = 210;  // B value
    imageData.data[i + 3] = 255;  // A value
  }
  
   //Draw image data to the canvas
  context.putImageData(imageData, 20, 20);