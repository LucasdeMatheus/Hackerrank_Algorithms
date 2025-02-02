function designerPdfViewer(h, word) {
    let wordIndex = word.length 
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let maxIndex = [];
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < word.length; j++) {
            
            if(letters.charAt(i) === word.charAt(j)){
                maxIndex.push(h[i])
            }
        }
        
    }
    return 'is', Math.max(...maxIndex) * wordIndex
}
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'))