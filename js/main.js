/*desafio 5 objetos */
class Prestamo {
    constructor (amount, cuota, interes) { //constructor del objeto prestamo
        this.amount = parseInt(amount);
        this.cuota = parseInt(cuota);
        this.interes = parseInt(interes);
    }
    calculoPrestamo(){
        'su cuota quedaria en: $' + pagos(this.amount, this.cuota, tasa(this.interes));
    }
}





/*creacion de objeto*/

let prestamo1 = new Prestamo(prompt('monto a pedir prestado: '), prompt('en cuantas cuotas? : '), prompt('a que tasa de interes? (solo ingrese un numero entero): '));

/*funciones del simulador  */
let tasa = function (interes) { //convierte interes en porcentaje
    let perc = prestamo1.interes / 100;
    return perc;
}

function pagos(amount, cuota, tasa) { //calcula el monto a pagar x cuota
    let pagos = (((prestamo1.amount * prestamo1.tasa) + prestamo1.amount) / prestamo1.cuota);
    return pagos;
}

/*llamadas */
console.log(prestamo1.amount); //control de valores
console.log(prestamo1.cuota);
console.log(tasa(prestamo1.interes));
alert(persona.calculoPrestamo()); //llamada del metodo