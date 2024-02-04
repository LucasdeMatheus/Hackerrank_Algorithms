//essa função ver se os digitos de um numero é divisores entre si
function findDigits(n) {
                 //o .toString transforma o parametro em String, e o .split separa-os
    const digits = n.toString().split('');
    let count = 0;
    for(let i = 0; i < digits.length; i++){
         //o Number.isInteger identifica se o valor é inteiro.
        if(Number.isInteger(n/ digits[i]))
        count ++
    }
    return count
}
console.log(findDigits(1012))//output 3
//1012 = 1 é divisivel, e 2 é divisivel, mas o 0 não é.