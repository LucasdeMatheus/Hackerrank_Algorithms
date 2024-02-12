function formingMagicSquare(s) {
    let combination = [
        [[9, 8, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]]]
        let totalConverting = Number.MAX_VALUE;
    for(let i = 0; i < combination.length; i++){
        minConverting = 0;
        for(let l = 0; l < s.length; l++){
            for(let c = 0; c < s.length; c++){
                minConverting += Math.abs(combination[i][l][c] - s[l][c]);
            }
        }
        totalConverting = Math.min(minConverting, totalConverting)
    }
    return totalConverting
}

console.log(formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2]]))