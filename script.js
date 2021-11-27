let contadorItems = 0;

function  selecionarModelo(elemento){
    const selecionado = document.querySelector(".modelo .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems++;
        console.log(contadorItems);
    }

    elemento.classList.add("selecionado");

    verificarPedido();

}

function selecionarGola(elemento){
    const selecionado = document.querySelector(".gola .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems++;
        console.log(contadorItems);
    }

    elemento.classList.add("selecionado");

    verificarPedido();

}

function selecionarTecido(elemento){
    const selecionado = document.querySelector(".tecido .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems++;
        console.log(contadorItems);
    }

    elemento.classList.add("selecionado");

    verificarPedido();

}


function verificarPedido() {
    const botao = document.getElementById("Button");
    if (contadorItems === 4) {
        botao.disabled = false;
        botao.classList.add("ativo");
        botao.style.cursor = 'pointer';
    }
}

function confirmarPedido(botao){
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

    function pedidoConfirmado(resposta){
        alert("Seu pedido foi confirmado!");   
    }

    function pedidoNegado(resposta){
        alert("Ops, não conseguimos processar sua encomenda");
    }

    promise.then(pedidoConfirmado);
    promise.catch(pedidoNegado);
}
confirmarPedido();


function inputComString(){
    const input = document.querySelector(".input");
    if(input.value !== ""){
        contadorItems++;
    }

    if(contadorItems>4){
        contadorItems--;
    }

    if(contadorItems === 4 && input.value === ""){
        contadorItems=3;
    }

    console.log(contadorItems);
    verificarPedido();
}
inputComString();

/*
function verificarURL(){
    const input = document.querySelector('.input');

    if(input.value === 'valid'){
        contadorItems++;
    }
}
*/