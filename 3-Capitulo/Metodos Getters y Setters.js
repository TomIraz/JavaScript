// Metodo Getter: Sirven para obtener un valor;
// Metodo Setter: Sirve para modificar o definir ese valor;

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
        this.raza = null;
    }
    set setRaza(newName){ // este es un setter, es un metodo que funciona como propiedad, y sirve para cambiar una propiedad
        this.raza = newName;
    }
    get getRaza(){ // es un metodo que sirve para obtener info
        return this.raza;
    }
}

const perro1 = new Perro("perro", 5, "Doberman")
const gato = new Animal("gato", 2, "Negro");
const pajaro = new Animal("pajaro", 4, "blanco");

perro.setRaza = "Pedro"; // aca cambiamos una propiedad y se hace como si fuera un propiedad no un metodo
document.write(perro.getRaza);
