/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // 1. Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var Objeto1 = { nombre : nombre, edad: edad, 
      meow : function(){
         return "Meow!";
      } 
   }; return Objeto1;

}

function nuevoUsuario(nombre, email, password) {
   // 2. Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var Objeto2 = { nombre : nombre, email: email, password: password};
   return Objeto2;
}

function agregarPropiedad(objeto, propiedad) {
   // 3. Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
      return objeto;
}

function invocarMetodo(objeto, metodo) {
   // 4. El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
  
   objeto[metodo] ();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // 5. El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
  return  objetoMisterioso["numeroMisterioso"] *5;
}

function eliminarPropiedad(objeto, propiedad) {
   // 6. El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // 7. Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
if(objetoUsuario["email"] != undefined){
   return true;
}else {
   return false;
}

}

function tienePropiedad(objeto, propiedad) {
   // 8. Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   
   if (objeto.hasOwnProperty(propiedad)){
      return true;
   }else {
      return false;
   }
}

function verificarPassword(objetoUsuario, password) {
   // 9. Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario["password"] == password){
      return true;
   }else {
      return false;
}
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // 10. Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario["password"] = nuevaPassword;
   return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // 11. El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
 
   objetoUsuario.amigos.push (nuevoAmigo);
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // 12. El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
    for (obj of objetoMuchosUsuarios){
      obj["esPremium"] = true;
    } return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // 13. El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   
 //ObjetoUsuario -> Array posts -> objeto post -> propiedad likes (num).
var suma= 0;
objetoUsuario["posts"].forEach(                  //Lo que se hizo fue ingresar al arreglo y aplicar forEach.
   post => { suma = suma + post["likes"];     // En esta linea se pide que entre al objeto "post" y que sume post cuando el valor sea "likes"
   
});
return suma;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // 14. Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
  
   objetoProducto.calcularPrecioDescuento = function (){
      var  ValorDeDescuento = this.precio * this.porcentajeDeDescuento;
      var precioFinal = this.precio - ValorDeDescuento;
      return precioFinal
   }; return objetoProducto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
