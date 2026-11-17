const ventas = require("./datos");
console.table(ventas);
const funciones = require("./analitica");

// total vendido Ciclo y metodo
const totalVendidoC = funciones.totalVendido(ventas)
const totalVendidoM = funciones.totalVendidoM(ventas)

console.log(totalVendidoC + "----" + totalVendidoM);
console.log("Verificando total vendido: " + funciones.Validar(totalVendidoC,totalVendidoM));

// Unidades vendidas ciclo y metodo 
const unidadesVendidadC = funciones.UnidadesVendidad(ventas);
const unidadesVendidadM = funciones.unidadesVendidasM(ventas)
console.log(unidadesVendidadC + "-------" + unidadesVendidadM);
console.log("Verificando unidades vendidad : " + funciones.Validar(unidadesVendidadC,unidadesVendidadM));

// Ventas por ciudad
const ventasPorciudadC = funciones.ventasPorCiudad(ventas,"Cali");
const ventasPorCiudadM = funciones.ventasPorCiudadM(ventas,"Cali");
console.log("Verificando las ventas por ciudad : " + funciones.Validar(ventasPorciudadC,ventasPorCiudadM));