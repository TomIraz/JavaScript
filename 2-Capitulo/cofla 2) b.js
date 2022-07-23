// Ejercicio 2 B)
// - Crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A).
// - Pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes)
// - Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que esta repobado

let cantidad = prompt("¿Cuantos alumnos son?");
let matrizAsistencia = [];

for (i=0; i < cantidad; i++) {
    matrizAsistencia[i] = [prompt(`Nombre del alumno Nro ${i+1}°`),0]
}

let pasarLista = (nombre, p) => {
    let presencia = prompt(nombre)
    if (presencia == "p" || presencia == "P") {
            matrizAsistencia[p][1]++;
    }
}

for (i=0; i<30; i++) {
    for (alumnos in matrizAsistencia) {
        pasarLista(matrizAsistencia[alumnos][0], alumnos);
    }
}

for (alumno in matrizAsistencia) {
    let resultado = `${matrizAsistencia[alumno][0]} tuvo ${matrizAsistencia[alumno][1]} presentes <br>
    ${matrizAsistencia[alumno][0]} tuvo ${30 - matrizAsistencia[alumno][1]} ausentes <br><br>`;
    if (matrizAsistencia[alumno][1] < 27) {
        alert(`El alumno ${matrizAsistencia[alumno][0]} esta reprobado por demasiadas faltas`);
    }
    document.write(resultado);
}