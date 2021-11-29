let contadorItems = 0;
const dizerNome = prompt("Qual o seu nome?");
let modelo;
let gola;
let tecido;
let pedidos = [];

function  selecionarModelo(elemento, nomeModelo){
    const selecionado = document.querySelector(".modelo .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems++;
    }

    modelo = nomeModelo;

    elemento.classList.add("selecionado");

    verificarPedido();

}

function selecionarGola(elemento,nomeGola){
    const selecionado = document.querySelector(".gola .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems++;
    }

    gola = nomeGola;

    elemento.classList.add("selecionado");

    verificarPedido();

}

function selecionarTecido(elemento,nomeTecido){
    const selecionado = document.querySelector(".tecido .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems++;
    }

    tecido = nomeTecido;

    elemento.classList.add("selecionado");

    verificarPedido();

}


function verificarPedido() {
    const botao = document.getElementById("Button");
    if (contadorItems === 4) {
        botao.disabled = false;
        botao.style.cursor = 'pointer';
    }
    else{
        botao.setAttribute('disabled','');
        botao.style.cursor = 'default';
    }
}

function carregarPedidos(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");    
    
    promise.then((resposta) => {
        pedidos = resposta.data;

        const ulPedidos = document.querySelector(".imagem-autor-pedido");
        ulPedidos.innerHTML = "";

        
        for(let i=0; i<pedidos.length;i++){
            const pedido = pedidos[i];

            ulPedidos.innerHTML += 
            `
            <li class="pedido" onclick="dadosDoPedido(this,${pedido.id})">
                <img src="${pedido.image}" />
                <span class="criador" >Criador: ${pedido.owner}</span>
            </li>
            `
        }
    });
    promise.catch(() =>  alert("Ops, não conseguimos processar sua encomenda"));
}
carregarPedidos();


function inputComString(){
    const input = document.querySelector(".input");
    if(contadorItems === 4 && input.value === ""){
        contadorItems=3;
    }

    if(input.value !== ""){
        contadorItems++;
    }

    if(contadorItems>4){
        contadorItems--;
    }

    verificarPedido();
}
inputComString();

function enviarPedido(){
    let input = document.getElementById("meuinput");
    let link = input.value;

    const pedido = {
        model: modelo,
	    neck: gola,
	    material: tecido,
        owner: dizerNome,  
        image: link,
        author: dizerNome
    };

    const enviandoPedido = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", pedido);

    enviandoPedido.then((resposta) => {
        window.alert("Encomenda feita!");
        const ulPedidos = document.querySelector(".imagem-autor-pedido");
        const pedido = resposta.data;
        ulPedidos.innerHTML += 
        `
        <li class="pedido" onclick="dadosDoPedido(this,${pedido.id})">
            <img src="${pedido.image}" />
            <span class="criador" >Criador: ${pedido.owner}</span>
        </li>
        `
        
        const input = document.querySelector(".input");
        input.value = '';  

        carregarPedidos();
    });
    enviandoPedido.catch(() =>  console.log("Deu erro na sua encomenda!"));
}

function dadosDoPedido(dados,valorid){
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

    promise.then((resposta) => {
        window.confirm("Deseja encomendar esse modelo existente?");   
        const pedidos = resposta.data;

        const meuPedido = pedidos.find( element => element.id === valorid);
        const ulPedidos = document.querySelector(".imagem-autor-pedido");
        
        delete meuPedido.id;
        meuPedido.author = dizerNome;
        meuPedido.owner = dizerNome;
            
        const enviandoPedido = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", meuPedido);

        ulPedidos.innerHTML += 
            `
            <li class="pedido" onclick="dadosDoPedido(this,${meuPedido.id})">
                <img src="${meuPedido.image}" />
                <span class="criador" >Criador: ${meuPedido.owner}</span>
            </li>
            `
            
        enviandoPedido.then(carregarPedidos);
    });
    promise.catch((erro) => console.log("Está dando erro"));
}
