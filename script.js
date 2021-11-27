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
    if (contadorItems === 3) {
        const botao = document.getElementById("Button");
        botao.disabled = false;
        botao.classList.add("ativo");
        botao.style.cursor = 'pointer';
    }
}