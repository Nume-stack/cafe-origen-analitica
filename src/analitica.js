function valorVenta(venta){
    return venta.cantidad * venta.precio;
}

function totalVendido (ventas){
    let total = 0;
    for (const venta of ventas){
        total += valorVenta(venta);
    }
    return total;
}

function UnidadesVendidad(ventas){
    let contador  = 0;
    for (const venta of ventas){
        contador += venta.cantidad;
    }
    return contador
}

function ventaMayor(ventas){
    let mayor = 0;
    let producto;
    for(const venta of ventas){
        if (venta.precio > mayor){
            mayor = venta.precio
            producto = venta;
        }
    }
    return producto;

}

function ticketPromedio (ventas){
    let suma = 0;
    let contadorVentaValida = 0;
    for (const venta of ventas){
        if (venta.precio > 0){
            suma += valorVenta(venta);
            contadorVentaValida += 1;
        }
    }
    let ticketProm = suma / contadorVentaValida;
    return ticketProm;
}

function ventasPorCiudad(ventas,ciudad){
    let totalvendido = 0;
    for (const venta of ventas){
        if (venta.ciudad.toLowerCase().trim() === ciudad){
            totalvendido += valorVenta(venta);
        }
    }
    return totalvendido;
}

module.exports = {totalVendido, UnidadesVendidad, ventaMayor, ticketPromedio, ventasPorCiudad}; 