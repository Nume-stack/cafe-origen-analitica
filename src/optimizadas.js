const ventas = require('./datos');
const {generarVentas} = require('./generador');
const {clientesRecurrentes} = require('./recurrentes');

function clientesRecurrentesSet(ventas){
    const vistos = new Set();
    const recurrentes = new Set();
    for (const registro of ventas){
        if(vistos.has(registro.cliente)){
            recurrentes.add(registro.cliente);
        }else{
            vistos.add(registro.cliente);
        }
    }
    return [...recurrentes].sort((a,b) => b - a);
}

function comprasPorCliente(ventas){
    const compras = new Map();
    for (const registro of ventas){
        compras.set(registro.cliente,(compras.get(registro.cliente) || 0) + 1);
    }
    return [...compras].sort((a,b) => b[1] - a[1]);
}

// Datos del dia 1
console.log("Primeros 12 datos");
console.log("Recurrente Set con 12 ventas");
console.log(clientesRecurrentesSet(ventas));
console.log(comprasPorCliente(ventas));
console.log("");

console.log("Recurrentes origninal con 12 ventas");
console.log(clientesRecurrentes(ventas));

// Datos con 5.000 ventas
console.log("Generador")
console.log("Recurrente Set con 5.000 ventas");
console.log(clientesRecurrentesSet(generarVentas(5000)));
console.log("");


console.log(comprasPorCliente(generarVentas(5000)));
console.log("Recurrentes origninal con 5.000 ventas");
console.log(clientesRecurrentes(generarVentas(5000)));

const cantidades = [1000,10000,100000]

for (const cantidad of cantidades){
    const cantidadVentas = generarVentas(cantidad);

    console.time(`tiempo par ${cantidad} ventas: `);
    console.log("Set");
    clientesRecurrentesSet(cantidadVentas);
    console.timeEnd(`tiempo par ${cantidad} ventas: `);

    console.time(`tiempo par ${cantidad} ventas: `);
    console.log("Map");
    comprasPorCliente(cantidadVentas);
    console.timeEnd(`tiempo par ${cantidad} ventas: `);

    console.time(`tiempo par ${cantidad} ventas: `);
    console.log("Original");
    clientesRecurrentes(cantidadVentas);
    console.timeEnd(`tiempo par ${cantidad} ventas: `);

}


