// Criar objeto que contenha tudo de um endereço e uma função que exiba os dados

let address = {
    cep: ' ',
    cidade:' ',
    estado: ' ',
    rua: ' ',
    numero: ' ',
}

function exibe (address){
    for(let chave in address){}
    console.log(chave,address[chave]);
}

// console.log(address);

exibe(address);













