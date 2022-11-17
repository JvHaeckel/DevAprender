// Crie um array de objetos faixa de preços e para ser usada
// como se fosse no Mercado Livre


// 1 - Primeira forma de fazer...

let faixas = [
    {tooltip: 'até R$700',minimo: 0,maximo: 700},

    {tooltip: 'até R$1500',minimo: 700,maximo: 1500},

    {tooltip: 'até R$300',minimo: 1500,maximo: 3000}
]

// 2 - Segunda forma de fazer...

function faixa (tip,min,max){
    return {
        tip,
        min,
        max,
    }
}

let faixa1 = faixa('até R$700', 0,700);
console.log(faixa1);

// 3 - Terceira forma de fazer...

function Construtora (tip,min,max){
   this.tip = tip;
   this.min = min;
   this.max = max;
}

let faixa2 = [
    new Construtora('ate 700', 0 , 700),
    new Construtora('ate 1500', 700 , 1500),
    new Construtora('ate 3000', 1500 , 3000),
]