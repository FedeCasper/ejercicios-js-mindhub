console.log("Bucles");

//Ejercicio N°1
// ----------------------------------------------------------------------------
// let num = prompt("Ingrese un número para ver su tabla")

// for(let i = 1 ; i < 11 ; i++){
//      console.log(`${i} x ${num} = ${i*num}`);
// }

//Ejercicio N°2
// ----------------------------------------------------------------------------
// let num = ""
// let total = 0

// do{
     
//      num = prompt( "Ingrese para sumar (interrumpa con vacio)" )
//      if(num !== ""){
//           console.log(total = parseInt(total) + parseInt(num)) 
//           if(total > 99){
//                console.log("El juego solo llega hasta 99");
//                break
//           }
//      }else{
//           console.log("Fin") 
//      }
// }while(num != "")

// console.log(total);
// console.log("se cortó");

//Ejercicio N° 3
// ----------------------------------------------------------------------------
// let numeroIngresado = ""
// numeroIngresado = prompt(`Ingrese un número`)

//      while(total != numeroIngresado){
//           if(numeroIngresado < total){
//                numeroIngresado = prompt(`El número oculto es mayor a ${numeroIngresado} ❌`)
//           }else if(numeroIngresado > total){
//                numeroIngresado = prompt(`El número oculto es menor a ${numeroIngresado} ❌`)
//           }
               
//      }
// alert("adivinaste ✅")

//Ejercicio N° 4
// ----------------------------------------------------------------------------

//Solución 1
//let num = prompt("Ingrese un número")

// while((num%2) == 0 || (num%3) == 0 || (num%5) == 0 || (num%7) == 0){
     
//      console.log(`${(num%2)} es el resto dividido 2`);
//      console.log(`${(num%3)} es el resto dividido 3`);
//      console.log(`${(num%5)} es el resto dividido 5`);
//      console.log(`${(num%7)} es el resto dividido 7`);
//      console.log((num%2) == 0 || (num%3) == 0 || (num%5) == 0 || (num%7) == 0);
//      num = prompt("el numero no es primo ingrese otro")
// }
// console.log(`${(num%2)} es el resto dividido 2`);
// console.log(`${(num%3)} es el resto dividido 3`);
// console.log(`${(num%5)} es el resto dividido 5`);
// console.log(`${(num%7)} es el resto dividido 7`);
// console.log((num%2) == 0 || (num%3) == 0 || (num%5) == 0 || (num%7) == 0);
// alert(`El número ${num} es primo!`)

//Solución 2
//let num = prompt("Ingrese un número")

// for(let i = 2 ; i < num ; i++){
//      console.log(num%i);
//      if(num%i == 0){
//           console.log(`${num} % ${i} == ${num%i}`);
//           console.log("No es primo");
//           break
//      }else{
//           console.log(`${num} % ${i} == ${num%i}`);
//      }
// }
// alert("Es número primo")

//Ejercicio N° 5
// ----------------------------------------------------------------------------

// let num = prompt("Ingrese un número para saber sus divisores")
// let aux = [] 

// for(let i = 1 ; i < num ; i ++){
// if(num%i == 0){
//      aux.push(i)
//      }
// }
// console.log(aux);

//Ejercicio N° 6
// ----------------------------------------------------------------------------

// let array = ["Squall", "Cluod", "Zidane", "Sephiroth", "Irvine", "Zell", "Rinoa", "Tifa", "Aerith"] 

// for(personaje of array){
//      console.log(personaje);
// }

//Ejercicio N° 7
// ----------------------------------------------------------------------------

// let array = [40,14,22,39,46,53,64,70,82,91]

// for(numero of array){
//      console.log(numero * 2);
// }

//Ejercicio N° 8
// ----------------------------------------------------------------------------

// let arrayFamilia = [
//      {
//      nombre: "Luis",
//      apellido: "Rouyere",
//      rol: "papa",
//      },
//      {
//      nombre: "Stella",
//      apellido: "Laviano",
//      rol: "mama",
//      },
//      {
//      nombre: "Diego",
//      apellido: "Rouyere",
//      rol: "primer hijo",
//      },
//      {
//      nombre: "Soledad",
//      apellido: "Rouyere",
//      rol: "segundo hijo",
//      },
//      {
//      nombre: "Federico",
//      apellido: "Rouyere",
//      rol: "tercer hijo",
//      },
// ]

// for(integrante of arrayFamilia){
//      console.log(`Soy ${integrante.nombre} ${integrante.apellido} soy ${integrante.rol} de la familia`);
// }

//Ejercicio N° 9
// ----------------------------------------------------------------------------

// let array = [7, 2, 16, 23, 65, 48, 12, 35]
// let aux = []

// for (numero of array) {
//      if (numero % 2 != 0) {
//           aux.push(numero)
//      }
// }
// console.log(aux);

//Ejercicio N° 10
// ----------------------------------------------------------------------------

// let num = prompt("Ingrese un número (se corta en 0)")
// let pares = 0
// let impares = 0

// while(num != 0){
//      if(num%2 == 0){
//           console.log("Es par");
//           pares = (pares + parseInt(num))
//           console.log(`${pares} total pares`);
//           num = prompt("Ingrese un número")
//      }else{
//           console.log("Es impar");
//           impares = (impares + parseInt(num))
//           console.log(`${impares} total impares`);
//           num = prompt("Ingrese un número")
//      }
     
// }

//Ejercicio N° 11
// ----------------------------------------------------------------------------

// let array = [20, 10, 155, 98, 32, 25, 45, 13, 90, 22]
// let numeroMasGrande = 0

// for(let i = 0 ; i < 10 ; i++){
//      if(array[i] > array[i+1] && numeroMasGrande < array[i]){
//           numeroMasGrande = array[i]
//      }
// }
// console.log(numeroMasGrande);

//Ejercicio N° 12
// ----------------------------------------------------------------------------

// Solución 1
// let array = [20, 10, 155, 98, 32, 25, 45, 13, 90, 22]
// let menor = Infinity
// console.time()
// const nuevoArray = new Array(500000).fill("").map(elemento => Math.round(Math.random() * 10000) )
// console.timeEnd()
// console.log(nuevoArray);

// console.time()
// console.log(Math.min(...array));
// console.timeEnd()

// console.time()
// for(let i = 0 ; i < nuevoArray.length ; i++){
//      if(nuevoArray[i] < nuevoArray[i+1] && menor > nuevoArray[i]){
//           menor = nuevoArray[i]
//      }
// }
// console.log(menor);
// console.timeEnd()

// Solución 2
// let array = [20, 23, 12, 98, 32, 25, 45, 13, 90, 1]
// let menor = array[0]

// for(let i = 0 ; i < array.length ; i++){
//      if(array[i] < menor){
//           menor = array [i]
//      }
// }
// console.log(menor);

//Ejercicio N° 13
// ----------------------------------------------------------------------------

// let personaA = prompt("Persona A: Ingrese su nombre") 
// let personaB = prompt("Persona B: Ingrese su nombre") 

// let eleccion1 = prompt(`${personaA} Escoja (piedra/papel/tijera)`)
// let eleccion2 = prompt(`${personaB} Escoja (piedra/papel/tijera)`)

// do{
//      if((eleccion1 == "piedra" && eleccion2 == "tijera") || 
//      (eleccion1 == "tijera" && eleccion2 == "papel") || 
//      (eleccion1 == "papel" && eleccion2 == "piedra")){
//           alert(`${personaA} gana!!! ${eleccion1} le gana a ${eleccion2}`)
//           break
//      }else if(
//           (eleccion2 == "piedra" && eleccion1 == "tijera") || 
//           (eleccion2 == "tijera" && eleccion1 == "papel") || 
//           (eleccion2 == "papel" && eleccion1 == "piedra")){
//           alert(`${personaB} gana!!! ${eleccion1} le gana a ${eleccion2}`)
//           break
//      }else if(eleccion1 == eleccion2){
//           eleccion1 = prompt(`${personaA} Escoja (piedra/papel/tijera)`)
//           eleccion2 = prompt(`${personaB} Escoja (piedra/papel/tijera)`)
//      }
// }while(eleccion1 !== eleccion2)

//Ejercicio N° 14
// ----------------------------------------------------------------------------
// let asterisco = ""

// do{
//      asterisco += "*"
//      console.log(asterisco);
// }while(asterisco !== "***")

//Ejercicio N° 15
// ----------------------------------------------------------------------------
// let asteriscos = "****"
// let triangulo = "" 

// for(let i = 1 ; i < 4 ; i++){
//      triangulo = asteriscos.slice(i)
//      console.log(triangulo);
// }

//Ejercicio N° 16
// ----------------------------------------------------------------------------

let array = new Array(10).fill("").map(e => Math.round(Math.random()*1000))
console.log(array);
let arrayAux = []

for(let i = 0 ;  i < array.length ; i++){
     if(array[i] < array[i+1]){
          arrayAux.push(array[i])
     }else{
          arrayAux.unshift(array[i])
     }
     for(let i = 0 ;  i < arrayAux.length ; i++){


     }
}
console.log(arrayAux);