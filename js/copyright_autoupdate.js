// Actualizar año actual en el footer

document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento año por su ID
    var yearElement = document.getElementById("copyr");

    // Obtiene el año actual
    var currentYear = new Date().getFullYear();

    // Actualiza el contenido del elemento con el año actual
    yearElement.innerHTML = `© ${currentYear}&emsp;─&emsp;<a class="copyr_enlace" href='https://github.com/SrCroqueta' target="_blank">Sr.Croqueta<a/>`;
});