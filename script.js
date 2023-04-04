var teste;

function iniciar(){
    myGameArea.start();
    teste = new piece(27, 23, 59, 59, "red");
}

var myGameArea = {
canvas : document.createElement("canvas"),
start : function() {
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
}
}

function piece(x, y, width, height, color){
this.x = x;
this.y = y;
this.width = width;
this.height = height;  
ctx = myGameArea.context;
ctx.fillStyle = color;
ctx.fillRect(this.x, this.y, this.width, this.height);
}