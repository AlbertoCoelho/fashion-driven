let contadorItems = 0;
const dizerNome = prompt("Qual o seu nome?");
let pedidos = [];

function  selecionarModelo(elemento){
    console.log(elemento);
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

function carregarPedidos(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

    
    function carregandoPedido(resposta){
        console.log(resposta.data);
        pedidos = resposta.data;

        const ulPedidos = document.querySelector(".imagem-autor-pedido");
        ulPedidos.innerHTML = "";

        
        for(let i=0; i<pedidos.length;i++){
            const pedido = pedidos[i];

            ulPedidos.innerHTML += 
            `
            <li class="pedido">
                <img src="${pedido.image}" />
                <span class="criador" >Criador: ${pedido.owner}</span>
            </li>
            `
        }              
    }
    
    function pedidoNegado(resposta){
        alert("Ops, não conseguimos processar sua encomenda");
    }
    
    promise.then(carregandoPedido);
    promise.catch(pedidoNegado);
}
carregarPedidos();


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


function pedidoSucesso(resposta){
    window.alert("Encomenda feita!");
    const ulPedidos = document.querySelector(".imagem-autor-pedido");
    const pedido = resposta.data;
    ulPedidos.innerHTML += 
    `
    <li class="pedido">
        <img src="${pedido.image}" />
        <span class="criador" >Criador: ${pedido.owner}</span>
    </li>
    `
    
    const input = document.querySelector(".input");
    input.value = '';  

    recarregarPagina();

}

function pedidoFalhou(){
    console.log("Deu erro na sua encomenda!");
}


function enviarPedido(){
    let input = document.getElementById("meuinput");
    let link = input.value;
    console.log(link);

    const pedido = {
        model: "t-shirt",
	    neck: "v-neck",
	    material: "silk",
        owner: dizerNome,  
        image: link,
        author: dizerNome
    };
    console.log(pedido);

    const enviandoPedido = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", pedido);

    enviandoPedido.then(pedidoSucesso);
    enviandoPedido.catch(pedidoFalhou);
}

function recarregarPagina(){
    carregarPedidos();

}

/*
function verificarURL(){
    const input = document.querySelector('.input');

    if(input.value === 'valid'){
        contadorItems++;
    }
}
*/