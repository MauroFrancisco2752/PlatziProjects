y = 100;

/* *************** */
/* ---MEDIANA ---*/

//FUNCION
function calcularMedianaAritmetica(){
    // DECLARACION
    var listaMedianaAritmetica = Array();
    var valorCicloMediana = prompt("¿Cuantos datos desea agregar?: ");

    // CICLO
    for(let i = 0; i < valorCicloMediana; i++){
        listaMedianaAritmetica[i] = prompt("Ingresa un valor: ");
    }
 
    // CONVIERTE DE STRING A ARRAY NUMBER
    var arrayListaMediana = listaMedianaAritmetica.map(Number);
    
    //DIVIDIMOS LA CANTIDAD DE VALORES ENTRE 2
    const mitadListaMediana = parseInt(arrayListaMediana.length / 2);

    // COMPROBAMOS SI ES PAR O IMPAR EL RESULTADO DE LA DIVISION
    function esPar(numerito){
        if(numerito % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }



    if(esPar(arrayListaMediana.length)){
        const elemento1 = arrayListaMediana[mitadListaMediana - 1];
        const elemento2 = arrayListaMediana[mitadListaMediana];

        const promedioElemento1y2 = calcularPromedio([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;
    }
    else {
        mediana = arrayLista[mitadListaMediana];
    }

    return mediana;

}