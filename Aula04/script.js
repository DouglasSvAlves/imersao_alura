/*
function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML += `<img src=${filmeFavorito}>`
    document.getElementById('filme').value = '' /*Para resetar o link no input*/
//}

// Desafio 01 

function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')

    if (filmeFavorito.endsWith('png') || filmeFavorito.endsWith('jpeg') || filmeFavorito.endsWith('jpg') || filmeFavorito.endsWith('gif') ) {
        elementoListaFilmes.innerHTML += `<img src=${filmeFavorito}>`
        document.getElementById('filme').value = '' /*Para resetar o link no input*/  
    } else {
        alert('Insira o url de uma imagem com os formatos PNG JPEG BMP ou GIF')
        document.getElementById('filme').value = ''
    }
    
}

// Desafio 02

function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')
    var trailerFilme = document.getElementById('trailer').value

    if (filmeFavorito.endsWith('png') || filmeFavorito.endsWith('jpeg') || filmeFavorito.endsWith('jpg') || filmeFavorito.endsWith('gif') ) {
        if (trailerFilme != '') {
            elementoListaFilmes.innerHTML += `<a href="${trailerFilme}" target="_blank"><img src=${filmeFavorito}></a>`
            document.getElementById('filme').value = '' /*Para resetar o link no input*/
            document.getElementById('trailer').value = ''  
        } else {
            alert('Adicione também o link para o trailer do filme')
        }      
    } else {
        alert('Insira o url de uma imagem com os formatos PNG JPEG BMP ou GIF')
        document.getElementById('filme').value = ''
    }
    
}