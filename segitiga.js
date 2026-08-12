const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR SEGITIGA");
console.log('==================')

let alas = Number(prompt("masukan alas : "))
let tinggi = Number(prompt("masukan tinggi : "))
let sisi1 = Number(prompt("masukan sisi 1 : "))
let sisi2 = Number(prompt("masukan sisi 2 : "))
let sisi3 = Number(prompt("masukan sisi 3 : "))


let luas = 0.5 * alas *tinggi;
let keliling = sisi1 + sisi2 + sisi3


console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)