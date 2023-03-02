function maxWordLength(params) {
    let maxWord = 0;
    let word = ''
    for (let i = 0; i < params.split(' ').length; i++) {
        if(params.split(' ')[i].length>maxWord){
            maxWord=params.split(' ')[i].length;
            word=params.split(' ')[i].toString()
        }
    }
    return word;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp