/* *************** */
/* PROMEDIO */
//FUNCION
function calcularPromedio(){
     // CICLO FOR
    listaPromedio = Array();
    valorCiclo = prompt("¿Cuantos datos desea agregar?: ");


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
    listaMedia = Array();
    valorCiclo = prompt("¿Cuantos datos desea agregar?: ");

    // AGREGAR DATOS A LISTA
    for (let i = 0; i < valorCiclo; i++){
        listaMedia[i] = prompt("Ingresa un valor: ");
    }

    // CONVERTIR A UN ARRAY LA LISTA
    const arrayLista = listaMedia.map(Number);

    // CONVERCIONES
    const listaCount = {};

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

    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];
    const repite = moda.length + 1;

    //INSERTAR EN PARRAFO <p>
    const outputModa = document.getElementById("rModa");
    return outputModa.innerText =  ("La moda es " + moda[0] + ", este se repite " + repite + " veces");
}



/* *************** */
/* ---MEDIANA ---*/
