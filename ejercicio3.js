let boton1= "lavadorapequeña"
let boton2= "lavadoragrande"
let hora1= 3000
let hora2= 4000

let opccionseleccionada

let hora= 4

let opccionseleccionada1

opccionseleccionada = prompt("cual opccion desea 1/lavadora Pequeña , 2/ lavadora grande")

if(opccionseleccionada == 1 ){


    
    opccionseleccionada1 = prompt(" por cuanto tiempo desea usarlo? 1/ mas de 3 horas, 2/ menos de 3 horas")
    
    if(opccionseleccionada1 == 1 ){
      let preciofinal1 = hora1 * hora - 0.03
        console.log("el precio total es de " + preciofinal1 )
    }else{
        let preciofinal2 =  hora1 * hora
        console.log("el precio total es de " + preciofinal2)
    }
   

}else if (opccionseleccionada == 2 ){
    let oprccionseleccionada3 = prompt(" por cuanto tiempo desea usarlo? 1/ mas de 3 horas, 2/ menos de 3 horas")

    if (oprccionseleccionada3 == 1){
        let preciofinal4 = hora1 * hora - 0.03
        console.log("el precio total es de " + preciofinal4 )
    }
    else{
        let preciofinal5 =  hora1 * hora
        console.log("el precio total es de " + preciofinal5)
    }
}else{
    console.log("error, solo se puede elegir entre 1 y 2")
}