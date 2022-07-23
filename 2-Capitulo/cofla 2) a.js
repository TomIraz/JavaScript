// Ejercicio 2) A
// es una fiesta
// - Dejar pasar solo a los mayores de edad
// - El primero que entre despues de la 2 AM no paga

// variables que tenemos que crear, contador de personas despues de las 2 AM
// edad de las personas

let free = false;
const validarCliente = (time) => {
    let edad = (prompt("¿Cuantos años tenes?"));
    if (edad >= 18) {
        if (time >= 2 && time <7 && !free) {
            alert("Podes pasar gratis");
            free = true;
        }
        else if (time >= 2 && time <7 && free) {
            alert("Podes pasar, son $1000 por entrada");
        }
        else {
            alert(`No hay fiesta son las ${time}Hs`);
        }
    } 
    else {
        alert("No puede pasar")
    }
}

validarCliente(1);
validarCliente(2);
validarCliente(2);
validarCliente(3);
validarCliente(4);
validarCliente(8.2);