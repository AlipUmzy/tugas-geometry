const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR JURING LINGKARAN");
console.log("==================");


let a = Number(prompt("masukan sudut pusat (°) : "))
let Panjang_busur = Number(prompt("masukan panjang busur (cm) : "))
let r = Number(prompt("masukan jari jari (cm) : "))
let PHI = 3.14

let luas = a / 360 * PHI * r ** 2
let keliling = (2 * r) + Panjang_busur

console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)