# Diccionario de datos: ventas de café

**Tabla:** ventas (12 registros)
**Moneda:** COP (supuesto, conviene confirmarlo)

| Columna | Tipo de dato | Descripción | Ejemplo | Valores / observaciones |
|---|---|---|---|---|
| (index) | Entero | Índice de fila generado por pandas o similar. No es un dato de negocio. | 0, 1, 2… | Va de 0 a 11. |
| id | Entero | Identificador consecutivo de cada transacción o venta. | 1, 2, 3… | Va de 1 a 12, sin repetidos. Clave primaria sugerida. |
| fecha | Fecha (texto) | Fecha en que se realizó la venta. | '2026-09-01' | Formato AAAA-MM-DD. Actualmente es texto; conviene convertirla a tipo fecha. Rango: 2026-09-01 a 2026-09-06. |
| cliente | Texto | Código del cliente que realizó la compra. | 'C01' | Valores: C01 a C08. Un mismo cliente puede aparecer en varias ventas (C01 aparece 3 veces). |
| producto | Texto | Nombre del producto vendido. | 'Origen Huila 500 g' | Valores: Origen Huila 500 g, Origen Nariño 250 g, Origen Sierra 500 g, Prensa francesa, Molino manual. El peso está incluido en el nombre. |
| ciudad | Texto | Ciudad donde se realizó la venta o entrega. | 'Medellín' | Valores: Medellín, Bogotá, Cali, Pereira. **Inconsistencia:** en la fila 5 aparece como 'medellín' (minúscula). Conviene estandarizarla. |
| cantidad | Entero | Número de unidades vendidas en la transacción. | 2 | Valores de 0 a 4. **Observación:** el id 8 tiene cantidad 0; conviene revisar si es un error o una devolución. |
| precio | Entero | Precio unitario del producto en COP, sin separador de miles. | 42000 | Confirmar si es precio unitario o total de la línea. Por los valores parece ser unitario. |

## Notas adicionales

- **Tipos de dato:** `fecha` está como texto y `ciudad` tiene un problema de mayúsculas. Ambos conviene limpiarlos antes de analizar.
- **Campo calculado sugerido:** `total` = `cantidad` × `precio`, para facilitar el análisis de ventas. (Dependiento si el valor precio hace referencia a precio unitario o precio total).

# tablero para la reunion

## indicadores:
 ### Cuanto se vendio en total.
 Se recorre la variable precio y se suma cada fila para encontrar el precio total.

 ### Cuantas unidades salieron
 Se planea hacer un arreglo con los productos y y apartir de cantidad, determinar cuanto salio de cada producto.

 ### Cual fue la venta mas grande
 Se puede hacer recorrer la variable precio y cuando ya haya hechos las iteraciones necesarias retornar la fila completa.

 ### ticket promedio
 Suma de todos los precios / la cantidad de clientes.

 =================================
 dia 1: ver lo que hay que copiar en la bitacora


# cuanto cuesta cada reporte
## Prediccion
Mi prediccion viendo las funciones instrumentadas, es que venta mayor va aumentar el doble de las veces del contador puesto que ahi tanto recorremos el arreglo como comparamos, es decir, recorremos y comparamos al mismo tiempo, mientras que en las otras 2 funciones solo recorremos el arreglo.   

# traza 
utilizando un arrgelo de 5 clientes :
const ventas = [
    { cliente: "Alejandro" },
    { cliente: "María" },
    { cliente: "Alejandro" },
    { cliente: "Carlos" },
    { cliente: "María" }
];

| cliente | comparacion realizadas |
|:------- |:---------------------- |
| 0 Alejandro | Maria, Alejandro, Carlos, maria |
| 1 Maria | alejandro, carlos, maria |
| 2 alejandro | Carlos, Maria |
| 3 Carlos | Maria |
| 4 Maria | Ninguna |

El recorrido realiza:
- primera posicion: 4 comparaciones 
- Segunda posicion: 3 comparaciones
- Tercera posicion: 2 comparaciones 
- Cuarta posicion : 1 comparacion
- Quinta posicion: 0 comparaciones

# Medir el tiempo de ejecucion 
Medimos el tiempo que demora la funcion de clientesRecurrentes con 1000,2000,4000,8000 y 16000 registros registrados. Es importante aclarar que solo medimos cuanto demora la funcion mencionada anteriormente, pero si adicionamos el tiempo que demoramos en generar las cantidades de registros tomaria mas tiempo.

Como se evidencia, los registros se duplican y las comparaciones con respecto al tiempo que aunmenta exponencialmente. Podemos notar que aumentan aproximandamente 4 veces cada que duplicamos la cantidad de registros 

| # Ventas | tiempo |
|:-------- |:------ |
| 1000 | 4.685ms|
| 2000 | 16.027 ms |
| 4000 | 50.173ms |
| 8000 | 224.214ms |
| 16000 | 907.254ms |
| 100000 | 39.349s |
| 1000000 | +6 mn |

# El costo oculto de includes()

`includes()` busca un elemento dentro del arreglo recurrentes. Por ejemplo, tenemos lo siguiente : 

const recurrentes = ["Alejandro", "María", "Carlos"];

console.log(recurrentes.includes("María")); // true
console.log(recurrentes.includes("Pedro")); // false

Para encontrar a maria, puede revisar 2 posiciones. Para encontrar a pedro, debe revisar las tres. Por lo tanto, `includes()` podria tener un coso de O(n) en el peor caso porque deberia recorrer todo el arreglo.

Sin embargo, es importante aclarar que como el metodo `includes()` esta dentro de 2 for anidados podria convertir dicho costo en O(n) al cubo.

# Conclusion para la gerente.
El reporte de clientes recurrentes se vuelve lento, porque a medida que aumenta la cantidad de ventas, el sistema necesita realizar mas comparaciones para identificar a los clientes repetidos.

Ademas, cada vez que encuentra un cliente que ya ha comprado, necesito recorrer el arreglo de recurrentes para ver si ya lo tiene arreglado o si aun no esta. Esto a su vez agrega trabajo adicional y hace que el proceso pueda tardar aun mucho mas cuando se manejar una gran cantidad de datos.

Es recomendable optimar la busqueda de clientes repetidos para reducir el tiempo de procesamiento ya que la funcion solo sirve con cantidades relativamente pequeñas, pero cuando se aumenta considerablemente su volumen (el ejemplo con el millon de datos) puede demorar muchisimo mas.

# Recorridos que hace cada version de totalCiudad
| version | cantidad de arreglos | cantidad de recorridos | 
|:---------- |:--------------- |:------------------|
| totalCiudadV1 | 3 arreglos nuevos | 4 recorridos |
| totalCiudadV2 | ningun arreglo nuevo | 1 recorrido |

# Complejidad espacial de las funciones del motor

| Función | Complejidad espacial | Justificación |
|---|---|---|
| `valorVenta()` | O(1) | Solo realiza una multiplicación y devuelve un número. |
| `totalVendido()` | O(1) | Utiliza una variable acumuladora (`total`). |
| `UnidadesVendidad()` | O(1) | Utiliza una variable contadora (`contador`). |
| `ventaMayor()` | O(1) | Utiliza las variables `mayor` y `producto` para guardar el resultado. |
| `ticketPromedio()` | O(1) | Utiliza dos variables auxiliares: `suma` y `contadorVentaValida`. |
| `ventasPorCiudad()` | O(1) | Recorre las ventas y acumula el resultado en una variable numérica. |
| `totalVendidoM()` | O(1) | Utiliza `reduce()` para acumular los valores en una variable numérica. |
| `unidadesVendidasM()` | O(1) | Utiliza `reduce()` para acumular las unidades en un número. |
| `ventasPorCiudadM()` | O(n) | `filter()` crea un nuevo arreglo con las ventas que coinciden con la ciudad. |
| `totalPorCiudad()` | O(k), peor caso O(n) | Crea un objeto que almacena el total de cada ciudad diferente. |
| `totalPorCiudadTabla()` | O(n) | Crea un objeto y varios arreglos mediante `Object.entries()` y `map()`. |
| `topProductosPorValor()` | O(n) | Crea un objeto de acumulación y arreglos adicionales para ordenar y obtener los mejores productos. |
| `unidadesPorProducto()` | O(n) | Crea un objeto con las unidades acumuladas por producto y arreglos adicionales para transformar los resultados. |
| `ventasDelDia()` | O(n) | `filter()` crea un nuevo arreglo con las ventas correspondientes a la fecha indicada. |
| `Validar()` | O(1) | Compara dos valores y devuelve un texto. |

## Variables utilizadas

- `n`: cantidad total de ventas.
- `k`: cantidad de ciudades diferentes.

## Conclusión

Las funciones con complejidad espacial O(1) utilizan una cantidad constante de memoria adicional, independientemente de cuántas ventas reciban.

Por otro lado, las funciones con complejidad espacial O(n) crean arreglos u objetos cuyo tamaño puede aumentar dependiendo de la cantidad de datos.

Es importante destacar que `totalPorCiudad()` utiliza un objeto acumulador que crece según la cantidad de ciudades diferentes. Por eso su complejidad es O(k), que en el peor caso puede ser O(n).

Asimismo, `topProductosPorValor()` necesita almacenar y ordenar los productos agrupados, por lo que su consumo de memoria también puede crecer con la cantidad de productos diferentes.

# Version de TotalCiudad que voy a dejar.
Por tema de optimizacion dejare la version 2 de totalciudad, recorro una sola vez las ventas y no creo ningun arreglo ademas.