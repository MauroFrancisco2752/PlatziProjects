/* PROMEDIO */
// FUNCION




//FUNCION
function calcularPromedio(){
     // CICLO FOR
    listaPromedio = Array();
    valorCiclo = prompt("¿Cuantos datos desea agregar?: ");
    let sumaTotal = 0;

    // AGREGAR DATOS A LISTA
    for (let i = 0; i < valorCiclo; i++){
        listaPromedio[i] = prompt("Ingresa un valor: ");
    }

    // CONVERTIR A UN ARRAY LA LISTA
    const resultadoPromedio = listaPromedio.map(Number);

    // SUMA DE DATOS EN ARRAY
    for (let i = 0; i < resultadoPromedio.length; i++){
        sumaTotal += resultadoPromedio[i];
    }

/*
    const resultado = sumaTotal / resultadoPromedio.length;

    const outputPromedio = document.getElementById("rPromedio");
    return outputPromedio.innerText = ("El promedio de los valores ingresados es: " + resultado);

*/

const sumaLista = resultadoPromedio.reduce(
    function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

const resultado = sumaLista / resultadoPromedio.length;

const outputPromedio = document.getElementById("rPromedio");
return outputPromedio.innerText = ("El promedio de los valores ingresados es: " + resultado);

}  



