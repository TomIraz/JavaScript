//ejercicio 5) a 
// Termina el primer semestre y cofla no sabe si aprobara o no las materais, para lograrlo necesitara: contar con almenos el 90% de asistencias.
// debe tener al menos el 75% de los trabajos practicos aprobados.
// El promedio por materia debe ser de al menos 7 / 10

//  - Solicitar los datos y decirle si aprueba o no
//  - Mostrar todo esto con colores representativos en consola

const materias = {
    fisica: [90, 6, 3],  // % asistenica, promedio, trabajos
    matematica: [84, 8, 2],
    logica: [92, 8, 4],
    quimica: [96, 8, 4],
    calculo: [91, 6, 3],
    programacion: [79, 7, 4],
    biologia: [75, 9, 2],
    bbdd: [98, 9, 1,],
    algebra: [100, 10, 4],
}

const asistencia = () => {
    for (materia in materias) {
        let asistencia = materias[materia][0]
        if (asistencia >= 90) {
            console.log(materias[materia][3]);
            console.log("%cAprobado", "color: green");
        }
        else {
            console.log(materias[materia][3]);
            console.log("%cDesaprobado", "color: red");
        }
    }
}
asistencia()