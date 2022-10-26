// Função que leia o objeto e diga se tem String


const filme = {
    nome: 'Avengers',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
leitura(filme);

function leitura(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop, obj[prop]);
        }
    }
}















