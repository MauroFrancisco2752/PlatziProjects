const PI = Number(Math.PI);

/************** DATOS: SOLO RADIO **************/
function areaCirculoRadio(radio){
    const resultado = PI * [radio * 2];
    return resultado;
}

function diametroCirculoRadio(radio){
    const resultado = radio * 2;
    return resultado;
}

function perimetroCirculoRadio(radio){
    const resultado = radio * [PI * PI];
    return resultado;
}



/************** DATOS: SOLO AREA **************/
function radioCirculoArea(area){
    const resultado = Math.sqrt([area / PI]);
    return resultado;
}


function calcularCirculoAreaData(){
    const dataUserArea = document.getElementById("dataArea");
    const userArea = Number(dataUserArea.value);

    const radioArea = radioCirculoArea(userArea);
    const diametroArea = diametroCirculoRadio(radioArea);
    const perimetroArea = perimetroCirculoRadio(diametroArea);

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
    const diametroRadio = diametroCirculoRadio(areaRadio);
    const perimetroRadio = perimetroCirculoRadio(diametroRadio);

    const resultadoRadio = document.getElementById("valor1");
    const resultadoArea = document.getElementById("valor2");
    const resultadoDiametro = document.getElementById("valor3");
    const resultadoPerimetro = document.getElementById("valor4");
   
    resultadoRadio.innerText = "El radio ingresado es: "+ userRadio;
    resultadoArea.innerText = "Area: "+ areaRadio;
    resultadoDiametro.innerText = "Diametro: "+ diametroRadio;
    resultadoPerimetro.innerText = "Perimetro: "+ perimetroRadio;
}



