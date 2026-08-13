const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR LIMAS");
console.log("==================");

let L_Alas = Number(prompt("masukan luas alas (cm) : "))
let T_Limas = Number(prompt("masukan tinggi limas (cm) : "))
let s = Number(prompt("masukan jumlah sisi (cm) : "))

let volume = 1/3 * L_Alas * T_Limas
let luas_permukaan = L_Alas + s

console.log(`
Luas_permukaan : ${luas_permukaan} cm2
Volume : ${volume} cm2`)