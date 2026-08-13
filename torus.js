const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR TORUS");
console.log("==================");


let R = Number(prompt("masukan radius mayor (cm) : "))
let r = Number(prompt("masukan radius minor (cm) : "))
let PHI = 3.14

let volume = 2 * (PHI ** 2) * R * r ** 2
let luas_permukaan = 4 * (PHI ** 2) * R * r


console.log(`
Luas permukaan     : ${luas_permukaan} cm2
Volume : ${volume} cm`)