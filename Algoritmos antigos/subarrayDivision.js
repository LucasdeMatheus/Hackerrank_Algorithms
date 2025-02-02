function birthday(s, d, m) {
    let qntd = 0
    let sum = 0

    for(let i = 0; i <=(s.length - m); i ++){
        
            for(let j = 0; j < m; j++){
            sum = sum + s[i + j]
            }
            if(sum === d){
                qntd += 1;
            }
        
        sum = 0
    }
    return qntd
}
console.log( birthday([2, 3, 4, 4, 2, 1, 2, 5, 3, 4, 4, 3, 4, 1, 3, 5, 4, 5, 3, 1, 1, 5, 4, 3, 5, 3, 5, 3, 4, 4, 2, 4, 5, 2, 3, 2, 5, 3, 4, 2, 4, 3, 3, 4, 3, 5, 2, 5, 1, 3, 1, 4, 2, 2, 4, 3, 3, 3, 3, 4, 1, 1, 4 ,3 ,1, 5, 2, 5, 1, 3, 5, 4, 3, 3, 1, 5, 3, 3, 3, 4, 5, 2],
    26, 8))
//s = array dos quadrados
//d = day
//m = quantidas de somas