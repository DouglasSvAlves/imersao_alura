// Desafio Número 1
/*
let numeroSecreto = parseInt(Math.random() * 1001);  //Lembrete!!!! NÂO USE CONST. USE O VAR OU LET
let valorChute = -1 //Não pode ser 0 pq ele tbm é considerado como um número para ser adivinhado
let chutes = 0

while (valorChute != numeroSecreto) {
    valorChute = prompt('Digite um número entre 0 e 1000')
    if (valorChute == numeroSecreto) {
        alert(`Você Acertou na tentativa número ${chutes}!`)
    } else if (valorChute > numeroSecreto) {
        chutes++
        alert(`Errou... o número secreto é menor do que ${valorChute}. E você já tentou ${chutes} vezes`)
    } else {
        chutes++
        alert(`Errou... o número secreto é maior do que ${valorChute}. E você já tentou ${chutes} vezes`)
    }
}
*/

// Desafio Número 2

let numeroSecreto = parseInt(Math.random() * 1000 + 1);  //Lembrete!!!! NÂO USE CONST. USE O VAR OU LET
let valorChute = -1
let chutes = 0

while (valorChute != numeroSecreto) {
    valorChute = prompt('Digite um número entre 1 e 1000')
    if (valorChute == numeroSecreto) {
        alert(`Você Acertou na tentativa número ${chutes}!`)
    } else if (valorChute > numeroSecreto) {
        chutes++
        alert(`Errou... o número secreto é menor do que ${valorChute}. E você já tentou ${chutes} vezes`)
    } else {
        chutes++
        alert(`Errou... o número secreto é maior do que ${valorChute}. E você já tentou ${chutes} vezes`)
    }
}

