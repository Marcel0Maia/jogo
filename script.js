$(document).ready(function(){
    montar_tab();
    selecionar_casa();
});

function montar_tab(){
    for (let i = 0; i < 8; i++) {
        $("#tabuleiro").append("<div id = 'linha_" + i.toString() + "' class = 'linha' >");//adiciona as linhas

        for (let j = 0; j < 8; j++) {
            var nome_casa = "casa_" + i.toString() + "_" + j.toString();
            var casaPreta = false;

            $("#linha_"+i.toString()).append("<div id = '" + nome_casa + "' class = 'casa'>");//adiciona as casas

            //muda a cor da casa
            if (i % 2 == 0){
                if(j % 2 == 0){
                    $("#"+nome_casa.toString()).addClass("casa_b");                
                }else if(j % 2 != 0){
                    $("#"+nome_casa.toString()).addClass("casa_p");
                    casaPreta = true;
                }
            }else if(i % 2 != 0){                
                if(j % 2 == 0){
                    $("#"+nome_casa.toString()).addClass("casa_p");                
                    casaPreta = true;
                }else if(j % 2 != 0){
                    $("#"+nome_casa.toString()).addClass("casa_b");
                }
            }
            
            if(casaPreta === true) {
                if(i < 3) {
                    $("#"+nome_casa.toString()).append("<img src='/images/pecaPreta.svg' class = 'peca'>");
                }else if(i > 4){
                    $("#"+nome_casa.toString()).append("<img src='/images/pecaBranca.svg' class = 'peca'>");
                }
            }
        }
    }
}


function selecionar_casa(){
    var casa_selecionada = null;
    var peca_selecionada = null;


    $(".casa_p").click(function(){
    
    //pega as coordenadas da peca selecionada e as coordenadas da proxima casa
    if(peca_selecionada != null){
        var anteriorI = parseInt(casa_selecionada.substr(5, 1));
        var anteriorJ = parseInt(casa_selecionada.substr(7, 1));
    
        var coorI = parseInt($(this).attr("id").substr(5, 1));
        var coorJ = parseInt($(this).attr("id").substr(7, 1));

        var dI = parent((anteriorI - coorI) < 0? (anteriorI - coorI)*(-1): (anteriorI - coorI));
        var dJ = parent((anteriorJ - coorJ) < 0? (anteriorJ - coorJ)*(-1): (anteriorJ - coorJ));
    }

    $("#"+casa_selecionada).removeClass("casa_selecionada");
    var casa_anterior = casa_selecionada;
    var peca_anterior = peca_selecionada;
    casa_selecionada = $(this).attr("id");
    $("#"+casa_selecionada).addClass("casa_selecionada");
    peca_selecionada = $("#"+casa_selecionada).attr("id");

    if(peca_selecionada == null){
        
    }

    })
}