function eventoClick(){
 alert("Acionou um evento de click");
 document.body.style.backgroundColor = "yellow";

}

function eventoDblClick (){
    alert("Evento de clique duplo")
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}
function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";

}

function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append("O mouse moveu");
    
}

function mudou(){
    console.log("MUDOUUU");
}

function mudouNe(){
    console.log("Eita,");
}


function teclaPressionada(){

    let input = document.getElementById("testePressionada").value;
    console.log(input);

}

function teclaUp(){
    let input = document.getElementById("testeUp").value;
    console.log(input);

}

function teclaDown(){
    let input = document.getElementById("testeDown").value;
    console.log(input);

}