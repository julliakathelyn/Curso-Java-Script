function ativarContagem(){
    //se voce quer que uma determinada função acontece a cada tanto tempo
    document.getElementById('tempo').innerHTML = "Começou a contar..."
    //ativa a função apenas uma vez quando der o tempo expecificado
    setTimeout(function(){
        tempo = document.getElementById('tempo').innerHTML = "Executou o setTimeOut";
        document.body.style.backgroundColor = "green";
    }, 5000)
}

function pararContagem(){
    //para parar a contagem é preciso de uma variavel dentro do settimeout
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem"
}

//vai repetir infinitamente baseada no tempo definido
function intervalo(){
    setInterval(function ( ) {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma
 }, 1000)

}

function pararTempo(){
    clearInterval(tempo);
}