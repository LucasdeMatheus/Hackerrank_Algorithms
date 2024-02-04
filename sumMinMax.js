function miniMaxSum(arr) {
    //a função .sort organizará a array
    arr.sort((a, b) => a - b);
    let min = 0; 
    let max = 0;
    //o for [i] somará os indices assim como o reduce, porem não somará a ultima
    //o arr.length-1 ocasiona isso
    for(let i = 0; i < arr.length-1; i++){
        min += arr[i]
    }
    // nesse for [j] fará a mesma coisa que o [i].
    // o diferencial é o [j] começar pelo indice 1, e não 0
    // o que fará somar a partir do segunda maior
    for(let j = 1; j<arr.length; j++){
        max += arr[j];
    }
    console.log(min,max)
}
console.log(miniMaxSum([3, 2, 1, 4, 5]))//output:10 14
//min = 1 + 2 + 3 + 4
//max = 2 + 3 + 4 + 5