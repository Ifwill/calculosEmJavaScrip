function multiplicar(a,b) {
    let resultado = a * b;

    document.getElementById("resultado").innerHTML = "Multiplicação: "+resultado;
    
}

function adicao(a,b) {
    let resultado = parseInt(a) + parseInt(b);

    document.getElementById("resultado").innerHTML = "Adição: "+resultado;
}

function subtracao(a,b) {
    let resultado = (a - b);

    document.getElementById("resultado").innerHTML = "Subtração: "+resultado;
}

function divisao(a,b) {
    let resultado = (a / b);

    document.getElementById("resultado").innerHTML = "Divisão: "+resultado;
}


function operacao(){
    let operacao = document.getElementById("operacoes").value;
    let primeiroNumero = document.getElementById("numero1").value;
    let segundoNumero = document.getElementById("numero2").value;

    if(operacao === "adicao"){
        adicao(primeiroNumero,segundoNumero);
    }else if(operacao === "subtracao"){
        subtracao(primeiroNumero,segundoNumero);
    }else if(operacao === "divisao"){
        divisao(primeiroNumero,segundoNumero);
    }else{
        multiplicar(primeiroNumero,segundoNumero);
    }

}
 