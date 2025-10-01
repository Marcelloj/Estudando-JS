// Crie um algoritmo que percorra uma lista (array) de números 
// E, para cada número, exiba no console se ele é PAR ou ÍMPAR.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(const num of numeros) {
    if (num % 2 === 0){
        console.log("O número " + num + " é PAR!");
    }else{
        console.log("O número " + num + " é IMPAR!");
    }
}
