function diagonalDifference(arr) {
    let leftdiagonal = 0;
    let rightdiagonal = 0;
    //o for fará seu loop normalmente
    for(let i = 0; i < arr.length; i+=1){
        //leftdiagonal: a soma tem 2 indice citados, o primeiro[i] indica a array, 
        //o segundo[i] indica o indice dentro do primeiro indice.
        leftdiagonal += arr[i][i];
        //rightdiagonal: ele puxa o primeiro normalmente a array, 
        //agora chamará a quantidade de indices na array(=3) e subtrai 1(=2) - o indice (=2(o primeiro indice é o 0))
        rightdiagonal += arr[i] [arr.length - 1 - i];
    }
    //"Math.abs" converte o numero dentro do parâmetro em um numero absoluto
    return Math.abs(leftdiagonal - rightdiagonal);
}

console.log(diagonalDifference([
    [23, 41, 56], 
    [17, 32, 50], 
    [12, 27, 44]]))//output: 1
    //leftdiagonal = 23 + 32 + 44
    //rightdiagonal = 56 + 32 + 12
    // rightdiagonal - leftdiagonal = -1
    //com a função "Math.abs" = 1