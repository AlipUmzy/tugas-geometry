const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR TRAPESIUM");
console.log("==================");


let a = Number(prompt("masukan sisi atas : "))
let b = Number(prompt("masukan sisi bawah : "))
let t = Number(prompt("masukan tinggi : "))
let s3 = Number(prompt("masukan sisi 1 : "))
let s4 = Number(prompt("masukan sisi 2 : "))


let luas = 0.5 * (a + b) * t
let keliling = a + b + s3 + s4


console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)