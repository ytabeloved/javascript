
/*primera consigna */
let num = prompt("Ingresa un numero")


if (num > 1000) {
    alert("Este numero es mayor 1000");
} else if (num == 1000) {
    alert("Este numero es 1000");
} else {
    alert("este numero es menor que 1000");
}

/*segunda consigna */
let text=prompt("Ingrese su texto: ");
let upp=text.toLocaleUpperCase();

if (upp=="HOLA"){
    alert("Hola!! gracias por saludar!");
}else{
    alert("que grosero!, al menos di hola!");
}

/*tercera consigna */
let numB=prompt("Ingrese un numero ")

if(numB>10 && numB < 50){
    alert("este numero esta entre 10 y 50");
}else if(numB < 10){
    alert("este numero es menor que 10");
}else{
    alert("este numero es mayor que 50");
}