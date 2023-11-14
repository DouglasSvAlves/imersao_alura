/*
const valorEmDolar = 30;
const cotacaoDoDolar = 5.32;
const valorConvertido = valorEmDolar*cotacaoDoDolar; //Aparentemente para declaração de variaveis precisa ser colocado o ; no final

alert(new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorConvertido))

window.alert(valorConvertido.toFixed(3))
*/


//Desafio Do Conversor de cripto moeda

/*
const valorEmReal = 100000;
const valorCotacao = 179150.25;
const valorConvertido = (valorEmReal/valorCotacao);

alert('O valor convertido de ' + new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorEmReal) + ' em BitCoin são: ' + valorConvertido.toFixed(3))
*/

//Desafio da Rafaella

/*
const nome = window.prompt('Olá qual é o seu nome?');
const valorEmDolar = Number(window.prompt('Qual o valor em dolar que você quer converter em Real?'));
const valorCotacao = 5.32;
const valorConvertido = valorEmDolar * valorCotacao;

alert(`Então ${nome} o valor convertido de ${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(valorEmDolar)} em Real é ${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorConvertido)}`)
*/

//Desafio do conversor interestelar

function formatarValor(valor) {
    const magnitude = Math.floor(Math.log10(valor) / 3); // Determina a magnitude do valor

    const sufixos = ["", "Mil", "Milhões", "Bilhões", "Trilhões", "Quadrilhões", "Quintilhões"]; // Pode adicionar mais sufixos conforme necessário

    const valorFormatado = valor / Math.pow(10, magnitude * 3); // Divide o valor pelo fator de escala
    return `${valorFormatado.toFixed(2)} ${sufixos[magnitude]}`;
}

const nome = window.prompt('Olá qual é o seu nome?');
const valorAnoLuz = Number(window.prompt('Qual o valor em ano-luz que você quer converter para km?'));
const valorLy = 9460528405000.02;
const valorConvertido = valorAnoLuz * valorLy;

alert(`Então ${nome} o valor de ${valorAnoLuz} ano-luz em KM é: ${formatarValor(valorConvertido)} de Quilômetros`)
