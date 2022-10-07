const input = document.querySelector(".input-normal");

document.write(input.className) // nos esta mostrando la clase del input
document.write(input.value) // nos dice lo que esta adentro del input "value"

document.write(input.type = "number") // cambia el tipo de input desde java directamente

input.accept = image/png // hara que limite el input de file solo para que se puedan subir el archivo que nosotros decidamos, en este caso png's
input.form // Nos permitira enviar lo que se ha llenado en el formulario al servidor

input.setAttribute("minLength","4") // podemos limitar el texto dentro de un form, en este caso no puede tener menos de 10 caracteres

input.required = "" // aviso de que es un cambio requerido

