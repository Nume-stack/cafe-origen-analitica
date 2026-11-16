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