
//VARIAVEL um carro tem muito mais do que apenas a marca então "promovemos" a variavel para um objeto
//let carro = "ford"; 

//Objeto
const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    
    buzina: function() {
        alert("BIIIIIIIIIIII")
    },
    completo: function() {
        return "A marca é: " + this.marca + " e o modelo é: "+ this.modelo;
    }

};

console.log(carro); //mostrará os atributos dentro do objeto
console.log(carro.marca); // mostrará a marca em especifico 
console.log(carro ["modelo"]); //mostrará o modelo em especifico
console.log(carro.completo()); // esta chamando a função completo e mostrara ela no console

carro.buzina(); //esta falando que quer chamar a função buzina do carro 