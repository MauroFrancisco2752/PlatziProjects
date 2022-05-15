/* PROMEDIO */
// FUNCION

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}  

// CICLO FOR

let valorCiclo = Number(prompt(""));
let valorTotal = 0;
var suma = 0;

for(let i = 1; i <= valorCiclo; i++){
    valorTotal = Number(prompt("Valor:" + i));
    suma = valorTotal + suma;

}

calcularMediaAritmetica(suma[5, 10, 5]);
