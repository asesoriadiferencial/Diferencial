//VALIDACION DE CAMPOS DE TEXTO PARA NOMBRE

var input = document.getElementById('nombre'); // Obtener el elemento de input por su id

input.addEventListener('keydown', function(event) { // Agregar un event listener para el evento 'keydown'
  var key = event.key; // Obtener la tecla presionada
  
  // Validar si la tecla presionada es un número
  if (/^\d$/.test(key)) {
    event.preventDefault(); // Evitar que se ingrese el carácter numérico
  }
});

// VALIDACION DE CORREO
var input = document.getElementById('correo'); // Obtener el elemento de input por su id

input.addEventListener('input', function() { // Agregar un event listener para el evento 'input'
  var value = this.value; // Obtener el valor actual del input
  
  // Validar que el valor cumpla con el formato de correo electrónico
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    // El valor es válido (cumple con el formato de correo electrónico)
    this.setCustomValidity(''); // Limpiar el mensaje de error personalizado, si lo hubiera
  } else {
    // El valor no es válido (no cumple con el formato de correo electrónico)
    this.setCustomValidity('Ingresa una dirección de correo electrónico válida'); // Establecer un mensaje de error personalizado
  }
});

//VALIDACIÓN DE TELEFONO
var input = document.getElementById('telefono'); // Obtener el elemento de input por su id

input.addEventListener('input', function() { // Agregar un event listener para el evento 'input'
  var value = this.value; // Obtener el valor actual del input
  
  // Eliminar cualquier carácter que no sea un número
  var numericValue = value.replace(/\D/g, '');
  
  // Limitar la longitud del valor a 8 caracteres
  var truncatedValue = numericValue.slice(0, 8);
  
  // Aplicar la máscara
  var maskedValue = '';
  for (var i = 0; i < truncatedValue.length; i++) {
    if (i === 4) {
      maskedValue += ' - ';
    }
    maskedValue += truncatedValue.charAt(i);
  }
  
  // Actualizar el valor del input con la máscara
  this.value = maskedValue;
});



