// Metodos transformadores: Modifican el mismo array, no crean necesariamente uno nuevo, aunque siempre podemos guardar la modificacion en otro array si queremos

// pop
let nombres = ["pedro", "maria", "jorge"];
nombres.pop()
document.write(nombres + "<br>") // eliminara jorgue de "nombres"

// shift
let nombres1 = ["pedro", "maria", "jorge"];
nombres1.shift()
document.write(nombres1 + "<br>")// eliminara pedro de "nombres"

// push
let nombres2 = ["pedro", "maria", "jorge"];
nombres2.push("tomas", "matias")
document.write(nombres2 + "<br>") // nos agrega los elementos

//reverse
let nombres3 = ["pedro", "maria", "jorge"];
nombres3.reverse()
document.write(nombres3 + "<br>") // 

//unshift
let numeros = [1, 2, 3, 4, 5, 6];
numeros.unshift(0,1) 
document.write(numeros + "<br>")// agregamos esos dos nuevos elementos al principio

//sort
let numeros1 = [1, 6, 4, 5, 3, 2];
numeros1.sort(0,1) 
document.write(numeros1 + "<br>") // ordena los numeros en de menor a mayor y las palabras segun el abecedario

//splice
let nombres4 = ["pedro", "maria", "jorge", "alberto", "tomas"];
nombres4.splice(1, 2, "matias", "gabriela") 
document.write(nombres4 + "<br>") // eliminara desde el elemento que le digamos (en este caso el elemento de la posicion 1 osea "maria") la cantidad que le digamos (en este caso 2 elementos eliminara) y agre




//Metodos Accesores: crea un nuevo array necesariamente sin modificar el original

//join
let nombres5 = ["pedro", "maria", "jorge", "alberto", "tomas"];
document.write(numero + "<br>");
let resultado = nombres5.join("<br>elemento: ");
document.write("elemento: " + resultado); // convierte en cadena de texto y te permite crear separadores de cada elemento de lo que era el array, si no colocas nada los juntara a todos los elementos

//slice
let nombres6 = ["pedro", "maria", "jorge", "alberto", "tomas"];
document.write(numero8 + "<br>");
let resultado1 = nombres6.slice(0, 3);
document.write("elemento: " + resultado1);// desde el elemento que queramos (en este caso el 0) hasta otro que queramos (en este caso el 3) tomara todos los que hay sin incluir al ultimo (en este caso el de la posicion 3)



//Metodos de Repeticion:

// filter
let nombres7 = ["pedro", "maria", "jorge", "alberto", "tomas"];

resultado2 = nombres7.filter(nombre => nombre.length > 5);
document.write(resultado2); // filtrame todos los elementos que tengan mas de 5 letras y guardalos en resultado2