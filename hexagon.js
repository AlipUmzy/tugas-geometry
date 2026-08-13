const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR HEXAGON");
console.log("==================");

let s = Number(prompt("masukan panjang sisi (cm) : "))
let konst = 2.598

let keliling = 6 * s
let luas = konst * s ** 2


console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm2`)