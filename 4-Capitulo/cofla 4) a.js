// 4) a: Crear un calculadora mejor con exponencial, raiz cuadrada y cubica.
class Calculadora {
    constructor() {
    }

    operar() {
        let operacion = prompt("1: Suma, 2: Resta, 3: Divicion, 4: Multiplicacion, 5: Exponencial, 6: Raiz Cuadrada, 7: Raiz Cubica");
        if ((operacion == 6) || (operacion == 7)) {
            var num1 = prompt("Elije el numero");
        }
        else if ((operacion == 1) || (operacion == 2) || (operacion == 3) || (operacion == 4) || (operacion == 5)) {
            var num1 = prompt("Elije tu primer numero");
            var num2 = prompt("Elije tu segundo numero");
        }
        else {
            operacion = prompt("Debe elegir 1: Suma, 2: Resta, 3: Divicion, 4: Multiplicacion, 5: Exponencial, 6:Raiz Cuadrada, 7: Raiz Cubica");
        }
            if (operacion == 1){
                return document.write(parseInt(num1) + parseInt(num2));
            }
            else if (operacion == 2) {
                return document.write(parseInt(num1) - parseInt(num2));
            }
            else if (operacion == 3) {
                return document.write(parseInt(num1) / parseInt(num2));
            }
            else if (operacion == 4) {
                return document.write(parseInt(num1) * parseInt(num2));
            }
            else if(operacion == 5){
                let numero = num1;
                for (let i = 1; i<num2; i++) {
                    numero = numero * num1;
                }
                return document.write(numero);
            }
            else if (operacion == 6) {
                return document.write(Math.sqrt(num1));
            }
            else if (operacion == 7) {
                return document.write(Math.cbrt(num1));
            }
    }
}
cuenta = new Calculadora;
cuenta.operar();