function compareTriplets(a, b) {
    let aPontos = 0;
    let bPontos = 0;
    for(let i = 0; i<a.length;i++){
        if(a[i]>b[i]){
            aPontos+=1;
        }else if(a[i] < b[i]){
            bPontos+=1;
        }
    };
    return [aPontos, bPontos];
}
console.log(compareTriplets ([17, 28, 30], [99, 18, 8]))//2,1