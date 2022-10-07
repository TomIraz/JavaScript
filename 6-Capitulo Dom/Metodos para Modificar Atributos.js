//setAttribute
//Para modificar el tipo de atributo que tiene la clase .rangoEtario
const rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type","text")// aca indicamos Primero el atributo que deseamos cambiar o crear, y Segundo le decimos que valor queremos que tenga ese atributo

document.write(rangoEtario);


//getAttribute
// Para obtener el valor que tiene el atributo de la clase .rangoEtario
document.write(rangoEtario.getAttribute("type")) // obtenderemos el valor del atributo type

//removeAttribute
rangoEtario.removeAttribute("type") // removemos el atributo type