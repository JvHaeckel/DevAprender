
const numbers = [1,2,3];

// Adicionando elemento no inicio
numbers.unshift(0);
// Adicionando elemento em uma posição específica
numbers.splice(1,0,0.5);
// Adicionando elemento no fim
numbers.push(5);

console.log(numbers);

// Sintaxe do Splice
// Array.splice(
//     {índice onde iniciar},
//     {quantos itens remover},
//     {itens a serem adicionados}
//   );