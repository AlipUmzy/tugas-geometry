const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR PRISMA");
console.log("==================");


let L_Alas = Number(prompt("masukan luas alas (cm) : "))
let Tp = Number(prompt("masukan tinggi (cm) : "))
let K_Alas = Number(prompt("masukan keliling alas (cm) : "))

let volume = L_Alas * Tp
let luas_permukaan = (2 * L_Alas) + (K_Alas * Tp)

console.log(`
Luas permukaan     : ${luas_permukaan} cm2
Volume : ${volume} cm`)