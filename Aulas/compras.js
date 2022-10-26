// https://blog.betrybe.com/javascript/javascript-for/
// Imagine um carrinho de compras com alguns itens de materiais 
// escolares, e precisamos listar o nome do produto, o valor 
// unitário, a quantidade comprada e calcular o valor total por item e o total do carrinho

let array = [['livro', 100,2], ['caderno', 50,3]];

array.push(['carteira', 250,1]); // Se colocar o push sem os colchetes cada variavelvai ser um indice do array


// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

let total = 0;
let totalItemCarrinho = 0;
compra(array);

function compra(arrays){
    for(let i = 0; i < array.length; i++){
        totalItemCarrinho = array[i][1] * array[i][2];

        console.log("Nome do produto: " + array[i][0] + " / Valor unitário: R$"
        + array[i][1] + " Valor total de tudo: R$" + totalItemCarrinho);
        total += totalItemCarrinho;
        
}
console.log("O total da compra foi de: R$" + total);
}






