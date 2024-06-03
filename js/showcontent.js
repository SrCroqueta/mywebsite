function mostrarContenido(containerId) {
    ocultarTodos(() => {
        document.getElementById('container-2').style.display = "none";
        var container = document.getElementById(containerId);
        container.style.display = "block";
        setTimeout(() => {
            container.classList.add('show');
        }, 10);
    });
}

function ocultarContenido(containerId) {
    var container = document.getElementById(containerId);
    container.classList.remove('show');
    setTimeout(() => {
        container.style.display = "none";
        document.getElementById('container-2').style.display = "block";
        document.getElementById('container-2').classList.add('show');
    }, 500); // Duración de la transición en milisegundos (coincide con la duración en CSS)
}

function ocultarTodos(callback) {
    var containers = document.querySelectorAll('.container-3, .container-4, .container-5, container-6');
    var containersHidden = 0;
    
    if (containers.length === 0) {
        callback();
        return;
    }

    containers.forEach(function(container) {
        container.classList.remove('show');
        setTimeout(function() {
            container.style.display = "none";
            containersHidden++;
            if (containersHidden === containers.length && typeof callback === "function") {
                callback();
            }
        }, 500); // Duración de la transición en milisegundos (coincide con la duración en CSS)
    });
}
