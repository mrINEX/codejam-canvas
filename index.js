var canvas = document.getElementById("myCanvas"), 
context = canvas.getContext("2d");

var img = new Image();
img.src = 'data/image.png';

img.onload = function() {
    context.drawImage(img, 128, 128);
};

let xi = document.getElementById('img');
let x4 = document.getElementById('x4');
let x32 = document.getElementById('x32');
console.log(xi);

xi.addEventListener('click', ()=>{
    const scr = document.getElementById('i')
    console.log(scr)
    scr.src = 'index.js'
})

x4.addEventListener('click', ()=>{
    const scr = document.getElementById('i')
    console.log(scr)
    scr.src = '4x4.js'
})