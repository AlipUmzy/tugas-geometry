const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR KETUPAT");
console.log("==================");

let d1 = Number(prompt("Masukan diagonal 1 : "))
let d2 = Number(prompt("masukan diagonal 2 : "))
let s = Number(prompt("masukan panjang sisi : "))


let luas = 0.5 * d1 * d2
let keliling = 4 * s


console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)