/*desafio 5 objetos */
class Prestamo {
    constructor(amount, cuota, interes, pagos) { //constructor del objeto prestamo
        this.amount = parseFloat(amount);
        this.cuota = parseFloat(cuota);
        this.interes = parseFloat(interes);
        this.pagos = parseFloat(pagos);

    }
    calculoPrestamo() {
        this.pagos = pagos(this.amount, this.cuota);
        return this.pagos;
    }

}


//crea el array
let client1 = [];



//inserta las var en el array
let crearCuenta = prompt("desea un prestamo si o no?");
if (crearCuenta.toLowerCase() === "si") {
    let newAmount = prompt('monto a pedir prestado: '); //define la captura de datos
    let newCuotas = prompt('en cuantas cuotas? : ');
    let newInteres = prompt('a que tasa de interes? (solo ingrese un numero entero): ');

    client1.push(newAmount, newCuotas, newInteres) //graba los valores en el array 
} else {
    alert("vuelva cuando desee un credito")
}



/*creacion de objeto*/

let prestamo1 = new Prestamo(client1[0, 0], client1[0, 1], client1[0, 2]);
console.log(client1[0, 0])
console.log(client1[0, 1])
console.log(client1[0, 2])

/*funciones del simulador  */

function tasa(interes) { //convierte interes en porcentaje
    let perc = prestamo1.interes / 100;
    // console.log(perc);

    return perc;
}

let pagos = function (amount, cuota) { //calcula el monto a pagar x cuota
    let pagos = ((prestamo1.amount * tasa(prestamo1.interes)) + prestamo1.amount) / prestamo1.cuota;
    return pagos;
}

/*llamadas de consola para control*/
console.log(client1);
console.log(prestamo1.calculoPrestamo());
console.log(tasa(prestamo1.interes));
console.log(pagos(prestamo1.amount, prestamo1.cuota, tasa(prestamo1.interes)));

//llamada funcion y adios
let resultado = prestamo1.calculoPrestamo();
console.log("tipo :" + resultado)
if (isNaN(resultado)) {
    alert("Adios!")
} else {
    alert('su cuota quedaria en: $' + prestamo1.calculoPrestamo()); //llamada del metodo
    alert("resumen del prestamo:  " + "monto pedido: " + client1[0, 0] + " en " +
        client1[0, 1] + " cuotas, " + "con una tasa de: " + client1[0, 2] + "%")

}

