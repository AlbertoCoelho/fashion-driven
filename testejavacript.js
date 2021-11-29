function dadosDoPedido(dados,valorid){
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

    promise.then((resposta) => {
        window.confirm("Deseja encomendar esse modelo existente?");   
        const pedidos = resposta.data;

        function meuiD(id){
            if(id === valorid){
                return true;
            }
        }

        const meuPedido = pedidos.id.filter(meuiD);
        console.log(meuPedido);
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




function dadosDoPedido(dados,valorid){

    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

    promise.then((resposta) => {
        window.confirm("Deseja encomendar esse modelo existente?");   
        const pedidos = resposta.data;
        const ulPedidos = document.querySelector(".imagem-autor-pedido");
        
      for(let i=0;i<pedidos.length;i++){
          if(pedidos[i].id === valorid){
              delete pedidos[i].id;
              pedidos[i].author = dizerNome;
              pedidos[i].owner = dizerNome;
           
              const enviandoPedido = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", pedidos[i]);

              ulPedidos.innerHTML += 
            `
            <li class="pedido" onclick="dadosDoPedido(this,${pedidos[i].id})">
                <img src="${pedidos[i].image}" />
                <span class="criador" >Criador: ${pedidos[i].owner}</span>
            </li>
            `
            
            enviandoPedido.then(carregarPedidos);
            break;
          }
      }
    });
    promise.catch((erro) => console.log("Está dando erro"));
}



function dadosDoPedido(dados,valorid){

    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

    promise.then((resposta) => {
        window.confirm("Deseja encomendar esse modelo existente?");   
        const pedidos = resposta.data;
        const ulPedidos = document.querySelector(".imagem-autor-pedido");
        
      for(let i=0;i<pedidos.length;i++){
          if(pedidos[i].id === valorid){
              delete pedidos[i].id;
              pedidos[i].author = dizerNome;
              pedidos[i].owner = dizerNome;
           
              const enviandoPedido = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", pedidos[i]);

              ulPedidos.innerHTML += 
            `
            <li class="pedido" onclick="dadosDoPedido(this,${pedidos[i].id})">
                <img src="${pedidos[i].image}" />
                <span class="criador" >Criador: ${pedidos[i].owner}</span>
            </li>
            `
            
            enviandoPedido.then(carregarPedidos);
          }
      }
    });
    promise.catch((erro) => console.log("Está dando erro"));
}