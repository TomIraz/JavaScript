// Ejercicio 2) C
// Hacer una calculadora

const suma = (num1,num2) => {
    return parseInt(num1) + parseInt(num2);
}

const resta = (num1,num2) => {
    return parseInt(num1) - parseInt(num2);
}

const division = (num1,num2) => {
    return parseInt(num1) / parseInt(num2);
}

const multiplicacion = (num1,num2) => {
    return parseInt(num1) * parseInt(num2);
}

alert("¿Que operacion quieres hacer?");
let operacion = prompt("1: Suma, 2: Resta, 3: Division, 4: Multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = suma(numero1,numero2);
    alert(`el resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("Primer numero para resta");
    let numero2 = prompt("Segundo numero para resta");
    resultado = resta(numero1,numero2);
    alert(`el resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("Primer numero para division");
    let numero2 = prompt("Segundo numero para division");
    resultado = division(numero1,numero2);
    alert(`el resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicacion(numero1,numero2);
    alert(`el resultado es ${resultado}`);
}
else {
    alert("No se eligio correctamente la operacion");
}