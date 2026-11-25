# Análisis de complejidad temporal y espacial del motor de ventas

| Función | ¿Qué hace? | Complejidad temporal | Complejidad espacial | Justificación | Operaciones o tiempo con 10.000 ventas |
|---|---|---|---|---|---|
| `valorVenta()` | Calcula el valor total de una venta multiplicando cantidad por precio. | O(1) | O(1) | Realiza una multiplicación, sin importar el tamaño del arreglo. | 1 multiplicación por llamada. |
| `totalVendido()` | Calcula el valor total de todas las ventas. | O(n) | O(1) | Recorre todas las ventas y acumula sus valores en una variable. | 10.000 iteraciones y 10.000 sumas. |
| `UnidadesVendidad()` | Calcula la cantidad total de unidades vendidas. | O(n) | O(1) | Recorre las ventas y acumula las unidades en un contador. | 10.000 iteraciones y 10.000 sumas. |
| `ventaMayor()` | Encuentra la venta cuyo precio es mayor. | O(n) | O(1) | Recorre las ventas y compara cada precio con el mayor encontrado. | 10.000 iteraciones y hasta 10.000 comparaciones. |
| `ticketPromedio()` | Calcula el promedio del valor de las ventas válidas. | O(n) | O(1) | Recorre las ventas, acumula los valores válidos y cuenta cuántas son. | 10.000 iteraciones y hasta 10.000 validaciones. |
| `ventasPorCiudad()` | Calcula cuánto se vendió en una ciudad específica. | O(n) | O(1) | Recorre todas las ventas, compara la ciudad y acumula los valores coincidentes. | 10.000 iteraciones y hasta 10.000 comparaciones de ciudad. |
| `totalVendidoM()` | Calcula el valor total de las ventas utilizando `reduce()`. | O(n) | O(1) | `reduce()` recorre todas las ventas y acumula el resultado en un número. | 10.000 iteraciones y 10.000 acumulaciones. |
| `unidadesVendidasM()` | Calcula las unidades vendidas utilizando `reduce()`. | O(n) | O(1) | `reduce()` recorre las ventas y acumula las cantidades en un número. | 10.000 iteraciones y 10.000 acumulaciones. |
| `ventasPorCiudadM()` | Filtra las ventas de una ciudad y suma sus valores. | O(n) | O(n) | `filter()` recorre las ventas y crea un nuevo arreglo; después `reduce()` suma los resultados. | 10.000 revisiones en el filtro y hasta 10.000 acumulaciones. |
| `totalPorCiudad()` | Agrupa las ventas por ciudad y calcula el total vendido en cada una. | O(n) | O(k), peor caso O(n) | `reduce()` recorre las ventas y construye un objeto que almacena los totales por ciudad. | 10.000 iteraciones y hasta 10.000 actualizaciones del objeto. |
| `totalPorCiudadTabla()` | Agrupa las ventas por ciudad y devuelve los resultados en un arreglo de objetos. | O(n + k) | O(k), peor caso O(n) | Recorre las ventas, convierte el objeto en un arreglo con `Object.entries()` y utiliza `map()` para transformar los resultados. | 10.000 iteraciones de agrupación y k transformaciones. |
| `topProductosPorValor()` | Calcula el valor vendido por producto, los ordena y devuelve los mejores. | O(n + p log p) | O(p), peor caso O(n) | Agrupa las ventas por producto, convierte el objeto en un arreglo, lo ordena y obtiene los primeros resultados. | 10.000 iteraciones de agrupación y ordenamiento de p productos diferentes. |
| `unidadesPorProducto()` | Agrupa las unidades vendidas por producto y devuelve un arreglo de resultados. | O(n + p) | O(p), peor caso O(n) | Utiliza `reduce()` para agrupar las unidades y luego `Object.entries()` y `map()` para transformar los resultados. | 10.000 iteraciones de agrupación y p transformaciones. |
| `ventasDelDia()` | Devuelve las ventas que corresponden a una fecha específica. | O(n) | O(n) | `filter()` recorre las ventas y crea un nuevo arreglo con las coincidencias. | 10.000 revisiones y hasta 10.000 elementos en el nuevo arreglo. |
| `Validar()` | Compara dos valores y devuelve si son iguales o diferentes. | O(1) | O(1) | Realiza una comparación directa y devuelve un resultado. | 1 comparación. |
| `totalCiudadV1()` | Normaliza las ciudades, filtra las ventas de una ciudad específica y suma sus valores. | O(n) | O(n) | Utiliza tres `map()`, un `filter()` y un `reduce()`. Crea varios arreglos intermedios durante el proceso. | 10.000 elementos procesados en cada uno de los tres `map()` y en `filter()`, más las sumas de las coincidencias. |
| `totalCiudadV2()` | Calcula el total vendido en una ciudad específica utilizando un ciclo `for...of`. | O(n) | O(1) | Recorre las ventas una sola vez y utiliza un acumulador, sin crear arreglos adicionales. | 10.000 iteraciones y hasta 10.000 comparaciones de ciudad. |
| `clientesRecurrentes()` | Identifica los clientes que aparecen más de una vez en las ventas. | O(n³) en el peor caso | O(n) | Utiliza dos ciclos anidados y `includes()` para comprobar si un cliente ya está en el arreglo. La búsqueda con `includes()` puede recorrer el arreglo de recurrentes. | 49.995.000 comparaciones entre ventas con los dos ciclos, más el costo de las búsquedas con `includes()`. |

## Variables utilizadas

- `n`: cantidad total de ventas.
- `k`: cantidad de ciudades diferentes.
- `p`: cantidad de productos diferentes.
`.

## Comparación especial: totalCiudadV1 vs totalCiudadV2

Aunque ambas funciones calculan el total vendido en una ciudad, tienen diferencias importantes:

| Característica | `totalCiudadV1()` | `totalCiudadV2()` |
|---|---|---|
| Recorridos principales | Varios recorridos mediante métodos de arreglos. | Un solo recorrido mediante `for...of`. |
| Complejidad temporal | O(n) | O(n) |
| Complejidad espacial | O(n) | O(1) |
| Memoria adicional | Crea arreglos intermedios. | Solo utiliza un acumulador. |
| Resultado | Total vendido en la ciudad. | Total vendido en la ciudad. |

# Proyección

Se realiza una proyección del comportamiento de las funciones cuando el motor de ventas pase de procesar 10.000 a 1.000.000 de ventas.

La proyección se basa en la complejidad temporal de cada función y en los tiempos que se obtengan mediante `console.time()` y `console.timeEnd()`.

Para calcular la proyección se utilizan estos factores:

| Complejidad temporal | Factor de crecimiento | Explicación |
|---|---:|---|
| O(1) | 1 | El tiempo se mantiene aproximadamente constante. |
| O(n) | 100 | La cantidad de datos aumenta 100 veces. |
| O(n log n) | Aproximadamente 150 | El tiempo aumenta un poco más que proporcionalmente. |
| O(n²) | 10.000 | El crecimiento es cuadrático. |
| O(n³) | 1.000.000 | El crecimiento es cúbico. |

## Proyección de las funciones

| Función | Complejidad temporal | Tiempo medido con 10.000 ventas | Proyección para 1.000.000 de ventas |
|---|---|---|---|
| `valorVenta()` | O(1) | T | Aproximadamente T |
| `totalVendido()` | O(n) | T | Aproximadamente T × 100 |
| `UnidadesVendidad()` | O(n) | T | Aproximadamente T × 100 |
| `ventaMayor()` | O(n) | T | Aproximadamente T × 100 |
| `ticketPromedio()` | O(n) | T | Aproximadamente T × 100 |
| `ventasPorCiudad()` | O(n) | T | Aproximadamente T × 100 |
| `totalVendidoM()` | O(n) | T | Aproximadamente T × 100 |
| `unidadesVendidasM()` | O(n) | T | Aproximadamente T × 100 |
| `ventasPorCiudadM()` | O(n) | T | Aproximadamente T × 100 |
| `totalPorCiudad()` | O(n) | T | Aproximadamente T × 100 |
| `totalPorCiudadTabla()` | O(n + k) | T | Aproximadamente T × 100, si k crece proporcionalmente a n |
| `topProductosPorValor()` | O(n + p log p) | T | Aproximadamente T × 150, si p crece proporcionalmente a n |
| `unidadesPorProducto()` | O(n + p) | T | Aproximadamente T × 100, si p crece proporcionalmente a n |
| `ventasDelDia()` | O(n) | T | Aproximadamente T × 100 |
| `Validar()` | O(1) | T | Aproximadamente T |
| `totalCiudadV1()` | O(n) | T | Aproximadamente T × 100 |
| `totalCiudadV2()` | O(n) | T | Aproximadamente T × 100 |
| `clientesRecurrentes()` | O(n³) en el peor caso | T | Aproximadamente T × 1.000.000 |

**Nota:** T representa el tiempo real medido con 10.000 ventas. Estas proyecciones son aproximaciones teóricas, no tiempos garantizados. En las funciones que agrupan por ciudad o producto, el resultado también depende de cuántas ciudades o productos diferentes existan.

# Riesgos

Se ordenan las funciones de mayor a menor riesgo considerando cómo aumenta su tiempo de ejecución y su consumo de memoria cuando crece la cantidad de ventas.

| Nivel de riesgo | Función | Complejidad | Justificación |
|---|---|---|---|
| 1. Muy alto | `clientesRecurrentes()` | O(n³) en el peor caso | Tiene dos ciclos anidados y utiliza `includes()` para buscar clientes repetidos. El costo de búsqueda puede aumentar a medida que crece el arreglo de resultados. |
| 2. Alto | `topProductosPorValor()` | O(n + p log p) | Además de recorrer las ventas y agrupar los productos, debe ordenar los resultados. El costo aumenta cuando existen muchos productos diferentes. |
| 3. Medio-alto | `totalCiudadV1()` | O(n) | Realiza varios recorridos y crea arreglos intermedios con `map()` y `filter()`. Esto aumenta el consumo de memoria. |
| 4. Medio | `ventasPorCiudadM()` | O(n) | Crea un nuevo arreglo con las ventas de una ciudad antes de realizar la suma. |
| 5. Medio | `ventasDelDia()` | O(n) | Utiliza `filter()` y puede crear un arreglo con una gran cantidad de ventas. |
| 6. Medio | `totalPorCiudadTabla()` | O(n + k) | Agrupa las ventas y crea arreglos adicionales para transformar los resultados. |
| 7. Medio | `unidadesPorProducto()` | O(n + p) | Construye un objeto y un arreglo de resultados que crecen según la cantidad de productos diferentes. |
| 8. Bajo | `totalPorCiudad()` | O(n) | Recorre las ventas y almacena los totales por ciudad. Su memoria depende de la cantidad de ciudades diferentes. |
| 9. Bajo | `totalCiudadV2()` | O(n) | Recorre las ventas una sola vez y utiliza memoria constante. |
| 10. Bajo | `totalVendido()`, `UnidadesVendidad()`, `ventaMayor()`, `ticketPromedio()`, `ventasPorCiudad()`, `totalVendidoM()`, `unidadesVendidasM()` | O(n) | Realizan recorridos lineales y utilizan memoria adicional constante. |
| 11. Muy bajo | `valorVenta()`, `Validar()` | O(1) | Realizan operaciones constantes que no dependen de la cantidad de ventas. |

## Criterio de clasificación

El riesgo se determina principalmente por tres factores:

- **Tiempo de ejecución:** cuánto aumenta el trabajo que debe realizar la función cuando crece la cantidad de ventas.
- **Consumo de memoria:** cuánta memoria adicional necesita para almacenar arreglos, objetos o resultados intermedios.
- **Operaciones repetidas:** si la función vuelve a buscar información que ya había encontrado o realiza recorridos innecesarios.

Una función O(n³) representa un riesgo mucho mayor que una O(n), porque su tiempo puede crecer de manera desproporcionada.

También es importante considerar que dos funciones con complejidad O(n) pueden tener consumos de memoria diferentes. Por ejemplo, `totalCiudadV1()` crea varios arreglos, mientras que `totalCiudadV2()` utiliza solamente un acumulador.

# Plan de optimización

## Función seleccionada: `clientesRecurrentes()`

Esta función representa el mayor riesgo de rendimiento cuando aumenta la cantidad de ventas.

### ¿Qué trabajo se repite?

Actualmente, la función utiliza dos ciclos:

- El ciclo externo selecciona un cliente.
- El ciclo interno compara ese cliente con los siguientes registros.
- Cuando encuentra un cliente repetido, utiliza `includes()` para verificar si ya fue agregado al arreglo de clientes recurrentes.

El problema es que `includes()` vuelve a recorrer el arreglo de resultados para comprobar si el cliente ya existe.

Por lo tanto, la función puede realizar muchas comparaciones repetidas.

### ¿Qué información se podría guardar para no buscarla de nuevo?

Se podría utilizar un `Set` para almacenar los clientes que ya han aparecido.

Un `Set` permite comprobar si un elemento existe sin tener que recorrer manualmente todos los elementos almacenados, con un costo promedio O(1) por búsqueda.

La idea sería:

1. Recorrer las ventas una sola vez.
2. Guardar en un `Set` los clientes que aparecen por primera vez.
3. Cuando un cliente vuelva a aparecer, identificarlo como recurrente.
4. Guardarlo en otro `Set` para evitar agregarlo más de una vez al resultado.
5. Devolver los clientes recurrentes.

### Resultado esperado de la optimización

| Característica | Implementación actual | Optimización propuesta |
|---|---|---|
| Recorridos principales | Dos ciclos anidados. | Un solo recorrido. |
| Búsqueda de clientes | `includes()` | `Set.has()` |
| Complejidad temporal | O(n³) en el peor caso. | O(n) promedio. |
| Complejidad espacial | O(n) | O(n) |
| Rendimiento con grandes cantidades de datos | Puede degradarse considerablemente. | Mucho más eficiente. |

