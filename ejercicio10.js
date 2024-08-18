let copiasrequeridas= 1250

let pago1= 120
let pago2= 100
let pago3= 80
let pago4= 50


if(copiasrequeridas<500){console.log("entonces su pago es "+copiasrequeridas*pago1 )}
else if(copiasrequeridas>500 && copiasrequeridas<750){console.log("entonces su pago es "+copiasrequeridas*pago2 )}
else if(copiasrequeridas>750 && copiasrequeridas<1000){console.log("entonces su pago es "+copiasrequeridas*pago3 )}
else if(copiasrequeridas>1000){console.log("entonces su pago es "+copiasrequeridas*pago4 )}