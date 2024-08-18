let  fisica= 7.0
let quimica= 6.8
let biologia=9.5
let matematicas=8.2
let informatica=5.7

let promedio= (fisica + quimica + biologia + matematicas + informatica)/5

let notafinal

if (promedio >= 0 && promedio <=5.9){notafinal="mala"}
else if(promedio >=6 && promedio <=8){notafinal="buena"}
else if(promedio >8){notafinal="excelente"}

console.log("promedio: "+promedio)
console.log("nota final: "+notafinal)