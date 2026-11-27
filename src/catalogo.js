const productos =[
    {producto: 'Origen Nariño 250 g', precio:26000},
    {producto: 'Origen Huila 500 g', precio:42000},
    {producto: 'Origen Sierra 500 g', precio:45000},
    {producto: 'Filtros de papel x100', precio:18000},
    {producto: 'Taza de cerámica', precio:35000},
    {producto: 'Origen Huila 1 kg', precio:79000},
    {producto: 'Prensa francesa', precio:95000},
    {producto: 'Molino manual', precio:120000},
];

function comboRegalo (catalogo, valor){
    const combo = [];
    for (let i = 0; i < catalogo.length; i++){
        for (let j = 0; j < catalogo.length; j++){
            if (i === j) continue;
            if((catalogo[i].precio + catalogo[j].precio) === valor ){
                combo.push(catalogo[i],catalogo[j])
                return combo;
            }
        }
    }
    return null;
}

function comboRegaloMap(catalogo,valor){
    const vistos = new Map();
    for (const producto of catalogo){
        const falta = valor - producto.precio;
        if (vistos.has(falta)){
            return [vistos.get(falta),producto];
        }else{
            vistos.set(producto.precio,producto);
        }
    }
    return null;
}

module.exports = {comboRegaloMap};

// prueba con 87.000
/* console.log(comboRegalo(productos,87000));
console.log(comboRegaloMap(productos,87000));
console.log("");

//Pruebas con 61.000
console.log(comboRegalo(productos,61000));
console.log(comboRegaloMap(productos,61000));
console.log("");

// prueba con null
console.log(comboRegalo(productos,90000));
console.log(comboRegaloMap(productos,90000));
console.log(""); */