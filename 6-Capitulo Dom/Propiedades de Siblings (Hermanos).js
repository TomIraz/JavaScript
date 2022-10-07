
const contenedor = document.querySelector(".contenedor");

const parrafo = contenedor.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2").innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.nextSibling);
console.log(h2_antiguo.lastSibling);
console.log(h2_antiguo.previousSibling);
console.log(h2_antiguo.nextElementSibling);
console.log(h2_antiguo.previousElementSibling);
