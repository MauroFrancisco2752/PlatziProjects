

/* ------------ DECLARACION DE OPERACIONES -----------------*/
console.group("Operaciones");

function formula(precioTotal, descuentoAplicado){
    const subtotal = [precioTotal * (100 - descuentoAplicado)] / 100;
    return subtotal;
}
console.groupEnd();



/* ------------ LLAMAR OBJETOS ----------------*/
console.group("Llamada de Objetos");

function calcularDescuento(){
    const inputPrecio = document.getElementById("precioTotal");
    const inputprecioTotal = Number(inputPrecio.value);

    const inputDescuento = document.getElementById("descuentoAplicado");
    const inputdescuentoAplicado = Number(inputDescuento.value);

    /* FUNCION DE CUPON */
    const inputCupon = document.getElementById("cupon");
    const cuponValue = inputCupon.value;
    let descuentoCupon = 0;

    switch(cuponValue) {
        case "desc5":
            descuentoCupon = 5;
            break;

        case "desc15":
            descuentoCupon = 15;
            break;
        
        case "desc25":
            descuentoCupon = 25;
            break;
        }

    const DescuentoAndCupon = descuentoCupon + inputdescuentoAplicado;
    const resultado = formula(inputprecioTotal, DescuentoAndCupon);

    const resultCupon = document.getElementById("resultPrice");
    resultCupon.innerText = resultado;
}












console.groupEnd();

