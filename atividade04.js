// atividade 04

let carrinhoDeCompras = [];

function adicionarAoCarrinho (produto) {
    carrinhoDeCompras.push(produto);

    console.log( produto + " Foi Adicionado ao carrinho!")
}

adicionarAoCarrinho ("Arroz")
adicionarAoCarrinho ("Feijão")
adicionarAoCarrinho ("Ovos")

console.log(carrinhoDeCompras)