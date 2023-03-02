/** buat segitiga  */ 
let segitiga1 = '';
for (let i = 0; i < 6; i++) {
    for(let a = 1; a < 6-(i+1); a++){
        segitiga1 += `${a} `
    }
    segitiga1 += `\n`
}
console.log(segitiga1)
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

let segitiga2 = '';
for (let i = 0; i < 6; i++) {
    for (let b = 5-i; b > 0; b--) {
        segitiga2 += `${b} `
    }
    segitiga2 += `\n`
}  
console.log(segitiga2)

// // output
// // 5 4 3 2 1  
// // 4 3 2 1  
// // 3 2 1
// // 2 1  
// // 1  

