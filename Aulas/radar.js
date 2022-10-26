// Velocidade maxima de 70km/h e a cada 5km/h acima do limite ganha 1 ponto na carteira
// considere que as velocidades informadas podem ser quebradas
// assim pode usar o Math.floor().Acima de 12 pontos
// a carteira será suspensa
let velo = radar(120);
console.log(velo);

function radar(km){

if(km <= 70){
    console.log("Velocidade ok sem multa");
}
else{
   let pontos = Math.floor(km -70)/5 ;

    if(pontos <=12){
        console.log("Levou " + pontos + " ponto(s) na carteira");
    }
    else{
        console.log("Carteira suspensa");
    }
}



}


















