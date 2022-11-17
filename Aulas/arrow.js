

let soma = (n1,n2) =>{
    return n1 + n2;
}
console.log(soma(15,15));

// Se o corpo da função contiver apenas uma única instrução, você poderá omitir 
// as chaves e escrever tudo em uma única linha.
let soma2 = (n1,n2) => n1 + n2;

console.log(soma2(20,20));

// 1 exemplo
let multiplicacao = function(x, y) {
    return x * y
  }

let multiplicacao2 = (x,y) => x * y;

// 2 exemplo

var docLogEs5 = function docLog() {
    console.log(document);
};

let docLogEs6 = () => console.log(document);


// 3 exemplo - Crie um novo array (no caso precisamos usar o map veja nas 
// anotações do Drive) de precos e outro de nomes

let celulares = [
    { nome:'iphone', preco:649 },
    { nome:'Galaxy S6', preco:576 },
    { nome:'Galaxy Note 5', preco:489 }
  ];

// Usando a function inteira
//   let precos = celulares.map(function(celular){
//     return celular.preco;
//   });

let precos2 = celulares.map(celular => celular.preco);

// Usando a function inteira
let nomes = celulares.map(function(celular){
    return celular.nome;
})

let nomes2 = celulares.map(celular => celular.nome);

// 4 exemplo usando o metodo filter retorne os divisiveis por 3

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let divisiveisPor3 = array.filter(function (ray){
    return ray % 3 === 0;
})

let divisiveisPor32 = array.filter(ray => ray % 3 === 0 )

// 5 exemplo

let elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  elements.map(function(element) {
    return element.length;
  });

 elements.map(element => element.length);  