var interruptor = "off";

if (interruptor == "on"){
    alert('A lampada está ligada');
}else{
    alert('A lampada está desligada')
}

var hora = new Date().getHours();
alert(hora);

if (hora < 12){
    alert("bom dia");
}else if (hora < 18){
    alert("boa tarde")
}else{
    alert("boa noite")
}

function verificar() {
    let nome = document.getElementById("nome").value;

    if(nome == "" || nome==null){
        let p = document.getElementById("teste");
        p.innerHTML = "O campo nao pode ser vazio";
        p.style.color = "red";
    }else {
        let p = document.getElementById("teste");
        p.innerHTML = "Parabens tudo certinho";
        p.style.color = "green";
    }
}