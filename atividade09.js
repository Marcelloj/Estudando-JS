//  Crie uma lista de alunos (um array de objetos)
//  E mostre no console apenas os nomes dos alunos que foram aprovados.

const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Bruno", nota: 6},
    { nome: "Carla", nota: 8},
];

for (const aluno of alunos) {
    if (aluno.nota >= 7) {

         console.log(aluno.nome)
    }

}