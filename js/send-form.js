document.getElementById('enviar-formulario').addEventListener('click', function(event) {
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        event.preventDefault();
    } else {
        document.getElementById('contacto').submit();
    }
});
