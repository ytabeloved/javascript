
/*LOOPS */
let num=parseInt(prompt("ingrese un numero para este loop que correra solo 10 veces"));
let i=0;
let resultado=0;
/*cuerpo del loop */
while (i<10){
    if(i!=9){
    resultado =resultado+num;
    alert("la suma es "+ resultado)
    num=parseInt(prompt("Agregue un numero para el loop que correra "+ (-i+9)+" veces"));
    i++;}
    else{
        resultado =resultado+num;
        alert("la suma es "+ resultado)
        alert("no puedes agregar mas numeros")
        i++;
    }
}