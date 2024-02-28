function simpleArraySum(ar) {
    const result = ar.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
        }, 0);
}