/*desafio 4 principio de app*/

let amount= parseInt(prompt('monto a pedir prestado: '));//define monto a pedir
let cuota= parseInt(prompt('en cuantas cuotas? : '));//define cuotas
let interes= parseInt(prompt('a que tasa de interes? (solo ingrese un numero entero): '));// define interes

let tasa= function (interes){//convierte interes en porcentaje
    let perc=interes/100
    return perc;
}

function pagos(amount, cuota, tasa){//calcula el monto a pagar x cuota
    let pagos=(((amount*tasa)+amount)/cuota);
    return pagos;
}

console.log(amount);//control de valores
console.log(cuota);
console.log(tasa(interes));
alert('su cuota quedaria en: $' + pagos(amount, cuota, tasa(interes)));//llamada de la funcion

