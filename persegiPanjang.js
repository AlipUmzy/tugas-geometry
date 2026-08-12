const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR PERSEGI PANJANG");
console.log("==================");

let p = Number(prompt("masukan panjang persegi : "))
let l = Number(prompt("masukan lebar persegi : "))


let keliling = 2 * (p + l)
let luas = p * l


console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)