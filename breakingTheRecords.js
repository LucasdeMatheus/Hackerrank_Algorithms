function breakingRecords(scores) {
    let indexH = scores[0];
    let indexL = scores[0];
    let highestScore = 0;
    let lowestScore = 0;
    for(let i = 0; i < scores.length; i++){
        if(scores[i] > indexH){
            indexH = scores[i]
            highestScore += 1;
        };
        if(scores[i] < indexL){
            indexL = scores[i]
            lowestScore += 1
        };
    }
    return [highestScore, lowestScore]
}
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))