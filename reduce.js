let ar = [9,9]
//o let é a variavel que contem uma array
const result = ar.reduce((acumulador, valorAtual) => {
return acumulador + valorAtual;
}, 0);
//a função reduce vai pegar todos indices da array dentro da variavel "ar" e somar-los
console.log(result)
//result será o resultado da soma