const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR KUBUS");
console.log("==================");

let s = Number(prompt("masukan panjang sisi : "))

let volume = s ** 3
let luas_permukaan = 6 * s

console.log(`
Luas     : ${luas_permukaan} cm2
Volume : ${volume} cm`)