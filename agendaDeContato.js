const agenda = [
    { nome: "Marcello", telefone: 37998433783},
    { nome: "Camile", telefone: 37998433788}
];

function mostrarContatos(agenda) {
    for(const contato of agenda) {
        console.log("Nome: " + contato.nome + " - Telefone " + contato.telefone);
    }
}

mostrarContatos(agenda);