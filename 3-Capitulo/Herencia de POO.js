// Herencia: Una clase que reciba herencia, es crear una clase la cual tendra todas las caracteristicas de la clase de la que toma herencia y sus propiedades y ademas agregarles cosas nuevas

class Animal {
    constructor (especie, edad, color) { 
        this.especie = especie;
        this.age = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.age} años y soy de color ${this.color}`;
    }
    verInfo() {
        document.write(this.info + "<br>");
    }
}

//Herencia de animal

class Perro extends Animal { // se usa extends para decir de donde esta heredando
     constructor(especie, edad, color, raza) { 
        super(especie, edad,color); // como ya esta heredado este constructor, no es necesario repetir los "this.especie" etc.. simplemente decimos "super... y los parametros que querramos usar"
        this.raza = raza;
     }
     ladrar() {
        document.write("Woof!" + "<br>")
     }
}

const perro1 = new Perro("perro", 5, "rojo", "Doberman"); // No puede existir un objeto con el mismo nombre de la clase
const gato = new Animal("gato", 2, "negro");

perro1.verInfo();
gato.verInfo();

perro1.ladrar();
// gato.ladrar(); tiraria error en consola porque gato.ladrar no es una funcion
