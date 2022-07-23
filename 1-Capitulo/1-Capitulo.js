/*
Introduccion
- Interpretado
- Orientado a objetos
- Imperativo
- Case sensitive
- Basado en prototipo
- Tipado debil
- Lenguaje dinamico

- ECMASCRIPT (5.1 Y 6, 7, 8, Next)

1) Editor de Texto
    - Visual Studio Code

2) Para que se usa?
    - Dinamismo de los sitios web
    - Sevirdor en Nodejs
    - Tecnologias Frontend como Angular, React o Vue.js

    - Inteligneanica artificial
    - Placas electronicas
    - Mobile Apps
    - Desktop Apps
    - Etc...

3) Formas de Enlazar Javascript

4) Variables

    - Dato que guardamos en un espacio de memoria
    - Esta puede cambiar lo que tiene adentro
    - Tipos de Datos: String, Number, Boolan)

    strings = "cadena de texto" caracteres unidos va entre comillas
    number = 19 --> no va entre comillas
    boolean = True or False

    -Casos especiales de Datos: Undefined, null, Nan
    
    Undefined: variable declarada pero no definida

    Null: variable que se declara y se define vacia, diferente a undifined
*/
let numero = null
/*
    NaN (Not a Number): ejemplo cuando multiplicas un string con un number

    - Scope: es el alcance de la variable (var, let, const)
 */   
    var numero1 = 15
    
    let numero2 = 15 //--> esta limita el espacio de la variable al bloque en el que la creamos ejemmplo dentro de un if, for, etc...
  
    const nombre1 = "dalto" //--> es una constante, no puede cambiar, si intentas cambiarla saldra un error

    //Para declarar una variable solo definimos su alcanze ejemplo:

    let numero3;
/*
    Para inicializar una varibale le damos un valor si no la inicializamos nos dira variables undifined
    const inicializarse y declararse al mismo tiempo

    -Hoisting: habla de como funcionan las cosas el orden de creacion y la ejecucion del codigo

    prompt('hola rancio'): es una API nativa de javascript que le permite al usuario el ingresar un input, este imput podemos guardarlo con una variable ejemplo
*/
    let nombre = prompt('decime tu nombre');
    alert('hola' + nombre); //--> con esto mostramos en pantalla lo que acaba de ingresar
/*
5) Operadores en JavaSript
    - Operadores Aritmeticos
    - Operadores de Asignacion

    Operadores de Asignacion: asigna un valor al operando de la izquierda basado en el valor operando de la derecha

    ejemplo: x = y,
*/
    numero11 = 10;
    numero12 += 5 //(le sumamos a numero el valor de 5)
    numero13 -= 5
    numero14 *= 5
    numero15 /= 5
    numero16 %= 5 //--> nos da el resto
    numero17 **= 5 //--> nos da el exponensial
/*
    Operadores Aritmeticos: Tomasn valores numericos como sus operandos y retornan un valor numerico unico.
    ejemplo:
*/
    numero18 = 10
    numero19 = 5

    resultado = numero18 + numero19
    numero18-- //--> le resta uno (es un decremento)
    resultado = numero18 / numero19 //--> division
    resultado = numero18**numero19 //--> exponensial
    numero18++ //--> le suma uno (es un incremento)
    resultado = numero18&numero19 //--> nos muestra el resto entre ambos
    resultado = -numero18 //--> nos muestra el negativo de numero1

/*
6) Concatenacion: es una union de cadenas(strings)
    ejemplo:
*/
    saludo = "Hola pedrito";
    respuesta = "Hola don jose"

    frase = saludo + pregunta;
    document.write(frase); //--> para mostrar en el documento html lo que este entre parentesis

    // el problema es cuando son numeros sin comillas ejemplo:

    numero1 = 53;
    numero2 = 8;

    result = numero1 + numero2; // esto sera una suma de numeros,
    concatenandonumeros = "" + numero1 + numero2; // al ver comillas entendera que todo lo demas es tambien una string por lo que lo tomara como si lo fueran haciendo que los numeros se concatenen

    document.write(result);
    document.write(concatenandonumeros);

    // otra manera de concatenar solo strings, es usar la funcion concat

    frase = numero1.concat(numero2);

    // otra manera es ${}

    frase1 = "lucas dalto";

    frase = `soy %{frase1} y estoy caminando`;

    document.write(frase);

/*
8) Operadores (Intermedios)
    -Operadores de Comparacion
    -Operadores Logicos

    Operadores de Comparacion: Comparan dos expresiones y devuelven un valor Boolean que representa la relacion de sus valores
*/
    let num1 = 23;
    let num2 =13;
    let text1 = "23";
    let text2 = "texto 2"
    document.write(num1 == num2); // son iguales ?
    document.write(num1 != num2); // son distintos ?
    document.write(text1 === num1); // pregunta sin son estrictamente iguales sin importar el tipo de dato
    document.write(text1 !== num1); // son estrictamente distintos ? osea son distintos tipo de datos y distinto ?
/*
    Otros operadores son < > <= >=

    Operadores Logicos: Nos devuelven un resultado a partir de que se cumpla (o no) una condicion, su resultado es booleano, y sus operadores son valores logicos o asimilables a ellos
*/
    let valor1 = true;
    let valor2 = true;

    let resultado1 = valor && valor2;
    let resultado2 = valor || valor2;
    let resultado3 = !valor;
/*
9) Camel Case
    decimeAlgoPorFavor
    holaComoEstas
    document.getElementById

10) Condicionales: Nos permiten ejecutar bloques segun si las condiciones que eligamos se cumplen, si no se cumplen el bloque no se ejecuta
*/
nombre = "tomas";
if (nombre == "matias")   {
    alert("todo lo que este adentro de una llave es un bloque");
}

else if (nombre == "tomas") {
    alert("NO");
}
else {
    alert("como carajo te llamas entonces?");
}
