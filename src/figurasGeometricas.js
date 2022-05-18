const PI = Number(Math.PI);

/************** DATOS: SOLO RADIO **************/
function areaCirculoRadio(radio){
    const resultado = PI * (Math.pow(radio, 2));
    return resultado;
}

function diametroCirculoRadio(radio){
    const resultado = radio * 2;
    return resultado;
}

function perimetroCirculoRadio(radio){
    const resultado = (PI * 2) * radio;
    return resultado;
}



/************** DATOS: SOLO AREA ***************/
function radioCirculoArea(area){
    const resultado = Math.sqrt([area / PI]);
    return resultado;
}


function calcularCirculoAreaData(){
    const dataUserArea = document.getElementById("dataArea");
    const userArea = Number(dataUserArea.value);

    const radioArea = radioCirculoArea(userArea);
    const diametroArea = diametroCirculoRadio(radioArea);
    const perimetroArea = perimetroCirculoRadio(radioArea);

    const resultadoArea = document.getElementById("valor1");
    const resultadoRadio = document.getElementById("valor2");
    const resultadoDiametro = document.getElementById("valor3");
    const resultadoPerimetro = document.getElementById("valor4");
   
    resultadoArea.innerText = "El área ingresada es de: "+ userArea;
    resultadoRadio.innerText = "Radio: "+ radioArea;
    resultadoDiametro.innerText = "Diametro: "+ diametroArea;
    resultadoPerimetro.innerText = "Perimetro: "+ perimetroArea;
}

function calcularCirculoRadioData(){
    const dataUserRadio = document.getElementById("dataRadio");
    const userRadio = Number(dataUserRadio.value);

    const areaRadio = areaCirculoRadio(userRadio);
    const diametroRadio = diametroCirculoRadio(userRadio);
    const perimetroRadio = perimetroCirculoRadio(userRadio);

    const resultadoRadio = document.getElementById("valor1");
    const resultadoArea = document.getElementById("valor2");
    const resultadoDiametro = document.getElementById("valor3");
    const resultadoPerimetro = document.getElementById("valor4");

    resultadoRadio.innerText = "El radio ingresado es: "+ userRadio;
    resultadoArea.innerText = "Area: "+ areaRadio;
    resultadoDiametro.innerText = "Diametro: "+ diametroRadio;
    resultadoPerimetro.innerText = "Perimetro: "+ perimetroRadio;
}



// TRIANGULO
// FORMULAS

function areaTriangulo(base, altura){
    const resultado = (base * altura) / 2;
    return resultado; 
}

function perimetroTriangulo (lado1, lado2, base){
    const resultado = Number(lado1 + lado2 + base);
    return resultado;
}

// LLAMADO DE FUNCIONES:        
function calcularTrianguloData(){
    const inputDataLado1 = document.getElementById("dataLado1");
    const dataLado1 = Number(inputDataLado1.value);
    const inputDataLado2 = document.getElementById("dataLado2");
    const dataLado2 = Number(inputDataLado2.value);
    const inputDataBase = document.getElementById("dataBase")
    const dataBase = Number(inputDataBase.value);
    const inputDataAltura = document.getElementById("dataAltura")
    const dataAltura = Number(inputDataAltura.value);

    // VALIDACION EMPTY DATA

    /* ---------------------------------------------------------------------------------- */ 
    const resultadoAreaTriangulo = areaTriangulo(dataBase, dataAltura);
    const resultadoPerimetroTriangulo = perimetroTriangulo(dataLado1, dataLado2, dataBase);

    const valor1Resultado = document.getElementById("valorArea");
    const valor2Resultado = document.getElementById("valorPerimetro");

    valor1Resultado.innerText = "Area: " + resultadoAreaTriangulo;
    valor2Resultado.innerText = "Perimetro: " + resultadoPerimetroTriangulo; 
}






/* CUADRADO */
// FORMULAS:
function areaCuadrado(lado){
    const resultado = Math.pow(lado, 2);
    return resultado;
}

function perimetroCuadrado(lado){
    const resultado = lado * 4;
    return resultado;
}

function diagonalCuadrado(lado){
    resultado = [Math.sqrt(2) * lado];
    return resultado;
}

// LLAMADO DE FUNCION
function calcularCuadradoData(){
    const inputLadoData = document.getElementById("dataLado");
    const ladoData = inputLadoData.value;

    const RareaCuadrado = areaCuadrado(ladoData);
    const RperimetroCuadrado = perimetroCuadrado(ladoData);
    const RdiagonalCuadrado = diagonalCuadrado(ladoData);

    const inputValorArea = document.getElementById("valorAreaCuadrado");
    const inputValorPerimetro = document.getElementById("valorPerimetroCuadrado");
    const inputValorDiagonal = document.getElementById("valorDiagonalCuadrado");

    inputValorArea.innerText = "Area: " + RareaCuadrado;
    inputValorPerimetro.innerText = "Perimetro: " + RperimetroCuadrado;
    inputValorDiagonal.innerText = "Diagonal: " + RdiagonalCuadrado;
}