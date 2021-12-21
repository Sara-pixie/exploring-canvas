var canvas = document.querySelector("canvas");
//make canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var context = canvas.getContext("2d");

//resizing the canvas to dynamically window
window.addEventListener("resize", function(event){
    //make canvas full screen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
});

//interactivity of the circles

//create mouse object
var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
var minRadius = 3;
var colorArray = [
    "#FFF587", "#FF8C64", "#FF665A", "#7D6B7D", "#A3A1A8"
]
//listen for mouse movement
window.addEventListener("mousemove", function(event) {
    //get mouse position
    mouse.x = event.x;
    mouse.y = event.y;
});

//animmate circle

//create circle object
function Circle(x, y, dx, dy, radius, speed, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.origRadius = radius;
    this.radius = radius;
    this.speed = speed;
    this.color = color;
    //make circle
    this.draw = function(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
    }
    this.update = function(){
         //change directions when...
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        //make it move by changing x & y values for the next circle
        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius){
                    this.radius += 1;
                }
        } else if(this.radius > this.origRadius) {
            this.radius -= 1;
        }

        //draw new circle
        this.draw();
    }
}

//create circles
var circleArray = [];

function init(){
    circleArray = [];
    //store circles in array
    for ( var i = 0; i < 800; i++){
    //set variables
    var radius = Math.random() * 5 + minRadius;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var speed = 2;
    var dx = (Math.random() - 0.5) * speed;
    var dy = (Math.random() - 0.5) * speed;
    var color = colorArray[Math.floor(Math.random() * colorArray.length)];
    //make circle
    circleArray.push(new Circle(x, y, dx, dy, radius, speed, color));
}
}

// draw and animate circles
function animate(){
    //make a loop
    requestAnimationFrame(animate);
    //clear previous input
    context.clearRect(0, 0, innerWidth, innerHeight);
    //draw circles
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}
//call functions
init();
animate();