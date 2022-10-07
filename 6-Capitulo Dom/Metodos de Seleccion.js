//getElementById
// para seleccionar un ID en este caso el id parrafo escrito en el html
parrafo = document.getElementById("parrafo")// acabamos de seleccionar ese elemento
document.write(parrafo) //aca nos dira que tipo de nodo es en este caso Element


//getElementTagName
// para seleccionar por un tag
parrafo = document.getElementTagName("p")// acabamos de seleccionar el elemento con el tag "p"
document.write(parrafo)// esto nos devuelve una coleccion que es una lista de elementos (distinto a un array)
document.write(parrafo[1])// como es una coleccion, podemos elegir el primero de la coleccion


//querySelector
// para seleccionar selectores de CSS como clases o id
parrafo = document.querySelector(".parrafos")// acabamos de seleccionar el primer objeto de la clase .parrafos
document.write(parrafos)


//querySelectorAll
// para seleccionar selectores de CSS como clases o id
parrafo = document.querySelectorAll(".parrafos")// acabamos de seleccionar toda la clase .parrafos
document.write(parrafos)// esto tambien crea una coleccion (NodeList) la cual es una lista de nodos
document.write(parrafo[0])// este tambien funciona asi