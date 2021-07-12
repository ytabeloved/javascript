/*complementario desafio 4 */

/*funcion 1, es par o impar */

function isOdd(num) {
    if (num % 2 === 0) { //si el remainder es cero es par
        alert("es numero par");
        return true;
    }
    alert("es numero impar");
    return false;
}

let num = prompt("ingrese un numero para validar si es par o impar: ");
isOdd(num);

/* funcion 2, funcion del eco */

let str = prompt('ingrese la palabra que quiere escuchar en eco, con la primera letra en mayuscula por favor!');

function eco(str) {
    let dots = ' ... '
    alert(str.toUpperCase() + dots + str + dots + str.toLowerCase()); //imprime en eco las palabras
}
eco(str);

/*funcion 3 son primos*/

let isPrime = function(num1) {
    if (num1 < 2) { //validamos si es menor que 2
        return false;
    }
    for (let i = 2; i < num1; i++) {//validamos que si es mayor que 2 mientras el remainder sea igual a cero devuelva falso
        if (num1 % i === 0) {
            return false;
        }
    }
    return true;//si los dos anteriores son falsos entonces es primo
};

let primeFactors = function(num1) {
    let primeFacts = [];//creamoas array para guardar los factores
    for (let i = 1; i <= num1; i++) {//iteramos por todos los numeros desde cero hasta el numero elegido
        if (num1 % i === 0 && isPrime(i)) {//si podemos dividir el numero elegido por i y su remainder es cero lo metemos al array como factor
            primeFacts.push(i);
        }
    }
    alert('los factores primos son: ' + primeFacts);
    return primeFacts;
}

let num1 = prompt('ingrese un numero y le mostraremos todos sus factores primos');
primeFactors(num1);

