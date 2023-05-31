const numero1 = 5;
const numero2 = 15;
 
/*if(numero1 <= numero2) {
    console.log("numero1 no es mayor que numero2");
}

if(numero2 > 0) {
    console.log("numero2 es positivo");
}

if(numero1 < 0 || numero1 !== 0 ) {
    console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

// Calcular y mostrar el factorial de numero2

let factorial = 1;
for (let i = numero2; i > 0; i--) {} // 5 4 3 2 1

for (let i = 1; i <= numero2; i++) {
    factorial = factorial * i
} // 1 2 3 4 5

console.log(factorial) */

// "*" multiplica
// "i" es el nombre de la variable en el FOR //

// Ciclo incremental de numero1 a numero2
let sumatorioPares = 0;
for (let j = numero1; j <= 15; j++){
    if (j % 2 === 0)   {
        sumatorioPares = sumatorioPares + j
    }
}

console.log(sumatorioPares)