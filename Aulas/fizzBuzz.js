// Divisivel por 3 - Fizz
// Divisivel por 5 - Buzz
// Divisivel pelos dois - FizzBuzz
//Não é divisível por 3 e 5 - entrada
// Não é número - not number

let resultado = fizzBuzz(6);
console.log(resultado);

function fizzBuzz(valor){

    while(typeof valor !== 'number'){
        return "not number";
    }

    switch (true){
        case 1: valor %3 === 0;
        return 'Fizz';

        case 2 : valor %5 === 0;
        return 'Buzz';

        case 3: (valor %3 === 0 && valor %5 === 0)
        return 'FizzBuzz';

        default: "not number";
    }



}







