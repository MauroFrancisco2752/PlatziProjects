/* ------------ DECLARACION DE OPERACIONES ----------------*/
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

    const resultado = formula(inputprecioTotal, inputdescuentoAplicado);
    alert(resultado);
}
console.groupEnd();

