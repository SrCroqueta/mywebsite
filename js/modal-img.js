document.addEventListener('DOMContentLoaded', function() {
    // Obtener el modal
    var modal = document.getElementById("imageModal");

    // Obtener la imagen y el elemento de modalImage
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    // Función para abrir el modal con la imagen clickeada
    window.openModal = function(imgElement) {
        modal.style.display = "block";
        modalImg.src = imgElement.src;
        captionText.innerHTML = imgElement.alt;
    };

    // Obtener el elemento <span> que cierra el modal
    var span = document.getElementById("closeModal");

    // Cuando el usuario hace clic en <span> (x), cerrar el modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // Cerrar el modal cuando el usuario hace clic fuera de la imagen
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});