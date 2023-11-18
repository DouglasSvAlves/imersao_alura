var jogadores = [

    {
    nome: 'Paulo',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}
,
    {
    nome: 'Rafa',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}
,
    {
    nome: 'Gui',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}
]

var elementoTabela = document.getElementById('tabelaJogadores')
function exibirNaTela () {

    for (var i = 0; i < jogadores.length; i++) {  // ATENÇÂO!! Para passar o parametro para a function é preciso que passe o objeto inteiro, então nesse caso a gente só precisa alterar o número da lista por isso só foi colocado o ${i} e não ${jogadores[i]} que iria exibir o valor do objeto e não especificar o objeto.
        elementoTabela.innerHTML += `
        <tr>
        <td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitoria}</td>
        <td>${jogadores[i].empate}</td>
        <td>${jogadores[i].derrota}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(jogadores[${i}])">Vitória</button></td>
        <td><button onClick="adicionarEmpate(jogadores[${i}])">Empate</button></td>
        <td><button onClick="adicionarDerrota(jogadores[${i}])">Derrota</button></td>
        </tr>
        `
    }
}
exibirNaTela()


function adicionarVitoria(jogador) {
    jogador.vitoria++
    jogador.pontos += 3
    elementoTabela.innerHTML = ''
    exibirNaTela()
}

function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos++
    elementoTabela.innerHTML = ''
    exibirNaTela()
}

function adicionarDerrota(jogador) {
    jogador.derrota++
    elementoTabela.innerHTML = ''
    exibirNaTela()
}
