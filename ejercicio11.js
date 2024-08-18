const Pitidoinicial = prompt("emite pitido el pc si/no")
const Discoduro = prompt("El disco duro gira si/no")

if(Pitidoinicial == "si" && Discoduro == "si"){console.log("Pongase en contacto con el tecnico apoyo")}
else if(Pitidoinicial == "si" && Discoduro == "no"){console.log("verificar contactos de la unidad")}
else if(Pitidoinicial == "no" && Discoduro == "si"){console.log("Compruebe las conexiones de altavoces")}
else if(Pitidoinicial == "no" && Discoduro == "no"){console.log("Traiga la computadora para repararla en la central")}
else{console.log("respuesta no valida")}