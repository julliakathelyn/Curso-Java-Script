/*for (let i = 0; i < 10001; i++){

    document.getElementById("teste1").innerHTML += i + ", ";
} */


    for (let i=1900; i<2024; i++){
        document.getElementById("ano").innerHTML += "<option value = '"+i+"'>"+i+"</opition>";
    }
    
var ano = new Date().getFullYear();
    for (let i =ano; i>1900; i--){
        document.getElementById("ano2").innerHTML += "<option value = '"+i+"'>"+i+"</opition>";
    }

    const carros = ["Gol", "Fusca", "Brasilia", "Del Rey", "Chevette"];

    var tamanho = carros.length;

    for( i = 0; i<tamanho; i++){
        document.getElementById("teste2").innerHTML +=carros[i] + " - ";
    }