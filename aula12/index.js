const pessoa = ["Gustavo", "Moura", "20", "Logistica"]; //array

document.getElementById("teste").innerHTML = pessoa.join(" | "); //muda o separador

pessoa.pop(); //remove o ultimo item do array
document.getElementById("teste2").innerHTML = pessoa

pessoa.push("Honda") //adiciona item ao array
document.getElementById("teste3").innerHTML = pessoa

pessoa.shift(); //remove o primeiro item 
document.getElementById("teste4").innerHTML = pessoa

pessoa.unshift("Bonitão"); //adiciona ao primeiro item da array
document.getElementById("teste5").innerHTML = pessoa

delete pessoa[0]; //vai deletar o item e também a posição deixando ela indefinida
document.getElementById("teste6").innerHTML = pessoa

pessoa.splice(2,0, "Item adicionado 1", "Item adicionado 2"); // vai fazer que um item de um array possa armazenar mais de uma iformação
document.getElementById("teste7").innerHTML = pessoa

const lista1 = ["Arroz", "feijão", "leite", "macarrão"];
const lista2 = ["Suco", "refrigerante", "carne"];

const superLista = lista1.concat(lista2); //cria um array só juntando dois arrays ou mais
document.getElementById("teste8").innerHTML = superLista

const jogadores = ["Cleitão", "Cleitinho", "Pelé", "Maradona", "Neymar", "Cristiano Ronaldo", "Dimitri", "Joãozinho", "Pedrinho"];
const craques = jogadores.slice(2);//vai fatiar o array de um ponto determinado ao outro pega o conteudo da posição "" pra frente
document.getElementById("teste9").innerHTML = craques;

const craquesTeste = jogadores.slice(2,6); // desta maneira ele vai pegar de um ponto determinado da array 
document.getElementById("teste10").innerHTML = craquesTeste

const jogOrdem = jogadores.sort(); // vai deixar em ordem alfabética
document.getElementById("teste11").innerHTML = jogOrdem // vai inverter as ordens 

jogadores.sort(); //vai deixar em ordem alfabetica
jogadores.reverse(); //vai inverter a oredem alfabetica 
document.getElementById("teste12").innerHTML = jogOrdem

const numeros = [1, 200, 300, 50, 30, 25]

numeros.sort(); // o sort para numeros vai ordenar de uma forma em que tudo que começa com 1 vai na frente , depois tudo que começa com 2 ...
document.getElementById("teste13").innerHTML = numeros

numeros.sort(function (a,b){ return a - b}); // ajusta em sequencia numerica
document.getElementById("teste14").innerHTML = numeros


function MaiorNumero(array){
    return Math.max.apply(null, array);
} // essa função vai permitir descobrir qual é o maior numero de um array
document.getElementById("teste15").innerHTML = MaiorNumero(numeros)



function MenorNumero(array){
    return Math.min.apply(null, array);

} // essa função vai permitir descobrir qual é o menor numero de um array
document.getElementById("teste16").innerHTML = MenorNumero(numeros)

const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
    return value > 20;
} // essa função vai filtrar para mostrar numeros apenas maior que 20

document.getElementById("teste17").innerHTML = maior20