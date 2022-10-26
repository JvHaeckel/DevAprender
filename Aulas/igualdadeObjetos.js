// Crie uma função construtora para um objeto de endereço:
// depois compare se as propriedade são iguais e por fim se
// o endereco de memoria são iguais

function Endereco (rua, cidade, cep){
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
}

let endereco1 = new Endereco('sebastiao', 'recife',52060100);
let endereco2 = new Endereco('bernardo', 'jaboatao',54410010);
let endereco3 = new Endereco('sebastiao', 'recife',52060100);

function enderecoMemoriaIgual (endereco1, endereco2){
    if(endereco1 === endereco2){
        return 'São iguais';
    }
    return "Diferentes";
}

function igual (){
   if(endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep){
        return 'São iguais'; 
    }
    return "Diferentes";
}


console.log(enderecoMemoriaIgual(endereco1,endereco2));
console.log(enderecoMemoriaIgual(endereco1,endereco3));
console.log(igual(endereco1,endereco2));
console.log(igual(endereco1,endereco3));



// function enderecoMemoriaIguais















