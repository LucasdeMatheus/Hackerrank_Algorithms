function pageCount(n, p) {
    const frontPage = Math.floor(p/2);
    let backPage;
    if(n % 2 === 1){
        backPage = (Math.floor((n - p) / 2));
    }else{
        backPage = Math.floor((n - p + 1) / 2);
    }
    return Math.min(frontPage, backPage)

}
console.log(pageCount(6, 3))