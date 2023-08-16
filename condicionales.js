//Estrcturas de Control

//if - else 

//superadmin -> Acceso total | admin -> acceso casi total | cliente -> acceso limitado

const determinarAcceso = ( rolUsuario) => {

    if (rolUsuario === "superAdmin") {
        return "Acceso total"

    } else if (rolUsuario === "admin") {
        return "acceso casi total"
    } else if (rolUsuario === "cliente") {
        return "acceso limitado"
    } else {
        return "No tienes acceso";
    }

};

let resultadoAcceso = determinarAcceso();
console.log(resultadoAcceso);
 
// Ternario (para preguntas de si y no)

const llevoParaguas = (clima) => {

    return clima === "lluviso" ? "Si, llevalo" : "No, no hace falta";
};

let resultado = llevoParaguas("lluvioso");
console.log(resultado);

//switch

const determinarImpuesto = marcaAuto => {

    let impuesto = 100;

    switch (marcaAuto) {
        case "vw":
            impuesto +=10;
            break;
        
        case "audi":
            impuesto +=20;
            break;
        
        case "volvo":
            impuesto +=30;
            break;
    
        default:
            impuesto = 0;
            break;
    }

    return impuesto > 0 ? impuesto : "Su auto esta exento"; 

};

let resultado2 = determinarImpuesto("audi");
console.log(resultado2);

