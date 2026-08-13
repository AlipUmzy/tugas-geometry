const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR KERUCUT");
console.log("==================");


let PHI = 3.14
let r = Number(prompt("masukan jari-jari (cm) : "))
let t = Number(prompt("masukan tinggi kerucut (cm) : "))
let s = Number(prompt("masukan panjang garis pelukis (cm) : "))


let volume = 1/3 * PHI * r ** 2 * t
let luas_permukaan = (PHI * r ** 2) + (PHI * r * s)

console.log(`
Luas permukaan    : ${luas_permukaan} cm2
Volume : ${volume} cm`)