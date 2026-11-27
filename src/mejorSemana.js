const ventasDiarias = [
    320, 410, 280, 390, 510, 620, 700, 300, 290, 450,
    480, 530, 610, 680, 350, 330, 420, 470, 560, 640,
    710, 380, 360, 440, 500, 590, 650, 720, 400, 370
];


function mejorSemanaBruta(dias, k) {
    let mejorTotal = -Infinity;
    let mejorInicio = -1;

    for (let i = 0; i <= dias.length - k; i++) {
        let total = 0;

        for (let j = i; j < i + k; j++) {
            total += dias[j];
        }

        if (total > mejorTotal) {
            mejorTotal = total;
            mejorInicio = i;
        }
    }

    return {
        total: mejorTotal,
        diaInicio: mejorInicio + 1
    };
}

// 2. Ventana deslizante
function mejorSemana(dias, k) {
    let total = 0;


    for (let i = 0; i < k; i++) {
        total += dias[i];
    }

    let mejorTotal = total;
    let mejorInicio = 0;


    for (let i = k; i < dias.length; i++) {
        total += dias[i] - dias[i - k];

        if (total > mejorTotal) {
            mejorTotal = total;
            mejorInicio = i - k + 1;
        }
    }

    return {
        total: mejorTotal,
        diaInicio: mejorInicio + 1
    };
}
module.exports={ventasDiarias,mejorSemana,mejorSemanaBruta};
/* console.log(mejorSemana(ventasDiarias,7));
console.log(mejorSemanaBruta(ventasDiarias,7)); */
