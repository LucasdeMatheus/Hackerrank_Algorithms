function bonAppetit(bill, k, b) {
    bill[k]
    const resultBill = bill.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
        }, 0);
        let annaShare = (resultBill - bill[k])/2
        if (annaShare != b){
            console.log(Math.abs(annaShare - b))
        }else{
            console.log('Bon Appetit')
        }
}
console.log(bonAppetit([3, 10, 2, 9], 1, 7))