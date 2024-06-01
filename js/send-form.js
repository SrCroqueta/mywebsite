document.getElementById('contacto').addEventListener('submit', function(event) {
  var nombre = document.getElementById('nombre').value.trim();
  var email = document.getElementById('email').value.trim();
  var mensaje = document.getElementById('mensaje').value.trim();

  // Expresión regular para validar el formato de correo electrónico
 var emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|googlemail\.com|google\.com)$/;

  if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos.');
      event.preventDefault();
  } else if (!emailPattern.test(email)) {
      alert('Por favor, introduzca un correo electrónico válido de Gmail.');
      event.preventDefault();
  }
});
