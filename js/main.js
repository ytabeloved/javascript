/*desafio 5 objetos */
class Prestamo {
    constructor(amount, cuota, interes, pagos) { //constructor del objeto prestamo
        this.amount = parseFloat(amount);
        this.cuota = parseFloat(cuota);
        this.interes = parseFloat(interes);
        this.pagos = parseFloat(pagos);
       
    }
    calculoPrestamo(){
        this.pagos = pagos(this.amount, this.cuota);
        return this.pagos;
    }
   
}





/*creacion de objeto*/

let prestamo1 = new Prestamo(prompt('monto a pedir prestado: ') , prompt('en cuantas cuotas? : '), prompt('a que tasa de interes? (solo ingrese un numero entero): ') );

/*funciones del simulador  */

function tasa(interes) { //convierte interes en porcentaje
    let perc = prestamo1.interes / 100;
   // console.log(perc);
    return perc;  
}

let pagos = function (amount, cuota) { //calcula el monto a pagar x cuota
    let pagos = ((prestamo1.amount * tasa(prestamo1.interes))+prestamo1.amount)/ prestamo1.cuota;
    return pagos;
}

/*llamadas de consola para control*/
//console.log(prestamo1.amount); //control de valores
//console.log(prestamo1.cuota);
console.log(prestamo1.calculoPrestamo());
console.log(tasa(prestamo1.interes));
console.log(pagos(prestamo1.amount, prestamo1.cuota, tasa(prestamo1.interes)));
//console.log('tu monto a pagar es: $ ' + pagos(prestamo1.amount, prestamo1.cuota, tasa(prestamo1.interes)));


alert('su cuota quedaria en: $' + prestamo1.calculoPrestamo()); //llamada del metodo