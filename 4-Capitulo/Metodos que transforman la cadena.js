
//split
let cadena = "Hola como estas";
resultado = cadena.split("como"); // divide la cadena en este caso por un "como" creando un array, se puede dividir como uno quiere
document.write(resultado);

//substring
let cadena1 = "Hola como estas";
resultado1 = cadena.substring(0,2); // crea un nuevo string tomando el anterior
//tomamos el rango desde el index 0 al 2 el dos no cuenta.
document.write(resultado1);

//toLowerCase
let cadena2 = "Hola como estas";
resultado2 = cadena.toLowerCase(); // nos convierte en minuscula todo
document.write(resultado2);

//toUpperCase
let cadena3 = "Hola como estas";
resultado3 = cadena.toUpperCase(); // nos convierte en mayuscula todo
document.write(resultado3);

//toString
let cadena4 = 10;
resultado4 = cadena.toString(); // nos en string lo que queramos
document.write(resultado4 + 5); // veremos como pasa a ser string

//trim
let cadena5 = " hola ";
resultado5 = cadena.trim(); // elimina los espacios en blanco al principio y al final de una cadena
document.write(resultado5);

//trimEnd
let cadena6 = " hola ";
resultado6 = cadena.trimEnd(); // elimina los espacios en blanco solo al final de una cadena
document.write(resultado6.length);

//trimEnd
let cadena7 = " hola ";
resultado7 = cadena.trimStart(); // elimina los espacios en blanco solo al principio de una cadena
document.write(resultado7.length);