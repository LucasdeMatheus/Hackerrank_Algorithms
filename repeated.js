//esta função retorna quantas vezes o maior numero se repete na array
function birthdayCakeCandles(candles) {
    // a função Math.max() pegará o maior indice da array
    let numberMax = Math.max(...candles)
    let totalAmount = 0;
    for(let i = 0; i < candles.length; i++){
        //se o valor do indice for igual ao maior, somará 1 no totalAmount
        if(candles[i] == numberMax){
            totalAmount ++;
        }
    }
    return totalAmount
}
console.log (birthdayCakeCandles([1, 3, 3, 2, 3])) //output = 3
//maior numero = 3
// vezes que o maior se repete = 3