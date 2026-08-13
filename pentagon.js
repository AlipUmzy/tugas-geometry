const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR PENTAGON");
console.log("==================");

let s = Number(prompt("masukan sisi (cm) : "))
let konst = 1.72048

let keliling = 5 * s
let luas = 0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5)) * s ** 2)


console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm2`)