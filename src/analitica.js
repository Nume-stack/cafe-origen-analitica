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

function totalVendidoM(ventas){
    const totalVen = ventas.reduce((acomulador, venta) => {
        return acomulador + valorVenta(venta);
     },0);
    
    return totalVen;
}

function unidadesVendidasM(ventas){
    const unidadesVendidas = ventas.reduce((acomulador,venta) =>{
        return acomulador + venta.cantidad;
    } ,0)
    return unidadesVendidas;
}

function ventasPorCiudadM(ventas,ciudad){
    const vendidoPorCiudad = ventas.filter(v => v.ciudad.toLowerCase().trim() === ciudad)
    .reduce((total,venta) => {
        return total + valorVenta(venta);
    },0);
    return vendidoPorCiudad;
}

function totalPorCiudad (ventas){
    for (const venta of ventas){
        const ventasXCiudad = ventas.filter(v => v.ciudad.toLowerCase().trim() === venta.ciudad.toLowerCase().trim())
        .map(v => ({
            ciudad : 
        }))
    }
}

function Validar (a,b){
    if(a === b){
        return "OK";
    }
    return "DIFERENTE";
}

module.exports = {
    totalVendido,
    UnidadesVendidad,
    ventaMayor, 
    ticketPromedio, 
    ventasPorCiudad,
    totalVendidoM,
    Validar,
    unidadesVendidasM,
    ventasPorCiudadM
}; 