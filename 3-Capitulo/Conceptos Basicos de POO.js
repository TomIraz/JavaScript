
class Animal { // La clase es animal
    constructor (especie, edad, color)/*Parametros*/ { 
        this.especie = /*(*/especie/*) este "especie" vendria a ser lo mismo que el especie de la linea de arriba, es el mismo parmetro*/;
        this./*(*/age/*)*/ = edad; /* este "age" es solo el atributo, el cual es una manera de llamar al parametro al crear el objeto, pero es solo una manera de llamarlo, podemos ponerle el nombre que queramos, se lo escribe igual para que tenga sentido llamarlo */
        this.color = color; // "this" qes el objeto, es una llamada al objeto, cualquier objeto que creemos
        this.info = `Soy ${this.especie}, tengo ${this.age} años y soy de color ${this.color}`;
    }
    verInfo() { // como podemos ver en esta funcion (constructor) no hay ningun parametro, porque no pide guardar ningun dato, simplemete queremos que nos muestre en pantalla la info del objeto que queramos al escribir ejemplo: "perro.verInfo()"
        document.write(this.info + "<br>");
    }
}

const /*(*/perro/*)*/ = new Animal("perro", 5, "rojo"); //Este "perro" es el objeto creado, vendria a ser el "this" 
// "new" es para hacerle saber que estamos creando un objeto,
// "animal" es para decirle en que clase
// los entre parentesis son los parametros que tiene la clase creada (especie, edad, color) NO LOS ATRIBUTOS

document.write(perro.especie + "<br>"); // esto es igual a decir this.especie = el valor que le pusimos al parametro "especie" dentro de este objeto creado --> el cual es "perro"

document.write(perro.age + "<br>"); // esto es igual a decir this.age = "el valor que le pusimos al parametro "edad" dentro de este objeto creado" --> el cual es "5"
document.write(perro.info + "<br>");

const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 4, "blanco");

document.write(gato.info + "<br>");
document.write(pajaro.info + "<br>");

const leon = new Animal("Leon", 8, "Marron");

pajaro.verInfo();
