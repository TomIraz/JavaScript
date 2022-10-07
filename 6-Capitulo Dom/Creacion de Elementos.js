

const contenedor = document.querySelector(".contenedor");

const item = docuemnt.createElement("LI");
const textoDelItem = document.createTextNode("este es un texto de la lista");

item.appendChild(textoDelItem); // agrega dentro del LI el texto de la variable textoDelItem

contenedor.appendChild(item); // agrega como hijo la variable item dentro de la clase .contenedor

console.log(item);

const fragmento = document.createDocumentFragment();

for (i=0; i<20; i++) {
    const item1 = document.createElement("LI");
    item1.innerHTML = "nuevo elemento";
    fragmento.appendChild(item); //agregamos en este docuemnt 20 veces el item como child
}
console.log(fragmento)
contenedor.appendChild(fragmento) // luego aca agregamos el document que acabamos de crear con el child, sobre el contenedor