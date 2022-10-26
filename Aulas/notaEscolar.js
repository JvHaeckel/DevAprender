// Obter média escolar a partir de um array

// 0 - 59: F  60 - 69: D  70 - 79: C  80 - 89: B  90 - 100: A

let array = [70,70,80];

console.log(mediaAluno(array));


function mediaAluno(notas){

    let soma = 0;

    for (let nota of notas){
        soma += nota;
    }
    let media = soma / (notas.length)

    if(media <= 59) return 'F';
    else if(media <= 59) return 'D';
    else if(media <= 59) return 'C';
    else if(media <= 59) return 'B';
    return 'A';

    console.log(media);
}










