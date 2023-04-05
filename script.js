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

var coluna = [
    56,
    113,
    168,
    224,
    280,
    336,
    390,
    447
];
var linha = [
    53,
    110,
    166,
    222,
    277,
    332,
    387,
    443
];


function iniciar(){
    myGameArea.start();
    whitePiece[0] = new piece(coluna[0], linha[0], 0, 0, "white", 3);
    whitePiece[1] = new piece(coluna[2], linha[0], 0, 0, "white", 3);
    whitePiece[2] = new piece(coluna[4], linha[0], 0, 0, "white", 3);
    whitePiece[3] = new piece(coluna[6], linha[0], 0, 0, "white", 3);
    whitePiece[4] = new piece(coluna[1], linha[1], 0, 0, "white", 3);
    whitePiece[5] = new piece(coluna[3], linha[1], 0, 0, "white", 3);
    whitePiece[6] = new piece(coluna[5], linha[1], 0, 0, "white", 3);
    whitePiece[7] = new piece(coluna[7], linha[1], 0, 0, "white", 3);
    whitePiece[8] = new piece(coluna[0], linha[2], 0, 0, "white", 3);
    whitePiece[9] = new piece(coluna[2], linha[2], 0, 0, "white", 3);
    whitePiece[10] = new piece(coluna[4], linha[2], 0, 0, "white", 3);
    whitePiece[11] = new piece(coluna[6], linha[2], 0, 0, "white", 3);

    blackPiece[0] = new piece(coluna[0], linha[5], 0, 0, "black", 3);
    blackPiece[1] = new piece(coluna[2], linha[5], 0, 0, "black", 3);
    blackPiece[2] = new piece(coluna[4], linha[5], 0, 0, "black", 3);
    blackPiece[3] = new piece(coluna[6], linha[5], 0, 0, "black", 3);
    blackPiece[4] = new piece(coluna[1], linha[6], 0, 0, "black", 3);
    blackPiece[5] = new piece(coluna[3], linha[6], 0, 0, "black", 3);
    blackPiece[6] = new piece(coluna[5], linha[6], 0, 0, "black", 3);
    blackPiece[7] = new piece(coluna[7], linha[6], 0, 0, "black", 3);
    blackPiece[8] = new piece(coluna[0], linha[7], 0, 0, "black", 3);
    blackPiece[9] = new piece(coluna[2], linha[7], 0, 0, "black", 3);
    blackPiece[10] = new piece(coluna[4], linha[7], 0, 0, "black", 3);
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
        ctx.arc(this.x, this.y, 26, 0, 2 * Math.PI,);
        ctx.fill()
        ctx.stroke();
    }
}   

function upGameArea(){
    myGameArea.clear();
    for (let p = 0; p < 12; p++) {  
    whitePiece[p].up();
    blackPiece[p].up();
    }
}