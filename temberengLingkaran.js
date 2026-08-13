const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR TEMBERENG LINGKARAN");
console.log("==================");

let L_juring = Number(prompt("masukan luas juring (cm) : "))
let L_segitiga = Number(prompt("masukan luas segitiga (cm) : "))

let luas_Tembereng = L_juring - L_segitiga


console.log("==================");
console.log("luas tembereng adalah " +luas_Tembereng+ (" cm²"))
console.log("==================");