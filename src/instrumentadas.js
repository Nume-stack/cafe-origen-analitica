const funciones  = require("./analitica");

function totalVendidoI(ventas,c){
    let total = 0;
    for (const venta of ventas){
        c.ops++;
        total += funciones.valorVenta(venta);
    }
    return total;
}

function ventaMayorI(ventas,c){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    let mayor = 0;
    let producto;
    for(const venta of ventas){
        c.ops++;

        c.ops++;
        if (venta.precio > mayor){
            mayor = venta.precio
            producto = venta;
        }
    }
    return producto;

}

function totalPorCiudadI (ventas,c){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    return ventas.reduce((acc,venta) => {
        c.ops++;
        acc[venta.ciudad.trim().toLowerCase()] = (acc[venta.ciudad.trim().toLowerCase()] || 0) + funciones.valorVenta(venta);
        return acc;
    },{});
}

function primeraVentaI(ventas, c) {
    c.ops++;
    return ventas[0];
}

module.exports = {totalPorCiudadI,
    ventaMayorI,
    totalVendidoI,
    primeraVentaI
};