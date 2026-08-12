const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR JAJAR GENJANG");
console.log("==================");

let a = Number(prompt("masukan alas : "))
let t = Number(prompt("masukan tinggi : "))
let s = Number(prompt("masukan sisi miring : "))


let luas = a * t
let keliling = 2 * (a + s)


console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)