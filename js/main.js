//crear un array con multiples palabras pero rapido y basico
let frase = prompt("ingrese una frase de multiples palabras separadas por espacio:   ") //pide una frase

//funcion que crea el array 
let creaArray = function (str) {
    let Arr = str.split(" ");
    return Arr;
}

 

let arr = creaArray(frase);
alert("tu array es [" + arr + "]"); // te muestra tu array

let letra= prompt("ingresa una letra para filtrar tu array ")//te pide ingresar una letra

//filtro para buscar en el array algo con la letra
let filterArr = arr.filter(function(el){
    return el.includes(letra);
});

alert("los resultados son [" + filterArr + "]")
//llama a la funcion
console.log(arr);
console.log(filterArr);

