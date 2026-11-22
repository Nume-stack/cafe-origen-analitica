const funciones  = require("./analitica");

function totalVendidoI(ventas,c){
    let total = 0;
    for (const v of ventas){
        c.ops++;
        total += funciones.valorVenta(v);
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
        c.op++;
        acc[venta.ciudad.trim().toLowerCase()] = (acc[venta.ciudad.trim().toLowerCase()] || 0) + valorVenta(venta);
        return acc;
    },{});
}

module.exports = {totalPorCiudadI,
    ventaMayorI,
    totalVendidoI
};