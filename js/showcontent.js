function mostrarContenido(containerId) {
    ocultarTodos();
    document.getElementById(containerId).style.display = "block";
    document.getElementById('container-2').style.display = "none";
}

function ocultarContenido(containerId) {
    document.getElementById(containerId).style.display = "none";
    document.getElementById('container-2').style.display = "block";
}

function ocultarTodos() {
    var containers = document.querySelectorAll('.container-3, .container-4, .container-5, .container-6');
    containers.forEach(function(container) {
        container.style.display = "none";
    });
}