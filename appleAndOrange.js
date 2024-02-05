//s : inteiro, ponto inicial da localização da casa de Sam.
//t : inteiro, localização final da localização da casa de Sam.
//a : inteiro, localização da macieira.
//b : inteiro, localização da Laranjeira.
//apples : array inteiro, distâncias em que cada maçã cai da árvore.
//oranges : array inteiro, distâncias em que cada laranja cai da árvore.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let qntdApples = 0;
    let qntdOranges = 0;
    //forEach funciona como o for
    //array.forEach((indice) =>{função})
    apples.forEach((apple) => {
        if((apple + a) >= s && (apple + a)<=t){
            qntdApples +=1;
        }
    });
    oranges.forEach((orange)=>{
        if((orange + b) <= t && (orange + b)>=s){
            qntdOranges +=1;
        }
    })
    console.log(qntdApples)
    console.log(qntdOranges)
}
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))