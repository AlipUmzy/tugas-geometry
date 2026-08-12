const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR TABUNG");
console.log("==================");

let PHI = 3.14
let r = Number(prompt("masukan jari jari : "))
let t = Number(prompt("masukan tinggi : "))

let volume = PHI * r ** 2 * t
let luas_permukaan = 2 * PHI * r * r + t


console.log(`
Luas     : ${luas_permukaan} cm2
Volume : ${volume} cm`)