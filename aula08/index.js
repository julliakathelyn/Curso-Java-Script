function soma(entrada1, entrada2) {
    return entrada1 + entrada2;
}
document.getElementById("r1").innerHTML = soma(22, 30);

var total = soma(10, 30);
document.getElementById("r3").innerHTML = total;


function nomeDaFunção(entrada1, entrada2) {
    return entrada1 - entrada2;
} 
document.getElementById("r2").innerHTML = nomeDaFunção(20, 5);


function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var resposta = realParaDolar(10, 5.13);
document.getElementById("r4").innerHTML = resposta;

function alertaHello(){
    alert ("Olá pessoal! Estou aprendendo JavaScript :D ");
} //clique no botão e ele vai despara o alerta

function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit -32);

}

var x = paraCelsius(77);

document.getElementById("r5").innerHTML = "A temperatura é de "+x+" graus celsius";

function minhaFuncao(){
    var x = 2 // essa variavel vai funcionar apenas dentro do bloco da função
} 