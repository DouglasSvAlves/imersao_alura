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
let valorChute = -1;
let chutes = 0;

while (valorChute != numeroSecreto && chutes < 5) {
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

if (chutes >= 5) {
    alert(`Você excedeu o número de tentativas. O valor secreto era ${numeroSecreto}`)
}


/*
var numeroSecreto = parseInt(Math.random() * 1000 + 1); // Use var ou let, conforme sua preferência
var valorChute = -1;
var chutes = 0;

while (valorChute != numeroSecreto && chutes < 6) {
    valorChute = parseInt(prompt('Digite um número entre 1 e 1000'));

    if (!isNaN(valorChute)) {
        if (valorChute == numeroSecreto) {
            alert(`Você Acertou na tentativa número ${chutes + 1}!`);
        } else if (valorChute > numeroSecreto) {
            chutes++;
            alert(`Errou... o número secreto é menor do que ${valorChute}. Você já tentou ${chutes} vezes.`);
        } else {
            chutes++;
            alert(`Errou... o número secreto é maior do que ${valorChute}. Você já tentou ${chutes} vezes.`);
        }
    } else {
        alert('Por favor, digite um número válido.');
    }
}

if (chutes >= 6) {
    alert('Você excedeu o número de tentativas. O número secreto era: ' + numeroSecreto);
}    
*/
