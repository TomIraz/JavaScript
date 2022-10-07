// concat()
let cadena = "cadena de prueba";
let cadena2 = " cadena 2";

resultado = cadena.concat(cadena2); 
document.write(resultado);// nos unira ambas y quedara "cadena de prueba cadena 2"

//startsWith
let cadena3 = "cadena de prueba";
let cadena4 = " cadena 2";
resultado1 = cadena3.startsWith(cadena4);
document.write(resultado1); // nos dira si esta la cadena4 al principio de la cadena3, tiene que empezar exactamente como es la cadena4

// endssWith()
let cadena5 = "cadena de prueba";
let cadena6 = " cadena 2";
resultado2 = cadena5.endsWith(cadena6);
document.write(resultado2); // nos dira si esta la cadena4 al final de la cadena3, tiene que terminar exactamente como es la cadena4

//includes
let cadena7 = "cadena de prueba";
let cadena8 = "cadena 2";
resultado3 = cadena7.includes(cadena8); // nos dira si en alguna parte de cadena7 podemos encontrar si es cierto nos dira true sino nos dira false
document.write(resultado3);

// indexOf
let cadena9 = "cadena de prueba";
let cadena10 = "cadena 2";
resultado4 = cadena9.indexOf(cadena10); // nos dira el primer index en el que se encuentra la cadena inclues
document.write(resultado4);

//lastIndexOf
let cadena11 = "cadena de prueba";
let cadena12 = "cadena 2";
resultado5 = cadena11.lastIndexOf(cadena12); // nos dira el ultimo index con el que empieza la ultima cadena que encontro.
document.write(resultado5);
console.log(resultado5);

//padStart
let cadena13 = "cadena de prueba";
let cadena14 = "cadena 2";
resultado6 = cadena11.padStart(20, "1234"); // rellena los caracteres del principio con los caractertes deseados
document.write(resultado6);

//padEnd
let cadena15 = "cadena de prueba";
let cadena16 = "cadena 2";
resultado7 = cadena11.padEnd(20, "1234"); // rellena los caracteres del final con los caractertes deseados
document.write(resultado7);

//repeat
let cadena17 = "cadena de prueba";
let cadena18 = "cadena 2";
resultado7 = cadena11.repeat(4); // repite una cadena la cantidad de veces que nosotros le decimos.

//slice()
let cadena19 = "Hola";
resultado19 = cadena19.slice(0,3); //resultado pasara a ser "hol" dado slice se queda con el rango elegido y desecha los demas elementos, pero sin modificar la cadena original
document.write(resultado19);