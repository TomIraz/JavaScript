let frutas = ["banana", " manzana", " pera"]
/*el indice o posicion de los elementos empieza en 0, la posicion 0 es el elemento 1*/
document.write(frutas + "<br>");

document.write(frutas[0] + "<br>");

/* 
Arrays asociativos (Diccionarios): array que tiene un valor asociado
*/

let pc1 = {
    nombre: "TomasPC",
    procesador: "Ryzen 5 3600",
    ram: "8GB",
    espacio: "1TB",
};


document.write(pc1["nombre"]);

document.write("<br>")

document.write(pc1["procesador"]);

document.write("<br>")

document.write(pc1["ram"]);

document.write("<br>")

document.write(pc1["espacio"]);

document.write("<br>")

frase = `El nombre de mi PC es: <b>${pc1["nombre"]}</b> <br>
         El procesador de mi PC es: <b>${pc1["procesador"]}</b> <br>
         La ram de mi PC es: <b>${pc1["ram"]}</b> <br>
         El espacio de mi PC es: <b>${pc1["espacio"]}</b> <br>`

document.write(frase)