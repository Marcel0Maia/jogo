function iniciar(){
    myGameArea.start(); 
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

    function peça(){
        this.x = x;
        this.y = y;
    }