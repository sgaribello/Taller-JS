let tamañoSandwich = prompt("ingrese el tamaño del sandwich pequeño/grande")
const tocinetas = prompt("¿Desea tocineta? (sí/no)")
const jalapeños = prompt("¿Desea jalapeños? (sí/no)")
const pavo = prompt("¿Desea pavo? (sí/no)")
const queso = prompt("¿Desea queso? (sí/no)")
const costoTocineta = 3000
const costoPavo = 3000
const costoQueso =  2500
const costoGrande = 12000
const costoPequeña = 6000

let Costopequeño; 

if (tamañoSandwich == "pequeño") {Costopequeño = costoPequeña} else (tamañoSandwich == "grande") ; {Costopequeño = costoGrande} 

let costoIngredientes = 0;

if (tocinetas == "sí") {
    costoIngredientes += costoTocineta;
}
if (jalapeños == "sí") {
    // Jalapeños son gratis, no hay costo adicional
}
if (pavo == "sí") {
    costoIngredientes += costoPavo;
}
if (queso == "sí") {
    costoIngredientes += costoQueso;
}
const costoTotal = Costopequeño + costoIngredientes;

alert ("el sandwich es " +tamañoSandwich+ " asi que el costo con los ingredientes "+ costoTotal)