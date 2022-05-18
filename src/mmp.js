/* *****************/
/* PROMEDIO */
//FUNCION
function calcularPromedio(){
     // CICLO FOR
    var listaPromedio = Array();
    var valorCiclo = prompt("¿Cuantos datos desea agregar?: ");


    // AGREGAR DATOS A LISTA
    for (let i = 0; i < valorCiclo; i++){
        listaPromedio[i] = prompt("Ingresa un valor: ");
    }

    // CONVERTIR A UN ARRAY LA LISTA
    const resultadoPromedio = listaPromedio.map(Number);


    //FUNCION REDUCE
    const sumaLista = resultadoPromedio.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    // OPERACIÓN DIVISORA
    const resultado = sumaLista / resultadoPromedio.length;

    //INSERTAR EN PARRAFO <p>
    const outputPromedio = document.getElementById("rPromedio");
    return outputPromedio.innerText = ("El promedio de los valores ingresados es: " + resultado);
}  

/* *************** */
/* ---MODA ---*/
function calcularModa(){
    var listaMedia = Array();
    var valorCiclo = prompt("¿Cuantos datos desea agregar?: ");

    // AGREGAR DATOS A LISTA
    for (let i = 0; i < valorCiclo; i++){
        listaMedia[i] = prompt("Ingresa un valor: ");
    }

    // CONVERTIR A UN ARRAY LA LISTA
    const arrayLista = listaMedia.map(Number);

    // CONVERCIONES
    const listaCount = {};
    //FUNCION .MAP
    arrayLista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }
            else{
                listaCount[elemento] = 1;
            }
        }
    );

    // CONVIERTE A OBJETO
    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    //CONVIERTE A ARRAY
    const moda = listaArray[listaArray.length - 1];

    //INSERTAR EN PARRAFO <p>
    const outputModa = document.getElementById("rModa");
    return outputModa.innerText =  ("La moda es " + moda[0] + ", este se repite " + moda[1] + " veces");
}


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
    function esPar(mitadListaMediana){
        if(mitadListaMediana % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }

    let mediana;

    if(esPar(arrayListaMediana.length)){
        const elemento1 = arrayListaMediana[mitadListaMediana - 1];
        const elemento2 = arrayListaMediana[mitadListaMediana];

        const promedioElemento1y2 = calcularPromedioComplemento([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;
    }
    else {
        mediana = arrayListaMediana[mitadListaMediana];
    }
  //INSERTAR EN PARRAFO <p>
  const outputMediana = document.getElementById("rMediana");
  return outputMediana.innerText =  ("La mediana es: " + mediana);

}

// COMPLEMENTO DE MEDIANA
function calcularPromedioComplemento(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }