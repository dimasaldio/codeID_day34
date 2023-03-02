
function isPalindrome(word){
    let kalimat = word.toLowerCase().split(' ');
    let palindrome = false;
    for (let i = 0; i < kalimat.length; i++) {
        for (let a = i+1; a < kalimat.length; a++) {
            if(kalimat[i].split('').sort().toString()===kalimat[a].split('').sort().toString()){
                palindrome = true;
                return palindrome;
            }
        }
    }
    return palindrome;
}

console.log(isPalindrome('kasur ini rUsak'));//true
