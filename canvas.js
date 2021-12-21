var canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var context = canvas.getContext("2d");

//animmate circle

//create circle object
function Circle(x, y, dx, dy, radius, speed, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
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
        //draw new circle
        this.draw();
    }
}

//create circles
//store circles in array
var circleArray = [];
for ( var i = 0; i < 50; i++){
    //set variables
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var speed = 1;
    var dx = (Math.random() - 0.5) * speed;
    var dy = (Math.random() - 0.5) * speed;
    var R = Math.random() * 255;
    var G = Math.random() * 255;
    var B = Math.random() * 255;
    var color = `rgb(${R}, ${G}, ${B})`;
    //make circle
    circleArray.push(new Circle(x, y, dx, dy, radius, speed, color));
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
//call function
animate();