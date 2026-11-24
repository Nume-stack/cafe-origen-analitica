const {valorVenta} = require('./analitica');
const {generarVentas} = require('./generador');

function normalizar (texto){
    return texto.trim().toLowerCase();
}

function totalCiudadV1 (ventas,objetivo){
    return ventas
    .map(v => ({...v, ciudad:normalizar(v.ciudad)}))
    .filter(v => v.ciudad === objetivo)
    .map(v => valorVenta(v))
    .reduce((s,x) => s + x, 0);
}

function totalCiudadV2 (ventas, objetivo){
    let total = 0;
    for (const v of ventas){
        if (normalizar(v.ciudad) === objetivo){
            total += valorVenta(v);
        }
    }
    return total;
}

let ventas = generarVentas(10000);

console.log(totalCiudadV1(ventas,'medellín'));
console.log(totalCiudadV2(ventas,'medellín'));