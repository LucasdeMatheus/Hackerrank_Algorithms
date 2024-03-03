function hurdleRace(k, height) {
        if(Math.max(...height) >= k){
            return Math.max(...height) - k
        }else{
            return 0
        }
}
console.log(hurdleRace(4,[1, 4, 3, 1, 2]))