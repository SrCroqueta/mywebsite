document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enviar-formulario').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('contacto').submit();
    })
  })