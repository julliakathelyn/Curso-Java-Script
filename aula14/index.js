function verificaCor() {
    let cor = document.getElementById("cor").value;

    cor = cor.toLowerCase(); // para o usuario poder digitar com letras maiusculas 

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para" + " " + cor;

    }

}

function verificador() {
    let x = 0; // aqui vai dar que a variavel é zero
    //let x = "0"; // aqui vai dar que nao foi encontrado

    switch (x) {
        case 0:
            document.getElementById("teste").innerHTML = "A variavel é zero"
            break;
        default:
            document.getElementById("teste").innerHTML = "Nao foi encontrado"

    }
}


function diaDaSemana() {

    var dia = new Date().getDay();
    console.log(dia);

    switch (dia) {
        case 0:
            document.getElementById("teste3").innerHTML = "Hoje é Domingo";
            break;
        case 1:
            document.getElementById("teste3").innerHTML = "Hoje é Segunda-feira";
            break;
        case 2:
            document.getElementById("teste3").innerHTML = "Hoje é Terça-Feira";
            break;
        case 3:
            document.getElementById("teste3").innerHTML = "Hoje é Quarta-Feira";
            break;
        case 4:
            document.getElementById("teste3").innerHTML = "Hoje é Quinta-Feira";
            break;
        case 5:
            document.getElementById("teste3").innerHTML = "Hoje é Sexta-Feira";
            break;
        case 6:
            document.getElementById("teste3").innerHTML = "Hoje é Sabado";
            break;
            default:
                document.getElementById("test3").innerHTML = "Não sei qual dia é"

    }

}