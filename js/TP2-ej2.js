// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:



// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

let nota= parseInt (prompt (`Ingrese la nota`))
if (nota >=0 && nota <=2){
    document.write(`<h1>Muy Deficiente<h1>`)
}else if (nota >=3 && nota <=4){
    document.write(`<h1>Insuficiente<h1>`)
}
else if (nota >=5 && nota <=6){
    document.write(`<h1>Suficiente<h1>`)
}
else if (nota==7){
    document.write(`<h1>Bien<h1>`)
}
else if (nota >=8 && nota <=9){
    document.write(`<h1>Notable<h1>`)
}
else if (nota==10){
    document.write(`<h1>Sobresaliente<h1>`)
}
else if(nota<0){
    document.write(`<h1>Ingrese un numero valido<h1>`)
}
else if(nota>10){
    document.write(`<h1>Ingrese un numero valido<h1>`)
} if (isNaN(nota)){
    document.write(`<h1>Ingrese unicamente un valor numerico</h1>`)
}