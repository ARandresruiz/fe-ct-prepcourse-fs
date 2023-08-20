/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // 1. Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
     
    return nombre[0].toUpperCase() + nombre.slice(1);
  
}

function invocarCallback(cb) {
   // 2. Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}

function operacionMatematica(num1, num2, cb) {
   // 3. En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   
   return cb (num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // 4. Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
var sumaArrayOfNumbers = 0;

for (i=0; i<arrayOfNumbers.length ; i++){
   sumaArrayOfNumbers = sumaArrayOfNumbers + arrayOfNumbers[i];
}
   cb(sumaArrayOfNumbers);
}

function forEach(array, cb) {
   // 5. Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach (elemento => cb(elemento))
   
}

function map(array, cb) {
   // 6. Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var nuevoArreglo = [];
   for(var i = 0; i < array.length; i++){
       cb(array[i]);
       nuevoArreglo.push(cb(array[i]));
}
      return nuevoArreglo;
}


function filter(arrayOfStrings) {
   // 7. Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevoArrayOfStrings = arrayOfStrings.filter(arrayOfStrings => arrayOfStrings[0] == "a")
   return nuevoArrayOfStrings;   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
