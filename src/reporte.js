const datos = require('./datos');
const funciones = require ('./analitica');
const {totalPorCiudadI,
    ventaMayorI,
    totalVendidoI,
    primeraVentaI
} = require('./instrumentadas');
const {
    clientesRecurrentesSet,
    comprasPorCliente
} = require('./optimizadas');
const {comboRegaloMap} = require('./catalogo');
const {ventasDiarias,mejorSemana,mejorSemanaBruta} = require('./mejorSemana');

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
console.log("===========================");
console.log("VENTAS POR DIA");
console.log("===========================");
console.table(funciones.ventasDelDia(datos,"2026-09-01"));
console.log("");

//Clientes recurrentes
console.log("===========================");
console.log("CLIENTES RECURRENTES");
console.log("===========================");
console.log(clientesRecurrentesSet(datos));
console.log("");

//PRODUCTO ESTRELLA POR CIUDAD
console.log("===========================");
console.log("PRODUCTO ESTRELLA POR CIUDAD");
console.log("===========================");
console.table(funciones.productoEstrellaPorCiudad(datos));
console.log("");

//COMBO REGALO
console.log("===========================");
console.log("COMBO REGALO");
console.log("===========================");
console.table(funciones.productoEstrellaPorCiudad(datos));
console.log("");

//MEJOR SEMANA
console.log("===========================");
console.log("MEJOR SEMANA");
console.log("===========================");
console.table(mejorSemana(ventasDiarias,7));
console.log("");

