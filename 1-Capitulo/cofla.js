/*
Problema 1
3 chicos de 23 a;os perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: los precios no estan al lado de cada estante con su respectivo helado.
ellos quieron comprar el helado mas caro que puedan con la plata que tienen, asi que... veamos como podemos ayudarlos.

Roberto: 1.5 usd
Pedro: 1.7 usd
Cofla 3 usd

Los precios de los helados son los siguientes:
Palito de helado de agua: 0.6 usd
Palito de helado de crema: 1 usd
Bombon helado marca heladix: 1.6 usd
Bombon helado marca helardo: 1.8 usd
Potecito de helado con confites: 2.9 usd
Pote de 1/4 kg --> 2.9 usd

Crear Soluciones:
    - Pedirles que ingresen el monto que tiene y mostrarles el healdo mas caro que puedan comprar.
    Si hay 2 o mas con el mismo precio, mostrar ambos.
    - Cofla quiere saber cuanto es el vuelto
*/

var helado1 = 0.6, helado2 = 1, helado3 = 1.6, helado4 = 1.8, helado5 = 2.9, healdo6 = 2.9;
var vuelto;

dineroCofla = prompt('Cuanto dinero tenes Confa?');
dineroCofla - parseInt(dineroCofla);

if (dineroCofla < helado1) {
    alert("Lo sentimos Cofla, no te alcanza para ningun helado");
}
else if (helado1 <= dineroCofla && dineroCofla < helado2) {
    alert("Cofla poedes comprar un Palito de healdo de agua");
    vuelto = dineroCofla - helado1;
    alert(`El vuelto es ${vuelto}`);
}
else if (helado2 <= dineroCofla && dineroCofla < helado3) {
    alert("Cofla poedes comprar un palito de helado de crema");
    vuelto = dineroCofla - helado2;
    alert(`El vuelto es ${vuelto}`);
}
else if (helado3 <= dineroCofla && dineroCofla < helado4) {
    alert("Cofla poedes comprar un Bombon helado de marca heladix");
    vuelto = dineroCofla - helado3;
    alert(`El vuelto es ${vuelto}`);
}
else if (helado4 <= dineroCofla && dineroCofla < helado5) {
    alert("Cofla poedes comprar un bombon helado marca helardo");
    vuelto = dineroCofla - helado4;
    alert(`El vuelto es ${vuelto}`);
}
else {
    alert("Coflaa poedes comprarte un potecito de helado con confites o un pote de 1/4 kg");
    vuelto = dineroCofla - helado5;
    alert(`El vuelto es ${vuelto}`);
}

dineroRoberto = prompt('Cuanto dinero tenes Roberto?');
dineroRoberto = parseInt(dineroRoberto);

if (dineroRoberto < helado1) {
    alert("Lo sentimos Roberto, no te alcanza para ningun helado");
}
else if (helado1 <= dineroRoberto && dineroRoberto < helado2) {
    alert("Roberto podes comprar un Palito de healdo de agua");
    vuelto = dineroRoberto - helado1;
    alert(`El vuelto es ${vuelto}`);
}
else if (helado2 <= dineroRoberto && dineroRoberto < helado3) {
    alert("Roberto podes comprar un palito de helado de crema");
    vuelto = dineroRoberto - helado2;
    alert(`El vuelto es ${vuelto}`);
}
else if (helado3 <= dineroRoberto && dineroRoberto < helado4) {
    alert("Roberto podes comprar un Bombon helado de marca heladix");
    vuelto = dineroRoberto - helado3;
    alert(`El vuelto es ${vuelto}`);
}
else if (helado4 <= dineroRoberto && dineroRoberto < helado5) {
    alert("Roberto podes comprar un bombon helado marca helardo");
    vuelto = dineroRoberto - helado4;
    alert(`El vuelto es ${vuelto}`);
}
else {
    alert("Roberto podes comprarte un potecito de helado con confites o un pote de 1/4 kg");
    vuelto = dineroRoberto - helado5;
    alert(`El vuelto es ${vuelto}`);
}

dineroPedro = prompt('Cuanto dinero tenes Pedro?');
dineroPedro = parseInt(dineroPedro);

if (dineroPedro < helado1) {
    alert("Lo sentimos Robero, no te alcanza para ningun helado");
}
else if (helado1 <= dineroPedro && dineroPedro < helado2) {
    alert("Pedro podes comprar un Palito de healdo de agua");
    vuelto = dineroPedro - helado1;
    alert(`El vuelto es ${vuelto}`);
}
else if (helado2 <= dineroPedro && dineroPedro < helado3) {
    alert("Pedro podes comprar un palito de helado de crema");
    vuelto = dineroPedro - helado2;
    alert(`El vuelto es ${vuelto}`);
}
else if (helado3 <= dineroPedro && dineroPedro < helado4) {
    alert("Pedro podes comprar un Bombon helado de marca heladix");
    vuelto = dineroPedro - helado3;
    alert(`El vuelto es ${vuelto}`);
}
else if (helado4 <= dineroPedro && dineroPedro < helado5) {
    alert("Pedro podes comprar un bombon helado marca helardo");
    vuelto = dineroPedro - helado4;
    alert(`El vuelto es ${vuelto}`);
}
else {
    alert("Pedro podes comprarte un potecito de helado con confites o un pote de 1/4 kg");
    vuelto = dineroPedro - helado5;
    alert(`El vuelto es ${vuelto}`);
}