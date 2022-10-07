// 4) b
// - Crear una funcion que al pasarle como parametro la materia nos devuelva: profesor asignado, el nombre de todos los alumnos
// - Crear funcion que nos diga en cuantas clases esta cofla
// - Nombrar las clases en las que esta y los profesores de cada una

const materias = {
    fisica: ["matias", "pedro", "juan", "pepito", "cofla", "maria"],
    programacion: ["tomas", "pedro", "pepito", "cofla", "maria"],
    logica: ["axel", "pedro", "juan", "pepito",],
    quimica: ["damian", "pedro", "juan", "pepito", "cofla", "maria"],
}

const obtenerInformacion = (materia) => {
    if (materias[materia] !== undefined) {
        return [materia, materias[materia], materias];
    }
    else if (materias[materia] == " ") {
        
    }
    else {
        return materias;
    }
}
const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia)
    let profesores = informacion[1][0];
    let alumnos = informacion[1];
    alumnos.shift();
    document.write(
    `<b style="color: red">${materia.toUpperCase()}</b><br>
    Profesores: <b>${profesores}</b><br>
    Alumnos: <b>${alumnos}</b><br><br>`
    );
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

const cantidadClases = (alumno) => {
    let informacion = obtenerInformacion() // no necesitamos la materia dado que en la funcion definimos que si la materia es undefined aun asi nos devuelva el objeto "materias"
    let cantidadTotal = 0;
    let clasesPresentes = [];
    for (i in informacion) {
        if (informacion[i].includes(alumno)){
            cantidadTotal++;
            document.write
            clasesPresentes.push(" " + i);
        }
    }
    return document.write(`
    <b style= "color: green">${alumno.toUpperCase()}</b>:<br>
    Cantidad de clases: ${cantidadTotal}<br>
    Clases a las que asiste: ${clasesPresentes}<br><br>
    `);
}

cantidadClases("cofla"); // la razon por la que los profesores no aparecen aunque pongas el nombre de uno de ellos es porque fueron eliminados del array en la linea 27, cuando hicimos alumnos.shift()