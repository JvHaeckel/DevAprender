// Função que retorna a soma dos múltiplos de 
// 3 e 5

somar(10);

function somar(numbers){

    let multiply3 = 0;
    let multiply5 = 0;

    for( i = 0; i <= numbers; i++){
        if(i % 3 === 0){
            multiply3 += i;
        }
        else if(i % 5 === 0){
            multiply5 += i;
        }
}
console.log(multiply3 + multiply5);
}














