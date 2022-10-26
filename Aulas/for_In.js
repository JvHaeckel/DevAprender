// Exemplos do site: https://www.devmedia.com.br/javascript-for-for-in-for-of/41018

// 1
const colors = ['azul', 'verde'];

for (let x in colors){
    console.log(x, colors[x])
}


// 2  retornar o nome e valor de suas propriedades.
const pessoa = {
    nome: 'Joao',
    idade: 25
}

for(let x in pessoa){
    console.log(`${x} - ${pessoa[x]}`)
}

// 3 somar todos os valores de um Array:

let produtos = [
    { nome: 'Resma Oficio', valor: 11.50, quantidade: 10},
    { descricao: 'Lapis preto', valor: 0.50, quantidade: 3 },
    { descricao: 'Transferidor plastico', valor: 1.20, quantidade: 4 }
]
let total = 0;

function conta(array){

   let valor = produtos.reduce(function(quantidade,x){
        return quantidade * x;
    })

}  
