function valorVenta(venta){
    return venta.cantidad * venta.precio;
}


function totalVendido (ventas){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    let total = 0;
    for (const venta of ventas){
        total += valorVenta(venta);
    }
    return total;
}

function UnidadesVendidad(ventas){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    let contador  = 0;
    for (const venta of ventas){
        contador += venta.cantidad;
    }
    return contador
}

function ventaMayor(ventas){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
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
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    let suma = 0;
    let contadorVentaValida = 0;
    for (const venta of ventas){
        if (venta.precio > 0){
            suma += valorVenta(venta);
            contadorVentaValida += 1;
        }
    }
    return ticketProm = suma / contadorVentaValida;
}

function ventasPorCiudad(ventas,ciudad){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    let totalvendido = 0;
    for (const venta of ventas){
        if (venta.ciudad.toLowerCase().trim() === ciudad){
            totalvendido += valorVenta(venta);
        }
    }
    return totalvendido;
}

function totalVendidoM(ventas){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    const totalVen = ventas.reduce((acomulador, venta) => {
        return acomulador + valorVenta(venta);
    },0);
    
    return totalVen;
}

function unidadesVendidasM(ventas){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    const unidadesVendidas = ventas.reduce((acomulador,venta) =>{
        return acomulador + venta.cantidad;
    } ,0)
    return unidadesVendidas;
}

function ventasPorCiudadM(ventas,ciudad){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    const vendidoPorCiudad = ventas.filter(v => v.ciudad.toLowerCase().trim() === ciudad)
    .reduce((total,venta) => {
        return total + valorVenta(venta);
    },0);
    return vendidoPorCiudad;
}

function totalPorCiudad (ventas){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    return ventas.reduce((acc,venta) => {
        acc[venta.ciudad.trim().toLowerCase()] = (acc[venta.ciudad.trim().toLowerCase()] || 0) + valorVenta(venta);
        return acc;
    },{});
}

function totalPorCiudadTabla (ventas){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    return Object.entries(ventas.reduce((acc,venta) => {
        acc[venta.ciudad.trim().toLowerCase()] = (acc[venta.ciudad.trim().toLowerCase()] || 0 ) + valorVenta(venta);
        return acc;
    },{})).map(venta => {
        return {
            ciudad : venta[0],
            total : venta[1]
        }
    });
}

function topProductosPorValor(ventas, k){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    let mejoresProductos = {};

    mejoresProductos =  ventas.reduce((acc, venta) => {
        const producto = venta.producto;
        const valorTotal = valorVenta(venta);
        acc[producto] = (acc[producto] || 0)+ valorTotal;
        return acc
    }, {});

    return Object.entries(mejoresProductos).sort((a,b) => b[1]-a[1]).slice(0,k).map(venta => {
        return {
            producto : venta[0],
            total : venta[1].toLocaleString("es-CO")
        }
    });
}

function unidadesPorProducto(ventas){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    let unidadesProducto = {};
    unidadesProducto = ventas.reduce((acc,venta) => {
        const producto = venta.producto;
        const totalUnidades = venta.cantidad;

        acc[producto] = (acc[producto] || 0) + totalUnidades;
        return acc
    }, {})
    return Object.entries(unidadesProducto).map(venta => {
        return {
            producto : venta[0],
            total : venta[1]
        }
    });
    
}

function ventasDelDia(ventas,fecha){
    if (ventas === undefined || ventas.length === 0){
        return "Envio de datos incorrecto. Vuelta a intentarlo";
    }
    return ventas.filter(venta => venta.fecha === fecha);
}


function Validar (a,b){
    if(a === b){
        return "OK";
    }
    return "DIFERENTE";
}

function productoMasVendido(map) {
    let mayor = 0;
    let productoEstrella = '';

    for (const [producto, cantidad] of map) {
        if (cantidad > mayor) {
            mayor = cantidad;
            productoEstrella = producto;
        }
    }

    return {
        producto: productoEstrella,
        ventas: mayor
    };
}

function productoEstrellaPorCiudad(ventas){
    const medellin = new Map();
    const bogota = new Map();
    const cali = new Map();
    const pereira = new Map();
    for (const registro of ventas){
        if(registro.ciudad.trim().toLowerCase() === 'medellín'){
            medellin.set(registro.producto,(medellin.get(registro.producto) || 0) + 1);
        }
        if(registro.ciudad.trim().toLowerCase() === 'bogotá'){
            bogota.set(registro.producto,(bogota.get(registro.producto) || 0) + 1);
        }
        if(registro.ciudad.trim().toLowerCase() === 'cali'){
            cali.set(registro.producto,(cali.get(registro.producto) || 0) + 1);
        }
        if(registro.ciudad.trim().toLowerCase() === 'pereira'){
            pereira.set(registro.producto,(pereira.get(registro.producto) || 0) + 1);
        }
    }
    return {
        medellin: productoMasVendido(medellin),
        bogota: productoMasVendido(bogota),
        cali: productoMasVendido(cali),
        pereira: productoMasVendido(pereira)
    };
}

function primerClienteUnico(ventas) {
    const clientes = new Map();
    for (const venta of ventas) {
        clientes.set(
            venta.cliente,
            (clientes.get(venta.cliente) || 0) + 1
        );
    }

    for (const venta of ventas) {
        if (clientes.get(venta.cliente) === 1) {
            return venta.cliente;
        }
    }

    return null;
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
    ventasPorCiudadM,
    totalPorCiudad,
    topProductosPorValor,
    totalPorCiudadTabla,
    unidadesPorProducto,
    ventasDelDia,
    valorVenta,
    productoEstrellaPorCiudad,
    primerClienteUnico
}; 