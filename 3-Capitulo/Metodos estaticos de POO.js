// Metodo Estatico: Es un metodo que no necesita que la clase se defina ("no necesita ningun constructor") par poder ser creado, esto es porque algunos metodos no necesitan usar ningun parametro

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

class Perro extends Animal {
    constructor(especie, edad, color, raza) { 
        super(especie, edad,color);
        this.raza = raza;
    }
     static ladrar() { // Esto es un metodo static no estamos usando ningun parametro, por lo que podemos utilizar este metodo antes de instanciar la clase, basicamente podemos hacer uso de este metodo antes de crear ningun objeto, solo usando la clase
        document.write("Woof!" + "<br>")
     }
}

Perro.ladrar(); // como vemos aun no existe ningun objeto perro pero si podemos usar el metodo
// es como instanciar una clase temporal que cuando llamamos a la funcion ladrar se ejecuta el metodo