/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // 1. Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
  return array [0];
} 

function devolverUltimoElemento(array) {
   // 2. Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   
    return array[array.length-1] ;
}

function obtenerLargoDelArray(array) {
   // 3. Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
   
}

function incrementarPorUno(array) {
   // 4. El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

var ArrayMas1 = array.map (num => {return num + 1;});
return ArrayMas1;
} 

function agregarItemAlFinalDelArray(array, elemento) {
   // 5. Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // 6. Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
  array.unshift (elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
   // 7. El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
  return palabras.join(" ");   
}

function arrayContiene(array, elemento) {
   // 8. Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
return array.includes (elemento);
}

function agregarNumeros(arrayOfNums) {
   // 9. El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0
   for (var i = 0; i < arrayOfNums.length ; i++){
      var suma = suma + arrayOfNums[i];
   }return suma
 }

function promedioResultadosTest(resultadosTest) {
   // 10. El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;
   var promedio = 0;
   for (var i = 0; i < resultadosTest.length ; i++){
      var suma = suma + resultadosTest[i];
      var promedio = suma / (resultadosTest.length);
   }return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // 11. El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var NUmeroMayor = 0;
   for (var i= 0; i < arrayOfNums.length; i++){ 
      if(arrayOfNums[i] > NUmeroMayor){
         NUmeroMayor = arrayOfNums[i];
      }
      } return NUmeroMayor;
}
      

function multiplicarArgumentos() {
   // 12. Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var Producto = 1;
   if ( arguments.length == 0){
      return 0;
   } else if (arguments.length > 1) {
   for (var i = 0; i < arguments.length; i++) {
       Producto = Producto * arguments[i];
   } 
   }return Producto;
}


function cuentoElementos(array) {
   // 13. Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var CantElementos = 0; 
   for (var i = 0; i < array.length; i++){
         if (array[i] > 18){
            CantElementos++;
         }
   }return CantElementos;
   }


function diaDeLaSemana(numeroDeDia) {
   // 14. Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
          if ( numeroDeDia == 1 || numeroDeDia ==7 ){
        return "Es fin de semana";
      } else {
         return "Es dia laboral"}
      } 
   

function empiezaConNueve(num) {
   // 15. Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var NumeroString = num.toString();
   return (NumeroString.startsWith("9"));
}

function todosIguales(array) {
   // 16. Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   return new Set(array).size!==array.length
  }



function mesesDelAño(array) {
   // 17. El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var NuevoArreglo = [];
   for (var i= 0; i<array.length; i++){
      if (array[i] === "Enero"||  array[i] === "Marzo"   || array[i] === "Noviembre"  ){
         NuevoArreglo.push(array[i]);
      }
   } if(NuevoArreglo.length == 3){
      return NuevoArreglo;
   } 
   else{
      return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // 18. Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   var NuevoArray = [];
   var Tabladel6 = 0
   for (var i=0 ; i <= 10 ; i++) {
       Tabladel6 = 6 * i;
       NuevoArray.push(Tabladel6);
   }   return (NuevoArray);
 }

function mayorACien(array) {
   // 19. La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var ArregloMay100 = [];
   for (var i=0 ; i < array.length; i++){
      if(array[i]>100){
         ArregloMay100.push(array[i]);
      }
   }return ArregloMay100;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // 20. Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var ArregloCompilador = [];
   var Aumentovalor = num;
   for(var i=0; i < 10; i++){
        Aumentovalor = Aumentovalor + 2;
      if(Aumentovalor === i){
       break;
      } else {
         ArregloCompilador.push(Aumentovalor);
      } 
   }if(ArregloCompilador.length < 10){
      return ("Se interrumpió la ejecución");
   } else if (ArregloCompilador.length === 10){ 
      return (ArregloCompilador);
   }
  }

  
function continueStatement(num) {
   // 21. Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var ArregloCompilador = [];
   var Aumentovalor = num;
   for(var i=0; i < 10; i++){
        if(i === 5){
       continue;
      } else {
         Aumentovalor = Aumentovalor + 2;
         ArregloCompilador.push(Aumentovalor);
      } 
   }return (ArregloCompilador);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
