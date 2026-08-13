const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR LAYANG-LAYANG");
console.log("==================");

let d1 = Number(prompt("masukan panjang diagonal (cm) 1 : "))
let d2 = Number(prompt("masukan panjang diagonal (cm) 2 : "))
let s1 = Number(prompt("masukan sisi (cm) 1 : "))
let s2 = Number(prompt("masukan sisi (cm) 2 : "))

let luas = 0.5 * d1 * d2
let keliling =  2 * (s1 + s2)


console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm2`)