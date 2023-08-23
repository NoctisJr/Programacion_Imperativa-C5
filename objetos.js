// objetois literales 
// clave:valor | emplea solo PROPIEDADES & METODOS

let usuario = {
    email: "pepe@gmail.com",
    nombre: "pepe",
    edad: 22,
    // Solo utiliza funciones expresadas

    iniciarSesion : function() {
        console.log("Inicio sesion");
    }
}

// DOT MOTATION
console.log(usuario.nombre);
//BRACKET NOTATION
console.log( usuario["edad"] );

//INVOCAR METODO-FUNCION
usuario.iniciarSesion();

// MANIPULACION DE OBJETOS

// modificar
usuario.edad ++;
console.log(usuario.edad);

//agregar
usuario.apellido = "perez";

//eliminar
delete usuario.email;

// Los arreglos se manejan como tablas -- registros -> sql
// Los arreglos se manejan como colecciones -- documentos -> no sql

[ // tablas

    {//registros

    },
    {

    },
]

let estudiante =
    {
        nombre: "Maria",
        notas : [6, 7, 9],
        promediar: function () {

            let acomulador = 0;

            for (let i = 0; i < this.notas.length; i++) {
               acomulador += this.notas[i];
            }
            return acomulador / this.notas.length;
        }       
    };

let promedio = estudiante.promediar();
console.log(promedio);


/***************************/

let promedioEstudiantes = function () {

    let acomulador = 0;

    for (let i = 0; i < this.notas.length; i++) {
       acomulador += this.notas[i];
    }
    return acomulador / this.notas.length;
}   


let estudiantes = [
    {
        nombre: "Maria",
        notas : [6, 7, 9],
        promediar: promedioEstudiantes
    },

    {
        nombre: "Pepe",
        notas : [6, 7, 9],
        promediar: promedioEstudiantes
    },

    {
        nombre: "Juan",
        notas : [6, 7, 9],
        promediar: promedioEstudiantes
    }
]

const funcionParaProfesora = () => {
    for (let i = 0; i < estudiantes.length; i++) {
        console.log(`El promedio de ${estudiantes[i].nombre} es ${estudiantes[i].promediar()}`)
    }
}

funcionParaProfesora();

const funcionAgregarAlumno = (nombre, notas) => {
    estudiantes.push( {
        nombre: nombre,
        notas: notas,
        promediar: funcionPromediar
    })
}



