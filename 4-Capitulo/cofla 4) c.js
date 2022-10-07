// ejercicio 4

let materias = {
    fisica: ["Matias", "pedro", "juan", "pepito", "cofla", "maria"],
    programacion: ["Tomas", "pedro", "pepito", "cofla", "maria"],
    logica: ["Axel", "pedro", "juan", "pepito",],
    quimica: ["Damian", "pedro", "juan", "pepito", "cofla", "maria"],
}

const inscribir = (alumno, materia) => {
    let personas = materias[materia];
    if (personas.length >= 21) {
        cupos = document.write(`
        Lo siento <b>${alumno.toUpperCase()}</b>, para la clase <b>${materia.toUpperCase()}</b> ya no hay cupos.<br><br>
        `)
    }
    else {
        personas.push(alumno)
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materia["programacion"],
                logica: materia["logica"],
                quimica: materia["quimica"],
            }
        }
        else if (materia == "programacion") {
            materias = {
                fisica: materia["fisica"],
                programacion: personas,
                logica: materia["logica"],
                quimica: materia["quimica"],
            }
        }
        else if (materia == "logica") {
            materias = {
                fisica: materia["fisica"],
                programacion: materia["programacion"],
                logica: personas,
                quimica: materia["quimica"],
            }
        }
        else if (materia == "quimica") {
            materias = {
                fisica: materia["fisica"],
                programacion: materia["programacion"],
                logica: materia["logica"],
                quimica: personas,
            }
        }
        cupos = document.write(`Felicidades <b>${alumno.toUpperCase()}</b>, te has inscripto en <b>${materia.toUpperCase()}</b><br><br>`)
    }
    return cupos;
}
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");
inscribir("cofla","logica");

document.write(materias["logica"])