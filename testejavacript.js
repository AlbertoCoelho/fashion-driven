function dadosDoPedido(dados,valorid){
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

    promise.then((resposta) => {
        window.confirm("Deseja encomendar esse modelo existente?");   
        const pedidos = resposta.data.id;

        function meuiD(id){
            if(id === valorid){
                return true;
            }
        }

        const meuPedido = pedidos.filter(meuiD);
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
    console.log(dados);
    console.log(valorid);
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

    
    function encomendarModeloExistente(resposta){   
        window.confirm("Deseja encomendar esse modelo existente?");   
        const pedidos = resposta.data;
        console.log(pedidos);
        const ulPedidos = document.querySelector(".imagem-autor-pedido");
        
      for(let i=0;i<pedidos.length;i++){
          if(pedidos[i].id === valorid){
              delete pedidos[i].id;
              pedidos[i].author = dizerNome;
              pedidos[i].owner = dizerNome;
              console.log(pedidos[i]);
           
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
        
    }

    promise.then(encomendarModeloExistente);
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