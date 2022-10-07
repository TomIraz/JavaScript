
const titulo = document.querySelector(".titulo");

titulo.classList.add("grande"); // agrega a "titulo" la clase "grande"

titulo.classList.remove("grande"); // remueve a "titulo" de la clase "grande"

titulo.classList.item(1); // nos mostrara la segunda clase que tiene el elemento titulo

titulo.classList.contains("grande"); // nos dira verdadero o false si titulo esta en la clase "grande"

titulo.classList.toggle("grande"); // agrega a la clase si no la tiene y si la tiene la remueve 
titulo.classList.toggle("grande", false); // podemos forzar una de las dos ejecuciones y bloquear la otra con false o true, con false siempre la agregara nunca la removera
// con true siempre la removera nunca la agregara

titulo.classList.replace("grande","chico"); // reemplaza clases en este cambia, cambia la clase grande por la clase chico, si no encuentra ninguna clase "grande" no hace nada
