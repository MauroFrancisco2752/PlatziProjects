/* PROMEDIO CON CICLO FOR */

/*
function mediaAritmetica(lista){
    
    let sumaTotal = 0;

    for (let i = 0; i < lista.length; i++){
        sumaTotal = sumaTotal + lista[i];
    }
    
    sumaTotal = sumaTotal / lista.length;

    return sumaTotal;
}
*/

function calcularMediaAritmetica(lista) {

const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / lista.length;

return promedioLista;
}

 