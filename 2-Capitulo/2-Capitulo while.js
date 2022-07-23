//WHILE: El bucle se repite hasta que la condicion sea falsa

let numero = 0;

while (numero < 6) {
    numero++;
    document.write(numero);
}
document.write("<br>");
//DO WHILE: Primero se ejecuta el bloque y despues se pregunta la condicion
let numero1 = 0;

do {
    document.write(numero1 + "<br>");
    numero1++;
}

while (numero1 <=6)

// Sentencia Break
let numero2 = 0;

while (numero2 < 100) {
    numero2++;
    document.write(numero2);
    if (numero2 == 5) {
        break;
    }
}
document.write("fin");
