const estudantes = [
    { nome: "Marcello", turma: "A"},
    { nome: "Camile", turma: "B"}
]

function filtrarPorTurma(listaDeEstudantes, turmaDesejada) {
    for (const estudante of listaDeEstudantes) {
        if (estudante.turma === turmaDesejada) {
            console.log(estudante.nome)
        }
    }
}

filtrarPorTurma(estudantes, "B");
filtrarPorTurma(estudantes, "A");