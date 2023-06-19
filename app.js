//Crear programas.
// Ejercicio 1
let numero = 6;
 if (numero % 2 == 0){
     console.log("El numero es par")}
 else {
     console.log("El numero es impar")
};

// Ejercicio 2
let numer = 8;
 if (numer > 0){
     console.log("El numero es positivo")}
 else {
     console.log("El numero es negativo")
};

// Ejercicio 3
let cadenaTexto = "Hola soy cadena";
if (cadenaTexto.length > 10){
    console.log("Largo")}
 else {
     console.log("Corto")
};

// Arrays
// Ejercicio 1
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i=0; i<arrayNumeros.length; i++){
     console.log(i)
};

// Ejercicio 2 (Solicité ayuda)
var amigos = ["Mailen", "Tomas", "Paz"];
var lista = document.getElementById("amigos-lista");
    amigos.forEach(function(amigo){
     var elementoLista = document.createElement("li");
     elementoLista.textContent = amigo;
     lista.appendChild(elementoLista);
});

//Ejercicio 3
let edades = [73, 72, 33, 30, 28, 32];
let suma = 0;
 for (var i = 0; i<edades.length; i++){
     suma = suma + edades [i];
}
 let promedio = (suma/edades.length);
 console.log(promedio)

//Bucle for con arrays
//Ejercicio 1
let colores = ["verde", "rojo", "negro", "blanco", "amarillo"];
 for (var i=0; i<colores.length; i++){
     console.log(colores)
 };

//Ejercicio 2
var frutas = ["banana", "manzana", "melon", "pera", "ciruela"];
var lista = document.getElementById("frutas-lista");
    frutas.forEach(function(fruta){
    var elementoLista = document.createElement("li");
    elementoLista.textContent = fruta;
    lista.appendChild(elementoLista);
});

//Ejercicio 3 Solicite colaboracion
let num = [1, 4, 6, 7, 20, 18];
for (var i = 0; i < num.length - 1; i++) {
    for (var j = 0; j < num.length - i - 1; j++) {
      if (num[j] > num[j + 1]) {
        var temp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = temp;
      }
    }
  }
  
  console.log(num);

//Funciones
//Ejercicio 1
function sumarNumerosPares(n){
    var suma = 0;
    for (var i=1; i<=n; i++){
        if (i%2 == 0){
            suma += i
        }
        }
        return suma
    }
    console.log(sumarNumerosPares(6))

//Ejercicio 2
function calcularImpuestos(x){
    var impuesto = 0;
    for (var i=0; i<x; i++){
         if (x <1000){
             impuesto += (10/100)
         }
         if (x >=1000){
             impuesto += (20/100)
         }
        }
        return impuesto
    }
    console.log(calcularImpuestos(1500))

//Ejercicio 3 Solicite colaboracion
function contarVocales(x){
    let vocales = ["a", "e", "i", "o", "u"];
    let sumaVocales = 0;
    for (var i=0; i<x.length; i++){
        if (vocales.includes(x[i])){
            sumaVocales ++; 
        }
        }
        return sumaVocales;
    } 
   console.log(contarVocales("javascript")); 

//Ejercicio 4 Solicite colaboracion
function generarContraseña(n) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let contraseña = '';

    for (let i = 0; i < n; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      contraseña += caracteres.charAt(indiceAleatorio);
    }

    return contraseña;
    }

  const contraseñaGenerada = generarContraseña(5);
  console.log(contraseñaGenerada);

