// FOR: Es un bucle el cual debemnos determinar cuantas vueltas deben dar\
// declaracion e inicializacion
// aumento - decremento
// condicion

for (let i = 0; i < 6; i++) { /* al usar let esta variable solo existira dentro del for, dado que el alzance es por bloque*/
    document.write(i + "<br>");
}
/* Secuencia del Ciclo FOR:
1- revisa el valor de la variable en este caso i
2- se asegura que cumpla la condicion, en este caso i < 6
3- se ejecuta el bloque, en este caso document.write(i + "<br>") 
4- realiza el incremento
*/

document.write("<br>");

// Sentencia "continue"

for (let i = 0; i < 6; i++) { /* Quiero que se saltee el numero 3 */
    if (i == 3) {
        continue;
    }
    document.write(i + "<br>");
}

document.write("<br>");

// FOR IN: Nos devolvera la posicion de los elementos dentro de un array, guardara en la variable de nuestra eleccion el dato de la posicion de los elementos de un array

let animales = ["gato", "perro", "conejo"];

for (let animal in animales) {
    document.write(animal + "<br>");
}

document.write("<br>");

// FOR OF: Nos muestra el valor de los elementos de un array, guardara en la variable de nuestra eleccion el valor de los elementos de un array

for (let animal of animales) {
    document.write(animal + "<br>");
}

// Sentencia "label": asociar un bucle a un nombre para poder terminarlo cuando querramos

mujeres = ["maria", "josefa", "roberta"];
hombres = ["pedro", "marcelo", mujeres,"humberto"];

forHombres:
for (let nombre in hombres) {
    if (nombre == 2) {
        for (let nombre of mujeres) {
            continue forHombres    /*en este caso le estamos diciendo que saltee la iteracion del for que nosotros le estamos diciendo*/
            document.write(nombre + "<br>");
        }
        
    }
    else {
        document.write(hombres[nombre] + "<br>");
    }
}