const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR BALOK");
console.log("==================");

let p = Number(prompt("masukan panjang balok : "))
let l = Number(prompt("masukan Luas balok : "))
let t = Number(prompt("masukan tinggi balok : "))

let volume = p * l * t
let luas_permukaan = 2 * ((p * l) + (p * t) + (l * t));

console.log(`
Luas     : ${luas_permukaan} cm2
Volume : ${volume} cm`)