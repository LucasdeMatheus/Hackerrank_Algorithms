function staircase(n) {
    let hashtag = '#';//responsável por adicionar #
    let inpLine = '';//responsável por adicionar o espaço
    let linePosition = n - 1;
    //pelo fato de utilizar for dentro do for, especifiquei o [i].
    // o primeiro "for" fará uma corrida em linhas, e ele só fará sua próxima volta após a ultima do segundo "for"
    // o segundo em colunas, e ele fará suas voltas primeiro
    for (let iLine = 0; iLine < n; iLine += 1){
        for (let iColumn = 0; iColumn < n; iColumn += 1){
            // o "linePosition" entra para citar o valor do parametro(n)- 1
            if(iColumn < linePosition){
                inpLine += ' ';
            } else {
                inpLine += hashtag;
            }
        }
        //aqui o console fará a construção da escada, limpará o inpLine, e diminuirá o indice de "n"
        console.log(inpLine)
        inpLine='';
        linePosition -= 1;
    } 
}
console.log(staircase(6))