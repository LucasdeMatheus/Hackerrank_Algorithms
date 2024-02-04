function extraLongFactorials(n) {
    n = BigInt(n);//o BigInt fala que será um numero grande, longo
    let number = BigInt(1);
    //o for inverterá, começará pelo valor do "n", e irá até o 1.
    for(let i = n; i>1; i--){
        //number se inicia com 1, 1 x 25, e depois o [i] diminuirá até o 1.
        number *= i;
    }
    //o toString resolverá o problema do output terminar em "n"
    return number.toString()
}

console.log(extraLongFactorials(5))//output 120
//5 x 4 x 3 x 2 x 1