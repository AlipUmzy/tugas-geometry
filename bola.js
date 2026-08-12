const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR BOLA");
console.log("==================");

let PHI = 3.14
let r = Number(prompt("masukan jari jari : "))


let volume = 0.75 * PHI * r ** 3
let luas_permukaan = 4 * PHI * r ** 2

console.log(`
Luas     : ${luas_permukaan} cm2
Volume : ${volume} cm`)