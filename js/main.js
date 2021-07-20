//crear un array con multiples palabras
let frase = prompt("ingrese una frase de multiples palabras separadas por espacio:   ") //pide una frase

//funcion que crea el array 
let creaArray = function (str) {
    let Arr = str.split(" ");
    return Arr;
}

let arr = creaArray(frase);

//llama a la funcion
console.log(arr)
alert("tu array es [" + creaArray(frase) + "]");