//
// Programa de la Practica 4 
// - Determinar valor Máximo, Mínimo, Mediana, Promedio
// console.log('Hola mundo!');

let numeros = [];

let dato = 0;

let promedio = 0;

let condicion = 0;

let tamano = 0;

let mediana = 0;

let suma = 0;

let medianaBaja = 0;

let medianaAlta = 0;

while (condicion != -10) {
    dato = prompt('Digite un numero, de lo contrario precione Enter para continuar con el proceso');
    if (dato == '') {
        condicion = -10;
    } else if (isNaN(dato) || dato == ' ') {

    } else {
        numeros[condicion] = parseInt(dato);
        condicion++;
    }
}
// Array desordenado
//console.log(numeros);

numeros.sort((a, b) => a - b);
//Determino la suma
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

tamano = numeros.length;
//Determino Promedio
promedio = suma / tamano;

medianaBaja = Math.floor((numeros.length - 1) / 2);

medianaAlta = Math.ceil((numeros.length - 1) / 2);

if (numeros.length % 2 == 0) {
    // console.log("Array es par");
    mediana = (numeros[medianaBaja] + numeros[medianaAlta]) / 2;
} else {
    // console.log("Array es impar");
    mediana = (numeros[medianaBaja] + numeros[medianaAlta]) / 2;
}


console.log(`El promedio es:  ${promedio}`);

console.log(`El valor mínimo es: ${Math.min(...numeros)}`);

console.log(`El valor máximo es: ${Math.max(...numeros)}`);

console.log(`El valor de la mediana es: ${mediana}`);

// Array ordenado
//console.log(numeros);
