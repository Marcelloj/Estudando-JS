// Exercícios  de fundamentos
// Exercício 1: Conversão de tipos
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variavel no console

const valorString = "1234";
const valorNumber = Number(valorString);

console.log(typeof valorNumber);

// Exercício 2: Manipulação de strings
// Dado uma string "JavaScript é incrivel", ecreva um codigo que conte quantos caracteres a string tem e quantas palavras tem na frase

const frase = "JavaScript é incrivel";
const numeroDeCaracteres = frase.length;
const numeroDePalavras = frase.split(" ").length;

console.log(`O número de caracteres é: ${numeroDeCaracteres}`);
console.log(`O número de palavras é: ${numeroDePalavras}`);

// Exercícios 3: Loops e Arrays
// Crie um array com 5 nomes, Use um loop for para imprimir cada nome no console.

const nome = [
    "Camile", "Marcello", "Telma", "Laylla", "Marlene"]; 

for(let i = 0; i < nome.length; i ++) {
    console.log("Seu nome é: " + nome[i])
}

// Exercícios 4: Funções, Strings e Math
// Crie uma função que aceita um string representando um horário de 24 horas (por exemplo, "14:30").
// A função deve retornar uma string que coberta o horario para o fromato de 12 horas (por exemplo, "2:30 PM").
// Use o objeto math para auxiliar nesta conversão.
// certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

function converterHorario(Horario24){
    const [horas, minutos] = Horario24.split(":");

    const hora12 = horas % 12 || 12;

    let periodo = horas >= 12 ? "PM" : "AM";

    if (horas> 12) {
        periodo = "PM";
    }

    console.log(`${hora12}:${minutos} ${periodo}`);

}

converterHorario("15:16");

converterHorario("09:46");

converterHorario("21:12");
