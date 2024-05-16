var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

//soma
total = valor1 + valor2;
document.getElementById("r1").innerHTML = total;

//subtração
total = valor1 - valor2;
document.getElementById("r2").innerHTML = total;

//divisão
total = valor1 / valor2;
document.getElementById("r3").innerHTML = total;

//multiplicação
total = valor1 * valor2;
document.getElementById("r4").innerHTML = total;

total = valor1 + valor2;
document.getElementById("r1").innerHTML = total;

total = ++valor1
document.getElementById("r5").innerHTML = "O valor ficou: " + valor1;

total = --valor1
document.getElementById("r6").innerHTML = "O valor ficou: " + valor1;

//valor1 = valor1 + valor2;
//valor1 += valor2;

//valor1 = valor1 - valor2;
//valor1 -= valor2;

//valor1 = valor1 * valor2;
//valor1 *= valor2;

//valor1 = valor1 / valor2;
//valor1 /= valor2;

valor3 = "Jullia ";
valor4 = "Kathelyn";

completo = valor3 + valor4;
document.getElementById("r7").innerHTML = completo;

var valor5 = 8;
var valor6 = "8";
var full;

full = (valor5 == valor6);
document.getElementById("r8").innerHTML = full;

full = (8 == 10);
document.getElementById("r9").innerHTML = "é igual:" + full;

full = (valor5 === valor6);
document.getElementById("r10").innerHTML = full;

full = (valor5 != valor6);
document.getElementById("r11").innerHTML = "é diferente: " + full;


full = (valor5 !== valor6);
document.getElementById("r12").innerHTML = full;

full = (8 < 4);
document.getElementById("r13").innerHTML = full;

full = (8 > 4);
document.getElementById("r14").innerHTML = full;

full = (8 >= 9);
document.getElementById("r15").innerHTML = full;

full = (9 <= 9);
document.getElementById("r16").innerHTML = full;


var idade, eleitor, resultado;
idade=65;
eleitor = (idade<16) ? "Nao, Eleitor" : "Sim, Eleitor(a)";
document.getElementById("r17").innerHTML = "A resposta é: "+eleitor+" a idade dele(a) é de: "+ idade;

//se for entre 60 e 70 vai ser true
resultado = (idade > 60 && idade < 70); 
document.getElementById("r18").innerHTML = resultado;

// se for um ou outro vai ser true
resultado = (idade === 65 || idade === 72); 
document.getElementById("r19").innerHTML = resultado;

// negação ou seja se nao for vai ser true
resultado = !(idade === 65 ); 
document.getElementById("r20").innerHTML = resultado;