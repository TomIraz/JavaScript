/*
CREAR SOLUCIONES
    - Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares.
    - Cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram.
    - Cada celular debe poder prender, reiniciar, apagar, tomar fotos, y grabar
*/

class celulares {

    constructor(color, peso, respantalla, rescamara, memoria) {
        this.color = color;
        this.peso = peso;
        this.respantalla = respantalla;
        this.rescamara = rescamara;
        this.memoria = memoria;
    }
    prender() {
        let prende = true;
        if (prende == true) {
            document.write("prende <br>")
        }
        else {
            alert("Has prendido el celular")
        }
    }
    apagar() {
        let apaga = true;
        if (apaga == true) {
            document.write("prende <br>")
        }
        else {
            document.write("prende <br>")
        }
    }
    reinciar() {
        let reincia = true;
        if (reincia == true) {
            document.write("prende <br>")
        }
        else {
            document.write("prende <br>")
        }
    }
    foto() {
        let tomaFoto = true;
        if (tomaFoto == true) {
            document.write("prende <br>")
        }
        else {
            document.write("prende <br>")
        }
    }
    grabar() {
        let graba = true;
        if (graba == true) {
            document.write("prende <br>")
        }
        else {
            document.write("prende <br>")
        }
    }
}