var serieUm = '<img src="https://br.web.img3.acsta.net/pictures/23/07/20/20/15/4913608.jpg"></img>'
var serieDois = '<img src="https://likemagazine.com.br/midias/2023/09/Terceira-temporada-de-upload-chega-no-dia-20-de-outubro-1024x1024.jpg"></img>'
var SerieTres = '<img src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"></img>'

var listaFilmes = [
    '<img src="https://br.web.img3.acsta.net/pictures/23/07/20/20/15/4913608.jpg"></img>',
    '<img src="https://likemagazine.com.br/midias/2023/09/Terceira-temporada-de-upload-chega-no-dia-20-de-outubro-1024x1024.jpg"></img>',
]
listaFilmes[2] = '<img src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"></img>' /*Pode ser feito assim tbm, é melhor por conta da numeração para não se perder, mas da um trabalhinho a mais */

/*Pode ser feito assim
document.write(listaFilmes) /*document.write() Faz mostrar algo na tela pelo JS */

/*Essa maneira foi a feito pelos professores 
for (var i = 0; i < listaFilmes.length; i++) {
    document.write(listaFilmes[i])
}
*/

/*Desafio 01 */
/*
var i = 0
do {
    document.write(listaFilmes[i])
    i++
} while (i < listaFilmes.length)
*/


/*Desafio 02 */

/*Tive que mudar o var para que ela pudesse terminar em jpg para o endsWith('jpg') desse certo */
/*
var listaFilmes = [
    'https://br.web.img3.acsta.net/pictures/23/07/20/20/15/4913608.jpg',
    'https://likemagazine.com.br/midias/2023/09/Terceira-temporada-de-upload-chega-no-dia-20-de-outubro-1024x1024.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14f797d9-ce55-4dad-a2e3-966ae51122f0/dec65vh-7d9861a8-41c7-46fc-a9ba-aad39686ebf0.png/v1/fill/w_512,h_512/chilling_adventures_of_sabrina_tv_series_pt2_by_drdarkdoom_dec65vh-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvMTRmNzk3ZDktY2U1NS00ZGFkLWEyZTMtOTY2YWU1MTEyMmYwXC9kZWM2NXZoLTdkOTg2MWE4LTQxYzctNDZmYy1hOWJhLWFhZDM5Njg2ZWJmMC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-Xpyn_x1jgMQj4RgkDmL-Vwsh2m0-FTU6REavQhCG3s',
]
listaFilmes[3] = 'https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'

for (var i = 0; i < listaFilmes.length; i++) {
    if (listaFilmes[i].endsWith('jpg')) {
        document.write(` <img src = ${listaFilmes[i]}>`)
    } 
}
*/

/* Desafio 03 */

var listaNomes = ['GEN V','UPLOAD', 'LUCIFER']

for (var i = 0; i < listaFilmes.length; i++) {
    document.write(`<div style="display: inline-block; color: white; font-family: Arial; font-size: 1.2em; padding: 10px;">${listaFilmes[i]} <br> ${listaNomes[i]}</div>`)
}


