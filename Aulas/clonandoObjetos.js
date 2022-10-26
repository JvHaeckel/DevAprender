// minutagem 2:43:45

let iphone = {
    modelo: 'xs',
    tamanho: 5.4,
    idade: 3,
}

let copiaObjeto1 = Object.assign({
    bateria:5000    // Ao colocar uma nova Key/Value adicionou uma nova propriedade ao objeto
},iphone);
console.log(copiaObjeto1);

// Outra forma de clonar objetos
let copiaObjeto2 = {...iphone};
console.log(copiaObjeto2);







