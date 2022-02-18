


//condicional if

let edad = 20;
let provincia = "Mendoza"
let comprar = "true"

if(edad >= 18 && provincia == "bs as" && comprar == "true"){
console.log("Puedes ingresar a la fiesta");
}else{
    console.log("No puedes ingresar a la fiesta");
}

if(edad >= 18 || provincia == "bs as" || comprar == "true"){
    console.log("Puedes ingresar a la fiesta");
    }else{
        console.log("No puedes ingresar a la fiesta");
    }

if(edad >= 18){
    console.log("Puedes ingresar a la fiesta");
    if(edad===20){
        console.log("puedes comprar bebidas");
    }else{
            console.log("podes ir a tu casa");
        }
}

let fecha = new Date()
let horaActual = fecha.getHours()

console.log ("sali del condicional");
