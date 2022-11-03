// Encontrando Elementos do Tipo Primitivo

let numbers = [1,2,3,4,1,5];

console.log(numbers.indexOf(1));

// Pegando a última ocorrência do número
console.log(numbers.lastIndexOf(1))  

// Usando o includes o code fica mais limpo e ele retorna
// true or false, além de procurar por NaN e Undefinied

console.log(numbers.includes(2));

// Encontrando Elementos do Tipo Referência

let array = [
    {id: 1, nome:'a'},
    {id: 2, nome:'b'},
];
// Se usar o includes não funciona pois o objeto tem endereço de
// memória diferente 

let procurando = array.find(function(marca){
    return marca.id === 1;
});
console.log(procurando);

// Outro exercicio usando o Find: 

let alunos = [ 
    {nome: 'josé', idade: 18}, 
    {nome: 'joão', idade: 16}, 
    {nome: 'maria', idade: 21} 
  ];

  let achando = alunos.find(function(aluno){
    return aluno.nome === 'joão';
  });
  console.log(achando);

// Dentro do find(), passamos uma função anônima function(aluno){...}, também 
// chamada de função callback. Essa função será executada para cada elemento 
// dentro da lista. E a cada iteração, recebe como parâmetro o valor do elemento,
// e o atribui a variável aluno. Lembre que retorna apenas o primeiro valor que
// atende ao critério de busca. 