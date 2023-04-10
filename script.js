$(document).ready(function(){
    montar_tab();
    selecionar_casa();
});

function montar_tab(){
    for (let i = 0; i < 8; i++) {
        $("#tabuleiro").append("<div id = 'linha_" + i.toString() + "' class = 'linha' >");//adiciona as linhas

        for (let j = 0; j < 8; j++) {
            var nome_casa = "casa_" + i.toString() + "_" + j.toString();

            $("#linha_"+i.toString()).append("<div id = '" + nome_casa + "' class = 'casa'>");//adiciona as casas

            if (i % 2 == 0){
                if(j % 2 == 0){
                    $("#"+nome_casa.toString()).addClass("casa_b");                
                }else if(j % 2 != 0){
                    $("#"+nome_casa.toString()).addClass("casa_p");
                }
            }else if(i % 2 != 0){                
                if(j % 2 == 0){
                    $("#"+nome_casa.toString()).addClass("casa_p");                
                }else if(j % 2 != 0){
                    $("#"+nome_casa.toString()).addClass("casa_b");
                }
            }
        }
    }
}

function selecionar_casa(){
    var casa_selecionada = null;
    
    $(".casa").click(function(){
    $("#"+casa_selecionada).removeClass("casa_selecionada");
    casa_selecionada = $(this).attr("id");
    $("#"+casa_selecionada).addClass("casa_selecionada");
})
}