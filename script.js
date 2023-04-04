var whitePiece = [
    "piece1",
    "piece2",
    "piece3",
    "piece4",
    "piece5",
    "piece6",
    "piece7",
    "piece8",
    "piece9",
    "piece10",
    "piece11",
    "piece12"
];
var blackPiece = [
    "piece1",
    "piece2",
    "piece3",
    "piece4",
    "piece5",
    "piece6",
    "piece7",
    "piece8",
    "piece9",
    "piece10",
    "piece11",
    "piece12"
];

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

    function piece(){
        this.x = x;
        this.y = y;
    }