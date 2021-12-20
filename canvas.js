var canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var context = canvas.getContext("2d");

//draw rectangle
context.fillStyle = "blue";
context.fillRect(100, 100, 100, 100);

//line
context.beginPath();
context.moveTo(50, 300);
context.lineTo(300, 40);
context.strokeStyle = "red";
context.stroke();

//arc & circle
for (var i = 0; i < 4; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var R = Math.random() * 255;
    var G = Math.random() * 255;
    var B = Math.random() * 255;
    var color = `rgb(${R}, ${G}, ${B})`;
    console.log(color);
    context.beginPath();
    context.arc(x, y, 30, 0, Math.PI * 2, false);
    context.strokeStyle = color;
    context.stroke();
}