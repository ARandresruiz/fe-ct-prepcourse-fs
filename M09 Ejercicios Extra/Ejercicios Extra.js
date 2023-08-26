/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // 1. Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arregloResultante = [];

   for (const elemento in objeto) {
     if (objeto.hasOwnProperty(elemento)) {
       arregloResultante.push([elemento, objeto[elemento]]);
     }
   }
 
   return arregloResultante;
}

function numberOfCharacters(string) {
   // 2. La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const charCount = {};

  // Recorremos cada caracter en el string
  for (const char of string) {
    // Si el caracter es una letra (ignorando espacios y caracteres especiales)
    if (/[a-zA-Z]/.test(char)) {
      const lowerCaseChar = char.toLowerCase(); // Convertimos a minúsculas
      // Si el caracter ya está en el objeto, aumentamos su contador, de lo contrario, lo inicializamos a 1
      charCount[lowerCaseChar] = (charCount[lowerCaseChar] || 0) + 1;
    }
  }

  return charCount;
}

function capToFront(string) {
   // 3. Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
      const uppercaseLetters = [];
      const lowercaseLetters = [];
    
      // Separar letras en mayúscula y minúscula
      for (const char of string) {
        if (char === char.toUpperCase()) {
          uppercaseLetters.push(char);
        } else {
          lowercaseLetters.push(char);
        }
      }
    
      // Combinar las letras en mayúscula y minúscula en el orden deseado
      const modifiedString = uppercaseLetters.join('') + lowercaseLetters.join('');
    
      return modifiedString;
    }
   
   

function asAmirror(frase) {
   // 4. Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   
      const palabras = frase.split(' '); // Divide la frase en palabras
      const palabrasInvertidas = [];
    
      for (const palabra of palabras) {
        const palabraInvertida = palabra.split('').reverse().join(''); // Invierte cada palabra
        palabrasInvertidas.push(palabraInvertida);
      }
    
      return palabrasInvertidas.join(' '); // Combina las palabras invertidas en una frase
    
   }

function capicua(numero) {
   // 5. Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
    var numeroC = numero.toString();
    var numeroReverso = numeroC.split("").reverse().join("");
       if(numeroC === numeroReverso){
      return "Es capicua";
   } else{
      return "No es capicua";
   }
}


function deleteAbc(string) {
   // 6. Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
 
 var stringSinAbc = string.replace(/[abc]/g,"");
 return stringSinAbc;
}

function sortArray(arrayOfStrings) {
   // 7. Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   const sortedArray = arrayOfStrings.slice(); // Copia el arreglo para no modificar el original

   sortedArray.sort((a, b) => a.length - b.length);
 
   return sortedArray;
}

function buscoInterseccion(array1, array2) {
   // 8. Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const interseccion = [];

   for (const elemento of array1) {
     if (array2.includes(elemento)) {
       interseccion.push(elemento);
     }
   }
 
   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
