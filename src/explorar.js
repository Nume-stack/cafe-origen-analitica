const ventas = require("./datos");
console.log("Registros: ", ventas.length);
console.log("Primero: " , ventas[3]);
console.log("Ultimo: ", ventas[ventas.length - 1]);
console.log("Producto en la posicion 4: ", ventas[4].ciudad);
console.table(ventas);
console.log("----------------------- ");
const funciones = require("./analitica");
const total = funciones.totalVendido(ventas)
console.log("El total vendido fue de: " + total);
console.log("El total de unidades vendidas es: " + funciones.UnidadesVendidad(ventas));
const ventaM = funciones.ventaMayor(ventas);
console.log("La venta de mayor precio fue de : " + ventaM.precio);
console.log(ventaM);
console.log("El ticket promedio es de : " + Math.trunc(funciones.ticketPromedio(ventas)));
let ciudad = "cali".toLowerCase().trim();
console.log("La ciudad de " + ciudad + " vendio un total de : $" + funciones.ventasPorCiudad(ventas, ciudad));
console.log(funciones.totalPorCiudad(ventas));
