/* maneira "comum"
var item0 = "arroz";
var item2 = "feijão";
var item2 = "macarrão";
var item3 = "leite"; */

const lista = ["arroz", "feijão","macarrão","leite"];

//alert(x); // chamando o valor de uma matriz 

lista[0] = "Lasanha";
let x = lista[0];
alert(x)
console.log(lista)


const listaDois = [];
listaDois[0] = "File de frango";
listaDois[1] = "Picanha";
listaDois[2] = "Peito de frango";
listaDois[3] = "Carne moida";
listaDois[4] = "Figado";
console.log(listaDois)


const listaTres = new Array("Astra","s10","Logan","Civic","Spin");
console.log(listaTres)

const pessoa = ["Gustavo", "Moura","20"]; //array

//const pessoaObj = {nome:"Gustavo", sobrenome:"Moura", idade:20}  //obj


console.log(pessoa[0]);

//alert(pessoa.length); //vai mostar quantos itens tem dentro do array
alert(pessoa[pessoa.length -1]); //vai mostrar o ultimo item do array

pessoa.push("Brasileiro");
console.log(pessoa);

alert(Array.isArray(pessoa)); //true