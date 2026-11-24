
const { generarVentas } = require("./generador");

const {
    totalVendidoI,
    ventaMayorI,
    totalPorCiudadI,
    primeraVentaI
} = require("./instrumentadas");

const cantidades = [100, 1000, 10000, 100000];

const resultados = [];

for (const n of cantidades) {

    // Generar las ventas
    const ventas = generarVentas(n);

    // Crear los contadores independientes
    const c1 = { ops: 0 };
    const c2 = { ops: 0 };
    const c3 = { ops: 0 };
    const c4 = { ops: 0 };

    // Ejecutar las funciones instrumentadas
    totalVendidoI(ventas, c1);
    ventaMayorI(ventas, c2);
    totalPorCiudadI(ventas, c3);
    primeraVentaI(ventas,c4);

    // Almacenar los resultados
    resultados.push({
        n: n,
        totalVendido: c1.ops,
        ventaMayor: c2.ops,
        totalPorCiudad: c3.ops,
        primeraVenta: c4.ops
    });
}

// Mostrar la tabla
console.table(resultados);
