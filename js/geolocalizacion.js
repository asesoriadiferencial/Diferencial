function showGeolocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const accuracy = position.coords.accuracy;
  var link = document.getElementById("enlace");
  var enlaceDireccion = `https://www.google.com/maps/dir/${latitude},+${longitude}}/KM+11,+Ofinova+Centro+Empresarial,+contiguo+a+Pricesmart,+5+Carr.+a+Masaya,+Managua/@12.1046322,-86.2783146,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x0:0x9e2efba3fcac4fc4!2m2!1d${longitude}!2d${latitude}!1m5!1m1!1s0x8f73ff2e86611a4b:0x1e893d9687a626e!2m2!1d-86.2202796!2d12.0720278?entry=ttu`;

  link.href = enlaceDireccion;
  alert(
    `latitude: ${latitude}, longitud: ${longitude} y precisión: ${accuracy}`
  );
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert(
        "El usuario ha denegado el permiso para obtener la geolocalización."
      );
      break;
    case error.POSITION_UNAVAILABLE:
      alert("La información de geolocalización no está disponible.");
      break;
    case error.TIMEOUT:
      alert("La solicitud para obtener la geolocalización ha expirado.");
      break;
    case error.UNKNOWN_ERROR:
      alert("Ha ocurrido un error desconocido al obtener la geolocalización.");
      break;
  }
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showGeolocation, showError);
} else {
  alert("Tu navegador no soporta la API de geolocalización.");
}
