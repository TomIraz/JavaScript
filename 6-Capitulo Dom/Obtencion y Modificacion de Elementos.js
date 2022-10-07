

const titulo = document.querySelector(".titulo");
let resultado = titulo.textContent;
document.write(resultado) // nos mostrara el texto plano de lo que contenga la clase ".titulo" ignorando sus etiquetas

let resultado1 = titulo.innerHTML;
console.log(resultado1) // nos mostrara el texto mas las etiquetas que tenga

let resultado2 = titulo.outterHTML;
console.log(resultado2) // nos mostrara toda la etiqueta de principio a fin