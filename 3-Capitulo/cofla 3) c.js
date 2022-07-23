
class Aplicacion {
    constructor (nombre, cd, puntos, peso) {
        this.nombre = nombre;
        this.cantDeDescargas = cd;
        this.puntuacion = puntos;
        this.peso = peso;
        this.instalada = true;
        this.abierta = true;
    }
    instalarDesinstalar() {
        if (this.instalada == false) {
            alert("No esta instalada, ¿Deseas instalarla?");
        }
        else {
            alert("Ya esta instalada");
        }
    }
    abrirCerrar() {
        if (this.abierta == true) {
            alert("¿Desea Cerrar la aplicacion?");
        }
        else {
            alert("¿Desea abrir la aplicacion?");
        }
    }
    mostrarEstadisticas() {
        return `
        ${this.nombre} <br>
        Cantidad de descargas: <b>${this.cantDeDescargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br><br>
        `;
    }
}

disx = new Aplicacion("DisX","2M", "4.5/5 estrellas", "350MB");
dispro = new Aplicacion("DisPro+","1M", "4/5 estrellas", "250MB");
iluspro = new Aplicacion("Ilus Pro+","500k", "3.5/5 estrellas", "150MB");

document.write(disx.mostrarEstadisticas());
document.write(dispro.mostrarEstadisticas());
document.write(iluspro.mostrarEstadisticas());

disx.instalarDesinstalar();

disx.abrirCerrar()