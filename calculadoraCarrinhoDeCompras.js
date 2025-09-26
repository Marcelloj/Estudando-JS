const carrinho = [
    { nome: "Mause", preco: 30, quantidade: 2},
    { nome: "Teclado", preco: 70, quantidade: 5}
]

function calcularTotal(carrinho) {
    let total = 0;
    for(const item of carrinho ) {
        total = total + (item.preco * item.quantidade);
    }
     console.log(" O valor total da compra é: R$" + total);

}

calcularTotal(carrinho);