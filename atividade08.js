//  Crie um objeto de pedido que contenha informações sobre o cliente 
// (que será um outro objeto aninhado).

const pedido = {
    id: 1,
    produto: "Smartfone",
    cliente: {
        nome: "Ana",
        endereco: "Rua A, 123"
    }
}

console.log("O pedido " + pedido.id + " de um " + pedido.produto + " será entregue para " + pedido.cliente.nome + " no endereço " + pedido.cliente.endereco)