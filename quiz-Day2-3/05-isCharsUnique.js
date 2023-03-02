function isCharsUnique(string){
    let huruf = string.split('');
    let unik = true
    for (let i = 0; i <= huruf.length; i++) {
        for (let a = i+1; a < huruf.length; a++) {
           if(huruf[i]===huruf[a]){
            unik = false;
            return unik;
           }
        }
    }
    return unik;
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false