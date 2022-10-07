
const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.firstChild;

console.log(primerHijo); // Nos mostrara lo primero que exista luego, en este caso como hay un salto de linea, solo aparecera #text

const primerElementoHijo = contenedor.firstElementChild;

console.log(primerElementoHijo); // Nos mostrara el primer Elemento Hijo, en este caso es el h2

const hijos = contenedor.childNodes;

console.log(hijos); // Nos mostrar todos lo que exista dentro de el contenedor contando los saltos de lineas y espacios

const elementosHijos = contenedor.children;

console.log(elementosHijos); // Nos mostrara todos los elementos dentro del contenedor