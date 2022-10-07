//Funciones

// Asi creamos una funcion
function saludar (){

respuesta = prompt("Hola Lucas! Como fue tu dia?");
if (respuesta == "bien") {
    alert("me alegro");
}
else {
    alert("una pena");
}

}
// Asi llamamos a una funcion
saludar()


// Return: lo que nos devuelve la funcion

function saludando() {
    alert("Hola");
    return "Chau"; // Lo que se muestre despues del return no se mostrara, la funcion termina con el return
    alert("esto no se mostrara");
}

let saludo = saludando();
document.write(saludo);

document.write("<br><br>")

//Parametros (x, y son parametros en este caso)

function suma(x, y){  //hacer esto es como si dijeramos "let x, let y" solo que se obvia dado que estas dentro de la funcion, son parametros.
    let res = x + y;
    return document.write(res + "<br>");
}

let resultado = suma(23, 10);

function saludos(nombre) {
    frase = `Hola ${nombre}`;  
    return document.write(frase + "<br>");
}

saludos(prompt("Como te llamas?"))

// Funciones Flecha: es otra manera de crear una funcion, tiene sus ventajas

// ventaja 1: si hay solo un parametro no necesita () parentesis

// ventaja 2: si solo hay una linea de codigo dentro del bloque de la funcion como en el ejemplo de abajo, no necesitaremos {} llaves

const salud = nomb => document.write(`Como estas? ${nomb}` + "<br>");

salud("Matias")