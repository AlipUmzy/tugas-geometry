const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR LINGKARAN");
console.log("==================");

let PHI = 3.14
let r = Number(prompt("masukan jari jari : "))

let luas = PHI * r * r
let keliling = 2 * PHI * r

console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)