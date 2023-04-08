const board = document.querySelector(".tabuleiro");
var tabuleiro = [];


function drawBoard() {
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let casa = document.createElement("div");
            casa.setAttribute("id", `i${i}j${j}`);
            casa.setAttribute("class", "casa");
            board.appendChild(casa);

            if(i % 2 == 0) {
                if(j % 2 == 0){
                    casa.style.backgroundColor = "white";
                    casa.style.color = "black"
                } else {
                    casa.style.backgroundColor = "black";
                    casa.style.color = "white"
                }
            } else {
                if(j % 2 == 0){
                    casa.style.backgroundColor = "black";
                    casa.style.color = "white"
                } else {
                    casa.style.backgroundColor = "white";
                    casa.style.color = "black"
                }
            }
            //casa.innerHTML= `L${i}C${j}`
        }
    }
}

drawBoard();