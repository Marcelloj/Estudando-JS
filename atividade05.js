// atividade 05
// Você vai melhorar o programa da lista de convidados.
// Agora, a festa tem uma capacidade máxima. 
// E sua função precisa ser inteligente o suficiente para barrar a entrada quando a lista estiver cheia.
// Capacidade maxima 5 Convidados.

let listaDeConvidados = [];

function adicionarConvidado (nome) {
    if (listaDeConvidados.length < 5) {
        listaDeConvidados.push(nome);

        console.log(nome + " Foi adicionado(a) lista!");
    } else {
        console.log("Que pena, " + nome + " A lista já está cheia e você não pôde entrar.")
    }
    
}

adicionarConvidado ("Carlos")
adicionarConvidado ("Ana")
adicionarConvidado ("Beatriz")
adicionarConvidado ("João")
adicionarConvidado ("Mariana")
adicionarConvidado ("Pedro")