let duracion= "3 meses"
let pagoarealizar

if(duracion === "15 dias"){pagoarealizar= 18000}
else if(duracion === "30 dias"){pagoarealizar= 35000}
else if(duracion === "3 meses"){pagoarealizar= 86000}
else if(duracion> "3 meses"){console.log("error")}

console.log("el pago a realizar por "+duracion+" de su mensualidad es "+pagoarealizar)