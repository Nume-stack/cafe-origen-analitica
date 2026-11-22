const datos = require('./datos');
const funciones = require ('./analitica');

// Resuemn generacion
console.log("===========================");
console.log("RESUMEN GENERAL");
console.log("===========================");

console.log("El total vendido fue de : $" + funciones.totalVendidoM(datos).toLocaleString("es-CO"));
console.log("El total de unidades vendidas fue de: " + funciones.UnidadesVendidad(datos));
let ventaMayor = funciones.ventaMayor(datos);
console.log("La venta mayor fue del producto " + ventaMayor.producto + " con un valor de $" + ventaMayor.precio.toLocaleString("es-CO"));
console.log("El ticket promedio es de : $" + funciones.ticketPromedio(datos).toLocaleString("es-CO"));
console.log("");

//Ventas por ciudad
console.log("===========================");
console.log("VENTAS POR CIUDAD");
console.log("===========================");

console.log("El total vendido por cada ciudad se ve reflado en la siguiente tabla: ");
let unidadesPorProducto = funciones.totalPorCiudadTabla(datos);
console.table(unidadesPorProducto);
for (const registro of unidadesPorProducto){
    console.log("-" + registro.ciudad + " vendio un total de " + registro.total.toLocaleString("es-CO"));
}
console.log("");

//UNIDADES POR PRODUCTO
console.log("===========================");
console.log("UNIDADES POR PRODUCTO");
console.log("===========================");
console.log("Total de unidades por producto");
console.table(funciones.unidadesPorProducto(datos));
console.log("");

//TOP 3 PRODUCTO POR VALOR
console.log("===========================");
console.log("TOP 3 PRODUCTO POR VALOR");
console.log("===========================");
console.table(funciones.topProductosPorValor(datos,3));
console.log("");

//ventas por dia
console.table(funciones.ventasDelDia(datos,"2026-09-01"));