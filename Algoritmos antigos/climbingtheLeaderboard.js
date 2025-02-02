function climbingLeaderboard(ranked, player) {
    ranked = [...new Set(ranked)];
    let position = ranked.length; 
    let i = ranked.length - 1; 
    let j = 0;
    while(j < player.length){
        while(player[j] >= ranked[i]){
            i--;
            position--;
        }
        player[j] = position + 1;
        j++;
    }
    return player
}
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))