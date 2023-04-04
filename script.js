var teste;

function iniciar(){
    myGameArea.start();
    teste = new piece(55, 53, 0, 0, "red", 3);
}

var myGameArea = {
canvas : document.createElement("canvas"),
start : function() {
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    this.interval =setInterval(upGameArea, 20);


},
clear : function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
}

function piece(x, y, width, height, color, lineWidth){
this.x = x;
this.y = y;
this.width = width;
this.height = height;  

this.up = function(){
ctx = myGameArea.context;
ctx.fillStyle = color;
ctx.fillRect(this.x, this.y, this.width, this.height);
ctx.beginPath();
ctx.lineWidth = lineWidth;
ctx.arc(x, y, 28, 0, 2 * Math.PI,);
ctx.fill()
ctx.stroke();
}
}

function upGameArea(){
    myGameArea.clear();
    teste.up();
}