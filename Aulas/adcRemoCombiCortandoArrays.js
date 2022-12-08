// Juntei duas aulas que estavam separadas

const numbers = [1,2,3,4,5,6];
let numbers2 = [7,8,9];

// Adicionando elemento no inicio
numbers.unshift(0);

// Adicionando elemento em uma posição específica
numbers.splice(1,0,0.5);

// Adicionando elemento no fim
numbers.push(5);

console.log(numbers);

// Sintaxe do Splice
// Array.splice( onde iniciar, quantos itens remover,itens a serem adicionados
//   );

// Removendo elemento no inicio
numbers.shift();

// Removendo elemento no meio
numbers.splice(2,1);
console.log(numbers);

// Removendo elemento no fim
numbers.pop();

// Combinando arrays
let juntos = numbers.concat(numbers2);

// Dividindo Arrays
let cortado = juntos.slice(1,3)
console.log(cortado)

// Para resumir algumas operações acima (combinar e colar) usamos o Spread

let juntos1 = [...numbers1,...numbers2];
let juntos3 = [...numbers1,'%',...numbers2, 5];

