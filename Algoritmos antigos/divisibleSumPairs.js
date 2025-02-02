function divisibleSumPairs(n, k, ar) {
    let areDivisors = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <n; j++) {
            if((ar[i] + ar[j+i]) % k === 0){
                areDivisors += 1;   
            }
        }
    }
    return areDivisors
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))