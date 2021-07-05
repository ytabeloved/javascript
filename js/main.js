/*LOOPS PARTE 1 */
let num = parseInt(prompt("ingrese un numero para este loop que correra solo 10 veces"));
let i = 0;
let resultado = 0;
/*cuerpo del loop */ 
while (i < 10) {
    if (i != 9) {
        resultado = resultado + num;
        alert("la suma es " + resultado);
        num = parseInt(prompt("Agregue un numero para el loop que correra " + (-i + 9) + " veces"));
        i++;
    } else {
        resultado = resultado + num;
        alert("la suma es " + resultado);
        alert("no puedes agregar mas numeros");
        i++;
    }
}

/*LOOP 2 STRINGS */

let string1 = prompt("ingrese mientras quiera un string a la cadena, para salir escriba ESC en mayusculas");
let cadena = " ";
/*cuerpo loop 2 */
while(string1 != "ESC"){
    cadena = cadena + " " + string1;
    alert("su concatenacion es: " + cadena);
    string1 = prompt("ingrese su prox string para concatenar o escriba ESC en mayuscula para terminar");
}

/*LOOP 3 */

let num2=parseInt(prompt("ingrese cuantas veces quiere que lo saludemos!"));

/*cuerpo del loop */

for(let i2=1; i2<=num2; i2++){
    alert("hola!,   por " + i2 +"a vez")
}