const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR PERSEGI");
console.log("==================");
let s = Number(prompt("Sisi : "))
let luas = s * s
let keliling = 4 * s
console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)