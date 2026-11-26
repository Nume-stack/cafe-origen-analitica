const ventas = require('./datos');
const {generarVentas} = require('./generador');

function clientesRecurrentes(ventas) {
    const recurrentes = [];

    for (let i = 0; i < ventas.length; i++) {
        for (let j = i + 1; j < ventas.length; j++) {
            if (
                ventas[i].cliente === ventas[j].cliente &&
                !recurrentes.includes(ventas[i].cliente)
            ) {
                recurrentes.push(ventas[i].cliente);
            }
        }
    }

    return [...recurrentes].sort((a,b) => b - a);
}
/*
const cantidades = [1000, 2000, 4000, 8000, 16000, 100000, 1000000];

for (const n of cantidades) {
    const ventas = generarVentas(n);

    console.time("Tiempo para " + n + " ventas: ");

    clientesRecurrentes(ventas);

    console.timeEnd("Tiempo para " + n + " ventas: ");
}
    */
module.exports={clientesRecurrentes}